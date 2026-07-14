import Link from "next/link";
import { notFound } from "next/navigation";
import { machines, industries, site } from "@/lib/data";
import { Eyebrow, Dim, Schematic, CtaBand, MediaHero, MachineVideo, Gallery } from "@/components/Ui";
import { machineMedia } from "@/lib/assets";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return machines.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = machines.find((x) => x.slug === slug);
  if (!m) return {};
  return {
    title: `${m.name} (${m.code})`,
    description: m.short,
    alternates: { canonical: `/machines/${m.slug}` },
  };
}

export default async function MachinePage({ params }) {
  const { slug } = await params;
  const m = machines.find((x) => x.slug === slug);
  if (!m) notFound();
  const others = machines.filter((x) => x.slug !== m.slug).slice(0, 3);
  const mm = machineMedia(m.code);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: m.name,
      brand: { "@type": "Brand", name: "Southern Coastal Machinery" },
      manufacturer: { "@type": "Organization", name: site.legal },
      description: m.short,
      category: "Filtration manufacturing machinery",
      model: m.models.join(", "),
    },
    m.faqs && m.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: m.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null,
    mm?.video
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: mm.video.title || `${m.name} in operation`,
          description: mm.video.caption || m.short,
          thumbnailUrl: mm.hero?.src ? [mm.hero.src] : undefined,
          contentUrl: mm.video.src,
          uploadDate: "2026-01-01",
        }
      : null,
  ].filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="wrap">
        <Breadcrumbs items={[{ label: "Machines", href: "/machines" }, { label: m.name }]} />
      </div>
      <section className="detail-hero">
        <div className="wrap inner">
          <div>
            <Eyebrow sht={m.sheet}>{m.series}</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>
              {m.name}
            </h1>
            <p className="lead" style={{ marginTop: "1.1rem" }}>{m.short}</p>
            <div style={{ display: "flex", gap: "0.9rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
              <Link href="/request-quote" className="btn solid">Request a quote</Link>
              <Link href="/contact" className="btn">Ask engineering</Link>
            </div>
            <div className="stat-list">
              {m.stats.map((s) => (
                <div className="stat" key={s.note}>
                  <span className="v">{s.value}</span>
                  <span className="u">{s.unit}</span>
                  <span className="n">{s.note}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {mm?.hero ? (
              <MediaHero img={mm.hero} />
            ) : mm?.video ? (
              <MachineVideo video={mm.video} />
            ) : (
              <Schematic label={`${m.code} — process schematic (authentic photography pending)`} />
            )}
            <div style={{ marginTop: "1.2rem" }}>
              <Dim>{m.models.length} model{m.models.length > 1 ? "s" : ""} in series</Dim>
            </div>
            <div className="chip-row" style={{ marginTop: "1rem" }}>
              {m.models.map((mod) => (
                <span className="chip" key={mod}>{mod}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
          <div className="prose">
            <Eyebrow sht="SPEC">Engineering overview</Eyebrow>
            {m.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div>
            <Eyebrow sht="APP">Typical applications</Eyebrow>
            <div className="chip-row">
              {m.applications.map((a) => (
                <span className="chip" key={a}>{a}</span>
              ))}
            </div>
          </div>
          {industries.filter((i) => i.machineCodes?.includes(m.code)).length > 0 && (
            <div>
              <Eyebrow sht="IND">Industries served by this platform</Eyebrow>
              <div className="chip-row">
                {industries
                  .filter((i) => i.machineCodes?.includes(m.code))
                  .map((i) => (
                    <Link key={i.slug} href={`/industries/${i.slug}`} className="chip" style={{ textDecoration: "none" }}>
                      {i.name} →
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {(mm?.video && mm?.hero) || mm?.gallery ? (
        <section className="section alt">
          <div className="wrap" style={{ display: "grid", gap: "2rem" }}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <Eyebrow sht="MEDIA">Authentic machine media</Eyebrow>
              <h2 className="h2">{m.code} on the floor</h2>
            </div>
            {mm?.video && mm?.hero && <MachineVideo video={mm.video} />}
            <Gallery images={mm?.gallery} label="Installed machines & equipment" />
            <Gallery images={mm?.products} label="Products made on this platform" />
          </div>
        </section>
      ) : null}

      {m.faqs && m.faqs.length > 0 && (
        <section className="section alt">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow sht="FAQ">Engineering questions</Eyebrow>
              <h2 className="h2">Frequently asked</h2>
            </div>
            <div className="faq">
              {m.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <div className="a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="REL">Related platforms</Eyebrow>
            <h2 className="h2">Also in the portfolio</h2>
          </div>
          <div className="grid c3">
            {others.map((o) => (
              <Link key={o.slug} href={`/machines/${o.slug}`} className="card">
                <span className="code">{o.sheet} · {o.code}</span>
                <span className="h3">{o.name}</span>
                <p>{o.short.slice(0, 110)}…</p>
                <span className="more">View specification →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Specify a ${m.code} line for your plant.`}
        text="Send your cartridge or media specification and target output — receive an engineered recommendation."
      />
    </>
  );
}
