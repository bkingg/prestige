import { Spectral, IBM_Plex_Sans } from "next/font/google";

// Deliberately avoiding the Cormorant Garamond / Inter pairing that has
// become a default "AI template" look. Spectral is a sturdier, ink-trapped
// text serif built for long-form reading (institutional, not decorative);
// IBM Plex Sans reads as technical/engineering rather than generic startup.
export const fontDisplay = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
