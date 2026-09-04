import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { fontDisplay, fontBody } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/ui/Motifs";
import { cn } from "@/lib/utils";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prestige.sn";

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
    alternates: {
      canonical: `/${locale}`,
      languages: { fr: "/fr", en: "/en" },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}`,
      siteName: "PRESTIGE Cabinet Conseil",
      locale: isFr ? "fr_SN" : "en_US",
      type: "website",
    },
    icons: {
      icon: "/favicon.svg",
    },
  };
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
