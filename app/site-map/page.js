import Link from "next/link";
import { machines, industries, services, articles } from "@/lib/data";
import { Eyebrow } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/site-map" },
  title: "Site Map",
  description: "Complete index of every page on the PMI America × Southern Coastal Machinery website.",
};

const groups = [
  { title: "Machines", links: [{ href: "/machines", label: "All machines" }, ...machines.map((m) => ({ href: `/machines/${m.slug}`, label: m.name }))] },
  { title: "Industries", links: [{ href: "/industries", label: "All industries" }, ...industries.map((i) => ({ href: `/industries/${i.slug}`, label: i.name }))] },
  { title: "Services & Solutions", links: [{ href: "/solutions", label: "Solutions" }, { href: "/engineering", label: "Engineering" }, { href: "/services", label: "All services" }, ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))] },
  { title: "Knowledge Hub", links: [{ href: "/knowledge-hub", label: "All articles" }, ...articles.map((a) => ({ href: `/knowledge-hub/${a.slug}`, label: a.title }))] },
  { title: "Gallery", links: [{ href: "/gallery", label: "Media Gallery" }] },
  { title: "Company", links: [{ href: "/about", label: "About & History" }, { href: "/contact", label: "Contact" }, { href: "/request-quote", label: "Request a Quote" }, { href: "/privacy-policy", label: "Privacy Policy" }, { href: "/terms", label: "Terms" }, { href: "/cookies", label: "Cookies" }] },
];

export default function SiteMapPage() {
  return (
    <section className="section">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Site Map" }]} />
        <div className="section-head" style={{ marginTop: "1.2rem" }}>
          <Eyebrow sht="MAP">Site map</Eyebrow>
          <h1 className="h2">Every page, one index</h1>
        </div>
        <div className="grid c3">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="h3" style={{ marginBottom: "0.8rem" }}>{g.title}</h2>
              <ul style={{ listStyle: "none", display: "grid", gap: "0.5rem" }}>
                {g.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} style={{ textDecoration: "none", color: "var(--ink-2)" }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
