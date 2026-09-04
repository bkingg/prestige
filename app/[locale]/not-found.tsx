import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";

export default async function NotFound() {
  const t = await getTranslations("common");

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-cream pt-32">
      <div className="container-prestige text-center">
        <p className="font-serif text-8xl text-burgundy">404</p>
        <p className="mt-4 text-lg text-charcoal/70">{t("notFoundTitle")}</p>
        <Button href="/" variant="primary" className="mx-auto mt-8">
          {t("backToTop")}
        </Button>
      </div>
    </section>
  );
}
