import { machines, industries, services, articles } from "@/lib/data";

// Static JSON search index — served at /search-index.json, consumed
// client-side by the global search. Rebuilt automatically on deploy,
// so it grows as content is added (Part 6 requirement).
export const dynamic = "force-static";

export function GET() {
  const index = [
    ...machines.map((m) => ({
      type: "Machine",
      title: m.name,
      code: m.code,
      url: `/machines/${m.slug}`,
      text: `${m.short} ${m.body?.join(" ") || ""} ${m.applications?.join(" ") || ""} ${m.models?.join(" ") || ""}`,
    })),
    ...industries.map((i) => ({
      type: "Industry",
      title: i.name,
      url: `/industries/${i.slug}`,
      text: `${i.text} ${i.challenge || ""} ${i.solution || ""}`,
    })),
    ...services.map((s) => ({
      type: "Service",
      title: s.name,
      url: `/services/${s.slug}`,
      text: s.text || s.overview || "",
    })),
    ...articles.map((a) => ({
      type: "Article",
      title: a.title,
      url: `/knowledge-hub/${a.slug}`,
      text: `${a.intro} ${a.tag} ${a.sections?.map((x) => x.h + " " + x.p).join(" ") || ""}`,
    })),
    { type: "Page", title: "Gallery", url: "/gallery", text: "authentic photos videos machine photography gallery CCFW CLIMB meltblown web" },
    { type: "Page", title: "About & Company History", url: "/about", text: "Matthew Pelham JENTEX meltblown 1992 patent 9,981,211 Georgia founded 2007 history timeline" },
    { type: "Page", title: "Request a Quote", url: "/request-quote", text: "quote enquiry pricing RFQ engineering consultation" },
    { type: "Page", title: "Contact", url: "/contact", text: "contact phone email address Hoschton Georgia support" },
  ];
  return Response.json(index);
}
