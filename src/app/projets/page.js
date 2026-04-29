// src/app/projets/page.js
"use client";

import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projets } from "../../lib/projets";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const words = ["projets", "réalisations", "créations"];

// Helper — gère expertise en array OU en string (rétrocompat)
const getExpertises = (projet) =>
  Array.isArray(projet.expertise)
    ? projet.expertise
    : [projet.expertise].filter(Boolean);

function FilterGroup({ title, items, selected, onSelect }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="uppercase tracking-widest text-[#252525] opacity-90 font-bold text-xl sm:text-2xl py-2 sm:py-3">
        {title}
      </h2>
      <ul className="flex flex-wrap gap-2 sm:gap-3">
        {items.map((item) => {
          const isActive = selected === item.label;
          return (
            <li
              key={item.label}
              className={cn(
                "border rounded-xl transition-all duration-300",
                isActive
                  ? "border-[#E54259] bg-[#fff1f2]"
                  : "border-gray-200 hover:border-[#E54259]"
              )}
            >
              <button
                onClick={() => onSelect(isActive ? null : item.label)}
                className={cn(
                  "group flex items-center gap-1.5 text-left text-xs sm:text-sm md:text-base font-medium transition-all duration-200 px-3 sm:px-4 py-2 sm:py-2.5",
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

function ProjectCard({ projet, isHovered, onHover }) {
  const [imageError, setImageError] = useState(false);
  const expertisesList = getExpertises(projet);

  return (
    <Link
      href={`/projets/${projet.slug}`}
      className="relative block border-b border-gray-200 py-6 sm:py-8 group mx-0 sm:mx-4 md:mx-6"
      onMouseEnter={() => onHover(projet.slug)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#252525] group-hover:text-[#E54259] transition-colors duration-200">
            {projet.title}
          </h2>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-[#252525]/60 mt-1">
            {expertisesList.map((exp, i) => (
              <span key={exp} className="inline-flex items-center">
                {i > 0 && <span className="text-[#252525]/25 mr-2">·</span>}
                {exp}
              </span>
            ))}
            {projet.secteur && (
              <>
                <span className="text-[#252525]/25">—</span>
                <span className="text-[#E54259]/80">{projet.secteur}</span>
              </>
            )}
          </div>
        </div>

        <div className="transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 self-end sm:self-center">
          <Image
            src="/flech.png"
            alt="Voir le projet"
            width={35}
            height={38}
            className="sm:w-[41px] sm:h-[45px]"
          />
        </div>
      </div>

      {/* Image preview au hover — desktop uniquement */}
      {isHovered === projet.slug && projet.images?.[0] && !imageError && (
        <div className="hidden lg:block fixed right-30 top-1/2 -translate-y-1/2 w-80 h-52 rounded-xl overflow-hidden shadow-2xl z-50 pointer-events-none animate-in fade-in zoom-in duration-200">
          <Image
            src={projet.images[0]}
            alt={projet.title}
            fill
            sizes="320px"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      )}
    </Link>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 py-8 sm:py-10 px-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 sm:px-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E54259] hover:text-white hover:border-[#E54259] transition-all duration-300"
        aria-label="Page précédente"
      >
        ← Précédent
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 hover:border-[#E54259] hover:text-[#E54259] transition-all"
          >
            1
          </button>
          {startPage > 2 && <span className="px-1 text-gray-400">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300",
            currentPage === page
              ? "bg-[#E54259] text-white shadow-md"
              : "border border-gray-200 hover:border-[#E54259] hover:text-[#E54259]"
          )}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-1 text-gray-400">...</span>}
          <button
            onClick={() => onPageChange(totalPages)}
            className="hidden sm:flex w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs sm:text-sm font-medium border border-gray-200 hover:border-[#E54259] hover:text-[#E54259] transition-all"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 sm:px-4 py-2 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E54259] hover:text-white hover:border-[#E54259] transition-all duration-300"
        aria-label="Page suivante"
      >
        Suivant →
      </button>
    </div>
  );
}

export default function ProjetsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [selectedSecteur, setSelectedSecteur] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const PROJECTS_PER_PAGE = 6;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-dérivation des filtres depuis les données projets
  const { expertiseOptions, secteurOptions } = useMemo(() => {
    const expCounts = new Map();
    const secCounts = new Map();

    for (const projet of projets) {
      for (const exp of getExpertises(projet)) {
        expCounts.set(exp, (expCounts.get(exp) || 0) + 1);
      }
      if (projet.secteur) {
        secCounts.set(projet.secteur, (secCounts.get(projet.secteur) || 0) + 1);
      }
    }

    const toSortedOptions = (map) =>
      [...map.entries()]
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => a.label.localeCompare(b.label, "fr"));

    return {
      expertiseOptions: toSortedOptions(expCounts),
      secteurOptions: toSortedOptions(secCounts),
    };
  }, []);

  // Filtrage
  const filteredProjects = useMemo(() => {
    return projets.filter((projet) => {
      const matchExpertise =
        !selectedExpertise || getExpertises(projet).includes(selectedExpertise);
      const matchSecteur = !selectedSecteur || projet.secteur === selectedSecteur;
      return matchExpertise && matchSecteur;
    });
  }, [selectedExpertise, selectedSecteur]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Reset page au changement de filtre
  const handleExpertiseSelect = (val) => {
    setSelectedExpertise(val);
    setCurrentPage(1);
  };

  const handleSecteurSelect = (val) => {
    setSelectedSecteur(val);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setSelectedExpertise(null);
    setSelectedSecteur(null);
    setCurrentPage(1);
  };

  const resultCount = filteredProjects.length;

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-6xl">
        <span className="block text-[10px] sm:text-xs text-[#b0b0b0] uppercase tracking-[0.2em] mb-3 sm:mb-4">
          Nos projets
        </span>

        <h1 className="text-[#252525] font-bold tracking-tight leading-[1.05] text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">Nos</span>
          <span className="block my-1 sm:my-2">
            <ContainerTextFlip words={words} />
          </span>
          <span className="block">parlent pour nous.</span>
        </h1>
      </section>

      {/* Filters */}
      <section className="bg-[#FFF8E8] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <FilterGroup
            title="Expertises"
            items={expertiseOptions}
            selected={selectedExpertise}
            onSelect={handleExpertiseSelect}
          />
          <div className="w-full h-px lg:h-auto lg:w-px bg-black/10" />
          <FilterGroup
            title="Secteurs"
            items={secteurOptions}
            selected={selectedSecteur}
            onSelect={handleSecteurSelect}
          />
        </div>
      </section>

      {/* Projects list */}
      <section className="relative z-10 bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Résultats count */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <p className="text-sm text-gray-500">
              {resultCount} projet{resultCount > 1 ? "s" : ""} trouvé
              {resultCount > 1 ? "s" : ""}
            </p>
            {(selectedExpertise || selectedSecteur) && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#E54259] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-2 sm:gap-4">
            {paginatedProjects.length > 0 ? (
              paginatedProjects.map((projet) => (
                <ProjectCard
                  key={projet.slug}
                  projet={projet}
                  isHovered={isMobile ? null : hoveredIndex}
                  onHover={setHoveredIndex}
                />
              ))
            ) : (
              <div className="text-center py-12 sm:py-20">
                <p className="text-[#252525]/50 text-base sm:text-lg">
                  Aucun projet ne correspond aux filtres sélectionnés.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-4 px-6 py-2 bg-[#E54259] text-white rounded-lg hover:bg-[#c1354a] transition-all"
                >
                  Voir tous les projets
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}