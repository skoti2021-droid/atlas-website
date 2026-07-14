import Link from "next/link";

export function Eyebrow({ sht, children }) {
  return (
    <p className="eyebrow">
      {sht && <span className="sht">{sht}</span>}
      {children}
    </p>
  );
}

export function Dim({ left, right, children }) {
  return (
    <div className="dim" role="presentation">
      {left && <span>{left}</span>}
      <span className="rule" />
      <span>{children}</span>
      <span className="rule" />
      {right && <span>{right}</span>}
    </div>
  );
}

/* Abstract meltblown-line schematic — authentic linework, not fake
   machinery photos. Swap for real machine photography via assets. */
export function Schematic({ label = "Meltblown process — schematic" }) {
  return (
    <div className="schem" aria-label={label} role="img">
      <svg viewBox="0 0 640 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* extruder */}
        <rect x="30" y="70" width="150" height="60" stroke="#5a6b78" strokeWidth="1.5" />
        <rect x="60" y="40" width="40" height="30" stroke="#5a6b78" strokeWidth="1.5" />
        <line x1="180" y1="100" x2="250" y2="100" stroke="#5a6b78" strokeWidth="1.5" />
        {/* die */}
        <path d="M250 75 H320 L340 100 L320 125 H250 Z" stroke="#e8630a" strokeWidth="1.5" />
        {/* fiber stream */}
        <path d="M342 100 C 400 92, 430 108, 470 100" stroke="#e8630a" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M342 100 C 400 112, 440 96, 480 106" stroke="#e8630a" strokeWidth="1" strokeDasharray="2 5" />
        <path d="M342 100 C 396 84, 446 118, 476 94" stroke="#e8630a" strokeWidth="1" strokeDasharray="4 3" />
        {/* mandrel / collector */}
        <circle cx="520" cy="100" r="42" stroke="#c9d4da" strokeWidth="1.5" />
        <circle cx="520" cy="100" r="14" stroke="#5a6b78" strokeWidth="1.5" />
        {/* dimension line */}
        <line x1="250" y1="180" x2="562" y2="180" stroke="#5a6b78" strokeWidth="1" />
        <line x1="250" y1="172" x2="250" y2="188" stroke="#5a6b78" strokeWidth="1" />
        <line x1="562" y1="172" x2="562" y2="188" stroke="#5a6b78" strokeWidth="1" />
        <text x="370" y="200" fill="#8ba0ae" fontFamily="monospace" fontSize="12">DIE → COLLECTOR</text>
        {/* base line */}
        <line x1="30" y1="250" x2="610" y2="250" stroke="#2c3e4c" strokeWidth="1.5" />
        <text x="30" y="280" fill="#6f8595" fontFamily="monospace" fontSize="11">POLYMER IN</text>
        <text x="470" y="280" fill="#6f8595" fontFamily="monospace" fontSize="11">CARTRIDGE OUT</text>
      </svg>
      <span className="tag">{label}</span>
    </div>
  );
}

export function CtaBand({
  title = "Specify your next production line.",
  text = "Send your product specification and target output — receive an engineered proposal, not a brochure.",
}) {
  return (
    <section className="cta-band">
      <div className="grid-bg" aria-hidden="true" />
      <div className="wrap inner">
        <div>
          <h2 className="h2">{title}</h2>
          <p className="lead" style={{ marginTop: "0.8rem" }}>{text}</p>
        </div>
        <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap" }}>
          <Link href="/request-quote" className="btn solid">Request a quote</Link>
          <Link href="/contact" className="btn ghost-light">Talk to engineering</Link>
        </div>
      </div>
    </section>
  );
}

export function MachineCard({ m }) {
  return (
    <Link href={`/machines/${m.slug}`} className="card">
      <span className="code">{m.sheet} · {m.code}</span>
      <span className="h3">{m.name}</span>
      <p>{m.short}</p>
      <span className="more">View specification →</span>
    </Link>
  );
}

/* ---------- Authentic media (Part 5) ---------- */
/* Sizing is driven by an honest quality tier per asset (set in
   lib/assets.js): "high" gets shown large, "medium"/"low" stay
   compact rather than being blown up past what looks good. */
export function MediaHero({ img }) {
  if (!img) return null;
  const tier = img.quality || "medium";
  return (
    <figure className={`media-hero size-${tier}`}>
      <img
        src={img.src}
        alt={img.alt}
        loading="eager"
        fetchPriority="high"
      />
      {img.caption && <figcaption className="mono">{img.caption}</figcaption>}
    </figure>
  );
}

export function MachineVideo({ video }) {
  if (!video) return null;
  const tier = video.quality || "medium";
  return (
    <figure className={`media-video size-${tier}`}>
      <video controls preload="metadata" playsInline>
        <source src={video.src} />
        Your browser does not support embedded video.
      </video>
      {video.caption && <figcaption className="mono">{video.caption}</figcaption>}
    </figure>
  );
}

export function Gallery({ images, label }) {
  if (!images || images.length === 0) return null;
  return (
    <div>
      {label && <p className="eyebrow"><span className="sht">GALLERY</span>{label}</p>}
      <div className="gallery">
        {images.map((g) => (
          <figure key={g.src} className={`quality-${g.quality || "medium"}`}>
            <img src={g.src} alt={g.alt} loading="lazy" />
            <figcaption className="mono">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
