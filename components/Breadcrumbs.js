import Link from "next/link";
import { site } from "@/lib/data";

/* items: [{ label, href? }] — last item has no href (current page) */
export default function Breadcrumbs({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, ...items].map(
      (it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name || it.label,
        item: it.href ? `${site.url}${it.href}` : undefined,
      })
    ),
  };
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((it, i) => (
          <li key={i}>
            <span aria-hidden="true">/</span>
            {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
