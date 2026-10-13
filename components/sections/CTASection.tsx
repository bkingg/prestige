import { useTranslations } from "next-intl";
import { CTABand } from "@/components/ui/CTABand";

export function CTASection() {
  const t = useTranslations("home");

  return (
    <CTABand
      title={t("ctaTitle")}
      body={t("ctaBody")}
      buttonLabel={t("ctaButton")}
      buttonHref="/contact"
    />
  );
}
