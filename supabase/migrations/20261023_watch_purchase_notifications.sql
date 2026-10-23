-- Acquisto, valore dichiarato e preferenze per gli avvisi della collezione.
alter table public.watches
  add column if not exists purchase_date date,
  add column if not exists declared_value numeric(12, 2);

-- Le schede esistenti usavano il prezzo d'acquisto come valore mostrato in collezione.
-- Mantiene quel valore dopo la separazione tra spesa e valutazione attuale.
update public.watches
set declared_value = money
where declared_value is null
  and money is not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'watches_declared_value_nonnegative'
      and conrelid = 'public.watches'::regclass
  ) then
    alter table public.watches
      add constraint watches_declared_value_nonnegative
      check (declared_value is null or declared_value >= 0);
  end if;
end $$;

create table if not exists public.watch_notification_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  maintenance_enabled boolean not null default true,
  warranty_enabled boolean not null default true,
  reminder_days_before integer not null default 90
    check (reminder_days_before in (30, 60, 90, 180, 365)),
  updated_at timestamptz not null default now()
);

alter table public.watch_notification_preferences enable row level security;
grant select, insert, update, delete on table public.watch_notification_preferences to authenticated;

drop policy if exists "Users can read own notification preferences" on public.watch_notification_preferences;
create policy "Users can read own notification preferences"
  on public.watch_notification_preferences for select
  using (user_id = auth.uid());

drop policy if exists "Users can add own notification preferences" on public.watch_notification_preferences;
create policy "Users can add own notification preferences"
  on public.watch_notification_preferences for insert
  with check (user_id = auth.uid());

drop policy if exists "Users can update own notification preferences" on public.watch_notification_preferences;
create policy "Users can update own notification preferences"
  on public.watch_notification_preferences for update
  using (user_id = auth.uid())
  with check (user_id = auth.uid());

drop policy if exists "Users can delete own notification preferences" on public.watch_notification_preferences;
create policy "Users can delete own notification preferences"
  on public.watch_notification_preferences for delete
  using (user_id = auth.uid());
