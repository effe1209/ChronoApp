-- Campi di dotazione, garanzia e chiavi stabili per backup incrementali.
alter table public.watches
  add column if not exists has_box boolean not null default false,
  add column if not exists has_papers boolean not null default false,
  add column if not exists accessories text,
  add column if not exists has_warranty boolean not null default false,
  add column if not exists warranty_start date,
  add column if not exists warranty_end date,
  add column if not exists warranty_provider text,
  add column if not exists backup_uid uuid not null default gen_random_uuid();

create unique index if not exists watches_user_backup_uid_key
  on public.watches (userid, backup_uid);

-- Il tipo della chiave segue quello già presente su watches.id.
do $$
declare
  watch_id_type text;
begin
  select format_type(attribute.atttypid, attribute.atttypmod)
    into watch_id_type
  from pg_attribute as attribute
  where attribute.attrelid = 'public.watches'::regclass
    and attribute.attname = 'id'
    and attribute.attnum > 0
    and not attribute.attisdropped;

  if watch_id_type is null then
    raise exception 'Colonna public.watches.id non trovata';
  end if;

  execute format($create_table$
    create table if not exists public.watch_maintenance (
      id uuid primary key default gen_random_uuid(),
      backup_uid uuid not null default gen_random_uuid(),
      user_id uuid not null references auth.users(id) on delete cascade,
      watch_id %s not null references public.watches(id) on delete cascade,
      service_date date not null,
      service_type text not null,
      description text,
      cost numeric(10, 2) not null default 0 check (cost >= 0),
      provider text,
      next_service_date date,
      created_at timestamptz not null default now()
    )
  $create_table$, watch_id_type);
end $$;

create unique index if not exists watch_maintenance_user_backup_uid_key
  on public.watch_maintenance (user_id, backup_uid);

create index if not exists watch_maintenance_watch_service_date_idx
  on public.watch_maintenance (user_id, watch_id, service_date desc);

alter table public.watch_maintenance enable row level security;
grant select, insert, update, delete on table public.watch_maintenance to authenticated;

drop policy if exists "Users can read own watch maintenance" on public.watch_maintenance;
create policy "Users can read own watch maintenance"
  on public.watch_maintenance for select
  using (user_id = auth.uid());

drop policy if exists "Users can add own watch maintenance" on public.watch_maintenance;
create policy "Users can add own watch maintenance"
  on public.watch_maintenance for insert
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.watches
      where watches.id = watch_maintenance.watch_id and watches.userid = auth.uid()
    )
  );

drop policy if exists "Users can update own watch maintenance" on public.watch_maintenance;
create policy "Users can update own watch maintenance"
  on public.watch_maintenance for update
  using (user_id = auth.uid())
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.watches
      where watches.id = watch_maintenance.watch_id and watches.userid = auth.uid()
    )
  );

drop policy if exists "Users can delete own watch maintenance" on public.watch_maintenance;
create policy "Users can delete own watch maintenance"
  on public.watch_maintenance for delete
  using (user_id = auth.uid());
