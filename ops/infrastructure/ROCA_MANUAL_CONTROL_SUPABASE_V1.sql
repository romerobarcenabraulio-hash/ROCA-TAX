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
