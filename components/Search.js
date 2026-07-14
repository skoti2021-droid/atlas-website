"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [index, setIndex] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const inputRef = useRef(null);

  const load = useCallback(async () => {
    if (loaded) return;
    try {
      const res = await fetch("/search-index.json");
      const data = await res.json();
      setIndex(data);
      setLoaded(true);
    } catch {
      /* index unavailable — search silently does nothing */
    }
  }, [loaded]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
        load();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [load]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const openSearch = () => {
    setOpen(true);
    load();
  };

  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const results =
    terms.length === 0
      ? []
      : index
          .map((item) => {
            const hay = `${item.title} ${item.type} ${item.text}`.toLowerCase();
            let score = 0;
            for (const t of terms) {
              if (item.title.toLowerCase().includes(t)) score += 5;
              if (hay.includes(t)) score += 1;
            }
            return { ...item, score };
          })
          .filter((r) => r.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 8);

  return (
    <>
      <button className="search-trigger" onClick={openSearch} aria-label="Search the site">
        <span className="s-ico" aria-hidden="true">⌕</span>
        <span className="s-label">Search</span>
        <kbd>⌘K</kbd>
      </button>

      {open && (
        <div className="search-overlay" onClick={() => setOpen(false)} role="dialog" aria-modal="true" aria-label="Site search">
          <div className="search-panel" onClick={(e) => e.stopPropagation()}>
            <input
              ref={inputRef}
              className="search-input"
              type="text"
              placeholder="Search machines, industries, articles…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              aria-label="Search query"
            />
            <div className="search-results">
              {q && results.length === 0 && loaded && (
                <p className="search-empty mono">No matches for “{q}”.</p>
              )}
              {results.map((r) => (
                <Link key={r.url + r.title} href={r.url} className="search-hit" onClick={() => setOpen(false)}>
                  <span className="hit-type mono">{r.type}</span>
                  <span className="hit-title">{r.title}</span>
                </Link>
              ))}
              {!q && <p className="search-hint mono">Type to search — machines, industries, services, articles.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
