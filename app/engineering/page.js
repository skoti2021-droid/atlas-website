import { engineeringCapabilities, timeline } from "@/lib/data";
import { Eyebrow, CtaBand, Dim } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/engineering" },
  title: "Engineering — Machine Design, Process Optimization & Factory Planning",
  description:
    "Engineering capabilities behind every line: machine design, process optimization, prototype development, factory planning, installation, commissioning, and technical support.",
};

export default function EngineeringPage() {
  return (
    <>
      <div className="wrap"><Breadcrumbs items={[{ label: "Engineering" }]} /></div>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="ENG">Engineering</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              Engineering that has run its own machines.
            </h1>
            <p className="lead">
              Machine design decisions here are informed by having owned and
              operated a meltblown production plant — not just built equipment
              for others to run.
            </p>
          </div>
          <div className="grid c3">
            {engineeringCapabilities.map((e) => (
              <div className="card" key={e.name}>
                <span className="code">ENG</span>
                <span className="h3">{e.name}</span>
                <p>{e.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Dim left="1992">{timeline[timeline.length - 1].text.slice(0, 60)}…</Dim>
          </div>
        </div>
      </section>
      <CtaBand title="Have a process or design question?" text="Talk directly to the engineering team — real questions, real answers." />
    </>
  );
}
