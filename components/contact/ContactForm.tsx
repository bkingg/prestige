"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const form = new FormData(e.currentTarget);
      const entry = {
        name: form.get("name"),
        organization: form.get("organization"),
        email: form.get("email"),
        phone: form.get("phone"),
        subject: form.get("subject"),
        message: form.get("message"),
        date: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem("prestige-contact-requests") || "[]");
      localStorage.setItem("prestige-contact-requests", JSON.stringify([...existing, entry]));
    } catch {
      // localStorage unavailable — still show confirmation
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-white p-8 text-sm leading-relaxed text-charcoal/75">
        {t("formSuccess")}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={t("formName")} required />
        <Field id="organization" label={t("formOrganization")} />
        <Field id="email" label={t("formEmail")} type="email" required />
        <Field id="phone" label={t("formPhone")} type="tel" />
      </div>
      <Field id="subject" label={t("formSubject")} required />
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-charcoal/45">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-burgundy px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-cream transition-colors duration-300 hover:bg-burgundy-deep"
      >
        {t("formSubmit")}
        <Send className="h-4 w-4" />
      </button>
      <p className="max-w-md text-xs leading-relaxed text-charcoal/45">{t("formNote")}</p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest2 text-charcoal/45">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      />
    </div>
  );
}
