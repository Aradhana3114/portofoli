create table if not exists guestbook (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table guestbook enable row level security;

create policy "Allow public read" on guestbook
  for select using (true);

create policy "Allow insert with validation" on guestbook
  for insert with check (
    char_length(name) > 0 and
    char_length(name) < 50 and
    char_length(message) > 0 and
    char_length(message) < 500
  );
