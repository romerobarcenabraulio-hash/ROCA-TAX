-- ROCA Audit · control de línea base por departamento
-- Estado: aplicado en Supabase project jtmoteixwlcqqikhpxfq
-- Seguridad: SECURITY INVOKER + authenticated + verificación interna owner/admin.
-- No ejecutar desde cliente anónimo.

create or replace function public.roca_manual_freeze_department(_department_id text)
returns public.roca_manual_department_baselines
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
declare
  before_row public.roca_manual_department_baselines;
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

  select * into before_row
  from public.roca_manual_department_baselines
  where department_id = _department_id
  for update;

  if not found then
    raise exception 'department baseline not found';
  end if;

  if before_row.status = 'not_released' then
    raise exception 'department is not released';
  end if;

  if before_row.status = 'frozen' then
    return before_row;
  end if;

  update public.roca_manual_department_baselines
  set
    status = 'frozen',
    version = case
      when before_row.status = 'unlocked' then before_row.version + 1
      else before_row.version
    end,
    captured_at = coalesce(before_row.captured_at, now()),
    frozen_at = now(),
    frozen_by = auth.uid(),
    unlocked_at = null,
    unlocked_by = null,
    unlock_reason = null,
    updated_at = now(),
    updated_by = auth.uid()
  where department_id = _department_id
  returning * into after_row;

  insert into public.roca_manual_baseline_events
    (department_id,event_type,reason,before_snapshot,after_snapshot,actor)
  values
    (_department_id,'freeze','baseline frozen',
     to_jsonb(before_row),to_jsonb(after_row),auth.uid());

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
  before_row public.roca_manual_department_baselines;
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

  select * into before_row
  from public.roca_manual_department_baselines
  where department_id = _department_id
  for update;

  if not found then
    raise exception 'department baseline not found';
  end if;

  if before_row.status <> 'frozen' then
    raise exception 'only a frozen baseline can be unlocked';
  end if;

  update public.roca_manual_department_baselines
  set
    status = 'unlocked',
    unlocked_at = now(),
    unlocked_by = auth.uid(),
    unlock_reason = btrim(_reason),
    updated_at = now(),
    updated_by = auth.uid()
  where department_id = _department_id
  returning * into after_row;

  insert into public.roca_manual_baseline_events
    (department_id,event_type,reason,before_snapshot,after_snapshot,actor)
  values
    (_department_id,'unlock',btrim(_reason),
     to_jsonb(before_row),to_jsonb(after_row),auth.uid());

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

