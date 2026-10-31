import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoLockup } from "@/components/ui/Logo";
import { company } from "@/data/company";
import { expertiseAreas } from "@/data/expertise";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale() as "fr" | "en";
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-tan/50 bg-white text-charcoal/75">
      <div className="h-1 bg-gradient-to-r from-plum via-gold to-butter-deep" aria-hidden="true" />
      <div className="container-prestige grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <LogoLockup />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/60">{t("tagline")}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-plum">{t("navigation")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/" className="transition-colors duration-200 hover:text-ink">{nav("home")}</Link></li>
            <li><Link href="/le-cabinet" className="transition-colors duration-200 hover:text-ink">{nav("about")}</Link></li>
            <li><Link href="/expertises" className="transition-colors duration-200 hover:text-ink">{nav("expertise")}</Link></li>
            <li><Link href="/references" className="transition-colors duration-200 hover:text-ink">{nav("references")}</Link></li>
            <li><Link href="/equipe" className="transition-colors duration-200 hover:text-ink">{nav("team")}</Link></li>
            <li><Link href="/contact" className="transition-colors duration-200 hover:text-ink">{nav("contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-plum">{t("expertiseTitle")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {expertiseAreas.slice(0, 6).map((e) => (
              <li key={e.slug}>
                <Link href={`/expertises/${e.slug}`} className="transition-colors duration-200 hover:text-ink">
                  {e.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-plum">{t("contactTitle")}</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>{company.address[locale]}</p>
            {company.phones.slice(0, 2).map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="transition-colors duration-200 hover:text-ink">
                  {phone}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${company.emails[0]}`} className="transition-colors duration-200 hover:text-ink">
                {company.emails[0]}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-tan/40">
        <div className="container-prestige flex flex-col items-center justify-between gap-2 py-6 text-xs text-charcoal/50 sm:flex-row">
          <p>© {year} {t("rights")}</p>
          <p>{t("legalForm")}</p>
        </div>
        <div className="container-prestige flex justify-center pb-6 text-xs text-charcoal/45 sm:justify-end sm:pt-0">
          {t("craftedBy")}{" "}
          <a
            href="https://www.gdco.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-charcoal/60 transition-colors duration-200 hover:text-ink"
          >
            GDCO
          </a>
        </div>
      </div>
    </footer>
  );
}
