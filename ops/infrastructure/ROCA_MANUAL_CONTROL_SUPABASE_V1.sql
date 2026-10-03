-- ROCA Audit · control de línea base por departamento
-- Estado: aplicado en Supabase project jtmoteixwlcqqikhpxfq
-- Seguridad: SECURITY INVOKER + authenticated + verificación interna owner/admin.
-- Preservación: no delete de baselines/media links; freeze/unlock se versiona y audita por trigger.
-- No ejecutar desde cliente anónimo.

create or replace function public.roca_prepare_department_baseline_update()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();

  if new.status is distinct from old.status then
    if new.status = 'frozen' then
      if old.status = 'not_released' then
        raise exception 'A NOT_RELEASED department cannot be frozen';
      end if;
      new.captured_at := coalesce(old.captured_at, now());
      new.frozen_at := now();
      new.frozen_by := auth.uid();
      new.unlock_reason := null;
    elsif new.status = 'unlocked' then
      if old.status <> 'frozen' then
        raise exception 'Only a frozen department can be unlocked';
      end if;
      if nullif(btrim(new.unlock_reason), '') is null then
        raise exception 'unlock_reason is required';
      end if;
      new.version := old.version + 1;
      new.unlocked_at := now();
      new.unlocked_by := auth.uid();
    end if;
  else
    new.version := old.version;
  end if;

  return new;
end;
$$;

create or replace function public.roca_log_department_baseline_event()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
declare
  v_event text;
  v_reason text;
begin
  if new.status is distinct from old.status then
    if new.status = 'frozen' then
      v_event := 'freeze';
      v_reason := 'baseline frozen';
    elsif new.status = 'unlocked' then
      v_event := 'unlock';
      v_reason := new.unlock_reason;
    else
      v_event := 'update';
      v_reason := 'status changed';
    end if;
  elsif row(new.*) is distinct from row(old.*) then
    v_event := 'update';
    v_reason := 'baseline metadata updated';
  else
    return new;
  end if;

  insert into public.roca_manual_baseline_events(
    department_id,event_type,reason,before_snapshot,after_snapshot,actor
  )
  values(
    new.department_id,
    v_event,
    v_reason,
    to_jsonb(old),
    to_jsonb(new),
    auth.uid()
  );

  return new;
end;
$$;

drop trigger if exists roca_prepare_department_baseline_update on public.roca_manual_department_baselines;
create trigger roca_prepare_department_baseline_update
before update on public.roca_manual_department_baselines
for each row execute function public.roca_prepare_department_baseline_update();

drop trigger if exists roca_log_department_baseline_event on public.roca_manual_department_baselines;
create trigger roca_log_department_baseline_event
after update on public.roca_manual_department_baselines
for each row execute function public.roca_log_department_baseline_event();

drop policy if exists "admins delete manual baselines" on public.roca_manual_department_baselines;
drop policy if exists "admins delete manual media links" on public.roca_manual_media_links;

create or replace function public.roca_manual_freeze_department(_department_id text)
returns public.roca_manual_department_baselines
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  current_row public.roca_manual_department_baselines;
  after_row public.roca_manual_department_baselines;
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  if not (
    has_role(auth.uid(), 'admin'::app_role)
    or has_role(auth.uid(), 'owner'::app_role)
  ) then
    raise exception 'owner or admin role required';
  end if;

  select * into current_row
  from public.roca_manual_department_baselines
  where department_id = _department_id
  for update;

  if not found then
    raise exception 'department baseline not found';
  end if;

  if current_row.status = 'not_released' then
    raise exception 'department is not released';
  end if;

  if current_row.status = 'frozen' then
    return current_row;
  end if;

  update public.roca_manual_department_baselines
  set status = 'frozen'
  where department_id = _department_id
  returning * into after_row;

  return after_row;
end;
$$;

revoke all on function public.roca_manual_freeze_department(text) from public, anon;
grant execute on function public.roca_manual_freeze_department(text) to authenticated;

create or replace function public.roca_manual_unlock_department(
  _department_id text,
  _reason text
)
returns public.roca_manual_department_baselines
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  current_row public.roca_manual_department_baselines;
  after_row public.roca_manual_department_baselines;
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  if not (
    has_role(auth.uid(), 'admin'::app_role)
    or has_role(auth.uid(), 'owner'::app_role)
  ) then
    raise exception 'owner or admin role required';
  end if;

  if nullif(btrim(_reason),'') is null then
    raise exception 'unlock reason required';
  end if;

  select * into current_row
  from public.roca_manual_department_baselines
  where department_id = _department_id
  for update;

  if not found then
    raise exception 'department baseline not found';
  end if;

  if current_row.status <> 'frozen' then
    raise exception 'only a frozen baseline can be unlocked';
  end if;

  update public.roca_manual_department_baselines
  set
    status = 'unlocked',
    unlock_reason = btrim(_reason)
  where department_id = _department_id
  returning * into after_row;

  return after_row;
end;
$$;

revoke all on function public.roca_manual_unlock_department(text,text) from public, anon;
grant execute on function public.roca_manual_unlock_department(text,text) to authenticated;

-- Registro transaccional de imagen ya subida al bucket privado.
-- El upload físico ocurre primero en storage.roca-private-media bajo:
-- manual/<department_id>/<filename>
-- Después esta función crea media_assets + vínculo de placement en el manual.

create or replace function public.roca_manual_register_media(
  _department_id text,
  _storage_path text,
  _file_name text,
  _mime_type text,
  _file_size_bytes bigint,
  _section_key text default 'general',
  _placement text default 'inline',
  _caption text default null,
  _alt_text text default '',
  _source_channel text default 'portal',
  _source_ref text default null
)
returns public.roca_manual_media_links
language plpgsql
security invoker
set search_path = public, storage, pg_temp
as $$
declare
  new_asset public.media_assets;
  new_link public.roca_manual_media_links;
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  if not (
    has_role(auth.uid(), 'admin'::app_role)
    or has_role(auth.uid(), 'owner'::app_role)
  ) then
    raise exception 'owner or admin role required';
  end if;

  if _placement not in ('cover','area','method','tool','evidence','inline') then
    raise exception 'invalid placement';
  end if;

  if _source_channel not in ('portal','chat','drive','legacy') then
    raise exception 'invalid source channel';
  end if;

  if _mime_type not in ('image/jpeg','image/png','image/webp','image/avif') then
    raise exception 'unsupported image type';
  end if;

  if _file_size_bytes <= 0 or _file_size_bytes > 26214400 then
    raise exception 'invalid image size';
  end if;

  if _storage_path !~ ('^manual/' || regexp_replace(_department_id,'[^a-zA-Z0-9_-]','','g') || '/') then
    raise exception 'storage path must be inside manual/<department>/';
  end if;

  if not exists (
    select 1
    from storage.objects
    where bucket_id = 'roca-private-media'
      and name = _storage_path
  ) then
    raise exception 'uploaded storage object not found';
  end if;

  insert into public.media_assets (
    storage_path,
    bucket,
    file_name,
    mime_type,
    file_size_bytes,
    alt_text,
    status,
    uploaded_by,
    media_scope,
    media_area,
    media_route_hint,
    rights_status,
    visibility
  )
  values (
    _storage_path,
    'roca-private-media',
    _file_name,
    _mime_type,
    _file_size_bytes,
    coalesce(_alt_text,''),
    'draft',
    auth.uid(),
    'instalaciones',
    'general',
    'manual/' || _department_id || '/' || coalesce(nullif(btrim(_section_key),''),'general'),
    'pending',
    'private'
  )
  returning * into new_asset;

  insert into public.roca_manual_media_links (
    department_id,
    section_key,
    media_asset_id,
    source_channel,
    source_ref,
    placement,
    caption,
    alt_text,
    status,
    created_by
  )
  values (
    _department_id,
    coalesce(nullif(btrim(_section_key),''),'general'),
    new_asset.id,
    _source_channel,
    _source_ref,
    _placement,
    nullif(btrim(coalesce(_caption,'')),''),
    coalesce(_alt_text,''),
    'draft',
    auth.uid()
  )
  returning * into new_link;

  return new_link;
end;
$$;

revoke all on function public.roca_manual_register_media(
  text,text,text,text,bigint,text,text,text,text,text,text
) from public, anon;

grant execute on function public.roca_manual_register_media(
  text,text,text,text,bigint,text,text,text,text,text,text
) to authenticated;



-- Bootstrap Auth seguro: nadie adquiere owner/admin por orden de llegada.
create table if not exists public.roca_manual_auth_allowlist (
  email text primary key,
  role public.app_role not null check (role in ('owner'::public.app_role,'admin'::public.app_role)),
  active boolean not null default true,
  added_at timestamptz not null default now(),
  notes text,
  constraint roca_manual_auth_allowlist_email_lower check (email = lower(email))
);

alter table public.roca_manual_auth_allowlist enable row level security;
grant select on public.roca_manual_auth_allowlist to authenticated;

drop policy if exists "allowlisted user reads own grant" on public.roca_manual_auth_allowlist;
create policy "allowlisted user reads own grant"
on public.roca_manual_auth_allowlist
for select
to authenticated
using (
  active
  and email = lower(coalesce((auth.jwt() ->> 'email'), ''))
);

drop policy if exists "allowlisted user claims own role" on public.user_roles;
create policy "allowlisted user claims own role"
on public.user_roles
for insert
to authenticated
with check (
  user_id = auth.uid()
  and exists (
    select 1
    from public.roca_manual_auth_allowlist a
    where a.active
      and a.email = lower(coalesce((auth.jwt() ->> 'email'), ''))
      and a.role = user_roles.role
  )
);

create or replace function public.roca_manual_claim_allowed_role()
returns public.user_roles
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  allowed_role public.app_role;
  claimed public.user_roles;
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  select a.role
    into allowed_role
  from public.roca_manual_auth_allowlist a
  where a.active
    and a.email = lower(coalesce((auth.jwt() ->> 'email'), ''))
  limit 1;

  if allowed_role is null then
    raise exception 'email is not authorized for ROCA manual control';
  end if;

  insert into public.user_roles(user_id, role)
  values (auth.uid(), allowed_role)
  on conflict (user_id, role) do update
    set role = excluded.role
  returning * into claimed;

  return claimed;
end;
$$;

revoke all on function public.roca_manual_claim_allowed_role() from public, anon;
grant execute on function public.roca_manual_claim_allowed_role() to authenticated;


-- Grants mínimos para las tablas del control manual.
revoke all on public.roca_manual_auth_allowlist from anon, authenticated;
grant select on public.roca_manual_auth_allowlist to authenticated;

revoke all on public.roca_manual_department_baselines from anon, authenticated;
grant select on public.roca_manual_department_baselines to anon, authenticated;
grant update on public.roca_manual_department_baselines to authenticated;

revoke all on public.roca_manual_baseline_events from anon, authenticated;
grant select, insert on public.roca_manual_baseline_events to authenticated;

revoke all on public.roca_manual_media_links from anon, authenticated;
grant select on public.roca_manual_media_links to anon, authenticated;
grant insert, update on public.roca_manual_media_links to authenticated;
