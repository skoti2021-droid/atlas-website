// ============================================================
// AI ENGINEERING ARTICLE GENERATOR (Part 7)
// Usage:  ANTHROPIC_API_KEY=sk-... node scripts/generate-article.mjs "topic"
//
// Workflow (approval built in):
//   1. Generates a draft from the VERIFIED knowledge base only
//   2. Writes it to drafts/<slug>.json for YOUR review
//   3. You read it, edit if needed, then run:
//        node scripts/publish-draft.mjs drafts/<slug>.json
//      which appends it to lib/data.js articles
//   4. git add / commit / push → Vercel deploys it live
//
// Publishing frequency = how often you run this. Daily, weekly,
// whenever. The approval step is you, via git — no unreviewed
// content ever reaches the live site.
// ============================================================
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const topic = process.argv[2];
if (!topic) {
  console.error('Usage: node scripts/generate-article.mjs "topic to write about"');
  process.exit(1);
}
const key = process.env.ANTHROPIC_API_KEY;
if (!key) {
  console.error("Set ANTHROPIC_API_KEY environment variable first.");
  process.exit(1);
}

// The verified knowledge base = the site's own data file.
const knowledge = readFileSync(new URL("../lib/data.js", import.meta.url), "utf8");
const existing = [...knowledge.matchAll(/title: "(.*?)"/g)].map((m) => m[1]);

const system = `You are the engineering content writer for PMI America / Southern Coastal Machinery, filtration machinery manufacturers in Georgia, USA.

STRICT RULES — NON-NEGOTIABLE:
- Use ONLY facts present in the knowledge base provided. Never invent specifications, capacities, certifications, customers, or capabilities.
- If the topic requires facts not in the knowledge base, write at the general engineering-education level without attributing unverified claims to the companies.
- Educational first, sales second. No generic AI filler.
- Original writing only.

Respond ONLY with valid JSON (no markdown fences) in exactly this shape:
{
  "slug": "kebab-case-slug",
  "title": "Article Title",
  "tag": "short tag",
  "category": "one of: Machines|Engineering|Manufacturing|Materials|Installation|Maintenance|Troubleshooting|Innovation|Technology|Industries",
  "tags": ["tag1","tag2","tag3"],
  "relatedMachines": ["subset of: CCFW,BCFW,CLIMB,NYLON,WEB,SWFW"],
  "minutes": 5,
  "intro": "1-2 sentence introduction",
  "sections": [ { "h": "Heading", "p": "2-4 sentence paragraph" } ],
  "faqs": [ { "q": "question", "a": "answer" } ]
}
4-6 sections, 2-3 FAQs.`;

const user = `KNOWLEDGE BASE (verified — single source of truth):\n${knowledge.slice(0, 30000)}\n\nEXISTING ARTICLE TITLES (do not duplicate): ${existing.join(" | ")}\n\nWrite an original educational article on: ${topic}`;

const res = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "x-api-key": key,
    "anthropic-version": "2023-06-01",
  },
  body: JSON.stringify({
    model: "claude-sonnet-4-5",
    max_tokens: 3000,
    system,
    messages: [{ role: "user", content: user }],
  }),
});
const data = await res.json();
if (!res.ok) {
  console.error("API error:", JSON.stringify(data));
  process.exit(1);
}
const text = data.content.map((c) => c.text || "").join("");
let article;
try {
  article = JSON.parse(text.replace(/```json|```/g, "").trim());
} catch (e) {
  console.error("Could not parse model output as JSON:\n", text);
  process.exit(1);
}

mkdirSync(new URL("../drafts", import.meta.url), { recursive: true });
const out = new URL(`../drafts/${article.slug}.json`, import.meta.url);
writeFileSync(out, JSON.stringify(article, null, 2));
console.log(`Draft written: drafts/${article.slug}.json`);
console.log(`Review it, then publish with:\n  node scripts/publish-draft.mjs drafts/${article.slug}.json`);
