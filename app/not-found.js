import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow"><span className="sht">ERR 404</span>Sheet not found</p>
        <h1 className="h2">This page is not in the drawing set.</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          The address may have changed. Start from the machine index or the homepage.
        </p>
        <div style={{ display: "flex", gap: "0.9rem", marginTop: "1.8rem" }}>
          <Link href="/" className="btn solid">Homepage</Link>
          <Link href="/machines" className="btn">Machines</Link>
        </div>
      </div>
    </section>
  );
}
