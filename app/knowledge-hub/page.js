import Link from "next/link";
import { articles } from "@/lib/data";
import { Eyebrow, CtaBand } from "@/components/Ui";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  alternates: { canonical: "/knowledge-hub" },
  title: "Knowledge Hub — Meltblown & Filtration Engineering Resources",
  description:
    "Engineering articles on meltblown technology, gradient density depth filtration, carbon-infused media and filtration manufacturing — written from three decades of process experience.",
};

export default function HubPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <Breadcrumbs items={[{ label: "Knowledge Hub" }]} />
          <div className="section-head" style={{ marginTop: "1.2rem" }}>
            <Eyebrow sht="KB">Knowledge hub</Eyebrow>
            <h1 className="display" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
              Engineering, explained.
            </h1>
            <p className="lead">
              The industry&rsquo;s working knowledge — fiber formation, gradient
              density, carbon infusion — written for engineers and technical
              buyers, from a team that has run these processes since 1992.
            </p>
          </div>
          <div className="chip-row" style={{ marginBottom: "2rem" }}>
            {[...new Set(articles.map((a) => a.category).filter(Boolean))].map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <div className="grid c3">
            {articles.map((a) => (
              <Link key={a.slug} href={`/knowledge-hub/${a.slug}`} className="card">
                <span className="code">{a.tag} · {a.minutes} min</span>
                <span className="h3">{a.title}</span>
                <p>{a.intro}</p>
                <span className="more">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Have a process question?"
        text="If the answer isn't in the hub yet, ask engineering directly — real questions shape what gets written next."
      />
    </>
  );
}
