"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { articles } from "../lib/articles";

// --- Helpers ---
const estimateReadingTime = (article) => {
  const text = [
    article.intro,
    article.subintro,
    ...(article.contenu?.flatMap((s) => [s.titel, s.text, ...(s.bullets || []), s.outro]) || []),
  ]
    .filter(Boolean)
    .join(" ");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};

const LinkedInIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </svg>
);

export default function ArticleDetail({ article, onClose }) {
  const isModal = typeof onClose === "function";
  const readingTime = estimateReadingTime(article);

  const related = articles
    .filter((a) => a.slug !== article.slug && a.categorie === article.categorie)
    .slice(0, 3);

  const content = (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24">
      {/* Header nav */}
      <div className="flex items-center justify-between mb-8 md:mb-12">
        {isModal ? (
          <>
            <span className="text-xs uppercase tracking-[0.2em] text-[#252525]/50">
              {article.categorie}
            </span>
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="group w-10 h-10 rounded-full flex items-center justify-center
                         bg-[#E54259] text-white text-lg font-semibold
                         transition-all duration-300 ease-out
                         hover:scale-110 hover:-translate-y-1 hover:shadow-xl
                         active:scale-95 active:translate-y-0
                         border border-white/10 hover:border-white/30"
            >
              <span className="transition-transform duration-300 group-hover:rotate-90">✕</span>
            </button>
          </>
        ) : (
          <Link
            href="/actu"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#252525]/50 hover:text-[#E54259] transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Tous les articles
          </Link>
        )}
      </div>

      {/* Hero */}
      <header className="flex flex-col gap-6 mb-12 md:mb-16">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E54259]/10 text-[#E54259] font-medium uppercase tracking-wider">
            {article.categorie}
          </span>
          <span className="text-[#252525]/30">·</span>
          <span className="text-[#252525]/60">{article.date}</span>
          <span className="text-[#252525]/30">·</span>
          <span className="text-[#252525]/60">{readingTime} min de lecture</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#252525] leading-[1.05] tracking-tight text-balance">
          {article.title}
        </h1>

        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="text-lg md:text-xl text-[#252525]/75 leading-relaxed">
            {article.intro}
          </p>
          {article.subintro && (
            <p className="text-base md:text-lg text-[#252525]/55 leading-relaxed italic border-l-2 border-[#E54259]/40 pl-4">
              {article.subintro}
            </p>
          )}
        </div>
      </header>

      {/* Image principale */}
      {article.imgArticle && (
        <figure
          className="relative w-full rounded-2xl overflow-hidden mb-16 md:mb-20 bg-[#252525]/5 shadow-sm"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={article.imgArticle}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </figure>
      )}

      {/* Contenu + sidebar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
        {/* Corps de l'article */}
        <div className="md:col-span-2 flex flex-col gap-12 md:gap-14">
          {article.contenu?.map((section, i) => (
            <section key={i} className="flex flex-col gap-4">
              {section.titel && (
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl tabular-nums text-[#E54259]/70 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#252525] leading-tight tracking-tight">
                    {section.titel}
                  </h2>
                </div>
              )}

              {section.text && (
                <p className="text-base md:text-lg text-[#252525]/75 leading-[1.75] whitespace-pre-line">
                  {section.text}
                </p>
              )}

              {section.bullets?.length > 0 && (
                <ul className="flex flex-col gap-2.5 mt-1">
                  {section.bullets.map((b, k) => (
                    <li
                      key={k}
                      className="flex gap-3 text-base md:text-lg text-[#252525]/75 leading-relaxed"
                    >
                      <span className="mt-[0.7em] h-1.5 w-1.5 rounded-full bg-[#E54259] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.outro && (
                <p className="text-base md:text-lg text-[#252525]/75 leading-[1.75] mt-2">
                  {section.outro}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* Sidebar auteur */}
        <aside className="md:sticky md:top-24 flex flex-col gap-5 bg-white border border-[#252525]/8 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            {article.imgAuteur ? (
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                <Image
                  src={article.imgAuteur}
                  alt={article.auteur}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full bg-[#E54259]/10 flex items-center justify-center text-[#E54259] font-bold text-lg shrink-0">
                {article.auteur?.charAt(0) ?? "?"}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#252525]/40 mb-0.5">
                Écrit par
              </p>
              <p className="font-semibold text-[#252525] leading-tight truncate">
                {article.auteur}
              </p>
              <p className="text-sm text-[#252525]/55 truncate">{article.postAuteur}</p>
            </div>
          </div>

          {article.bioAuteur && (
            <p className="text-sm text-[#252525]/65 leading-relaxed border-t border-[#252525]/8 pt-5">
              {article.bioAuteur}
            </p>
          )}

          {article.urlLinkedin && (
            <Link
              href={article.urlLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profil LinkedIn de ${article.auteur}`}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-full bg-[#0A66C2] text-white text-sm font-medium hover:bg-[#084d96] transition-colors"
            >
              <LinkedInIcon className="h-4 w-4" />
              Profil LinkedIn
            </Link>
          )}
        </aside>
      </div>

      {/* Articles similaires */}
      {related.length > 0 && (
        <div className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-[#252525]/10">
          <div className="flex items-end justify-between mb-10 md:mb-12 gap-4">
            <h3 className="text-3xl md:text-4xl font-bold text-[#252525] tracking-tight">
              Articles similaires
            </h3>
            <Link
              href="/actu"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#252525]/60 hover:text-[#E54259] transition-colors shrink-0"
            >
              Voir tout <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {related.map((a) => (
              <Link key={a.slug} href={`/actu/${a.slug}`} className="group flex flex-col gap-4">
                <div
                  className="relative w-full rounded-xl overflow-hidden bg-[#252525]/5"
                  style={{ aspectRatio: "16/10" }}
                >
                  {a.imgArticle && (
                    <Image
                      src={a.imgArticle}
                      alt={a.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#252525]/40">
                    {a.categorie} · {a.date}
                  </p>
                  <p className="text-lg font-semibold text-[#252525] group-hover:text-[#E54259] transition-colors line-clamp-2 leading-snug">
                    {a.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // Mode modal
  if (isModal) return content;

  // Mode plein écran
  return (
    <>
      <NavBar />
      <section className="pt-20">{content}</section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto bg-[#252525] rounded-3xl px-6 sm:px-10 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            Envie de nous confier <br className="hidden sm:block" />
            <span className="text-[#E54259]">un projet ?</span>
          </h2>
          <Link
            href="/contact"
            className="group flex items-center gap-4 shrink-0 self-start md:self-end"
          >
            <div>
              <p className="font-semibold text-white">Contactez-nous !</p>
              <p className="text-sm text-white/60">Accéder au formulaire</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#E54259] flex items-center justify-center text-white text-lg group-hover:scale-110 group-hover:rotate-[-10deg] transition-transform duration-300">
              →
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}