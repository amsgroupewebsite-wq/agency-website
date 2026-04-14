"use client";

import Image from "next/image";
import Actu from "../../components/Actu";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-40 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Texte intro */}
        <div className="flex flex-col max-w-3xl items-start justify-start gap-10">
          <h1 className="text-xs text-[#252525]">Nos actualités</h1>
          <h2 className="text-7xl text-[#252525] font-bold">
            En ce moment{" "}
            <span className="text-[#E82248] text-7xl font-bold">à l'agence</span>
          </h2>
          <p className="text-base text-[#252525]">
            Tous les moyens sont bons (ou presque) pour suivre nos aventures,
            dernières tendances, coups de cœur de l'équipe, nouveaux postes,
            nouveaux clients, dernières réalisations...
          </p>
        </div>

        {/* Card newsletter */}
        <div className="w-full flex flex-col justify-center bg-[#FFCCB8] gap-8 my-16 rounded-2xl p-6 sm:p-8 lg:p-10">

          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-transparent flex items-center justify-center shrink-0">
            <Image src="/mail.png" alt="" width={65} height={46} aria-hidden="true" />
          </div>

          <h2 className="text-5xl font-bold leading-snug text-[#252525]">
            S'abonner à la newsletter{" "}
            <span className="text-[#E54259]">PICKS</span>
          </h2>

          <p className="text-sm sm:text-base text-[#252525]/90 leading-relaxed">
            Tous les 15 jours, le meilleur des nouvelles tendances du digital dans votre boîte mail.
          </p>

          <a
            href="/Newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm sm:text-base font-medium text-white bg-[#E54259] hover:bg-[#c73a4f] active:bg-[#b0323f] transition-all duration-200 w-full lg:w-auto"
          >
            S'abonner
          </a>

        </div>

      </section>

      <section>
        <Actu />
      </section>
    </>
  );
}