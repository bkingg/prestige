export interface Country {
  /** ISO 3166-1 alpha-2 */
  code: string;
  dial: string;
  name: { fr: string; en: string };
}

/** The 11 countries PRESTIGE operates in, listed first in the selector. */
export const PRIORITY_COUNTRY_CODES = ["SN", "MR", "ML", "NE", "GN", "GW", "GM", "BF", "TG", "BJ", "MA"];

export const DEFAULT_COUNTRY = "SN";

export const countries: Country[] = [
  { code: "SN", dial: "+221", name: { fr: "Sénégal", en: "Senegal" } },
  { code: "MR", dial: "+222", name: { fr: "Mauritanie", en: "Mauritania" } },
  { code: "ML", dial: "+223", name: { fr: "Mali", en: "Mali" } },
  { code: "NE", dial: "+227", name: { fr: "Niger", en: "Niger" } },
  { code: "GN", dial: "+224", name: { fr: "Guinée", en: "Guinea" } },
  { code: "GW", dial: "+245", name: { fr: "Guinée-Bissau", en: "Guinea-Bissau" } },
  { code: "GM", dial: "+220", name: { fr: "Gambie", en: "Gambia" } },
  { code: "BF", dial: "+226", name: { fr: "Burkina Faso", en: "Burkina Faso" } },
  { code: "TG", dial: "+228", name: { fr: "Togo", en: "Togo" } },
  { code: "BJ", dial: "+229", name: { fr: "Bénin", en: "Benin" } },
  { code: "MA", dial: "+212", name: { fr: "Maroc", en: "Morocco" } },
  { code: "ZA", dial: "+27", name: { fr: "Afrique du Sud", en: "South Africa" } },
  { code: "DZ", dial: "+213", name: { fr: "Algérie", en: "Algeria" } },
  { code: "DE", dial: "+49", name: { fr: "Allemagne", en: "Germany" } },
  { code: "AO", dial: "+244", name: { fr: "Angola", en: "Angola" } },
  { code: "SA", dial: "+966", name: { fr: "Arabie saoudite", en: "Saudi Arabia" } },
  { code: "BE", dial: "+32", name: { fr: "Belgique", en: "Belgium" } },
  { code: "BI", dial: "+257", name: { fr: "Burundi", en: "Burundi" } },
  { code: "CM", dial: "+237", name: { fr: "Cameroun", en: "Cameroon" } },
  { code: "CA", dial: "+1", name: { fr: "Canada", en: "Canada" } },
  { code: "CV", dial: "+238", name: { fr: "Cap-Vert", en: "Cape Verde" } },
  { code: "CF", dial: "+236", name: { fr: "Centrafrique", en: "Central African Republic" } },
  { code: "CN", dial: "+86", name: { fr: "Chine", en: "China" } },
  { code: "KM", dial: "+269", name: { fr: "Comores", en: "Comoros" } },
  { code: "CG", dial: "+242", name: { fr: "Congo", en: "Congo" } },
  { code: "CD", dial: "+243", name: { fr: "Congo (RDC)", en: "Congo (DRC)" } },
  { code: "CI", dial: "+225", name: { fr: "Côte d'Ivoire", en: "Côte d'Ivoire" } },
  { code: "DJ", dial: "+253", name: { fr: "Djibouti", en: "Djibouti" } },
  { code: "EG", dial: "+20", name: { fr: "Égypte", en: "Egypt" } },
  { code: "AE", dial: "+971", name: { fr: "Émirats arabes unis", en: "United Arab Emirates" } },
  { code: "ES", dial: "+34", name: { fr: "Espagne", en: "Spain" } },
  { code: "US", dial: "+1", name: { fr: "États-Unis", en: "United States" } },
  { code: "ET", dial: "+251", name: { fr: "Éthiopie", en: "Ethiopia" } },
  { code: "FR", dial: "+33", name: { fr: "France", en: "France" } },
  { code: "GA", dial: "+241", name: { fr: "Gabon", en: "Gabon" } },
  { code: "GH", dial: "+233", name: { fr: "Ghana", en: "Ghana" } },
  { code: "GQ", dial: "+240", name: { fr: "Guinée équatoriale", en: "Equatorial Guinea" } },
  { code: "IT", dial: "+39", name: { fr: "Italie", en: "Italy" } },
  { code: "JP", dial: "+81", name: { fr: "Japon", en: "Japan" } },
  { code: "KE", dial: "+254", name: { fr: "Kenya", en: "Kenya" } },
  { code: "LR", dial: "+231", name: { fr: "Liberia", en: "Liberia" } },
  { code: "LY", dial: "+218", name: { fr: "Libye", en: "Libya" } },
  { code: "LU", dial: "+352", name: { fr: "Luxembourg", en: "Luxembourg" } },
  { code: "MG", dial: "+261", name: { fr: "Madagascar", en: "Madagascar" } },
  { code: "MU", dial: "+230", name: { fr: "Maurice", en: "Mauritius" } },
  { code: "NG", dial: "+234", name: { fr: "Nigeria", en: "Nigeria" } },
  { code: "NL", dial: "+31", name: { fr: "Pays-Bas", en: "Netherlands" } },
  { code: "PT", dial: "+351", name: { fr: "Portugal", en: "Portugal" } },
  { code: "QA", dial: "+974", name: { fr: "Qatar", en: "Qatar" } },
  { code: "GB", dial: "+44", name: { fr: "Royaume-Uni", en: "United Kingdom" } },
  { code: "RW", dial: "+250", name: { fr: "Rwanda", en: "Rwanda" } },
  { code: "ST", dial: "+239", name: { fr: "Sao Tomé-et-Principe", en: "São Tomé and Príncipe" } },
  { code: "SL", dial: "+232", name: { fr: "Sierra Leone", en: "Sierra Leone" } },
  { code: "CH", dial: "+41", name: { fr: "Suisse", en: "Switzerland" } },
  { code: "TD", dial: "+235", name: { fr: "Tchad", en: "Chad" } },
  { code: "TN", dial: "+216", name: { fr: "Tunisie", en: "Tunisia" } },
  { code: "TR", dial: "+90", name: { fr: "Turquie", en: "Turkey" } },
];

export function getCountry(code: string) {
  return countries.find((c) => c.code === code);
}

/** Priority countries first (in the order above), then the rest A–Z in the given locale. */
export function sortedCountries(locale: "fr" | "en") {
  const priority = PRIORITY_COUNTRY_CODES.map((c) => getCountry(c)!);
  const rest = countries
    .filter((c) => !PRIORITY_COUNTRY_CODES.includes(c.code))
    .sort((a, b) => a.name[locale].localeCompare(b.name[locale], locale));
  return { priority, rest };
}
