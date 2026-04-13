// src/app/projets/page.js
"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projets } from "../../lib/projets";

const words = ["projets", "réalisations", "créations"];

const expertises = [
  { label: "Sites", count: 17 },
  { label: "Campagnes", count: 7 },
  { label: "Contenu", count: 12 },
  { label: "Identité", count: 6 },
  { label: "Événement", count: 5 },
];

const secteurs = [
  { label: "Éducation", count: 2 },
  { label: "Énergie", count: 4 },
  { label: "Institutionnel", count: 28 },
  { label: "Médias", count: 9 },
  { label: "Santé", count: 12 },
  { label: "Sciences", count: 3 },
  { label: "Tech", count: 6 },
  { label: "Pharmaceutique", count: 6 },
];

function FilterGroup({ title, items, selected, onSelect }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="uppercase tracking-widest text-[#252525] opacity-90 font-bold text-2xl py-3 m-1">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2 sm:gap-3">
        {items.map((item) => {
          const isActive = selected === item.label;
          return (
            <li
              key={item.label}
              className={cn(
                "border p-2 sm:p-3 rounded-xl transition-all duration-300",
                isActive
                  ? "border-[#E54259] bg-[#fff1f2]"
                  : "border-black hover:border-[#E54259]"
              )}
            >
              <button
                onClick={() => onSelect(isActive ? null : item.label)}
                className={cn(
                  "group flex items-center gap-1.5 text-left text-sm sm:text-base font-medium transition-all duration-200",
                  isActive
                    ? "text-[#E54259]"
                    : "text-[#252525] hover:text-[#E54259]"
                )}
              >
                <span>{item.label}</span>
                <span
                  className={cn(
                    "text-xs font-normal transition-all duration-200",
                    isActive
                      ? "text-[#E54259]"
                      : "text-[#252525] opacity-40 group-hover:text-[#E54259] group-hover:opacity-100"
                  )}
                >
                  {item.count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function ProjetsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [selectedSecteur, setSelectedSecteur] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // ← slug désormais
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 6;

  // ── Filtre ──────────────────────────────────────────────────────────────────
  const filteredProjects = useMemo(() => {
    return projets.filter((projet) => {
      const matchExpertise =
        !selectedExpertise || projet.expertise === selectedExpertise;
      const matchSecteur =
        !selectedSecteur || projet.secteur === selectedSecteur;
      return matchExpertise && matchSecteur;
    });
  }, [selectedExpertise, selectedSecteur]);

  // ── Pagination ───────────────────────────────────────────────────────────────
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Reset page à 1 lors d'un changement de filtre
  function handleExpertiseSelect(val) {
    setSelectedExpertise(val);
    setCurrentPage(1);
  }

  function handleSecteurSelect(val) {
    setSelectedSecteur(val);
    setCurrentPage(1);
  }

  return (
    <>
      

      {/* Hero */}
      <section className="pt-20 md:pt-30 px-4 sm:px-6 flex flex-col items-start max-w-6xl mx-auto">
        <span className="text-xs text-[#b0b0b0]">Nos projets</span>
        <div className="mb-6 w-full text-left text-3xl sm:text-4xl leading-normal font-bold tracking-tight md:text-5xl lg:text-7xl">
          <h1 className="inline text-[#252525]">
            Ce sont eux qui parlent le mieux de nous{" "}
            <span className="inline-flex items-center align-middle">
              <ContainerTextFlip words={words} />
            </span>
            <span className="text-[#E54259]">.</span>
          </h1>
        </div>
      </section>

      <section>
        {/* Filters */}
        <section className="bg-[#FFF8E8] py-10 sm:py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16">
            <FilterGroup
              title="Expertises"
              items={expertises}
              selected={selectedExpertise}
              onSelect={handleExpertiseSelect} // ✅ reset page
            />
            <div className="w-full h-px lg:h-auto lg:w-px bg-black/10" />
            <FilterGroup
              title="Secteurs"
              items={secteurs}
              selected={selectedSecteur}
              onSelect={handleSecteurSelect} // ✅ reset page
            />
          </div>
        </section>

        {/* Projects list */}
        <section className="relative z-10 w-screen bg-white py-10 my-10">
          <div className="max-w-7xl mx-auto flex flex-col justify-center gap-10 mt-10">
            {paginatedProjects.length > 0 ? ( // ✅ paginatedProjects
              paginatedProjects.map((projet) => (
                <Link
                  key={projet.slug}
                  href={`/projets/${projet.slug}`}
                  className="relative border-b border-black/10 pb-6 group mx-0 sm:mx-16 md:mx-10"
                  onMouseEnter={() => setHoveredIndex(projet.slug)} // ✅ slug
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h2 className="text-xl font-semibold text-[#252525] group-hover:text-[#E54259] transition-colors duration-200">
                    {projet.title}
                  </h2>
                  <span className="text-sm text-[#252525]/60">
                    {projet.expertise} — {projet.secteur}
                  </span>

                  {hoveredIndex === projet.slug && projet.images?.[0] && ( // ✅ slug
                    <div className="absolute right-0 top-[110%] left-[50%] -translate-y-1/2 w-96 h-64 rounded-xl overflow-hidden pointer-events-none z-10">
                      <Image
                        src={projet.images[0]}
                        alt={projet.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="justify-self-end transition-all duration-300 hover:-translate-y-2 hover:scale-110">
                    <Image
                      src="/flech.png"
                      alt="Voir le projet"
                      width={41}
                      height={45}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-[#252525]/50">
                Aucun projet ne correspond aux filtres.
              </p>
            )}

            {/* ── Pagination ── */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 py-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-xl border border-black/10 text-sm font-medium disabled:opacity-30 hover:bg-[#E54259] hover:text-white hover:border-[#E54259] transition-all"
                >
                  ← Précédent
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-xl text-sm font-medium transition-all ${
                      currentPage === page
                        ? "bg-[#E54259] text-white"
                        : "border border-black/10 hover:border-[#E54259] hover:text-[#E54259]"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-xl border border-black/10 text-sm font-medium disabled:opacity-30 hover:bg-[#E54259] hover:text-white hover:border-[#E54259] transition-all"
                >
                  Suivant →
                </button>
              </div>
            )}
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}