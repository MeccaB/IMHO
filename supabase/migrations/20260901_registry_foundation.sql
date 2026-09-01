create type public.app_role as enum ('lurker','ci','business_owner','moderator','admin');
create type public.content_status as enum ('pending','on_file','flagged','needs_manual_review','rejected');
create type public.claim_status as enum ('submitted','under_review','approved','rejected');

create table public.profiles (id uuid primary key references auth.users(id) on delete cascade, username text unique, role public.app_role not null default 'lurker', credibility integer not null default 0, created_at timestamptz not null default now());
create table public.businesses (id uuid primary key default gen_random_uuid(), name text not null, category text, address text not null, city text not null, state text not null, zip text not null, phone text, deleted_at timestamptz, created_at timestamptz not null default now());
create table public.reports (id uuid primary key default gen_random_uuid(), business_id uuid not null references public.businesses(id), author_id uuid not null references public.profiles(id), rating smallint not null check (rating between 1 and 5), title text not null check (char_length(title) between 3 and 120), body text not null check (char_length(body) between 300 and 5000), status public.content_status not null default 'pending', rejection_reason text, deleted_at timestamptz, created_at timestamptz not null default now(), unique(business_id, author_id));
create table public.report_photos (id uuid primary key default gen_random_uuid(), report_id uuid not null references public.reports(id) on delete cascade, url text not null, ai_detection_score numeric, ai_detection_provider text, checked_at timestamptz, created_at timestamptz not null default now());
create table public.comments (id uuid primary key default gen_random_uuid(), report_id uuid not null references public.reports(id), author_id uuid not null references public.profiles(id), parent_id uuid references public.comments(id), body text not null check (char_length(body) between 2 and 2000), deleted_at timestamptz, created_at timestamptz not null default now());
create table public.business_owners (user_id uuid not null references public.profiles(id), business_id uuid not null references public.businesses(id), verified_at timestamptz not null default now(), primary key(user_id,business_id));
create table public.claims (id uuid primary key default gen_random_uuid(), business_id uuid not null references public.businesses(id), claimant_id uuid not null references public.profiles(id), verification_method text not null, document_url text, status public.claim_status not null default 'submitted', submitted_at timestamptz not null default now(), reviewed_at timestamptz, reviewer_id uuid references public.profiles(id));
create table public.audit_log (id bigint generated always as identity primary key, actor_id uuid references public.profiles(id), action text not null, target_type text not null, target_id uuid, reason text not null, created_at timestamptz not null default now());
create table public.points_ledger (id bigint generated always as identity primary key, user_id uuid not null references public.profiles(id), delta integer not null, reason text not null, related_id uuid, created_at timestamptz not null default now());
create table public.badges (id uuid primary key default gen_random_uuid(), name text unique not null, description text not null, icon text not null, criteria jsonb not null default '{}'::jsonb);
create table public.user_badges (user_id uuid references public.profiles(id), badge_id uuid references public.badges(id), earned_at timestamptz not null default now(), primary key(user_id,badge_id));
create table public.streaks (user_id uuid primary key references public.profiles(id), current_streak integer not null default 0, longest_streak integer not null default 0, last_active_week date);
create table public.leaderboard_snapshots (id bigint generated always as identity primary key, type text not null check(type in ('ci','jacket')), period text not null check(period in ('week','month','all_time')), rank integer not null, subject_id uuid not null, score numeric not null, generated_at timestamptz not null default now());

alter table public.profiles enable row level security; alter table public.businesses enable row level security; alter table public.reports enable row level security; alter table public.report_photos enable row level security; alter table public.comments enable row level security; alter table public.business_owners enable row level security; alter table public.claims enable row level security; alter table public.audit_log enable row level security; alter table public.points_ledger enable row level security; alter table public.badges enable row level security; alter table public.user_badges enable row level security; alter table public.streaks enable row level security; alter table public.leaderboard_snapshots enable row level security;

create policy "profiles readable" on public.profiles for select using (true);
create policy "own profile update" on public.profiles for update using (auth.uid()=id) with check (auth.uid()=id and role = (select role from public.profiles where id=auth.uid()));
create policy "live businesses readable" on public.businesses for select using (deleted_at is null);
create policy "live reports readable" on public.reports for select using (status='on_file' and deleted_at is null);
create policy "own reports readable" on public.reports for select using (author_id=auth.uid());
create policy "own comments readable" on public.comments for select using (author_id=auth.uid() or exists(select 1 from public.reports r where r.id=comments.report_id and r.status='on_file'));
create policy "own claims readable" on public.claims for select using (claimant_id=auth.uid());
create policy "badges readable" on public.badges for select using (true);
create policy "user badges readable" on public.user_badges for select using (true);
create policy "own ledger readable" on public.points_ledger for select using (user_id=auth.uid());
create policy "own streak readable" on public.streaks for select using (user_id=auth.uid());
create policy "leaderboards readable" on public.leaderboard_snapshots for select using (true);

create function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$ begin insert into public.profiles (id, username) values (new.id, coalesce(new.raw_user_meta_data->>'user_name', split_part(new.email,'@',1) || '-' || substr(new.id::text,1,6))); return new; end; $$;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();
