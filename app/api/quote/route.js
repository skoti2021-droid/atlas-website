// POST /api/quote — stores a lead in Supabase (Part 8).
// Requires env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
// Without them it returns 503 and the form falls back to email.

// Part 9: simple per-instance rate limiter (serverless note: resets
// per cold start — adequate spam friction; move to Upstash/KV for
// hard guarantees at scale).
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 60_000;
  const arr = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 5;
}

export async function POST(req) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, reason: "rate-limited" }, { status: 429 });
  }
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return Response.json({ ok: false, reason: "not-configured" }, { status: 503 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, reason: "bad-json" }, { status: 400 });
  }

  const { name, email } = body || {};
  if (body?.website) {
    // Honeypot field filled — bot. Pretend success, store nothing.
    return Response.json({ ok: true, enquiryId: null });
  }
  if (!name || !email || !/.+@.+\..+/.test(email)) {
    return Response.json({ ok: false, reason: "missing-fields" }, { status: 400 });
  }

  const allowed = [
    "name", "company", "email", "phone", "country", "industry",
    "machine", "product", "volume", "notes", "contact_method", "source_page",
  ];
  const row = {};
  for (const k of allowed) if (body[k]) row[k] = String(body[k]).slice(0, 2000);

  const res = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      authorization: `Bearer ${key}`,
      "content-type": "application/json",
      prefer: "return=representation",
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Supabase insert failed:", err);
    return Response.json({ ok: false, reason: "store-failed" }, { status: 502 });
  }
  const [saved] = await res.json();
  return Response.json({ ok: true, enquiryId: saved?.enquiry_id || null });
}
