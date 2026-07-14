# PROJECT ATLAS — PMI America × Southern Coastal Machinery

Enterprise website, v1.0. Next.js 14 (App Router), fully static, zero
external dependencies beyond React/Next. Build verified.

## Run locally
```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (verified passing)
```

## Deploy to Vercel
1. Push this folder to a GitHub repo (or `vercel` CLI from the folder).
2. Import in Vercel — no configuration needed, defaults work.
3. Set the production domain, then update `site.url` in `lib/data.js`
   to the final domain (drives sitemap.xml, robots.txt, JSON-LD).

## Editing content
Everything lives in **`lib/data.js`** — machines, specs, services,
industries, testimonials, articles, timeline, contact details. Pages
render from this file; no page code edits needed for content changes.

## Part 2 additions (IA, mega menus, breadcrumbs)
- New primary nav: Solutions · Machines · Industries · Engineering · Resources · About · Contact · Request a Quote
- Desktop mega menus under Solutions/Machines/Industries/Engineering/Resources (hover or click)
- Breadcrumbs (with BreadcrumbList structured data) on every page
- Sticky mobile bottom bar: Call / Request a quote
- Expanded footer acting as secondary nav, plus Privacy/Terms/Cookies placeholder pages
- New `/solutions` and `/engineering` pages

**Known IA gap, by design:** Part 2's Machines menu names products
(Carbon Block Filter Machine, Pleating Equipment, Core Manufacturing
Equipment, End Cap Assembly) that do **not exist** in the verified
PMI/SCM inventory. Per the project's own "never fabricate" rule, these
are not built. The Machines mega menu and `/machines` show only the six
verified platforms (CCFW, BCFW, CLIMB™, Nylon, Meltblown Web, String
Wound). If these product lines are real and simply weren't on the
public sites, send specifications and they'll be added properly.

## PRE-LAUNCH CHECKLIST (honest gaps to close)
1. **Testimonial wording** — company names/locations are verified from
   southerncoastalmachinery.com; the quote text in `lib/data.js` is
   placeholder and MUST be replaced with the verbatim quotes from the
   live testimonials page before launch.
2. **Machine photography** — the site currently uses original process
   schematics (no stock, no AI imagery, per project rules). Replace or
   augment with authentic PMI/SCM machine photos: drop images into
   `/public/machines/` and swap `<Schematic/>` for `<img>` on machine
   pages.
3. **Quote form backend** — v1 uses a structured mailto handoff (no
   data stored). When the lead-management platform (spec Part 8) is
   built, replace `handleSubmit` in `components/QuoteForm.js` with a
   POST to an API route.
4. **Email address** — currently the founder's public gmail from the
   existing sites; consider a domain email (e.g. sales@) before launch.
5. **Analytics** — add GA4 tag when the property is created.
6. **Videos & PDFs** — the existing sites' brochures/videos should be
   collected and added as a Downloads section (planned per spec Part 3).

## Part 4 additions (SEO/AEO/GEO)
- Canonical URLs on all 40 pages (static + dynamic)
- Open Graph image + Twitter card defaults (verified CCFW image)
- WebSite schema + ContactPoint added to Organization schema
- HTML sitemap at /site-map (linked from footer), included in sitemap.xml
- SearchAction schema deliberately NOT added — no site search exists yet;
  add it when search is implemented (Part 2 future features)

## Part 5 additions (authentic media)
- lib/assets.js: verified media library — every URL confirmed live on
  southerncoastalmachinery.com. CCFW hero image + machine video (Middle
  East installation), CLIMB cartridge hero, Meltblown Web: 15-photo
  machine gallery + 2 product photos + line video.
- Machine pages render authentic hero/video/gallery when available;
  engineering schematic remains the fallback (BCFW, Nylon, SWFW pending).
- Images load from the live SCM site for now. BEFORE LAUNCH: run
  `bash scripts/fetch-media.sh` locally to download all assets into
  public/media/, then update lib/assets.js to local paths — the site
  must own its media, not hotlink a site that may be retired.
- Testimonial verbatim quotes: STILL pending (see Part 1 checklist).

## Part 6 additions (search + remaining schema)
- Global search: press ⌘K / Ctrl+K or click Search in the header.
  Searches machines, industries, services, articles, key pages.
  Index served at /search-index.json, rebuilt on every deploy so it
  grows automatically as content is added.
- SearchAction schema added to WebSite JSON-LD (now that search exists).
- VideoObject schema on machine pages that have authentic video (CCFW,
  Meltblown Web) — feeds Google video results and AI answer engines.
- Most Part 6 SEO items (canonicals, OG/Twitter, breadcrumbs, FAQ
  schema, internal-linking mesh, HTML+XML sitemaps, E-E-A-T signals)
  were already implemented in Part 4 and are unchanged.

## Part 7 additions (AI content engine)
- Knowledge Hub upgraded: article categories/tags, table of contents
  with anchor links, related-machines section per article.
- AI article generator: scripts/generate-article.mjs — drafts from the
  verified knowledge base with a strict no-fabrication system prompt.
- Approval pipeline: drafts/ → review → scripts/publish-draft.mjs →
  git push. Human review is the approval step; nothing publishes
  unreviewed. Full docs: scripts/CONTENT-ENGINE.md
- Search index + sitemap pick up new articles automatically on deploy.

## Part 8 additions (business platform)
- Real lead-management backend (Supabase): quote submissions stored
  with unique ENQ- reference IDs; /admin dashboard with status
  workflow (new/contacted/quoted/won/lost), internal notes, CSV export.
- Dormant until activated: add 3 env vars per supabase/PART8-SETUP.md.
  Until then the quote form falls back to email — nothing breaks.
- /admin and /api excluded from robots.txt.
- CRM-ready lead shape; what was deliberately not built is documented
  in PART8-SETUP.md with reasons (no fake dashboards).

## Part 9 additions (production hardening)
- Security headers: CSP (scoped to actual asset domains), X-Frame-Options
  DENY, nosniff, referrer policy, permissions policy.
- Quote API: rate limiting (5/min/IP) + honeypot spam trap.
- 500 error page with recovery actions; skip-to-content a11y link;
  hero images load with fetchPriority=high, galleries stay lazy.
- Automated QA: node scripts/qa-check.mjs — validates slug uniqueness
  and every cross-reference in the data layer. Run before releases.
- Already covered previously: Core Web Vitals (static pages, ~100kB
  JS), responsive breakpoints, reduced-motion, focus states, XML/HTML
  sitemaps, robots rules, 404 page.
- Backups/rollback = git history + Vercel instant rollback (built into
  the platform — every deployment is restorable in one click).
