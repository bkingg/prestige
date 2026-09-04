import { ImageResponse } from "next/og";
import { brandImageContent } from "@/lib/ogImage";
import { loadOgFonts } from "@/lib/ogFonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { locale: string } }) {
  const fonts = await loadOgFonts();
  return new ImageResponse(brandImageContent(params.locale === "fr"), { ...size, fonts });
}
