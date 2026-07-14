import Link from "next/link";
import { services } from "@/lib/data";
import { Eyebrow, CtaBand, Dim } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/services" },
  title: "Services — Turnkey Lines, Machine Design, Commissioning & Support",
  description:
    "Complete filtration manufacturing services: turnkey production lines, custom machine design, process development, installation, commissioning, training and long-term support — from a team engineering meltblown lines since 1992.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="section-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="SVC 01–05">Services</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              The machine is half the job.
            </h1>
            <p className="lead">
              A production line succeeds on process knowledge — recipes, ramp-up,
              training, and support. That scope is engineered into every project,
              because this team has run meltblown production, not just built it.
            </p>
          </div>
          <div className="grid c2">
            {services.map((s) => (
              <Link href={`/services/${s.slug}`} className="card" key={s.slug}>
                <span className="code">{s.code}</span>
                <span className="h3">{s.name}</span>
                <p>{s.text}</p>
                <span className="more">View service →</span>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Dim left="RESIN" right="FINISHED FILTER">one engineered scope</Dim>
          </div>
        </div>
      </section>
      <CtaBand
        title="Planning a new line or expanding one?"
        text="From single machines to complete turnkey plants — describe the goal and get a straight engineering answer."
      />
    </>
  );
}
