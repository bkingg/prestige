import { z } from "zod";
import { countries, DEFAULT_COUNTRY } from "@/data/countries";

/**
 * Single source of truth for the contact form, used by the form (inline
 * errors before submitting) and by /api/contact (authoritative check
 * before anything is emailed). Error messages are codes, not prose, so
 * each side can localise them: the form maps them to `contact.errors.*`.
 */
export const CONTACT_ERRORS = ["required", "invalid_email", "invalid_phone", "too_short", "too_long"] as const;
export type ContactErrorCode = (typeof CONTACT_ERRORS)[number];

const countryCodes = countries.map((c) => c.code) as [string, ...string[]];

const text = (max: number) => z.string().trim().max(max, "too_long");
const required = (max: number) => text(max).min(1, "required");

export const contactSchema = z.object({
  name: required(120),
  organization: text(160).optional().default(""),
  email: required(200).email("invalid_email"),
  country: z.enum(countryCodes).catch(DEFAULT_COUNTRY),
  phone: text(30)
    .optional()
    .default("")
    .refine((v) => v === "" || (/^[+\d\s().-]+$/.test(v) && v.replace(/\D/g, "").length >= 6), "invalid_phone"),
  subject: required(200),
  message: required(5000).min(10, "too_short"),
  /** Honeypot: hidden from people; anything here means a bot. */
  website: z.string().optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;
export type ContactField = keyof ContactData;
export type ContactFieldErrors = Partial<Record<ContactField, ContactErrorCode>>;

/** Flattens a failed parse into one error code per field (the first one). */
export function fieldErrors(error: z.ZodError): ContactFieldErrors {
  const out: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as ContactField | undefined;
    if (!field || out[field]) continue;
    const code = (CONTACT_ERRORS as readonly string[]).includes(issue.message)
      ? (issue.message as ContactErrorCode)
      : "required";
    out[field] = code;
  }
  return out;
}
