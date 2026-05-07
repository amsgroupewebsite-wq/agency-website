// src/components/ExpertiseDetail.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { projets } from "../lib/projets";
import { expertise as expertises } from "../lib/expertise";
import ProjetLink from "./ProjetLink";

// Helper — gère expertise en array OU en string
const getExpertises = (projet) =>
  Array.isArray(projet.expertise)
    ? projet.expertise
    : [projet.expertise].filter(Boolean);

export default function ExpertiseDetail({ expertise, isModal = false, onClose }) {
  // Projets dont l'expertise inclut celle-ci (matching par titre)
  const relatedProjects = projets
    .filter((p) => getExpertises(p).includes(expertise.title))
    .slice(0, 6);

  // Autres expertises pour la suggestion en bas
  const otherExpertises = expertises
    .filter((e) => e.slug !== expertise.slug)
    .slice(0, 4);

  const content = (
    <div className="max-w-[1783px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 sm:pb-24 lg:pb-32">
      {/* Header nav */}
      <div className="flex items-center justify-between mb-8 sm:mb-12">
        {isModal ? (
          <>
            <span className="text-xs uppercase tracking-[0.2em] text-[#252525]/50">
              Expertise
            </span>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="group w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center
                         bg-[#E54259] text-white text-base sm:text-lg font-semibold
                         transition-all duration-300 ease-out
                         hover:scale-110 hover:-translate-y-1 hover:shadow-xl
                         active:scale-95 active:translate-y-0
                         border border-white/10 hover:border-white/30"
            >
              <span className="transition-transform duration-300 group-hover:rotate-90">
                ✕
              </span>
            </button>
          </>
        ) : (
          <Link
            href="/offre"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#252525]/50 hover:text-[#E54259] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Toutes les expertises
          </Link>
        )}
      </div>

      {/* === Galerie d'images verticale en haut === */}
      {expertise.imges?.length > 0 && (
        <div className="flex flex-col gap-4 sm:gap-5 mb-12 sm:mb-16 lg:mb-24">
          {expertise.imges.map((src, i) => (
            <div
              key={i}
              className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={src}
                alt={`${expertise.title} — ${i + 1}`}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 1600px"
                loading={i === 0 ? "eager" : "lazy"}
                quality={90}
              />
            </div>
          ))}
        </div>
      )}

      {/* === Bloc principal : intro à gauche, subservices à droite === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
        {/* Colonne gauche — titre + intro + subintro */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#E54259] font-medium">
            Notre expertise
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#252525] leading-[1.05] tracking-tight text-balance">
            {expertise.title}
          </h1>

          {expertise.intro && (
            <p className="text-base sm:text-lg lg:text-xl text-[#252525]/80 leading-relaxed border-l-2 border-[#E54259] pl-4 sm:pl-6">
              {expertise.intro}
            </p>
          )}

          {expertise.subintro && (
            <p className="text-sm sm:text-base text-[#252525]/65 leading-[1.75]">
              {expertise.subintro}
            </p>
          )}
        </div>

        {/* Colonne droite — subservices */}
        {expertise.subservices?.length > 0 && (
          <div className="flex flex-col gap-1 sm:gap-2 lg:sticky lg:top-6">
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#252525]/40 mb-4 sm:mb-6">
              Ce que nous faisons
            </span>

            <ul className="flex flex-col">
              {expertise.subservices.map((service, i) => (
                <li
                  key={service}
                  className="group flex items-baseline gap-4 sm:gap-6 py-4 sm:py-5 border-b border-[#252525]/10 hover:border-[#E54259]/40 transition-colors"
                >
                  <span className="font-mono text-xs sm:text-sm tabular-nums text-[#252525]/30 group-hover:text-[#E54259] transition-colors shrink-0 w-6 sm:w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-[#252525] group-hover:text-[#E54259] transition-colors leading-tight">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* === Projets liés === */}
      {relatedProjects.length > 0 && (
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-12 sm:pt-16 lg:pt-20 border-t border-[#252525]/10">
          <div className="flex items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-[#252525]/40 mb-2">
                Réalisations
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#252525] tracking-tight">
                Ils nous ont fait confiance
              </h2>
            </div>
            <Link
              href="/projets"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#252525]/60 hover:text-[#E54259] transition-colors shrink-0"
            >
              Voir tous les projets <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {relatedProjects.map((p, i) => (
              <ProjetLink key={p.slug} p={p} i={i} />
            ))}
          </div>
        </div>
      )}

      {/* === Autres expertises === */}
      {otherExpertises.length > 0 && (
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-12 sm:pt-16 lg:pt-20 border-t border-[#252525]/10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#252525] tracking-tight mb-8 sm:mb-12">
            Nos autres expertises
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {otherExpertises.map((e) => (
              <Link
                key={e.slug}
                href={`/offre/${e.slug}`}
                className="group flex items-center justify-between gap-4 px-5 sm:px-6 py-5 sm:py-6 rounded-xl sm:rounded-2xl border border-[#252525]/10 hover:border-[#E54259] hover:bg-[#E54259]/[0.03] transition-all"
              >
                <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#252525] group-hover:text-[#E54259] transition-colors">
                  {e.title}
                </span>
                <span
                  className="text-[#252525]/30 group-hover:text-[#E54259] group-hover:translate-x-1 transition-all shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // ── Mode modal ──
  if (isModal) return content;

  // ── Mode plein écran ──
  return (
    <>
      <section className=" pt-16 sm:pt-20">{content}</section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-6xl mx-auto bg-[#252525] rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-14 py-10 sm:py-14 md:py-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            Un projet en {expertise.title.toLowerCase()} ?{" "}
            <br className="hidden sm:block" />
            <span className="text-[#E54259]">Parlons-en.</span>
          </h2>
          <Link
            href="/contact"
            className="group flex items-center gap-3 sm:gap-4 shrink-0 self-start md:self-end"
          >
            <div>
              <p className="font-semibold text-white text-sm sm:text-base">
                Contactez-nous !
              </p>
              <p className="text-xs sm:text-sm text-white/60">
                Accéder au formulaire
              </p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E54259] flex items-center justify-center text-white text-lg group-hover:scale-110 group-hover:rotate-[-10deg] transition-transform duration-300">
              →
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}