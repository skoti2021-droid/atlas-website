// PART 9 QA — validates data integrity: unique slugs, valid machine
// code references, required fields. Run before every release:
//   node scripts/qa-check.mjs
import { machines, industries, services, articles } from "../lib/data.js";

let fails = 0;
const fail = (msg) => { console.error("✗", msg); fails++; };
const ok = (msg) => console.log("✓", msg);

const codes = new Set(machines.map((m) => m.code));
const dupes = (arr) => arr.filter((s, i) => arr.indexOf(s) !== i);

const allSlugs = [
  ...machines.map((m) => m.slug),
  ...industries.map((i) => i.slug),
  ...services.map((s) => s.slug),
  ...articles.map((a) => a.slug),
];
const d = dupes(allSlugs);
d.length ? fail(`duplicate slugs: ${d}`) : ok(`slugs unique (${allSlugs.length})`);

const serviceSlugs = new Set(services.map((s) => s.slug));
const machineSlugs = new Set(machines.map((m) => m.slug));

for (const i of industries) {
  for (const c of i.machineCodes || []) {
    if (!codes.has(c)) fail(`industry "${i.slug}" references unknown machine code "${c}"`);
  }
  for (const s of i.relatedServices || []) {
    if (!serviceSlugs.has(s)) fail(`industry "${i.slug}" references unknown service slug "${s}"`);
  }
}
ok("industry → machine/service references valid");

for (const s of services) {
  for (const c of s.relatedMachines || []) {
    if (!codes.has(c)) fail(`service "${s.slug}" references unknown machine code "${c}"`);
  }
}
ok("service → machine references valid");

for (const a of articles) {
  for (const c of a.relatedMachines || []) {
    if (!codes.has(c)) fail(`article "${a.slug}" references unknown machine code "${c}"`);
  }
  if (!a.sections?.length) fail(`article "${a.slug}" has no sections`);
}
ok("article references + structure valid");

for (const m of machines) {
  if (!m.stats?.length) fail(`machine "${m.slug}" missing stats`);
  if (!m.body?.length) fail(`machine "${m.slug}" missing body`);
}
ok("machine pages complete");

console.log(fails ? `\n${fails} FAILURE(S)` : "\nALL QA CHECKS PASSED");
process.exit(fails ? 1 : 0);
