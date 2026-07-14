import Link from "next/link";
import { industries } from "@/lib/data";
import { Eyebrow, CtaBand } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries & Applications — Water, F&B, Pharma, PPE, Energy & More",
  description:
    "Filtration machinery serving water purification, food & beverage, pharmaceutical, petrochemical, HEPA air filtration, face masks & PPE, battery separators, and wipes & absorbents manufacturing.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          <div className="section-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="APP 01–08">Industries &amp; applications</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              One process. Many industries.
            </h1>
            <p className="lead">
              Meltblown and wound cartridge technology sits at the core of
              filtration and nonwovens manufacturing across these sectors — each
              served by installed, operating lines.
            </p>
          </div>
          <div className="grid c2">
            {industries.map((i, idx) => (
              <Link href={`/industries/${i.slug}`} className="card" key={i.slug}>
                <span className="code">APP {String(idx + 1).padStart(2, "0")}</span>
                <span className="h3">{i.name}</span>
                <p>{i.text}</p>
                <span className="more">Explore industry →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Manufacturing for one of these markets?"
        text="Tell engineering the product and the market — get a machine architecture matched to both."
      />
    </>
  );
}
