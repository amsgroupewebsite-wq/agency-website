// app/actu/page.js  ← ajustez le chemin à votre dossier réel
import { Suspense } from "react";
import Blog from "./Blog";

export const metadata = {
  title: "Actualités", // → "Actualités | AMS Agency"
  description:
    "Les actualités d'AMS Agency : dernières réalisations, tendances de la communication et du digital, coups de cœur de l'équipe et nouveaux projets.",
  alternates: { canonical: "/actu" },
  openGraph: {
    title: "Actualités | AMS Agency",
    description:
      "Suivez les aventures d'AMS Agency : réalisations, tendances et nouveautés de l'agence.",
    url: "https://www.agencyams.com/actu",
  },
};

export default function ActuPage() {
  return (
    <Suspense fallback={null}>
      <Blog />
    </Suspense>
  );
}