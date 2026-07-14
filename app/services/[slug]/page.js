import Link from "next/link";
import { notFound } from "next/navigation";
import { services, machines } from "@/lib/data";
import { Eyebrow, CtaBand } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const svc = services.find((x) => x.slug === slug);
  if (!svc) return {};
  return { title: svc.name, description: svc.text, alternates: { canonical: `/services/${svc.slug}` } };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const svc = services.find((x) => x.slug === slug);
  if (!svc) notFound();
  const otherServices = services.filter((x) => x.slug !== svc.slug).slice(0, 3);
  const featured = svc.relatedMachines?.length
    ? machines.filter((m) => svc.relatedMachines.includes(m.code))
    : [];

  const jsonLd = svc.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: svc.faqs.map((f) => ({
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
        <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: svc.name }]} />
      </div>

      <section className="section" style={{ paddingTop: "2.5rem" }}>
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht={svc.code}>Service</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,4.6vw,3.2rem)" }}>{svc.name}</h1>
            <p className="lead" style={{ marginTop: "1rem" }}>{svc.text}</p>
          </div>

          <div className="grid c2" style={{ alignItems: "start" }}>
            <div>
              <Eyebrow sht="PRC">How it works</Eyebrow>
              <div className="timeline">
                {svc.process.map((step, i) => (
                  <div className="tl-item" key={i}>
                    <div className="yr">STEP {String(i + 1).padStart(2, "0")}</div>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <span className="code">DELIVERABLE</span>
              <span className="h3">What you receive</span>
              <p>{svc.deliverables}</p>
            </div>
          </div>
        </div>
      </section>

      {svc.faqs?.length > 0 && (
        <section className="section alt">
          <div className="wrap">
            <div className="section-head">
              <Eyebrow sht="FAQ">Questions</Eyebrow>
              <h2 className="h2">Frequently asked</h2>
            </div>
            <div className="faq">
              {svc.faqs.map((f) => (
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
            <Eyebrow sht="REL">Related</Eyebrow>
            <h2 className="h2">Other services &amp; machinery</h2>
          </div>
          <div className="grid c3">
            {otherServices.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card">
                <span className="code">{o.code}</span>
                <span className="h3">{o.name}</span>
                <p>{o.text.slice(0, 110)}…</p>
                <span className="more">View service →</span>
              </Link>
            ))}
          </div>
          <div className="grid c3" style={{ marginTop: "1.4rem" }}>
            {featured.map((m) => (
              <Link key={m.slug} href={`/machines/${m.slug}`} className="card">
                <span className="code">{m.sheet} · {m.code}</span>
                <span className="h3">{m.name}</span>
                <span className="more">View specification →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to scope ${svc.name.toLowerCase()}?`}
        text="Describe the goal — get a straight engineering answer and a defined scope."
      />
    </>
  );
}
