import Link from "next/link";
import { site, machines, industries, legalLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap top wide">
        <div>
          <div className="brand-line">PMI<span>×</span>SCM</div>
          <p style={{ marginTop: "0.9rem", maxWidth: "24rem", fontSize: "0.94rem" }}>
            {site.tagline} Machinery engineering by Southern Coastal Machinery;
            customer solutions by PMI America.
          </p>
          <p className="mono" style={{ marginTop: "1.1rem", fontSize: "0.8rem", lineHeight: 1.9 }}>
            {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal}, {site.address.country}
            <br />
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <h4>Machines</h4>
          <ul>
            {machines.map((m) => (
              <li key={m.slug}><Link href={`/machines/${m.slug}`}>{m.series}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Industries</h4>
          <ul>
            {industries.slice(0, 6).map((i) => (
              <li key={i.slug}><Link href={`/industries/${i.slug}`}>{i.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Solutions</h4>
          <ul>
            <li><Link href="/services">Complete Production Lines</Link></li>
            <li><Link href="/services">Machine Installation</Link></li>
            <li><Link href="/services">Operator Training</Link></li>
            <li><Link href="/services">Engineering Consulting</Link></li>
            <li><Link href="/services">After-Sales Support</Link></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/knowledge-hub">Knowledge Hub</Link></li>
            <li><Link href="/about">About &amp; History</Link></li>
            <li><Link href="/request-quote">Request a Quote</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} {site.legal}. All rights reserved.</span>
        <span style={{ display: "flex", gap: "1.1rem", flexWrap: "wrap" }}>
          {legalLinks.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </span>
        <span>{site.patent} · Engineered in Georgia, USA</span>
      </div>
    </footer>
  );
}
