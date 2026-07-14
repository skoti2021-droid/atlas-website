"use client";
import { useState } from "react";

const STATUSES = ["new", "contacted", "quoted", "won", "lost"];

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [leads, setLeads] = useState(null);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const load = async () => {
    setBusy(true);
    setErr("");
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { authorization: `Bearer ${key}` },
      });
      if (res.status === 401) throw new Error("Wrong admin key.");
      if (res.status === 503) throw new Error("Backend not configured yet — see supabase/PART8-SETUP.md in the repo.");
      if (!res.ok) throw new Error("Could not load leads.");
      setLeads(await res.json());
    } catch (e) {
      setErr(e.message);
    } finally {
      setBusy(false);
    }
  };

  const update = async (id, patch) => {
    await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({ id, ...patch }),
    });
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  const exportCsv = () => {
    const cols = ["enquiry_id", "created_at", "status", "name", "company", "email", "phone", "country", "machine", "product", "volume", "notes", "internal_notes"];
    const csv = [cols.join(","), ...leads.map((l) => cols.map((c) => `"${String(l[c] ?? "").replace(/"/g, '""')}"`).join(","))].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  const counts = leads
    ? STATUSES.reduce((acc, s) => ({ ...acc, [s]: leads.filter((l) => l.status === s).length }), {})
    : {};

  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow"><span className="sht">ADMIN</span>Lead management</p>
        <h1 className="h2">Enquiries &amp; quotes</h1>

        {!leads && (
          <div className="form" style={{ marginTop: "2rem", maxWidth: "28rem" }}>
            <div className="field">
              <label htmlFor="adm-key">Admin key</label>
              <input
                id="adm-key"
                type="password"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && load()}
              />
            </div>
            <button className="btn solid" onClick={load} disabled={busy || !key}>
              {busy ? "Loading…" : "Open dashboard"}
            </button>
            {err && <p className="mono" style={{ color: "var(--molten-deep)", fontSize: "0.85rem" }}>{err}</p>}
          </div>
        )}

        {leads && (
          <>
            <div className="chip-row" style={{ margin: "1.5rem 0" }}>
              <span className="chip">Total: {leads.length}</span>
              {STATUSES.map((s) => (
                <span className="chip" key={s}>{s}: {counts[s] || 0}</span>
              ))}
              <button className="btn" style={{ padding: "0.4rem 0.8rem" }} onClick={exportCsv}>Export CSV</button>
            </div>

            {leads.length === 0 && (
              <p className="muted">No enquiries yet. Submissions from the quote form will appear here.</p>
            )}

            <div style={{ display: "grid", gap: "1rem" }}>
              {leads.map((l) => (
                <div className="card" key={l.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span className="code">{l.enquiry_id} · {new Date(l.created_at).toLocaleString()}</span>
                    <select
                      value={l.status}
                      onChange={(e) => update(l.id, { status: e.target.value })}
                      className="mono"
                      style={{ border: "1px solid var(--line)", padding: "0.2rem 0.5rem" }}
                    >
                      {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <span className="h3">{l.name} {l.company ? `— ${l.company}` : ""}</span>
                  <p className="mono" style={{ fontSize: "0.8rem" }}>
                    {l.email}{l.phone ? ` · ${l.phone}` : ""}{l.country ? ` · ${l.country}` : ""}
                  </p>
                  {(l.machine || l.product || l.volume) && (
                    <p style={{ fontSize: "0.92rem" }}>
                      {l.machine && <>Machine: <strong>{l.machine}</strong><br /></>}
                      {l.product && <>Product: {l.product}<br /></>}
                      {l.volume && <>Volume: {l.volume}</>}
                    </p>
                  )}
                  {l.notes && <p style={{ fontSize: "0.9rem", color: "var(--steel)" }}>{l.notes}</p>}
                  <div className="field">
                    <label htmlFor={`n-${l.id}`}>Internal notes</label>
                    <textarea
                      id={`n-${l.id}`}
                      rows={2}
                      defaultValue={l.internal_notes || ""}
                      onBlur={(e) => update(l.id, { internal_notes: e.target.value })}
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
