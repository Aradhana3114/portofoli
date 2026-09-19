create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null default 'General Inquiry',
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "Allow public insert" on contact_messages
  for insert with check (
    char_length(name) > 0 and
    char_length(name) < 100 and
    char_length(email) > 0 and
    char_length(email) < 255 and
    char_length(message) > 0 and
    char_length(message) < 5000
  );
