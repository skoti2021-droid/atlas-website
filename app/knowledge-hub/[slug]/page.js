import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, machines, site } from "@/lib/data";
import { Eyebrow, CtaBand, MediaHero } from "@/components/Ui";
import { machineMedia } from "@/lib/assets";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) return {};
  return { title: a.title, description: a.intro, alternates: { canonical: `/knowledge-hub/${a.slug}` } };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  const others = articles.filter((x) => x.slug !== a.slug);
  const heroImg = a.relatedMachines
    ?.map((code) => machineMedia(code)?.hero)
    .find(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: a.title,
    description: a.intro,
    author: { "@type": "Organization", name: site.legal },
    publisher: { "@type": "Organization", name: site.legal },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Knowledge Hub", href: "/knowledge-hub" }, { label: a.title }]} />
          <div className="article-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="KB">{a.tag} · {a.minutes} min read</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(1.8rem,4.4vw,3rem)" }}>
              {a.title}
            </h1>
            <p className="lead" style={{ marginTop: "1rem" }}>{a.intro}</p>
          </div>
          {heroImg && (
            <div style={{ maxWidth: "42rem", marginBottom: "2rem" }}>
              <MediaHero img={heroImg} />
            </div>
          )}
          <div className="article-body">
            <nav aria-label="Table of contents" style={{ marginBottom: "1.6rem" }}>
              <p className="eyebrow"><span className="sht">TOC</span>In this article</p>
              <ol className="mono" style={{ paddingLeft: "1.2rem", display: "grid", gap: "0.35rem", fontSize: "0.82rem", color: "var(--ink-2)" }}>
                {a.sections.map((s) => (
                  <li key={s.h}><a href={`#${s.h.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ color: "inherit" }}>{s.h}</a></li>
                ))}
              </ol>
            </nav>
            {a.sections.map((s) => (
              <div key={s.h}>
                <h2 id={s.h.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>{s.h}</h2>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          {a.relatedMachines?.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <Eyebrow sht="REL">Machines in this article</Eyebrow>
              <div className="grid c2">
                {machines
                  .filter((m) => a.relatedMachines.includes(m.code))
                  .map((m) => (
                    <Link key={m.slug} href={`/machines/${m.slug}`} className="card">
                      <span className="code">{m.sheet} · {m.code}</span>
                      <span className="h3">{m.name}</span>
                      <span className="more">View specification →</span>
                    </Link>
                  ))}
              </div>
            </div>
          )}
          <div style={{ marginTop: "3rem" }}>
            <Eyebrow sht="NEXT">Keep reading</Eyebrow>
            <div className="grid c2">
              {others.map((o) => (
                <Link key={o.slug} href={`/knowledge-hub/${o.slug}`} className="card">
                  <span className="code">{o.tag}</span>
                  <span className="h3">{o.title}</span>
                  <span className="more">Read article →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
