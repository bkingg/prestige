import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRESTIGE Cabinet Conseil",
  description: "Cabinet conseil, études et ingénierie basé à Dakar, Sénégal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
