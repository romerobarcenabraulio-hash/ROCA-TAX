import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.117.2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

function generic() {
  return new Response(
    JSON.stringify({ ok: true, message: "If this email is authorized, a sign-in link will be sent." }),
    { status: 200, headers: cors },
  );
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method not allowed" }), { status: 405, headers: cors });
  }

  const origin = req.headers.get("origin");
  let body: { email?: string; redirectTo?: string } = {};
  try { body = await req.json(); } catch { return generic(); }

  const email = String(body.email || "").trim().toLowerCase();
  const redirectTo = String(body.redirectTo || "").trim();
  if (!email || !redirectTo || !origin) return generic();

  let redirect: URL;
  try { redirect = new URL(redirectTo); } catch { return generic(); }
  if (redirect.origin !== origin) return generic();

  const url = Deno.env.get("SUPABASE_URL");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !anonKey || !serviceKey) {
    return new Response(JSON.stringify({ error: "auth runtime unavailable" }), { status: 500, headers: cors });
  }

  const admin = createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: allowed, error: allowError } = await admin
    .from("roca_manual_auth_allowlist")
    .select("email,role,active")
    .eq("email", email)
    .eq("active", true)
    .maybeSingle();

  if (allowError || !allowed) return generic();

  const publicClient = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { error } = await publicClient.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: true, emailRedirectTo: redirectTo },
  });

  if (error) {
    return new Response(JSON.stringify({ error: "sign-in link could not be sent" }), { status: 400, headers: cors });
  }
  return generic();
});
