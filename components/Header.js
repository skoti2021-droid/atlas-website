"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { machines, solutions, industries, engineeringCapabilities, services } from "@/lib/data";
import { machineMedia } from "@/lib/assets";
import Search from "@/components/Search";

function truncate(s, n) {
  if (!s) return "";
  return s.length > n ? s.slice(0, n).trimEnd() + "…" : s;
}

const resourceLinks = [
  { href: "/knowledge-hub", label: "Engineering Knowledge Hub", note: "Original technical articles" },
  { href: "/knowledge-hub", label: "News & Case Studies", note: "Installations & references" },
  { href: "/request-quote", label: "Downloads & Brochures", note: "Request via quote form" },
];

const aboutLinks = [
  { href: "/about", label: "About & History", note: "PMI 2007 · SCM 2016 · Georgia, USA" },
  { href: "/about", label: "Patents & Innovation", note: "US Patent No. 9,981,211" },
  { href: "/contact", label: "Global Support", note: "Worldwide installations" },
];

function MegaCol({ title, items, cta, onNavigate }) {
  return (
    <div className="mega-list-wrap">
      <h5>{title}</h5>
      <div className="mega-list">
        {items.map((it) => (
          <Link key={it.href + it.label} href={it.href} className={it.thumb ? "has-thumb" : ""} onClick={onNavigate}>
            {it.thumb && <img src={it.thumb} alt="" aria-hidden="true" />}
            <span>
              {it.label}
              {it.note && <small>{it.note}</small>}
              {cta && <em>{cta} →</em>}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const path = usePathname();
  const navRef = useRef(null);

  // Close any open dropdown whenever the route changes — fixes the
  // dropdown staying visually open after clicking a link inside it.
  useEffect(() => {
    setOpenItem(null);
    setOpen(false);
  }, [path]);

  // Close on click outside the nav (standard expected behavior).
  useEffect(() => {
    if (openItem === null) return;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenItem(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [openItem]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenItem(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const machineLinks = machines.map((m) => ({
    href: `/machines/${m.slug}`,
    label: m.name,
    note: truncate(m.short, 70),
    thumb: machineMedia(m.code)?.hero?.src,
  }));
  const solutionLinks = solutions.slice(0, 4).map((s) => ({ href: "/solutions", label: s.name, note: truncate(s.text, 60) }));
  const industryLinks = industries.slice(0, 6).map((i) => ({ href: `/industries/${i.slug}`, label: i.name, note: truncate(i.text, 65) }));
  const engineeringLinks = engineeringCapabilities.slice(0, 4).map((e) => ({ href: "/engineering", label: e.name, note: truncate(e.text, 60) }));
  const serviceLinks = services.map((s) => ({ href: `/services/${s.slug}`, label: s.name, note: truncate(s.text, 65) }));

  const toggleItem = (key) => setOpenItem(openItem === key ? null : key);

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="logo" aria-label="PMI America and Southern Coastal Machinery — home">
          <span className="mark">PMI<span>×</span>SCM</span>
          <span className="sub">Filtration Machinery · USA</span>
        </Link>
        <nav ref={navRef} className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          <div className={`nav-item ${openItem === "solutions" ? "open" : ""}`}>
            <a href="/solutions" onClick={(e) => { e.preventDefault(); toggleItem("solutions"); }} className={path === "/solutions" ? "active" : ""}>Solutions</a>
            <div className="mega">
              <MegaCol title="Solutions" items={solutionLinks} cta="View solution" onNavigate={() => setOpenItem(null)} />
              <div className="mega-feat">
                <Link href="/machines/ccfw-continuous-cartridge-filter-winders" className="card" onClick={() => setOpenItem(null)}>
                  <span className="code">FEATURED</span>
                  <span className="h3">CCFW 40</span>
                  <p>Up to 1,200 cartridges/hr — the fastest continuous winder in the world.</p>
                </Link>
              </div>
            </div>
          </div>

          <div className={`nav-item ${openItem === "machines" ? "open" : ""}`}>
            <a href="/machines" onClick={(e) => { e.preventDefault(); toggleItem("machines"); }} className={path?.startsWith("/machines") ? "active" : ""}>Machines</a>
            <div className="mega">
              <MegaCol title="Machine Portfolio" items={machineLinks} cta="View machine" onNavigate={() => setOpenItem(null)} />
              <div className="mega-feat">
                <Link href="/machines/climb-carbon-infused-meltblown-machines" className="card" onClick={() => setOpenItem(null)}>
                  <span className="code">SHT 03 · PATENTED</span>
                  <span className="h3">CLIMB™ Technology</span>
                  <p>Carbon infused into fiber — 80g doing the work of 900g.</p>
                </Link>
              </div>
            </div>
          </div>

          <div className={`nav-item ${openItem === "industries" ? "open" : ""}`}>
            <a href="/industries" onClick={(e) => { e.preventDefault(); toggleItem("industries"); }} className={path?.startsWith("/industries") ? "active" : ""}>Industries</a>
            <div className="mega">
              <MegaCol title="Industries Served" items={industryLinks} cta="View industry" onNavigate={() => setOpenItem(null)} />
              <div className="mega-feat">
                <Link href="/industries" className="card" onClick={() => setOpenItem(null)}>
                  <span className="code">APP 01–08</span>
                  <span className="h3">All industries</span>
                  <p>Water, food &amp; beverage, pharma, petrochemical, air, PPE, energy, absorbents.</p>
                </Link>
              </div>
            </div>
          </div>

          <div className={`nav-item ${openItem === "engineering" ? "open" : ""}`}>
            <a href="/engineering" onClick={(e) => { e.preventDefault(); toggleItem("engineering"); }} className={path === "/engineering" ? "active" : ""}>Engineering</a>
            <div className="mega">
              <MegaCol title="Engineering Services" items={serviceLinks} cta="View service" onNavigate={() => setOpenItem(null)} />
              <div className="mega-feat">
                <Link href="/about" className="card" onClick={() => setOpenItem(null)}>
                  <span className="code">1992 → TODAY</span>
                  <span className="h3">30 years of process engineering</span>
                  <p>Founder-operated a meltblown plant before building the machines.</p>
                </Link>
              </div>
            </div>
          </div>

          <div className={`nav-item ${openItem === "resources" ? "open" : ""}`}>
            <a href="/knowledge-hub" onClick={(e) => { e.preventDefault(); toggleItem("resources"); }} className={path?.startsWith("/knowledge-hub") ? "active" : ""}>Resources</a>
            <div className="mega">
              <MegaCol title="Resources" items={resourceLinks} onNavigate={() => setOpenItem(null)} />
              <MegaCol title="Company" items={aboutLinks} onNavigate={() => setOpenItem(null)} />
            </div>
          </div>

          <Link href="/gallery" className={path === "/gallery" ? "active" : ""} onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/about" className={path === "/about" ? "active" : ""} onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className={path === "/contact" ? "active" : ""} onClick={() => setOpen(false)}>Contact</Link>
          <Search />
          <Link href="/request-quote" className="btn solid" onClick={() => setOpen(false)}>Request a quote</Link>
        </nav>
        <button className="menu-toggle" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* mobile sticky CTA per Part 2 spec */}
      <div className="mobile-cta">
        <a href="tel:+14043163622">Call</a>
        <a href="/request-quote" className="solid">Request quote</a>
      </div>
    </header>
  );
}
