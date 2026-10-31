"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import { DEFAULT_COUNTRY, getCountry, sortedCountries } from "@/data/countries";
import {
  contactSchema,
  fieldErrors,
  type ContactErrorCode,
  type ContactField,
  type ContactFieldErrors,
} from "@/lib/contactSchema";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const FIELDS: ContactField[] = ["name", "organization", "email", "country", "phone", "subject", "message", "website"];

function readForm(form: HTMLFormElement) {
  const fd = new FormData(form);
  return Object.fromEntries(FIELDS.map((k) => [k, String(fd.get(k) ?? "")]));
}

/**
 * Validated with the same zod schema as /api/contact: errors appear inline
 * on submit, and a field re-validates as it's corrected. The server
 * re-checks everything and returns per-field codes, which land in the same
 * place. A visually hidden "website" field acts as a honeypot for bots.
 */
export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<"formError" | "formRateLimited">("formError");
  const [errors, setErrors] = useState<ContactFieldErrors>({});

  const errorText = (field: ContactField) => {
    const code: ContactErrorCode | undefined = errors[field];
    return code ? t(`errors.${code}`) : undefined;
  };

  function revalidate(form: HTMLFormElement, field: ContactField) {
    if (!errors[field]) return;
    const result = contactSchema.safeParse(readForm(form));
    const next = result.success ? {} : fieldErrors(result.error);
    setErrors((prev) => ({ ...prev, [field]: next[field] }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const payload = readForm(form);

    const result = contactSchema.safeParse(payload);
    if (!result.success) {
      const errs = fieldErrors(result.error);
      setErrors(errs);
      setStatus("idle");
      const first = FIELDS.find((f) => errs[f]);
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      if (res.status === 400) {
        const body = (await res.json().catch(() => null)) as { fields?: ContactFieldErrors } | null;
        if (body?.fields && Object.keys(body.fields).length) {
          setErrors(body.fields);
          setStatus("idle");
          return;
        }
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
    <form
      onSubmit={handleSubmit}
      onChange={(e) => {
        const name = (e.target as HTMLInputElement).name as ContactField;
        if (name) revalidate(e.currentTarget, name);
      }}
      noValidate
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label={t("formName")} required autoComplete="name" maxLength={120} error={errorText("name")} />
        <Field
          id="organization"
          label={t("formOrganization")}
          autoComplete="organization"
          maxLength={160}
          error={errorText("organization")}
        />
        <Field
          id="email"
          label={t("formEmail")}
          type="email"
          required
          autoComplete="email"
          maxLength={200}
          error={errorText("email")}
        />
        <PhoneField label={t("formPhone")} countryLabel={t("formCountry")} error={errorText("phone")} />
      </div>
      <Field id="subject" label={t("formSubject")} required maxLength={200} error={errorText("subject")} />
      <div>
        <FieldLabel htmlFor="message" label={t("formMessage")} required />
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          aria-invalid={!!errors.message || undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputBox(!!errors.message), "mt-2 w-full px-4 py-3")}
        />
        <FieldError id="message-error" text={errorText("message")} />
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

function inputBox(invalid: boolean) {
  return cn(
    "border bg-white text-sm text-ink transition-colors focus-visible:outline-none",
    invalid ? "border-plum focus-visible:border-plum" : "border-ink/15 focus-visible:border-ink/40"
  );
}

function FieldLabel({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50">
      {label}
      {required && (
        <span aria-hidden="true" className="ml-1 text-plum">
          *
        </span>
      )}
    </label>
  );
}

function FieldError({ id, text }: { id: string; text?: string }) {
  if (!text) return null;
  return (
    <p id={id} className="mt-1.5 text-xs text-plum">
      {text}
    </p>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  autoComplete,
  maxLength,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
  error?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id} label={label} required={required} />
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={maxLength}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(inputBox(!!error), "mt-2 w-full px-4 py-2.5")}
      />
      <FieldError id={`${id}-error`} text={error} />
    </div>
  );
}

/**
 * Country + phone as one control: a native <select> of dial codes (so it's
 * keyboard/screen-reader friendly and opens the OS picker on phones),
 * showing just the code when closed, joined to the number input. The
 * countries PRESTIGE operates in are listed first; Sénégal is the default.
 */
function PhoneField({ label, countryLabel, error }: { label: string; countryLabel: string; error?: string }) {
  const locale = useLocale() as "fr" | "en";
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const { priority, rest } = sortedCountries(locale);
  const selected = getCountry(country);

  return (
    <div>
      <FieldLabel htmlFor="phone" label={label} />
      <div
        className={cn(
          "mt-2 flex border bg-white transition-colors",
          error ? "border-plum" : "border-ink/15 focus-within:border-ink/40"
        )}
      >
        <div className="relative flex shrink-0 items-center border-r border-ink/15">
          <span aria-hidden="true" className="pointer-events-none flex items-center gap-1.5 pl-3.5 pr-2.5 text-sm text-ink">
            <span className="text-[10px] font-medium tracking-wide text-ink/45">{selected?.code}</span>
            {selected?.dial}
            <ChevronDown className="h-3.5 w-3.5 text-ink/45" />
          </span>
          <select
            id="country"
            name="country"
            aria-label={countryLabel}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            autoComplete="country"
            className="absolute inset-0 h-full w-full cursor-pointer appearance-none opacity-0"
          >
            <optgroup label={locale === "fr" ? "Pays d'intervention" : "Countries we operate in"}>
              {priority.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name[locale]} ({c.dial})
                </option>
              ))}
            </optgroup>
            <optgroup label={locale === "fr" ? "Autres pays" : "Other countries"}>
              {rest.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name[locale]} ({c.dial})
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          maxLength={30}
          aria-invalid={!!error || undefined}
          aria-describedby={error ? "phone-error" : undefined}
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-ink focus-visible:outline-none"
        />
      </div>
      <FieldError id="phone-error" text={error} />
    </div>
  );
}
