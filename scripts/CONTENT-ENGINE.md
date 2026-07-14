# AI ENGINEERING CONTENT ENGINE (Part 7)

Two ways to publish, both using ONLY the verified knowledge base
(lib/data.js) as source of truth, with a strict no-fabrication
system prompt.

## Workflow A — Generate locally, approve via git (recommended start)

1. Generate a draft:
   ANTHROPIC_API_KEY=sk-ant-... node scripts/generate-article.mjs "how gradient density winding works"

2. Review/edit the draft in drafts/<slug>.json
   (THIS is the admin approval step — nothing publishes without you)

3. Publish the approved draft:
   node scripts/publish-draft.mjs drafts/<slug>.json

4. Verify and ship:
   npm run build
   git add . && git commit -m "New article" && git push
   → Vercel deploys; article is live, in the search index,
     sitemap, and hub automatically.

Publishing frequency = how often you run this. Daily, 3×/week,
whatever the client wants — the "content calendar" is your calendar.

## Content calendar suggestion (per spec Part 7)
- Mon: Machine deep dive       - Thu: Maintenance/troubleshooting
- Tue: Industry application    - Fri: Technology & innovation
- Wed: Engineering guide       - Sat/Sun: Buyer guides / FAQs
Topic ideas: one per machine × one per industry × materials ×
installation × training = 30+ articles from verified knowledge alone.

## Workflow B — Fully automatic (when the client wants hands-off)
Requires: Vercel Pro (for cron), ANTHROPIC_API_KEY and GITHUB_TOKEN
env vars in Vercel, and accepting that articles publish WITHOUT
human review. The architecture: a Vercel Cron hits an API route that
generates an article and commits it to GitHub via the contents API,
triggering a redeploy. NOT enabled by default — deliberately.
Human review (Workflow A) is the safer default for a client's
engineering credibility; unreviewed AI publishing risks exactly the
fabrication the project rules forbid. If the client explicitly wants
Workflow B after understanding the tradeoff, it can be added.

## What was NOT built, and why
- Admin dashboard with pause/approve buttons: requires a database +
  auth (Part 8 scope). The git-based workflow above delivers the same
  control honestly on the current architecture.
- "Learning from uploaded documents": add verified facts to
  lib/data.js (or paste documents into the generator prompt) — the
  generator reads the knowledge base fresh on every run, so it
  "learns" from anything added there.
