import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, machines, services, site } from "@/lib/data";
import { Eyebrow, CtaBand } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) return {};
  return {
    title: `${ind.name} — Filtration Manufacturing Machinery`,
    description: ind.text,
    alternates: { canonical: `/industries/${ind.slug}` },
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const ind = industries.find((x) => x.slug === slug);
  if (!ind) notFound();
  const relatedMachines = machines.filter((m) => ind.machineCodes.includes(m.code));
  const relatedServiceItems = services.filter((s) => ind.relatedServices?.includes(s.slug));
  const otherIndustries = industries.filter((x) => x.slug !== ind.slug).slice(0, 3);

  const jsonLd = ind.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: ind.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: ind.name }]} />
      </div>

      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="APP">Industry</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>{ind.name}</h1>
            <p className="lead" style={{ marginTop: "1rem" }}>{ind.text}</p>
          </div>
          <div className="grid c2">
            <div className="card">
              <span className="code">CHALLENGE</span>
              <span className="h3">What this industry is up against</span>
              <p>{ind.challenges}</p>
            </div>
            <div className="card">
              <span className="code">SOLUTION</span>
              <span className="h3">How the machinery answers it</span>
              <p>{ind.solutions}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="MCH">Applicable machinery</Eyebrow>
            <h2 className="h2">Machines serving {ind.name.toLowerCase()}</h2>
          </div>
          <div className="grid c3">
            {relatedMachines.map((m) => (
              <Link key={m.slug} href={`/machines/${m.slug}`} className="card">
                <span className="code">{m.sheet} · {m.code}</span>
                <span className="h3">{m.name}</span>
                <p>{m.short.slice(0, 120)}…</p>
                <span className="more">View specification →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {relatedServiceItems.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow sht="SVC">Recommended engineering services</Eyebrow>
              <h2 className="h2">Delivering it as a project</h2>
            </div>
            <div className="grid c2">
              {relatedServiceItems.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                  <span className="code">{s.code}</span>
                  <span className="h3">{s.name}</span>
                  <p>{s.text}</p>
                  <span className="more">View service →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {ind.faqs?.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow sht="FAQ">Common questions</Eyebrow>
              <h2 className="h2">Frequently asked</h2>
            </div>
            <div className="faq">
              {ind.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="REL">Related industries</Eyebrow>
            <h2 className="h2">Also served</h2>
          </div>
          <div className="grid c3">
            {otherIndustries.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="card">
                <span className="code">APP</span>
                <span className="h3">{o.name}</span>
                <p>{o.text}</p>
                <span className="more">Explore industry →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Manufacturing for ${ind.name.toLowerCase()}?`}
        text="Tell engineering the product and the market — get a machine architecture matched to both."
      />
    </>
  );
}
