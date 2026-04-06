"use client"

import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import Image from "next/image";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer";

export default function Home() {
  const words = ["impactante", "mémorable", "efficace"];
  const items = [
    {
      title: "Sites internet",
      disc: "Cadrage stratégique / Recherche et tests utilisateurs / Conception UX-UI / Design systems / Ecoconception / Roadmap d'optimisation SEO, analytics et de parcours"
    },
    {
      title: "Campagnes de communication",
      disc: "Campagnes social media organiques / Campagnes d'influence"
    },
    {
      title: "Contenu digital",
      disc: "Stratégies éditoriales / Rédaction en chef / Gouvernance et animation éditoriale / Conception rédaction / Création graphique et audiovisuelle / Ecritures expertes (langage claire, SEO, UX-writing, plumes…)"
    },
    {
      title: "Identité et stratégie de marque",
      disc: "Plateforme de marque / Charte graphique / Logotype / Naming / Signature / Ton de voix "
    },
  ];

  const clients = [
                      { src: "/agency/clients/cisco.png", alt: "Cisco" },
                      { src: "/agency/clients/inpha-medis.png", alt: "Inpha Medis" },
                      { src: "/agency/clients/backerhughes.png", alt: "Baker Hughes" },
                      { src: "/agency/clients/nestle.png", alt: "Nestlé" },
                      { src: "/agency/clients/renault.png", alt: "Renault" },
                      { src: "/agency/clients/sonatrach.png", alt: "Sonatrach" },
                    ];


  return (
    <>
      <NavBar />

      {/* Section 1 — Hero */}
      <section className="pt-20 md:pt-30 px-4 sm:px-6 flex flex-col items-start max-w-6xl mx-auto">
        <span className="text-xs text-[#b0b0b0]">Offre</span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={cn(
            "mb-6 w-full text-left text-3xl sm:text-4xl leading-normal font-bold tracking-tight md:text-5xl lg:text-7xl",
          )}
        >
          <h1 className="inline text-[#252525]">
              Boostez votre communication en plus{" "}
              <span className="inline-flex items-center align-middle">
                <ContainerTextFlip words={words} />
              </span>
               <span className="text-[#E54259]">.</span>
            </h1>
         
        </motion.div>
        <p className="text-sm sm:text-base mb-10 max-w-6xl">
          Découvrez notre offre de services de communication sur mesure, conçue pour propulser votre marque vers de nouveaux sommets. Que vous soyez une startup ambitieuse ou une entreprise établie, notre équipe d'experts est prête à créer des stratégies innovantes et percutantes qui captivent votre audience et génèrent des résultats tangibles. Avec notre approche personnalisée, nous transformons vos objectifs en campagnes mémorables qui résonnent avec votre public cible. Faites le choix de l'excellence et laissez-nous vous accompagner dans votre succès.
        </p>
      </section>

      {/* Wrapper sticky pour l'effet overlap */}
      <div className="relative">

        {/* Image sticky — desktop uniquement, cachée sur mobile */}
        <div className="hidden sm:block sticky top-0 z-0 w-full overflow-hidden">
          <Image
            src="/offre-deco.png"
            alt="offer-deco"
            width={1900}
            height={600}
            className="w-full object-cover h-[40vh] sm:h-[50vh] md:h-auto"
          />
        </div>

        {/* Section 2 */}
        <section
          className="
            relative z-10 bg-[#252525]
            px-4 sm:px-6
            pt-12 sm:pt-24
            pb-20 sm:pb-40
            min-h-screen
            sm:-mt-32
            rounded-t-2xl sm:rounded-t-3xl
          "
        >
          {/* Image visible uniquement sur mobile, dans la section */}
          <div className="block sm:hidden w-full mb-10 rounded-xl overflow-hidden">
            <Image
              src="/offre-deco.png"
              alt="offer-deco"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="
            flex flex-col gap-10
            lg:flex-row lg:gap-40
            max-w-6xl mx-auto
          ">

            {/* Titre sticky sur desktop */}
            <div className="lg:sticky lg:top-50 lg:self-start lg:max-w-[280px] ">
              <span className="text-xs text-white opacity-50">Offre de services</span>
              <h2 className="font-bold text-4xl  sm:text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight text-white mt-1">
                Nos expertises métiers
              </h2>
            </div>

            {/* Liste des items */}
              <div className="flex-1">
  {items.map((item, index) => (
    <div
      key={index}
      className="
        mt-10 sm:mt-16
        pb-10 sm:pb-16
        border-b border-white/10
        last:border-none
        flex flex-col md:flex-row md:items-center md:justify-between gap-6
      "
    >
      {/* LEFT: contenu */}
      <div className="md:max-w-[70%]">
        <h3 className="font-bold text-lg sm:text-xl text-white">
          {item.title}
        </h3>
        <p className="text-sm sm:text-lg mt-3 text-white opacity-70 leading-relaxed">
          {item.disc}
        </p>
      </div>

      {/* RIGHT: action avec flèche à côté du texte */}
      <div className="shrink-0">
        <a
          href="#"
          className="
            inline-flex items-center gap-2
            text-[#E54259]
            font-medium
            hover:opacity-80
            hover:gap-3
            transition-all
            duration-300
            group
          "
        >
          {/* <span>Naviguer</span> */}
          <svg 
             className="
               w-10 h-10 
               transition-all duration-300
               group-hover:translate-x-1.5
               group-hover:scale-110
               bg-[#E54259]
               rounded-full
               text-white
               p-2
             " 
             fill="none" 
             stroke="currentColor" 
             strokeWidth={2}
             viewBox="0 0 24 24"
             aria-hidden="true"
>           
             <path 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               d="M17 8l4 4m0 0l-4 4m4-4H3"
             />
          </svg>
        </a>
      </div>

    </div>
  ))}
              </div>

                

          </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
                    {clients.map((client, i) => (
                      <div
                        key={i}
                        className="group flex items-center justify-center p-4 rounded-xl transition-all duration-300"
                      >
                        <Image
                          src={client.src}
                          alt={client.alt}
                          width={220}
                          height={100}
                          className="
                            w-auto h-22 
                          "
                        />
                      </div>
                    ))}
                  </div>
        </section>

      </div>
      <Footer />
    </>
  );
}