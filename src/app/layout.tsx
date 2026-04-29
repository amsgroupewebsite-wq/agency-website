import "./globals.css";
import { Suspense } from "react";
import type { ReactNode } from "react";
import ClientProviders from "../components/ClientProviders";
import ClientLayout from "../components/ClientLayout";
import CookieBanner from "../components/CookieBanner";
import { Inter } from "next/font/google";
import { cn } from "../lib/utils";


const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "AMS Agency",
  description:
    "AMS Agency est une agence de communication digitale en Algérie spécialisée en création de sites web, branding, marketing digital et solutions sur mesure pour entreprises.",
  keywords: [
    "agence digitale Algérie",
    "création site web Algérie",
    "marketing digital Algérie",
    "branding",
    "AMS Agency",
    "développement web",
    "SEO Algérie",
  ],
  authors: [{ name: "AMS Agency" }],
  creator: "AMS Agency",
  openGraph: {
    title: "AMS Agency | Agence digitale en Algérie",
    description:
      "Développez votre présence en ligne avec AMS Agency : création de sites web, marketing digital et branding.",
    url: "https://www.amsagency.com",
    siteName: "AMS Agency",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.1em" }}
      >
        <CookieBanner />
        
        <Suspense fallback={null}>
           
          <ClientProviders>
            <ClientLayout>{children}</ClientLayout>
          </ClientProviders>
        </Suspense>
     
      </body>
    </html>
  );
}