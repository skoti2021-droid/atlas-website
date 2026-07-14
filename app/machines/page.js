import { machines, materials } from "@/lib/data";
import { Eyebrow, CtaBand, MachineCard } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/machines" },
  title: "Filtration Machinery — Cartridge Winders, Web Lines & CLIMB™ Technology",
  description:
    "Explore the full machine portfolio: CCFW continuous winders (up to 1,200 cartridges/hr), BCFW batch winders, CLIMB™ carbon-infused machines, nylon cartridge lines, meltblown web machines and string wound filter winders.",
};

export default function MachinesPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Machines" }]} />
          <div className="section-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="INDEX">Machine portfolio</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              Machines
            </h1>
            <p className="lead">
              Every platform below is production-proven — specifications reflect
              installed, operating lines across North America, Europe, Asia and
              the Middle East.
            </p>
          </div>
          <div className="grid c2">
            {machines.map((m) => (
              <MachineCard key={m.slug} m={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="MAT">Polymer capability</Eyebrow>
            <h2 className="h2">Materials processed</h2>
          </div>
          <div className="chip-row">
            {materials.map((m) => (
              <span className="chip" key={m}>{m}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which platform fits?" text="Describe your product and volumes — engineering will recommend the right machine architecture, honestly." />
    </>
  );
}
