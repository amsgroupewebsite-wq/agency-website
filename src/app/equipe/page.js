// app/equipe/page.js
import { Suspense } from "react";
import Equipe from "./equipe";

export const metadata = {
  title: "Équipe", // → "Équipe | AMS Agency"
  description:
    "Découvrez l'équipe d'AMS Agency : des experts en communication, branding et marketing digital en Algérie, dédiés à des solutions créatives et efficaces.",
  alternates: { canonical: "/equipe" },
  openGraph: {
    title: "Équipe | AMS Agency",
    description:
      "L'équipe passionnée d'AMS Agency, agence de communication en Algérie.",
    url: "https://www.agencyams.com/equipe",
  },
};

export default function EquipePage() {
  return (
    <Suspense fallback={null}>
      <Equipe />
    </Suspense>
  );
}