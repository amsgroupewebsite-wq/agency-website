"use client";

import { motion } from "motion/react";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import TeamScrollSection from "../../components/TeamScrollSection";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Link from "next/link";

const words = [
  "passion",
  "motivation",
  "créativite",
  
  
];

export default function TeamPage() {
  return (
    <>
      <NavBar />

      <section className="mx-auto w-full  max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
        <span className="block text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#b0b0b0] mb-3 sm:mb-4">
          Équipe
        </span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-balance font-bold tracking-tight leading-[1.1] text-[#252525] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6"
        >
          Unis par la {" "}
          
          <span className="inline-flex items-center align-middle">
            <ContainerTextFlip words={words} />
          </span>
          <span className="text-[#E54259]">.</span>
        </motion.h1>
      </section>

      <section className="w-full bg-[#FFF8E8] mt-30 py-12 md:py-20">
        <TeamScrollSection />
      </section>

        <section className="w-full bg-[#282C2E] py-16 sm:py-20 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* En-tête */}
    <div className="flex flex-col gap-2 mb-10 lg:mb-16">
      <span className="text-white/65 text-sm sm:text-base uppercase tracking-wider">
        Responsable d'agence
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Nihad Ahmed Bensoltane
      </h2>
      <div className="w-16 h-1 bg-[#E54259] mt-2" />
    </div>

    {/* Bloc principal : photo + bio */}
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center lg:items-start mb-16 lg:mb-24">
      <div className="relative mx-auto lg:mx-0 flex-shrink-0">
        <div className="absolute inset-0 bg-[#E54259]/20 rounded-full blur-2xl" aria-hidden="true" />
        <Image
          src="/team/nihad.jpeg"
          alt="Photo de Nihad Ahmed Bensoltane"
          width={400}
          height={400}
          priority
          className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-[#E54259] shadow-2xl"
        />
      </div>

      <div className="flex flex-col gap-6 text-center lg:text-left">
       
        <p className="text-white/70 text-base sm:text-lg leading-relaxed py-16">
          Chez AMS Agency, on conçoit des stratégies multicanales pour donner
          aux marques la visibilité qu'elles méritent. Ensemble, nous
          transformons les idées en campagnes efficaces, alignées sur les
          enjeux business et les attentes des publics.
        </p>

        {/* Compétences */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
          {[
            "Stratégie marketing",
            "Communication 360",
            "Image de marque",
            "Direction créative",
            "Leadership",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 text-sm text-white/90 border border-white/20 rounded-full hover:border-[#E54259] hover:text-[#E54259] transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start mt-2">
          
          <a
            href="https://www.linkedin.com/in/nihad-ahmed-bensoltane-282585276"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E54259] hover:bg-[#c93649] text-white text-sm font-medium rounded-full transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            
          </a>
        </div>
      </div>
    </div>


  </div>
  <section className="w-full bg-[#282C2E] mt-20 lg:mt-30 py-16 sm:py-20 lg:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      {/* Colonne gauche : titre + CTA */}
      <div className="flex flex-col">
        <span className="text-white/65 text-sm sm:text-base uppercase tracking-wider mb-4">
          Recrutement
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8">
          Nos offres <br className="hidden sm:block" />
          d'emploi
        </h2>

        {/* CTA Candidature spontanée */}
        <div className="bg-[#FFC9D1] flex flex-col gap-4 p-6 sm:p-7 rounded-2xl w-full sm:max-w-sm mt-4">
          <h3 className="text-base sm:text-lg font-bold text-[#282C2E]">
            Candidature spontanée
          </h3>
          <p className="text-sm text-[#282C2E]/75">
            Envoyez-nous votre profil — nous étudions chaque candidature.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#282C2E] hover:bg-black text-white text-sm font-medium rounded-full transition-colors w-fit mt-1"
          >
            Postuler maintenant
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Colonne droite : liste des offres */}
      <div className="flex flex-col">
        {[
          {
            title: "Stage — Consultant·e études et réputation H/F",
            date: "22.10.25",
            slug: "contact",
          },
          {
            title: "Stage — Consultant·e social media H/F",
            date: "22.10.25",
            slug: "contact",
          },
          {
            title: "CDI — Consultant·e social media santé confirmé H/F",
            date: "22.10.25",
            slug: "contact",
          },
        ].map((job, idx) => (
          <Link
            key={idx}
            href={`/${job.slug}`}
            className={`group flex items-start justify-between gap-6 py-6 sm:py-7 ${
              idx !== 0 ? "border-t border-white/10" : ""
            } hover:px-2 transition-all`}
          >
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E54259] transition-colors leading-snug">
                {job.title}
              </h3>
              <span className="text-sm text-white/50">{job.date}</span>
            </div>

            {/* Bouton flèche circulaire */}
            <span
              className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#E54259] text-[#E54259] group-hover:bg-[#E54259] group-hover:text-white transition-all flex-shrink-0 mt-1"
              aria-hidden="true"
            >
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>


        </section>

        
      <Footer />
    </>
  );
}