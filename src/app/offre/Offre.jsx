"use client"

import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer";
import DomainsScrollSection from "../../components/Domaines";
import { expertise as expertises } from "../../lib/expertise";
import { clients } from "../../lib/home";
import ClientsGrid from "../../components/ClientsGrid";
import { Contact } from "lucide-react";
import Contactus from "../../components/Contactus";


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const words = ["impactante", "mémorable", "efficace"];



  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <NavBar />

      {/* Section 1 — Hero */}
      <section className="pt-20 md:pt-28 px-4 sm:px-6 lg:px-30 max-w-8xl mx-auto">
        <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Offre</span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 w-full text-left font-bold tracking-tight 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <h1 className="text-[#252525] leading-tight">
            Boostez votre communication en plus{" "}
            <br/>
            <span className="inline-flex items-center">
              <ContainerTextFlip words={words} />
            </span>
            <span className="text-[#E54259]">.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg max-w-6xl py-6 sm:py-10 text-gray-600 leading-relaxed"
        >
          Découvrez notre offre de services de communication sur mesure, conçue pour propulser votre marque vers de nouveaux sommets. Que vous soyez une startup ambitieuse ou une entreprise établie, notre équipe d'experts est prête à créer des stratégies innovantes et percutantes qui captivent votre audience et génèrent des résultats tangibles.
        </motion.p>
      </section>

      {/* Wrapper sticky pour l'effet overlap */}
      <div className="relative">

        {/* Image sticky — desktop uniquement */}
        <div className="hidden md:block sticky top-0 z-0 w-full overflow-hidden">
          <Image
            src="/offre-deco.png"
            alt=""
            width={1900}
            height={800}
            priority
            sizes="100vw"
            className="w-full object-cover h-[90vh]"
          />
        </div>

        {/* Section 2 - Services */}
        <section className="relative z-10 bg-[#252525] max-w-8xl px-4 sm:px-6 lg:px-30 pt-12 sm:pt-24 pb-20 sm:pb-40 min-h-screen md:-mt-32 rounded-t-2xl md:rounded-t-3xl">

          {/* Image mobile */}
          <div className="block md:hidden w-full mb-10 rounded-xl overflow-hidden">
            <Image
              src="/offre-deco.png"
              alt=""
              width={800}
              height={400}
              sizes="100vw"
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-20 max-w-8xl mx-auto">

            {/* Titre sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start lg:max-w-[320px] mb-10 lg:mb-0">
              <span className="text-xs text-white/50 uppercase tracking-wider">Offre de services</span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-white mt-2">
                Nos expertises métiers
              </h2>
            </div>

            {/* Liste des services — source unique : lib/expertise */}
            <div className="flex-1">
              {expertises.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="mt-10 sm:mt-16 pb-10 sm:pb-16 border-b border-white/10 last:border-none flex flex-col md:flex-row md:items-start md:justify-between gap-6 group"
                >
                  <Link
                    href={`/offre/${item.slug}`}
                    className="md:max-w-[70%] block"
                  >
                    <h3 className="font-bold text-xl sm:text-2xl text-white group-hover:text-[#E54259] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base mt-3 text-white/70 leading-relaxed">
                      {item.intro || item.subservices?.join(" / ")}
                    </p>
                  </Link>

                  <div className="shrink-0">
                    <Link
                      href={`/offre/${item.slug}`}
                      aria-label={`En savoir plus sur ${item.title}`}
                      className="inline-flex items-center gap-2 text-[#E54259] font-medium hover:opacity-80 transition-all duration-300 group/link"
                    >
                      <Image
                        src="/flech.png"
                        alt=""
                        width={41}
                        height={45}
                        className="duration-300 group-hover/link:-translate-y-1 group-hover/link:scale-110 transition-all"
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clients logos */}
          <ClientsGrid className="mt-20" />
        </section>

        {/* Section 3 - Domaines */}
        <div className="hidden md:block sticky top-0 z-0 w-full overflow-hidden">
          <Image
            src="/deco-offre.png"
            alt=""
            width={1900}
            height={600}
            sizes="100vw"
            className="w-full object-cover h-[50vh] lg:h-[60vh]"
          />
        </div>

        <section className="relative z-10 bg-[#FFF8E8] px-4 sm:px-6 pt-12 sm:pt-24 pb-20 sm:pb-40 min-h-screen md:-mt-32 rounded-t-2xl md:rounded-t-3xl">
          <div className="max-w-8xl mx-auto px-4 lg:px-30">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-20 mb-12 lg:mb-20">
              <div className="flex-1">
                <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Offre sectorielle</span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-[#252525] mt-2">
                  Nos domaines de prédilection
                </h2>
              </div>
              <p className="text-sm sm:text-base flex-1 text-[#252525]/80 leading-relaxed">
                Profondément ancrés en Algérie, nous accompagnons les institutions et les entreprises dans leurs projets à fort impact, qu'elles soient en phase de croissance, de modernisation ou de transition. Notre agence met à disposition des expertises reconnues dans des secteurs clés pour contribuer à un développement durable et innovant.
              </p>
            </div>
          </div>
          <DomainsScrollSection />
        </section>

        {/* Section 4 - Écosystème */}
        <section className="bg-white relative z-10 py-12 sm:py-20">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-30">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
              <div className="flex-1">
                <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Notre écosystème</span>
                <h2 className="text-[#252525] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-6">
                  Une agence augmentée
                </h2>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-[#E54259] text-white rounded-lg hover:bg-[#c1354a] transition-all hover:scale-105"
                >
                  En savoir plus
                </Link>
              </div>

              <p className="flex-1 text-gray-600 leading-relaxed">
                Une agence, oui — mais surtout un réseau. Aux talents de nos équipes permanentes s'ajoute l'expertise pointue de nos partenaires, pour bâtir des réponses sur-mesure à chacun de vos défis de communication.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Contactus />
      <Footer />
    </>
  );
}