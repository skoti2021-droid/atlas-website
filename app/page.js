import Link from "next/link";
import { machines, services, industries, testimonials, site } from "@/lib/data";
import { Eyebrow, Dim, Schematic, CtaBand, MachineCard, MediaHero } from "@/components/Ui";
import { machineMedia } from "@/lib/assets";

export const metadata = {
  alternates: { canonical: "/" },
  title:
    "Filtration Manufacturing Machinery — Meltblown Cartridge Winders & Web Lines | PMI America × SCM",
  description:
    "American-built meltblown machinery: continuous & batch cartridge filter winders, CLIMB™ carbon-infused technology, nylon lines, flat web machines and string wound winders. 50+ lines installed worldwide since 1992.",
};

export default function Home() {
  const climb = machines.find((m) => m.code === "CLIMB");
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="grid-bg" aria-hidden="true" />
        <div className="wrap inner">
          <Eyebrow sht="REV 1.0">Hoschton, Georgia · USA</Eyebrow>
          <h1 className="display">
            The machines behind the world&rsquo;s <em>filters</em>.
          </h1>
          <p className="lead">
            Southern Coastal Machinery engineers and builds meltblown filtration
            machinery — cartridge winders, web lines, and patented carbon-infusion
            technology. PMI America delivers them as complete manufacturing
            solutions. One team, from resin to finished filter.
          </p>
          <div className="cta-row">
            <Link href="/machines" className="btn solid">Explore machines</Link>
            <Link href="/request-quote" className="btn ghost-light">Request a quote</Link>
          </div>
          <Dim>
            <strong>1992 → today</strong>&nbsp;· continuous meltblown engineering
          </Dim>
        </div>
        <div className="spec-strip">
          <div className="wrap row">
            <div className="cell">
              <div className="num">50<span>+</span></div>
              <div className="lab">Lines installed worldwide</div>
            </div>
            <div className="cell">
              <div className="num">1,200<span>/hr</span></div>
              <div className="lab">CCFW 40 cartridge output</div>
            </div>
            <div className="cell">
              <div className="num">1<span>–</span>200</div>
              <div className="lab">Micron filtration range</div>
            </div>
            <div className="cell">
              <div className="num">9,981,211</div>
              <div className="lab">US patent · CLIMB™</div>
            </div>
          </div>
        </div>
      </section>

      {/* MACHINES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="SHT 01–06">Machine index</Eyebrow>
            <h2 className="h2">Six platforms. One cartridge portfolio.</h2>
            <p className="lead">
              From continuous high-volume winding to lab-scale web development —
              every machine specification below comes from real installed lines,
              not marketing copy.
            </p>
          </div>
          <div className="grid c3">
            {machines.map((m) => (
              <MachineCard key={m.slug} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIMB SPOTLIGHT */}
      <section className="section alt">
        <div className="wrap" style={{ display: "grid", gap: "2.5rem", gridTemplateColumns: "1fr", alignItems: "center" }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <Eyebrow sht="SHT 03">Patented technology</Eyebrow>
            <h2 className="h2">CLIMB™ — carbon inside the fiber, not around it.</h2>
            <p className="lead">
              {site.patent}: granular activated carbon is infused into meltblown
              fiber as it forms — roughly 80&nbsp;g of carbon doing the work of a
              900&nbsp;g carbon block, verified under microscopy to 1000×
              magnification.
            </p>
            <div style={{ marginTop: "1.6rem" }}>
              <Link href={`/machines/${climb.slug}`} className="btn">
                CLIMB™ technology in detail
              </Link>
            </div>
          </div>
          <MediaHero img={machineMedia("CLIMB")?.hero} />
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="SVC">Beyond the machine</Eyebrow>
            <h2 className="h2">Turnkey, from resin to running line.</h2>
          </div>
          <div className="grid c3">
            {services.slice(0, 3).map((s) => (
              <div className="card" key={s.code}>
                <span className="code">{s.code}</span>
                <span className="h3">{s.name}</span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.6rem" }}>
            <Link href="/services" className="btn">All services</Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="APP">Applications</Eyebrow>
            <h2 className="h2">Wherever filtration is manufactured.</h2>
          </div>
          <div className="chip-row">
            {industries.map((i) => (
              <span className="chip" key={i.name}>{i.name}</span>
            ))}
          </div>
          <div style={{ marginTop: "1.6rem" }}>
            <Link href="/industries" className="btn">Industries in depth</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="REF">Customer references</Eyebrow>
            <h2 className="h2">Trusted from Georgia to Germany.</h2>
            <p className="lead">
              References include Purolator Liquid Process, UFI Filter (Italy),
              Oerlikon Neumag (Germany), SPC (New Jersey) and Fine Supply Pro
              (Texas).
            </p>
          </div>
          <div className="grid c3">
            {testimonials.slice(0, 3).map((t) => (
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

      <CtaBand />
    </>
  );
}
