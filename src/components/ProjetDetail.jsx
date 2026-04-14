// src/components/ProjetDetail.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { projets } from "../lib/projets";
import ProjetLink from "./ProjetLink";

export default function ProjetDetail({ projet, isModal = false, onClose }) {

  const related = projets
    .filter((p) => p.slug !== projet.slug && p.secteur === projet.secteur)
    .slice(0, 3);

  const content = (
    <div className="max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-24 lg:pb-32 no-scrollbar">

      {/* Header */}
      <div className="flex items-center justify-between mb-8 sm:mb-10">
        {isModal ? (
          <>
            <button
              onClick={onClose}
              className="text-xs text-[#252525]/50 hover:text-[#E54259] transition-colors"
              aria-label="Fermer"
            />
            <button
              onClick={onClose}
              className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center 
                         bg-[#E54259] text-white text-base sm:text-lg font-semibold
                         transition-all duration-300 ease-out
                         hover:scale-110 hover:-translate-y-1 hover:shadow-xl
                         active:scale-95 active:translate-y-0
                         border border-white/10 hover:border-white/30"
              aria-label="Fermer"
            >
              <span className="transition-transform duration-300 group-hover:rotate-90">
                ✕
              </span>
            </button>
          </>
        ) : (
          <Link
            href="/projets"
            className="text-xs sm:text-sm text-[#252525]/50 hover:text-[#E54259] transition-colors"
          >
            ← Tous les projets
          </Link>
        )}
      </div>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
        
        {/* Colonne gauche - sticky */}
        <div className="lg:sticky lg:top-6 flex flex-col gap-4 sm:gap-6 max-w-full lg:max-w-xl">
          <p className="text-xs sm:text-sm text-[#252525]/50">
            {projet.expertise} · {projet.secteur}
          </p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#252525] leading-tight my-4 sm:my-6 lg:my-10">
            {projet.title}
          </h1>
          
          <p className="text-sm sm:text-base text-[#252525]/70 leading-relaxed my-4 sm:my-6 lg:my-10">
            {projet.description}
          </p>
          
          {projet.siteUrl && (
            <Link
              href={projet.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl transition-all self-start duration-300 hover:-translate-y-2 hover:scale-110"
              aria-label="Voir le projet"
            >
              <Image 
                src="/flech.png" 
                alt="Voir le projet" 
                width={83} 
                height={90}
                className="w-8 sm:w-auto"
              />
            </Link>
          )}
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {projet.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#E54259] text-white text-xs sm:text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Colonne droite - images */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {projet.images.map((src, i) => (
            <div 
              key={i} 
              className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden" 
              style={{ aspectRatio: "16/10" }}
            >
              <Image 
                src={src} 
                alt={`${projet.title} — ${i + 1}`} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Projets liés */}
      {related.length > 0 && (
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-lg sm:text-xl font-semibold text-[#252525] mb-6 sm:mb-8">
            Projets similaires
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {related.map((p, i) => (
              <ProjetLink key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // ── Mode modal ──
  if (isModal) return content;

  // ── Mode plein écran (refresh / accès direct) ──
  return (
    <>
      <section className="pt-16 sm:pt-20">{content}</section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] leading-tight">
            Envie de nous confier <br />
            <span className="text-[#E54259]">un projet ?</span>
          </h2>
          <Link 
            href="/contact" 
            className="flex items-center gap-3 sm:gap-4 group w-full md:w-auto justify-between md:justify-start"
          >
            <div>
              <p className="font-semibold text-[#252525] text-sm sm:text-base">
                Contactez-nous !
              </p>
              <p className="text-xs sm:text-sm text-[#252525]/60">
                Accéder au formulaire
              </p>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#E54259] flex items-center justify-center text-[#E54259] group-hover:bg-[#E54259] group-hover:text-white transition-all">
              →
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}