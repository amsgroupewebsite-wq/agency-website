import "./globals.css";

import type { ReactNode } from "react";
import ClientProviders from "../components/ClientProviders";
import ClientLayout from "../components/ClientLayout";
import CookieBanner from "../components/CookieBanner";
import { Poppins } from "next/font/google";
import { cn } from "../lib/utils";

// Poppins chargé via next/font (auto-hébergé, optimisé, pas de requête bloquante)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.agencyams.com"),
  title: {
    default: "AMS Agency | Agence de communication en Algérie",
    template: "%s | AMS Agency",
  },
  description:
    "Agence de communication globale en Algérie : branding, production audiovisuelle, marketing digital, social media et création de sites web pour les entreprises.",
  keywords: [
    "agence de communication Algérie",
    "agence communication Alger",
    "branding Algérie",
    "production audiovisuelle Algérie",
    "marketing digital Algérie",
    "social media Algérie",
    "création site web Algérie",
    "AMS Agency",
  ],
  authors: [{ name: "AMS Agency" }],
  creator: "AMS Agency",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "AMS Agency | Agence de communication en Algérie",
    description:
      "Donnez de la voix à votre marque : communication globale, branding, audiovisuel, digital et social media avec AMS Agency.",
    url: "https://www.agencyams.com",
    siteName: "AMS Agency",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AMS Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMS Agency | Agence de communication en Algérie",
    description:
      "Donnez de la voix à votre marque : communication globale, branding, audiovisuel, digital et social media avec AMS Agency.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="fr" className={cn(poppins.variable)}>
      <body
        className="font-sans antialiased"
        style={{ letterSpacing: "0.1em" }}
      >
        <CookieBanner />

        
          <ClientProviders>
            <ClientLayout>{children}</ClientLayout>
          </ClientProviders>
       

        {modal}
      </body>
    </html>
  );
}