import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getCountry } from "@/data/countries";
import { contactSchema, fieldErrors } from "@/lib/contactSchema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENT = "contact@prestige.sn";

// Best-effort, per-instance rate limit: enough to blunt a single client
// hammering the form, without adding a datastore. 5 sends / 10 min / IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

// Strip CR/LF so nothing a visitor types can inject extra mail headers.
function oneLine(s: string) {
  return s.replace(/[\r\n]+/g, " ").trim();
}

let transporter: nodemailer.Transporter | null = null;

// Spacemail (Spaceship) by default: SSL on 465. Any SMTP provider works by
// overriding SMTP_HOST / SMTP_PORT; port 587 switches to STARTTLS.
// OFFICE365_* are read as a fallback for existing deployments.
function smtpConfig() {
  const user = process.env.SMTP_USER || process.env.OFFICE365_USER;
  const pass = process.env.SMTP_PASS || process.env.OFFICE365_PASS;
  const host = process.env.SMTP_HOST || "mail.spacemail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  return user && pass ? { user, pass, host, port } : null;
}

function getTransporter() {
  const cfg = smtpConfig();
  if (!cfg) return null;
  transporter ??= nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.port === 465,
    requireTLS: cfg.port !== 465,
    auth: { user: cfg.user, pass: cfg.pass },
  });
  return transporter;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (parsed.success ? parsed.data.website : (body as { website?: unknown } | null)?.website) {
    return NextResponse.json({ ok: true });
  }

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid", fields: fieldErrors(parsed.error) }, { status: 400 });
  }

  const data = parsed.data;
  const country = getCountry(data.country)!;
  // A number typed with its own "+" prefix is kept as-is; otherwise prefix the
  // selected dial code, dropping a national trunk "0" (e.g. FR 06… → +33 6…).
  const phone = !data.phone
    ? ""
    : data.phone.startsWith("+")
      ? data.phone
      : `${country.dial} ${data.phone.replace(/^0+/, "")}`;

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[contact] SMTP_USER / SMTP_PASS are not set");
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Nom", data.name],
    ["Organisation", data.organization || "Non renseignée"],
    ["Email", data.email],
    ["Pays", country.name.fr],
    ["Téléphone", phone || "Non renseigné"],
    ["Objet", data.subject],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k} : ${v}`),
    "",
    "Message :",
    data.message,
    "",
    "Envoyé depuis le formulaire de contact de prestige.sn",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#17161C;line-height:1.5">
      <p style="margin:0 0 16px;font-size:16px;color:#8B1E52"><strong>Nouveau message via le formulaire de contact</strong></p>
      <table cellpadding="6" style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#6b6870;padding-right:16px;vertical-align:top">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`
          )
          .join("")}
      </table>
      <div style="border-left:3px solid #E0A23A;padding:8px 14px;background:#FFF8E6;white-space:pre-wrap">${escapeHtml(data.message)}</div>
      <p style="margin-top:20px;font-size:12px;color:#8a8790">Envoyé depuis le formulaire de contact de prestige.sn. Répondez directement à cet email pour écrire à l'expéditeur.</p>
    </div>`;

  try {
    await mailer.sendMail({
      from: { name: "Site PRESTIGE", address: smtpConfig()!.user },
      to: RECIPIENT,
      replyTo: { name: oneLine(data.name), address: oneLine(data.email) },
      subject: `[Site web] ${oneLine(data.subject)}`,
      text,
      html,
    });
  } catch (err) {
    console.error("[contact] send failed:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
