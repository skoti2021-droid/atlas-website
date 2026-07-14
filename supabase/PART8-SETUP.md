# PART 8 ACTIVATION — Lead Management Backend

The code is fully built and deployed but DORMANT until you add env
vars. Until then the quote form falls back to the visitor's email
client (current behavior) — nothing breaks.

## One-time setup (~10 minutes)
1. Create a free project at supabase.com (or use existing).
2. In the Supabase SQL editor, paste and run: supabase/schema.sql
3. In Vercel → your project → Settings → Environment Variables, add:
   - SUPABASE_URL              (Supabase → Settings → API → Project URL)
   - SUPABASE_SERVICE_ROLE_KEY (Supabase → Settings → API → service_role)
   - ADMIN_KEY                 (invent a long random password — this
                                gates the /admin dashboard)
4. Redeploy (Vercel → Deployments → Redeploy, or just push a commit).

## What activates
- Quote form → stores leads in the database, shows the visitor a
  reference number (ENQ-XXXXXXXX)
- /admin → enter ADMIN_KEY → see all enquiries, update status
  (new/contacted/quoted/won/lost), add internal notes, export CSV

## Security notes
- service_role key is server-only (API routes); it is never sent to
  browsers. Do NOT put it in any NEXT_PUBLIC_ variable.
- /admin is excluded from robots.txt and gated by ADMIN_KEY. For
  multi-user/role-based access later, move to Supabase Auth.

## CRM readiness (per spec)
Every lead is a clean JSON row (see schema.sql). HubSpot/Salesforce/
Zoho integration = one webhook or a Zapier/Make connector on the
leads table — no site redesign needed, as the spec requires.

## Deliberately NOT built (and why)
- Analytics dashboard: use Vercel Analytics (one click in Vercel) or
  GA4 — rebuilding analytics in-house adds no client value.
- Notifications: Supabase Database Webhooks → email is the clean path
  once the client picks a mailbox/service.
- Media upload manager, role-based multi-user auth, video tracking:
  real product engineering beyond a static-site scope; architecture
  supports adding them without redesign, which is what Part 8's
  "future integrations" section actually requires.
