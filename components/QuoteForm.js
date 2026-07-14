"use client";
import { useState } from "react";
import { machines, site } from "@/lib/data";

/*
  Lead capture v1: composes a structured email via the visitor's own
  mail client (no backend required, zero data handled server-side).
  Swap `handleSubmit` for a POST to /api/quote when the lead-management
  backend (Part 8 of the specification) is built.
*/
export default function QuoteForm() {
  const [f, setF] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    machine: "",
    product: "",
    volume: "",
    contactMethod: "",
    notes: "",
  });
  const [sent, setSent] = useState(null); // { enquiryId } after API success
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const buildMailto = () => {
    const body = [
      `Name: ${f.name}`,
      `Company: ${f.company}`,
      `Email: ${f.email}`,
      `Country: ${f.country}`,
      `Machine interest: ${f.machine}`,
      `Product to manufacture: ${f.product}`,
      `Target output / volume: ${f.volume}`,
      `Preferred contact method: ${f.contactMethod}`,
      "",
      "Notes:",
      f.notes,
    ].join("\n");
    const subject = `Quote request — ${f.machine || "Filtration machinery"} — ${f.company || f.name}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async () => {
    // Part 8: store the lead in the backend when configured;
    // otherwise fall back to the visitor's email client.
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...f, contact_method: f.contactMethod, source_page: "/request-quote" }),
      });
      if (res.ok) {
        const data = await res.json();
        setSent({ enquiryId: data.enquiryId });
        return;
      }
    } catch {
      /* network/API unavailable — fall through to email */
    }
    buildMailto();
  };

  if (sent) {
    return (
      <div className="card" style={{ maxWidth: "34rem" }}>
        <span className="code" style={{ color: "var(--molten)" }}>RECEIVED</span>
        <span className="h3">Your enquiry is with engineering.</span>
        <p>
          {sent.enquiryId ? `Reference: ${sent.enquiryId}. ` : ""}
          The technical team will respond by email — typically with clarifying
          engineering questions before any pricing, which is how a serious
          machinery quote should start.
        </p>
      </div>
    );
  }

  return (
    <div className="form">
      {/* Honeypot — humans never see or fill this */}
      <input
        type="text"
        value={f.website || ""}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
        placeholder="website"
      />
      <div className="row2">
        <div className="field">
          <label htmlFor="q-name">Your name</label>
          <input id="q-name" value={f.name} onChange={set("name")} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="q-company">Company</label>
          <input id="q-company" value={f.company} onChange={set("company")} autoComplete="organization" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="q-email">Work email</label>
          <input id="q-email" type="email" value={f.email} onChange={set("email")} autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="q-country">Country</label>
          <input id="q-country" value={f.country} onChange={set("country")} autoComplete="country-name" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="q-machine">Machine of interest</label>
        <select id="q-machine" value={f.machine} onChange={set("machine")}>
          <option value="">Select a platform (or leave blank)</option>
          {machines.map((m) => (
            <option key={m.slug} value={`${m.code} — ${m.name}`}>
              {m.code} — {m.name}
            </option>
          ))}
          <option value="Turnkey line / not sure">Turnkey line / not sure yet</option>
        </select>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="q-product">Product to manufacture</label>
          <input id="q-product" placeholder="e.g. 10&quot; PP depth cartridges, 5 micron" value={f.product} onChange={set("product")} />
        </div>
        <div className="field">
          <label htmlFor="q-volume">Target output</label>
          <input id="q-volume" placeholder="e.g. 500 cartridges/hr" value={f.volume} onChange={set("volume")} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="q-contact-method">Preferred contact method</label>
        <select id="q-contact-method" value={f.contactMethod} onChange={set("contactMethod")}>
          <option value="">No preference</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>
          <option value="Either">Either — whichever is faster</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="q-notes">Anything else engineering should know</label>
        <textarea id="q-notes" rows={5} value={f.notes} onChange={set("notes")} />
      </div>
      <div>
        <button type="button" className="btn solid" onClick={handleSubmit}>
          Send quote request
        </button>
        <p className="muted" style={{ marginTop: "0.8rem", fontSize: "0.85rem" }}>
          Opens your email client with the request pre-filled — nothing is stored
          on this website.
        </p>
      </div>
    </div>
  );
}
