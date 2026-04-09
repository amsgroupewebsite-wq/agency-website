// src/components/ProjetDetail.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { projets } from "../lib/projets";
import ProjetLink  from "./ProjetLink";

export default function ProjetDetail({ projet, isModal = false, onClose }) {

  const related = projets
    .filter((p) => p.slug !== projet.slug && p.secteur === projet.secteur)
    .slice(0, 3);

  const content = (
    <div className="max-w-[1783px] mx-auto px-4 sm:px-6 pt-6 pb-32 no-scrollbar">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        {isModal ? (
          <>
            <button
              onClick={onClose}
              className="text-xs text-[#252525]/50 hover:text-[#E54259] transition-colors"
            >
              
            </button>
            <button
              onClick={onClose}
              className="group w-10 h-10 rounded-full flex items-center justify-center 
                         bg-[#E54259] text-white text-lg font-semibold
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
            href="/projets"
            className="text-xs text-[#252525]/50 hover:text-[#E54259] transition-colors"
          >
            ← Tous les projets
          </Link>
        )}
      </div>
      <div className="flex justify-between item"></div>
      {/* Contenu */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div className="md:sticky md:top-6 flex flex-col gap-6 max-w-xl mx-30">
          <p className="text-sm text-[#252525]/50">
            {projet.expertise} · {projet.secteur}
          </p>
          <h1 className="text-7xl md:text-7xl font-bold text-[#252525] leading-tight my-10">
            {projet.title}
          </h1>
          <p className="text-base text-[#252525]/70 leading-relaxed my-10">
            {projet.description}
          </p>
          {projet.siteUrl && (
            <Link
              href={projet.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full   flex items-center justify-center  text-xl transition-all self-start  duration-300 hover:-translate-y-2 hover:scale-110"
            >
              <Image src="/flech.png" alt="Voir le projet" width={83} height={90} />
            </Link>
          )}
          <div className="flex flex-wrap gap-2">
            {projet.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-[#E54259] text-white text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
            <div className="flex flex-col gap-5">
          {projet.images.map((src, i) => (
            <div key={i} className="relative w-full rounded-2xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
              <Image src={src} alt={`${projet.title} — ${i + 1}`} fill className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          ))}
      </div>
        
        </div>
        

      {/* Projets liés */}
      {/* <h3>Projet liés</h3> */}
    {related.map((p, i) => (
          <ProjetLink key={p.slug} p={p} i={i} />
        ))}
    </div>
  );

  // ── Mode modal ──
  if (isModal) return content;

  // ── Mode plein écran (refresh / accès direct) ──
  return (
    <>
      <NavBar />
      <section className="pt-20">{content}</section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#252525] leading-tight">
            Envie de nous confier <br />
            <span className="text-[#E54259]">un projet ?</span>
          </h2>
          <Link href="/contact" className="flex items-center gap-4 group">
            <div>
              <p className="font-semibold text-[#252525]">Contactez-nous !</p>
              <p className="text-sm text-[#252525]/60">Accéder au formulaire</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-[#E54259] flex items-center justify-center text-[#E54259] group-hover:bg-[#E54259] group-hover:text-white transition-all">→</div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}