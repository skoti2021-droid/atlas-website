"use client";
import Link from "next/link";

export default function Error({ reset }) {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow"><span className="sht">ERR 500</span>Something failed</p>
        <h1 className="h2">An unexpected error occurred.</h1>
        <p className="lead" style={{ marginTop: "1rem" }}>
          The team has visibility of errors like this. You can retry, or return
          to a working page.
        </p>
        <div style={{ display: "flex", gap: "0.9rem", marginTop: "1.8rem" }}>
          <button className="btn solid" onClick={() => reset()}>Try again</button>
          <Link href="/" className="btn">Homepage</Link>
        </div>
      </div>
    </section>
  );
}
