// src/app/projets/page.js
"use client";


import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projets } from "../../lib/projets";
import NavBar from "../../components/NavBar";

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
          <span className="text-xs sm:text-sm text-[#252525]/60">
            {projet.expertise} — {projet.secteur}
          </span>
        </div>
        
        <div className="transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110 self-end sm:self-center">
          <Image
            src="/flech.png"
            alt="Voir le projet"
            width={35}
            height={38}
            className="sm:w-[41px] sm:h-[45px]"
          />
            {/* Image preview au hover - desktop uniquement */}
      {isHovered === projet.slug && projet.images?.[0] && !imageError && (
        <div className="hidden lg:block fixed right-30 top-1/2 -translate-y-1/2 w-80 h-52 rounded-xl overflow-hidden shadow-2xl z-50 pointer-events-none animate-in fade-in zoom-in duration-200">
          <Image
            src={projet.images[0]}
            alt={projet.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized={process.env.NODE_ENV === 'development'}
          />
        </div>
      )}
        </div>
        
      </div>

    
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filtrage
  const filteredProjects = useMemo(() => {
    return projets.filter((projet) => {
      const matchExpertise =
        !selectedExpertise || projet.expertise === selectedExpertise;
      const matchSecteur =
        !selectedSecteur || projet.secteur === selectedSecteur;
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compteur de résultats
  const resultCount = filteredProjects.length;

  return (
    <>
      
      <NavBar/>
      {/* Hero */}
      <section className="pt-20 md:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 flex flex-col items-start max-w-6xl mx-auto">
        <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Nos projets</span>
        <div className="mb-6 w-full text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold tracking-tight">
          <h1 className="text-[#252525]">
            Ce sont eux qui parlent <br className="hidden sm:block" />
            le mieux de nous{" "}
            <span className="inline-flex items-center align-middle">
              <ContainerTextFlip words={words} />
            </span>
            <span className="text-[#E54259]">.</span>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-[#FFF8E8] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          <FilterGroup
            title="Expertises"
            items={expertises}
            selected={selectedExpertise}
            onSelect={handleExpertiseSelect}
          />
          <div className="w-full h-px lg:h-auto lg:w-px bg-black/10" />
          <FilterGroup
            title="Secteurs"
            items={secteurs}
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
              {resultCount} projet{resultCount > 1 ? 's' : ''} trouvé{resultCount > 1 ? 's' : ''}
            </p>
            {(selectedExpertise || selectedSecteur) && (
              <button
                onClick={() => {
                  setSelectedExpertise(null);
                  setSelectedSecteur(null);
                  setCurrentPage(1);
                }}
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
                  onClick={() => {
                    setSelectedExpertise(null);
                    setSelectedSecteur(null);
                    setCurrentPage(1);
                  }}
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

     
    </>
  );
}