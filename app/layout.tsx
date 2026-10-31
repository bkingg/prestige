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
          Runs before first paint: marks repeat page views in this browser
          session so the CSS-only intro loader (components/ui/IntroLoader)
          is hidden immediately instead of replaying on every page.
        */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              "try{var k='prestige-intro';if(sessionStorage.getItem(k)){document.documentElement.setAttribute('data-intro-seen','')}else{sessionStorage.setItem(k,'1')}}catch(e){document.documentElement.setAttribute('data-intro-seen','')}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
