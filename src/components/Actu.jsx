import Link from "next/link";
import { useState } from "react";

const Categories = ["Tous", "Offre d'emploi", "Analyse", "Interview", "Nouveau projet", "Point de vue", "Tutoriel"];

const Articles = [
  {
    title: "Lancement de notre nouveau projet digital",
    date: "12 avril 2026",
    slug: "lancement-nouveau-projet-digital",
    categorie: "Nouveau projet",
    image: "/articles/projet.jpg",
    description: "Découvrez notre dernière réalisation pour un client du secteur tech.",
  },
  {
    title: "Interview : la communication en 2026",
    date: "5 avril 2026",
    slug: "interview-communication-2026",
    categorie: "Interview",
    image: "/articles/interview.jpg",
    description: "Notre directeur créatif partage sa vision des tendances actuelles.",
  },
  {
    title: "Analyse : l'impact des réseaux sociaux",
    date: "28 mars 2026",
    slug: "analyse-reseaux-sociaux",
    categorie: "Analyse",
    image: "/articles/analyse.jpg",
    description: "Une étude approfondie sur l'évolution des stratégies digitales.",
  },
  {
    title: "Tutoriel : créer une identité visuelle forte",
    date: "20 mars 2026",
    slug: "tutoriel-identite-visuelle",
    categorie: "Tutoriel",
    image: "/articles/tutoriel.jpg",
    description: "Les étapes clés pour construire une marque mémorable.",
  },
  {
    title: "Point de vue : l'avenir du branding",
    date: "14 mars 2026",
    slug: "point-de-vue-branding",
    categorie: "Point de vue",
    image: "/articles/branding.jpg",
    description: "Comment les marques doivent s'adapter aux nouveaux usages.",
  },
  {
    title: "Offre d'emploi : Chef de projet digital",
    date: "10 mars 2026",
    slug: "offre-chef-projet-digital",
    categorie: "Offre d'emploi",
    image: "/articles/emploi.jpg",
    description: "Nous recrutons un chef de projet passionné pour rejoindre l'équipe.",
  },
];

export default function Actu() {
  const [selectedCategorie, setSelectedCategorie] = useState("Tous");

  const filteredArticles =
    selectedCategorie === "Tous"
      ? Articles
      : Articles.filter((a) => a.categorie === selectedCategorie);

  return (
    <>
      {/* ── Filtres ── */}
      <section className="max-w-6xl mx-auto mt-10 px-4">
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold text-[#252525]">Catégories</h2>
          <ul className="flex flex-wrap justify-start items-center gap-3">
            {Categories.map((categorie) => (
              <li key={categorie}>
                <button
                  onClick={() => setSelectedCategorie(categorie)}
                  className={`p-3 border rounded-2xl text-sm font-medium transition-all duration-200 ${
                    selectedCategorie === categorie
                      ? "bg-[#E54259] text-white border-[#E54259]"
                      : "border-black text-[#252525] hover:border-[#E54259] hover:text-[#E54259]"
                  }`}
                >
                  {categorie}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Grille d'articles ── */}
      <section className="max-w-6xl mx-auto mt-10 px-4 pb-20">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/actualites/${article.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-black/10 hover:border-[#E54259] transition-all duration-300"
              >
               

                {/* Contenu */}
                <div className="flex flex-col gap-2 p-5">
                  <span className="text-xs font-semibold text-[#E54259] uppercase tracking-wide">
                    {article.categorie}
                  </span>
                  <h3 className="text-base font-bold text-[#252525] group-hover:text-[#E54259] transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#252525]/60 line-clamp-2">
                    {article.description}
                  </p>
                  <span className="text-xs text-[#252525]/40 mt-2">{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-[#252525]/50 mt-10">
            Aucun article dans cette catégorie.
          </p>
        )}
      </section>
    </>
  );
}