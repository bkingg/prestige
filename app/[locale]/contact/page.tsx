import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

type Params = { locale: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return pageMetadata({ locale, path: "/contact", title: t("title"), description: t("subtitle") });
}

export default async function ContactPage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const loc = locale as "fr" | "en";
  const mapQuery = encodeURIComponent(`${company.address.fr}, ${company.poBox}`);

  return (
    <section className="bg-cream pb-24 pt-32 sm:pt-36">
      <div className="container-prestige">
        <Reveal>
          <SectionLabel>{t("eyebrow")}</SectionLabel>
          <h1 className="mt-6 max-w-2xl font-serif text-5xl leading-tight text-burgundy-deep sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/70">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="space-y-10">
              <InfoBlock icon={<MapPin className="h-5 w-5" />} title={t("addressTitle")}>
                <p>{company.address[loc]}</p>
                <p className="mt-1 text-charcoal/50">{company.poBox}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-burgundy transition-colors duration-200 hover:text-burgundy-deep"
                >
                  {t("mapTitle")}
                </a>
              </InfoBlock>

              <InfoBlock icon={<Phone className="h-5 w-5" />} title={t("phoneTitle")}>
                {company.phones.map((phone) => (
                  <p key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition-colors duration-200 hover:text-burgundy"
                    >
                      {phone}
                    </a>
                  </p>
                ))}
              </InfoBlock>

              <InfoBlock icon={<Mail className="h-5 w-5" />} title={t("emailTitle")}>
                {company.emails.map((email) => (
                  <p key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="transition-colors duration-200 hover:text-burgundy"
                    >
                      {email}
                    </a>
                  </p>
                ))}
              </InfoBlock>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-charcoal/12 bg-white p-8 sm:p-10">
              <h2 className="font-serif text-2xl text-burgundy-deep">{t("formTitle")}</h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 text-burgundy">
        {icon}
      </div>
      <div>
        <h3 className="text-xs uppercase tracking-widest2 text-charcoal/45">{title}</h3>
        <div className="mt-2 text-sm leading-relaxed text-charcoal/80">{children}</div>
      </div>
    </div>
  );
}
