import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RECIPIENT = "contact@prestige.sn";

const LIMITS = {
  name: 120,
  organization: 160,
  email: 200,
  phone: 40,
  subject: 200,
  message: 5000,
} as const;

type Field = keyof typeof LIMITS;

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

function getTransporter() {
  const user = process.env.OFFICE365_USER;
  const pass = process.env.OFFICE365_PASS;
  if (!user || !pass) return null;
  transporter ??= nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
  });
  return transporter;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const data = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const raw = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (raw.length > LIMITS[key]) {
      return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
    }
    data[key] = raw;
  }

  if (!data.name || !data.subject || !data.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[contact] OFFICE365_USER / OFFICE365_PASS are not set");
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Nom", data.name],
    ["Organisation", data.organization || "—"],
    ["Email", data.email],
    ["Téléphone", data.phone || "—"],
    ["Objet", data.subject],
  ];

  const text = [
    ...rows.map(([k, v]) => `${k} : ${v}`),
    "",
    "Message :",
    data.message,
    "",
    "— Envoyé depuis le formulaire de contact de prestige.sn",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#17161C;line-height:1.5">
      <p style="margin:0 0 16px;font-size:16px;color:#8B1E52"><strong>Nouveau message — formulaire de contact</strong></p>
      <table cellpadding="6" style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="color:#6b6870;padding-right:16px;vertical-align:top">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`
          )
          .join("")}
      </table>
      <div style="border-left:3px solid #E0A23A;padding:8px 14px;background:#FFF8E6;white-space:pre-wrap">${escapeHtml(data.message)}</div>
      <p style="margin-top:20px;font-size:12px;color:#8a8790">Envoyé depuis le formulaire de contact de prestige.sn — répondez directement à cet email pour écrire à l'expéditeur.</p>
    </div>`;

  try {
    await mailer.sendMail({
      from: { name: "Site PRESTIGE", address: process.env.OFFICE365_USER! },
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
