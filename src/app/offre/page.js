// app/offre/page.js
import { Suspense } from "react";
import Offre from "./Offre";

export const metadata = {
  title: "Offre de services", // → "Offre de services | AMS Agency"
  description:
    "Découvrez l'offre de communication globale d'AMS Agency : branding, production audiovisuelle, marketing digital, social media et création de sites web.",
  alternates: { canonical: "/offre" },
  openGraph: {
    title: "Offre de services | AMS Agency",
    description:
      "Communication globale, branding, audiovisuel, digital et social media — l'offre AMS Agency.",
    url: "https://www.agencyams.com/offre",
  },
};

export default function OffrePage() {
  return (
    <Suspense fallback={null}>
      <Offre />
    </Suspense>
  );
}