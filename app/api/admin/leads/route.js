// GET /api/admin/leads — list leads; PATCH — update status/notes.
// Protected by ADMIN_KEY env var (Authorization: Bearer <key>).
// Requires SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.

function authFail(req) {
  const adminKey = process.env.ADMIN_KEY;
  if (!adminKey) return Response.json({ error: "admin-not-configured" }, { status: 503 });
  const header = req.headers.get("authorization") || "";
  if (header !== `Bearer ${adminKey}`) {
    return Response.json({ error: "unauthorized" }, { status: 401 });
  }
  return null;
}

function supa() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return { url, key };
}

export async function GET(req) {
  const fail = authFail(req);
  if (fail) return fail;
  const s = supa();
  if (!s) return Response.json({ error: "db-not-configured" }, { status: 503 });

  const res = await fetch(
    `${s.url}/rest/v1/leads?select=*&order=created_at.desc&limit=500`,
    { headers: { apikey: s.key, authorization: `Bearer ${s.key}` } }
  );
  if (!res.ok) return Response.json({ error: "query-failed" }, { status: 502 });
  return Response.json(await res.json());
}

export async function PATCH(req) {
  const fail = authFail(req);
  if (fail) return fail;
  const s = supa();
  if (!s) return Response.json({ error: "db-not-configured" }, { status: 503 });

  const { id, status, internal_notes } = await req.json();
  if (!id) return Response.json({ error: "missing-id" }, { status: 400 });
  const patch = {};
  if (status) patch.status = status;
  if (internal_notes !== undefined) patch.internal_notes = internal_notes;

  const res = await fetch(`${s.url}/rest/v1/leads?id=eq.${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: {
      apikey: s.key,
      authorization: `Bearer ${s.key}`,
      "content-type": "application/json",
      prefer: "return=representation",
    },
    body: JSON.stringify(patch),
  });
  if (!res.ok) return Response.json({ error: "update-failed" }, { status: 502 });
  return Response.json({ ok: true });
}
