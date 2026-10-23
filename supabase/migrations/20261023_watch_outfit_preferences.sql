-- Occasioni dichiarate dall'utente per filtrare gli abbinamenti outfit.
alter table public.watches
  add column if not exists occasions text[] not null default '{}'::text[];

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'watches_occasions_allowed'
      and conrelid = 'public.watches'::regclass
  ) then
    alter table public.watches
      add constraint watches_occasions_allowed
      check (
        occasions <@ array['casual', 'elegante', 'sportivo', 'sera']::text[]
        and array_position(occasions, null) is null
      );
  end if;
end $$;

-- Le preferenze sono legate all'utente, all'orologio e ai filtri attivi.
-- Il tipo di watch_id segue public.watches.id.
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
    create table if not exists public.watch_outfit_feedback (
      id uuid primary key default gen_random_uuid(),
      user_id uuid not null references auth.users(id) on delete cascade,
      watch_id %s not null references public.watches(id) on delete cascade,
      occasion text not null default 'all'
        check (occasion in ('all', 'casual', 'elegante', 'sportivo', 'sera')),
      color_family text not null default 'all'
        check (color_family in ('all', 'black', 'silver', 'blue', 'green', 'gold', 'brown', 'orange', 'red', 'purple')),
      feedback smallint not null check (feedback in (-1, 1)),
      created_at timestamptz not null default now(),
      updated_at timestamptz not null default now(),
      unique (user_id, watch_id, occasion, color_family)
    )
  $create_table$, watch_id_type);
end $$;

create index if not exists watch_outfit_feedback_user_filters_idx
  on public.watch_outfit_feedback (user_id, occasion, color_family);

alter table public.watch_outfit_feedback enable row level security;
grant select, insert, update, delete on table public.watch_outfit_feedback to authenticated;

drop policy if exists "Users can read own outfit feedback" on public.watch_outfit_feedback;
create policy "Users can read own outfit feedback"
  on public.watch_outfit_feedback for select
  using (user_id = auth.uid());

drop policy if exists "Users can add own outfit feedback" on public.watch_outfit_feedback;
create policy "Users can add own outfit feedback"
  on public.watch_outfit_feedback for insert
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.watches
      where watches.id = watch_outfit_feedback.watch_id
        and watches.userid = auth.uid()
    )
  );

drop policy if exists "Users can update own outfit feedback" on public.watch_outfit_feedback;
create policy "Users can update own outfit feedback"
  on public.watch_outfit_feedback for update
  using (user_id = auth.uid())
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.watches
      where watches.id = watch_outfit_feedback.watch_id
        and watches.userid = auth.uid()
    )
  );

drop policy if exists "Users can delete own outfit feedback" on public.watch_outfit_feedback;
create policy "Users can delete own outfit feedback"
  on public.watch_outfit_feedback for delete
  using (user_id = auth.uid());
