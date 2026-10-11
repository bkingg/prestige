import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRESTIGE Cabinet Conseil",
  description: "Cabinet conseil, études et ingénierie basé à Dakar, Sénégal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/*
          Photos can be served from Sanity's image CDN (see lib/photos.ts);
          the hero photo always is when the CMS is reachable, and it's
          typically the page's LCP element. Preconnecting overlaps the
          DNS/TLS handshake with the rest of page setup instead of only
          starting it once the <img> is discovered.
        */}
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>
      <body>{children}</body>
    </html>
  );
}
