import "./globals.css";
import { Suspense } from "react";
import type { ReactNode } from "react";
import ClientProviders from "../components/ClientProviders";
import ClientLayout from "../components/ClientLayout";
import CookieBanner from "../components/CookieBanner";
import { Inter } from "next/font/google";
import { cn } from "../lib/utils";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "AMS Groupe",
  description: "",
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
        <NavBar/>
        <Suspense fallback={null}>
           
          <ClientProviders>
            <ClientLayout>{children}</ClientLayout>
          </ClientProviders>
        </Suspense>
        <Footer/>
      </body>
    </html>
  );
}