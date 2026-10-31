"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Posts to /api/contact, which emails the request to contact@prestige.sn
 * (Reply-To set to the visitor). A visually hidden "website" field acts as
 * a honeypot for bots.
 */
export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<"formError" | "formRateLimited">("formError");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(
      ["name", "organization", "email", "phone", "subject", "message", "website"].map((k) => [k, String(form.get(k) ?? "")])
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      setErrorKey(res.status === 429 ? "formRateLimited" : "formError");
      setStatus("error");
    } catch {
      setErrorKey("formError");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-l-2 border-gold bg-butter p-8 text-sm leading-relaxed text-ink/80">
        {t("formSuccess")}
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={t("formName")} required autoComplete="name" />
        <Field id="organization" label={t("formOrganization")} autoComplete="organization" />
        <Field id="email" label={t("formEmail")} type="email" required autoComplete="email" />
        <Field id="phone" label={t("formPhone")} type="tel" autoComplete="tel" />
      </div>
      <Field id="subject" label={t("formSubject")} required />
      <div>
        <label htmlFor="message" className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          className="mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-sm text-ink transition-colors focus-visible:border-ink/40 focus-visible:outline-none"
        />
      </div>

      {/* Honeypot — hidden from people and assistive tech, tempting to bots */}
      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-plum bg-plum/5 px-4 py-3 text-sm text-plum">
          {t(errorKey)}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className={cn(
          "group inline-flex items-center gap-2.5 bg-plum px-7 py-4 text-[12px] font-medium uppercase tracking-caps text-white",
          "transition-[background-color,transform,opacity] duration-200 ease-out hover:bg-plum-deep active:scale-[0.97]",
          sending && "cursor-wait opacity-80"
        )}
      >
        {sending ? t("formSending") : t("formSubmit")}
        {sending ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        )}
      </button>
      <p className="max-w-md text-xs leading-relaxed text-ink/45">{t("formNote")}</p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={type === "email" ? 200 : 200}
        className="mt-2 w-full border border-ink/15 bg-white px-4 py-2.5 text-sm text-ink transition-colors focus-visible:border-ink/40 focus-visible:outline-none"
      />
    </div>
  );
}
