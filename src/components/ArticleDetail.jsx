"use client";

import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { articles } from "../lib/articles";

export default function ArticleDetail({ article, onClose }) {
  const isModal = typeof onClose === "function";

  const related = articles
    .filter((a) => a.slug !== article.slug && a.categorie === article.categorie)
    .slice(0, 3);

  const content = (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 pb-32 no-scrollbar">

      {/* Header nav */}
      <div className="flex items-center justify-between mb-10">
        {isModal ? (
          <>
            <span className="text-xs text-[#252525]/50">{article.categorie}</span>
            <button
              onClick={onClose}
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
            className="text-xs text-[#252525]/50 hover:text-[#E54259] transition-colors"
          >
            ← Tous les articles
          </Link>
        )}
      </div>

      {/* Hero */}
      <div className="flex flex-col gap-4 mb-12">
        <p className="text-sm text-[#252525]/50">{article.categorie} · {article.date}</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#252525] leading-tight">
          {article.title}
        </h1>
        <p className="text-lg text-[#252525]/70 leading-relaxed max-w-3xl">{article.intro}</p>
        {article.subintro && (
          <p className="text-base text-[#252525]/50 leading-relaxed max-w-3xl">{article.subintro}</p>
        )}
      </div>

      {/* Image principale */}
      {article.imgArticle && (
        <div className="relative w-full rounded-2xl overflow-hidden mb-16" style={{ aspectRatio: "16/9" }}>
          <Image
            src={article.imgArticle}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      )}

      {/* Contenu + sidebar auteur */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">

        {/* Corps de l'article */}
        <div className="md:col-span-2 flex flex-col gap-10">
          {article.contenu?.map((section, i) => (
            <div key={i} className="flex flex-col gap-3">
              {section.titel && (
                <h2 className="text-2xl font-bold text-[#252525]">{section.titel}</h2>
              )}
              {section.text && (
                <p className="text-base text-[#252525]/70 leading-relaxed">{section.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar auteur */}
        <aside className="md:sticky md:top-6 flex flex-col gap-5 bg-[#F5F5F5] rounded-2xl p-6">
          {article.imgAuteur ? (
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={article.imgAuteur}
                alt={article.auteur}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          ) : (
            /* Placeholder avatar si pas d'image */
            <div className="w-16 h-16 rounded-full bg-[#E54259]/20 flex items-center justify-center text-[#E54259] font-bold text-xl">
              {article.auteur?.charAt(0) ?? "?"}
            </div>
          )}

          <div>
            <p className="font-semibold text-[#252525]">{article.auteur}</p>
            <p className="text-sm text-[#252525]/50">{article.postAuteur}</p>
          </div>

          {article.bioAuteur && (
            <p className="text-sm text-[#252525]/60 leading-relaxed">{article.bioAuteur}</p>
          )}

          {article.urlLinkedin && (
            <Link
              href={article.urlLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#E54259] hover:underline transition-colors"
            >
              Voir le profil LinkedIn →
            </Link>
          )}
        </aside>

      </div>

      {/* Articles liés */}
      {related.length > 0 && (
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-[#252525] mb-8">Articles similaires</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a) => (
              <Link
                key={a.slug}
                href={`/actu/${a.slug}`}
                className="group flex flex-col gap-3 rounded-2xl overflow-hidden border border-[#252525]/10 hover:border-[#E54259]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {a.imgArticle && (
                  <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                    <Image
                      src={a.imgArticle}
                      alt={a.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-4 flex flex-col gap-1">
                  <p className="text-xs text-[#252525]/40">{a.categorie} · {a.date}</p>
                  <p className="font-semibold text-[#252525] group-hover:text-[#E54259] transition-colors line-clamp-2">
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

  // Mode plein écran (accès direct / refresh)
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
            <div className="w-10 h-10 rounded-full border-2 border-[#E54259] flex items-center justify-center text-[#E54259] group-hover:bg-[#E54259] group-hover:text-white transition-all">
              →
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}