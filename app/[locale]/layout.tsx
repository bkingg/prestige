import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { fontDisplay, fontBody } from "@/lib/fonts";
import { pageMetadata, SITE_URL } from "@/lib/seo";
import { company } from "@/data/company";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/Motifs";
import { cn } from "@/lib/utils";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale === "fr";

  const title = "PRESTIGE Cabinet Conseil | PRESTIGE SAU — Dakar, Sénégal";
  const description = isFr
    ? "Cabinet conseil, études et ingénierie basé à Dakar depuis 2000. Environnement, études économiques, suivi-évaluation, urbanisme, décentralisation, BTP, eau & assainissement, géomatique."
    : "Consulting, studies and engineering firm based in Dakar since 2000. Environment, economic studies, monitoring & evaluation, urban planning, decentralization, works supervision, water & sanitation, geomatics.";

  const { alternates, openGraph, twitter } = pageMetadata({ locale, path: "", title, description });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s | PRESTIGE Cabinet Conseil",
    },
    description,
    keywords: [
      "Prestige Cabinet Conseil",
      "Prestige SAU",
      "cabinet conseil Dakar",
      "bureau d'études Sénégal",
      "conseil Sénégal",
      "études environnementales Sénégal",
      "études économiques Sénégal",
      "urbanisme Sénégal",
      "suivi évaluation projets Sénégal",
      "géomatique Sénégal",
      "consulting firm Senegal",
    ],
    icons: { icon: "/favicon.svg" },
    robots: { index: true, follow: true },
    alternates,
    openGraph,
    twitter,
  };
}

function OrganizationJsonLd({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  const json = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.commonName,
    legalName: company.legalName,
    url: `${SITE_URL}/${locale}`,
    foundingDate: String(company.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Lot 11, Liberté VI Extension",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    telephone: company.phones[0],
    email: company.emails[0],
    areaServed: company.countriesOfOperation.map((c) => c[isFr ? "fr" : "en"]),
    description: isFr
      ? "Cabinet conseil, études et ingénierie basé à Dakar depuis 2000."
      : "Consulting, studies and engineering firm based in Dakar since 2000.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <div lang={locale} className={cn(fontDisplay.variable, fontBody.variable, "font-sans")}>
      <OrganizationJsonLd locale={locale} />
      <NextIntlClientProvider messages={messages}>
        <GrainOverlay />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2 focus:text-burgundy"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
