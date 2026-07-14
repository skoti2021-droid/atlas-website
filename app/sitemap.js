import { machines, articles, industries, services, site } from "@/lib/data";

export default function sitemap() {
  const now = new Date();
  const statics = ["", "/machines", "/gallery", "/solutions", "/engineering", "/services", "/industries", "/about", "/knowledge-hub", "/request-quote", "/contact", "/privacy-policy", "/terms", "/cookies", "/site-map"];
  return [
    ...statics.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.8 })),
    ...machines.map((m) => ({ url: `${site.url}/machines/${m.slug}`, lastModified: now, priority: 0.9 })),
    ...industries.map((i) => ({ url: `${site.url}/industries/${i.slug}`, lastModified: now, priority: 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: 0.8 })),
    ...articles.map((a) => ({ url: `${site.url}/knowledge-hub/${a.slug}`, lastModified: now, priority: 0.7 })),
  ];
}
