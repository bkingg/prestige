import { Cormorant_Garamond, Inter } from "next/font/google";

// An editorial pairing for an institutional advisory firm: Cormorant
// Garamond set large and light for display headings, Inter for body copy
// and the small tracked uppercase labels/navigation.
export const fontDisplay = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
