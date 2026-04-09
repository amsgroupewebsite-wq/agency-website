// src/app/projets/page.js
"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { cn } from "../../lib/utils";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projets } from "../../lib/projets"; // ← source unique de vérité

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
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = useMemo(() => {
    return projets.filter((projet) => {
      const matchExpertise =
        !selectedExpertise || projet.expertise === selectedExpertise;
      const matchSecteur =
        !selectedSecteur || projet.secteur === selectedSecteur;
      return matchExpertise && matchSecteur;
    });
  }, [selectedExpertise, selectedSecteur]);

  return (
    <>
      <NavBar />

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
      onSelect={setSelectedExpertise}
    />
    <div className="w-full h-px lg:h-auto lg:w-px bg-black/10" />
    <FilterGroup
      title="Secteurs"
      items={secteurs}
      selected={selectedSecteur}
      onSelect={setSelectedSecteur}
    />
  </div>
</section>

        {/* Projects list */}
        <section className="relative z-10 w-screen bg-white ">
          <div className="max-w-7xl mx-auto flex flex-col justify-center gap-10 mt-10 mx-auto">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((projet, index) => (
                <Link
                  key={projet.slug} // ← slug unique, plus fiable qu'un index
                  href={`/projets/${projet.slug}`} // ← construit depuis le slug
                  className="relative border-b border-black/10 pb-6 group mx-0 md:mx-10 sm:mx-16"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h2 className="text-xl font-semibold text-[#252525] group-hover:text-[#E54259] transition-colors duration-200">
                    {projet.title}
                  </h2>
                  <span className="text-sm text-[#252525]/60">
                    {projet.expertise} — {projet.secteur}
                  </span>

                  {hoveredIndex === index && projet.images?.[0] && (
                    <div className="absolute right-0 top-[110%] left-[50%] -translate-y-1/2 w-96 h-64 rounded-xl overflow-hidden pointer-events-none z-10">
                      <Image
                        src={projet.images[0]} // ← images[] et non image
                        alt={projet.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="justify-self-end transition-all duration-300 hover:-translate-y-2 hover:scale-110">
                    <Image src="/flech.png" alt="Voir le projet" width={41} height={45} />
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-[#252525]/50">
                Aucun projet ne correspond aux filtres.
              </p>
            )}
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}