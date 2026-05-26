// src/app/projets/page.js  → redevient un Server Component
import ProjetsClient from "./ProjetsClient";

export const metadata = {
  title: "Projets", // → "Projets | AMS Agency"
  description:
    "Découvrez les réalisations d'AMS Agency : branding, audiovisuel, marketing digital et web pour des marques et institutions en Algérie.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets | AMS Agency",
    description: "Le portfolio d'AMS Agency : nos projets de communication en Algérie.",
    url: "https://www.agencyams.com/projets",
  },
};

export default function ProjetsPage() {
  return <ProjetsClient />;
}