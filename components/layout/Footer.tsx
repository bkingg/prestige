import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/ui/Logo";
import { company } from "@/data/company";
import { expertiseAreas } from "@/data/expertise";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale() as "fr" | "en";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-deep text-cream/80">
      <div className="container-prestige grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <LogoMark className="h-8 w-auto" />
            <span className="font-serif text-lg tracking-wide text-cream">PRESTIGE</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">{t("tagline")}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-gold">{t("navigation")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-cream">{nav("home")}</Link></li>
            <li><Link href="/le-cabinet" className="hover:text-cream">{nav("about")}</Link></li>
            <li><Link href="/expertises" className="hover:text-cream">{nav("expertise")}</Link></li>
            <li><Link href="/references" className="hover:text-cream">{nav("references")}</Link></li>
            <li><Link href="/equipe" className="hover:text-cream">{nav("team")}</Link></li>
            <li><Link href="/contact" className="hover:text-cream">{nav("contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-gold">{t("expertiseTitle")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {expertiseAreas.slice(0, 6).map((e) => (
              <li key={e.slug}>
                <Link href={`/expertises/${e.slug}`} className="hover:text-cream">
                  {e.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest2 text-gold">{t("contactTitle")}</h3>
          <address className="mt-4 space-y-2.5 text-sm not-italic">
            <p>{company.address[locale]}</p>
            {company.phones.slice(0, 2).map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-cream">
                  {phone}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${company.emails[0]}`} className="hover:text-cream">
                {company.emails[0]}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-prestige flex flex-col items-center justify-between gap-4 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {year} {t("rights")}</p>
          <p>{t("legalForm")}</p>
        </div>
      </div>
    </footer>
  );
}
