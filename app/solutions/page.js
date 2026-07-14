import { solutions } from "@/lib/data";
import { Eyebrow, CtaBand } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/solutions" },
  title: "Solutions — Turnkey Production Lines & Manufacturing Services",
  description:
    "Complete production line solutions: turnkey manufacturing, installation, commissioning, operator training, product development, and after-sales support for filtration machinery.",
};

export default function SolutionsPage() {
  return (
    <>
      <div className="wrap"><Breadcrumbs items={[{ label: "Solutions" }]} /></div>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Eyebrow sht="SOL">Solutions</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              Beyond the machine.
            </h1>
            <p className="lead">
              A production line succeeds on process knowledge as much as steel —
              every solution below is delivered by the same team that
              engineers the machines.
            </p>
          </div>
          <div className="grid c3">
            {solutions.map((s) => (
              <div className="card" key={s.name}>
                <span className="code">SOL</span>
                <span className="h3">{s.name}</span>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Planning a new production line?" text="Describe the goal — get a straight engineering answer, not a sales script." />
    </>
  );
}
