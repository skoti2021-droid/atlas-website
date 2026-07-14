-- ============================================================
-- PART 8: LEAD MANAGEMENT SCHEMA (run once in Supabase SQL editor)
-- ============================================================
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  enquiry_id text generated always as ('ENQ-' || upper(substr(id::text, 1, 8))) stored,
  created_at timestamptz not null default now(),
  -- captured fields (Part 8 quote requirements)
  name text not null,
  company text,
  email text not null,
  phone text,
  country text,
  industry text,
  machine text,
  product text,
  volume text,
  notes text,
  contact_method text,
  source_page text,
  -- workflow
  status text not null default 'new' check (status in ('new','contacted','quoted','won','lost')),
  internal_notes text
);

-- Row Level Security: no public access. The site's API route uses the
-- service-role key server-side; browsers never touch this table.
alter table public.leads enable row level security;

create index if not exists leads_created_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
