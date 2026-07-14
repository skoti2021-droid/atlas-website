import { timeline, testimonials, site } from "@/lib/data";
import { Eyebrow, CtaBand, Dim, MediaHero, Gallery } from "@/components/Ui";
import { machineMedia } from "@/lib/assets";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About — Three Decades of Meltblown Engineering",
  description:
    "Founded by Matthew Pelham, whose meltblown career began at J&M Laboratories in 1992 and included owning JENTEX Corporation, a meltblown nonwovens producer. PMI America (est. 2007) and Southern Coastal Machinery (est. 2016): 50+ lines installed worldwide, US Patent 9,981,211.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="section-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="ORG">About the companies</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              Built by someone who ran the machines.
            </h1>
            <p className="lead">
              Most machinery companies design equipment. {site.founder} spent
              years on the other side — owning and operating a meltblown
              nonwovens plant — before founding Southern Coastal Machinery. That
              operator&rsquo;s perspective is the difference customers describe
              in every reference.
            </p>
          </div>
          <div className="prose">
            <p>
              Southern Coastal Machinery is the engineering and manufacturing
              company: machine design, fabrication, controls, and process
              development, based in {site.address.city}, Georgia. PMI America is
              the customer-facing solutions brand: project scoping, turnkey
              delivery, and worldwide customer support. Together they operate as
              one connected ecosystem — a single team from first specification to
              running production line.
            </p>
          </div>
          <div style={{ marginTop: "2rem", maxWidth: "40rem" }}>
            <MediaHero img={machineMedia("CCFW")?.hero} />
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Dim left="1992" right="TODAY">50+ meltblown lines installed worldwide</Dim>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="HIST">Company history</Eyebrow>
            <h2 className="h2">Timeline</h2>
          </div>
          <div className="timeline">
            {timeline.map((t) => (
              <div className="tl-item" key={t.year}>
                <div className="yr">{t.year}</div>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="MFG">On the manufacturing floor</Eyebrow>
            <h2 className="h2">Machines built by this team</h2>
            <p className="lead">
              Authentic photography from installed lines — the same engineering
              standard behind every machine on this platform.
            </p>
          </div>
          <Gallery images={machineMedia("WEB")?.gallery?.slice(0, 6)} label="Meltblown web line manufacturing" />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="REF">References</Eyebrow>
            <h2 className="h2">What customers say</h2>
          </div>
          <div className="grid c3">
            {testimonials.map((t) => (
              <div className="quote-card" key={t.company}>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="who">
                  <strong>{t.company}</strong> · {t.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Meet the engineering team."
        text="Every project starts with a technical conversation — not a sales pitch."
      />
    </>
  );
}
