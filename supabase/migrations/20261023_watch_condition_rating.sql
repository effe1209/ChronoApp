alter table public.watches
  add column if not exists condition_rating smallint;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'watches_condition_rating_range'
      and conrelid = 'public.watches'::regclass
  ) then
    alter table public.watches
      add constraint watches_condition_rating_range
      check (condition_rating is null or condition_rating between 1 and 10);
  end if;
end $$;
