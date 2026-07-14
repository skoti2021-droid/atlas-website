// Publishes an approved draft into lib/data.js (Part 7 approval step).
// Usage: node scripts/publish-draft.mjs drafts/<slug>.json
import { readFileSync, writeFileSync } from "fs";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/publish-draft.mjs drafts/<slug>.json");
  process.exit(1);
}
const a = JSON.parse(readFileSync(file, "utf8"));
for (const k of ["slug", "title", "tag", "intro", "sections"]) {
  if (!a[k]) {
    console.error(`Draft missing required field: ${k}`);
    process.exit(1);
  }
}
const dataPath = new URL("../lib/data.js", import.meta.url);
let src = readFileSync(dataPath, "utf8");
if (src.includes(`slug: "${a.slug}"`)) {
  console.error(`Article with slug "${a.slug}" already exists — aborting.`);
  process.exit(1);
}
const entry = `  ${JSON.stringify(a, null, 2).replace(/\n/g, "\n  ")},\n`;
// insert as first element of articles array
const marker = "export const articles = [";
const i = src.indexOf(marker);
if (i === -1) {
  console.error("Could not find articles array in lib/data.js");
  process.exit(1);
}
src = src.slice(0, i + marker.length) + "\n" + entry + src.slice(i + marker.length + 1);
writeFileSync(dataPath, src);
console.log(`Published "${a.title}" to lib/data.js.`);
console.log("Now: npm run build (verify) → git add . && git commit && git push");
