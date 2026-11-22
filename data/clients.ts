/**
 * Client logos for the references pages. A project's `client` field is free
 * text that often names several bodies ("Senelec / PASE", "FAO / DAPSA"), so
 * each brand is matched by pattern and shown in the order it appears.
 *
 * To add a logo: drop the file in /public/images/clients and add one entry
 * here. Clients without a logo get a monogram badge instead.
 */

export interface ClientBrand {
  name: string;
  logo: string;
  match: RegExp;
}

export const clientBrands: ClientBrand[] = [
  { name: "Senelec", logo: "/images/clients/senelec.png", match: /Senelec/i },
  { name: "OMVS", logo: "/images/clients/omvs.jpg", match: /OMVS|Mise en Valeur du Fleuve Sénégal/i },
  { name: "Agence Française de Développement", logo: "/images/clients/afd.png", match: /Agence Française de Développement|\bAFD\b/ },
  { name: "Eiffage", logo: "/images/clients/eiffage.svg", match: /Eiffage/i },
  { name: "AGEROUTE Sénégal", logo: "/images/clients/ageroute.png", match: /AGEROUTE/i },
  { name: "CETUD", logo: "/images/clients/cetud.png", match: /CETUD|Conseil Exécutif des Transports urbains/i },
  { name: "Agence de Développement Municipal", logo: "/images/clients/adm.png", match: /Agence de Développement Municipal/i },
  { name: "PETROSEN", logo: "/images/clients/petrosen.png", match: /PETROSEN/ },
  { name: "Sonatel", logo: "/images/clients/sonatel.svg", match: /Sonatel/i },
  { name: "Banque Mondiale", logo: "/images/clients/banque-mondiale.svg", match: /Banque Mondiale/i },
  { name: "FAO", logo: "/images/clients/fao.svg", match: /\bFAO\b/ },
  { name: "PNUD", logo: "/images/clients/pnud.svg", match: /\bPNUD\b/ },
  { name: "JICA", logo: "/images/clients/jica.png", match: /JICA/ },
  { name: "GIZ", logo: "/images/clients/giz.svg", match: /\bGIZ\b/ },
  { name: "Catholic Relief Services", logo: "/images/clients/crs.png", match: /Catholic Relief Services/i },
  { name: "Gescod", logo: "/images/clients/gescod.png", match: /GESCOD/i },
];

export type ClientMark = { kind: "logo"; brand: ClientBrand } | { kind: "monogram"; text: string };

function brandFor(text: string) {
  return clientBrands.find((b) => b.match.test(text));
}

/**
 * Marks to show for a client string (max 3): the lead client always comes
 * first, as its logo or a monogram, followed by any other named body that
 * has a logo ("SOGENAV / OMVS" → [SOGENAV] + OMVS logo).
 */
export function getClientMarks(client: string): ClientMark[] {
  const segments = client.split(/\s+\/\s+/).map((s) => s.trim()).filter(Boolean);
  const marks: ClientMark[] = [];
  const used = new Set<ClientBrand>();

  const lead = brandFor(segments[0] ?? client);
  if (lead) {
    marks.push({ kind: "logo", brand: lead });
    used.add(lead);
  } else {
    marks.push({ kind: "monogram", text: clientMonogram(segments[0] ?? client) });
  }

  for (const b of clientBrands
    .map((b) => ({ b, at: client.search(b.match) }))
    .filter(({ b, at }) => at >= 0 && !used.has(b))
    .sort((x, y) => x.at - y.at)
    .map(({ b }) => b)) {
    marks.push({ kind: "logo", brand: b });
  }
  return marks.slice(0, 3);
}

const STOPWORDS = new Set(["de", "du", "des", "la", "le", "les", "et", "pour", "en", "au", "aux", "sur", "à", "d", "l", "œuvre", "mise"]);
const GENERIC_LEADS = new Set(["ONG", "SA", "SAU", "SARL"]);

/** Short badge text for a client without a logo, e.g. "COSEC", "DUA". */
export function clientMonogram(client: string): string {
  const acronym = client.match(/\(([A-ZÀ-Ý0-9][A-ZÀ-Ý0-9&\-]{1,9})\)/);
  if (acronym) return acronym[1];
  // Keep the body's own name: drop "(actuelle …)" notes and dash or comma tails.
  const name = client.replace(/\([^)]*\)/g, " ").split(/\s+[—–]\s+|,/)[0].trim();
  const words = name.split(/[\s'’\-]+/).filter((w) => /\p{L}/u.test(w));
  const lead = words.find((w) => !GENERIC_LEADS.has(w));
  if (lead && /^[A-ZÀ-Ý&]{2,10}$/.test(lead)) return lead;
  return words
    .filter((w) => !STOPWORDS.has(w.toLowerCase()) && !GENERIC_LEADS.has(w))
    .map((w) => w.match(/\p{L}/u)![0].toUpperCase())
    .join("")
    .slice(0, 4);
}
