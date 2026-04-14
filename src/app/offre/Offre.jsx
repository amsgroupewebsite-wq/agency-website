"use client"

import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer";
import DomainsScrollSection from "../../components/Domaines";
import OffreCard from "../../components/OfferCard";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
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

  const formations = [
    { id: 1, variant: "white", title: "Formations", description: "Le monde change. Les outils aussi. Pour rester à la hauteur, il faut apprendre vite, et bien. Nos formations sont pensées pour ceux qui veulent passer à l'action - tout de suite." },
    { id: 2, variant: "outline", title: "Food", description: "Expertise culinaire et gastronomique pour les marques de l'agroalimentaire et de la restauration." },
    { id: 3, variant: "plain", title: "Régie", description: "Gestion et optimisation des espaces publicitaires pour maximiser votre visibilité." },
    { id: 4, variant: "plain", title: "Événementiel", description: "Création et gestion d'événements sur-mesure pour engager votre audience." },
    { id: 5, variant: "plain", title: "Brand Content", description: "Stratégies de contenu innovantes pour renforcer votre marque." },
    { id: 6, variant: "cta" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation scroll pour le texte
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      {/* Section 1 — Hero */}
      <section className="pt-20 md:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            alt="offer-deco"
            width={1900}
            height={800}
            priority
            className="w-full object-cover h-[90vh]"
          />
        </div>

        {/* Section 2 - Services */}
        <section className="relative z-10 bg-[#252525] px-4 sm:px-6 pt-12 sm:pt-24 pb-20 sm:pb-40 min-h-screen md:-mt-32 rounded-t-2xl md:rounded-t-3xl">
          
          {/* Image mobile */}
          <div className="block md:hidden w-full mb-10 rounded-xl overflow-hidden">
            <Image
              src="/offre-deco.png"
              alt="offer-deco"
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-20 max-w-7xl mx-auto">
            
            {/* Titre sticky */}
            <div className="lg:sticky lg:top-24 lg:self-start lg:max-w-[320px] mb-10 lg:mb-0">
              <span className="text-xs text-white/50 uppercase tracking-wider">Offre de services</span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-white mt-2">
                Nos expertises métiers
              </h2>
            </div>

            {/* Liste des services */}
            <div className="flex-1">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="mt-10 sm:mt-16 pb-10 sm:pb-16 border-b border-white/10 last:border-none flex flex-col md:flex-row md:items-start md:justify-between gap-6 group"
                >
                  <div className="md:max-w-[70%]">
                    <h3 className="font-bold text-xl sm:text-2xl text-white group-hover:text-[#E54259] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base mt-3 text-white/70 leading-relaxed">
                      {item.disc}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-[#E54259] font-medium hover:opacity-80 transition-all duration-300 group/link"
                    >
                      <Image 
                        src="/flech.png" 
                        alt="Voir le projet" 
                        width={41} 
                        height={45} 
                        className="duration-300 group-hover/link:-translate-y-1 group-hover/link:scale-110 transition-all"
                      />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Clients logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center mt-16 sm:mt-24">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={220}
                  height={100}
                  className="w-auto h-12 sm:h-16 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3 - Domaines */}
        <div className="hidden md:block sticky top-0 z-0 w-full overflow-hidden">
          <Image
            src="/deco-offre.png"
            alt="offer-deco"
            width={1900}
            height={600}
            className="w-full object-cover h-[50vh] lg:h-[60vh]"
          />
        </div>

        <section className="relative z-10 bg-[#FFF8E8] px-4 sm:px-6 pt-12 sm:pt-24 pb-20 sm:pb-40 min-h-screen md:-mt-32 rounded-t-2xl md:rounded-t-3xl">
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-20 mb-12 lg:mb-20">
              <div className="flex-1">
                <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Offre sectorielle</span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide leading-tight text-[#252525] mt-2">
                  Nos domaines de prédilection
                </h2>
              </div>
              <p className="text-sm sm:text-base flex-1 text-[#252525]/80 leading-relaxed">
                Centrés citoyens, nous accompagnons des acteurs publics et privés engagés ou en transition sur des enjeux d'intérêt général. Forts de près de 20 ans d'expérience, nous avons développé des expertises solides dans plusieurs secteurs clés.
              </p>
            </div>

            
          </div>
          <DomainsScrollSection />
        </section>

        {/* Section 4 - Écosystème */}
        <section className="bg-white relative z-10 py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
              <div className="flex-1">
                <span className="text-xs text-[#b0b0b0] uppercase tracking-wider">Notre écosystème</span>
                <h2 className="text-[#252525] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-6">
                  Une agence augmentée
                </h2>
                <a 
                  href="#" 
                  className="inline-block px-6 py-3 bg-[#E54259] text-white rounded-lg hover:bg-[#c1354a] transition-all hover:scale-105"
                >
                  En savoir plus
                </a>
              </div>
              
              <p className="flex-1 text-gray-600 leading-relaxed">
                Bien plus qu'une agence, nous sommes un réseau : l'inventivité et la créativité de nos 50 collaborateurs permanents se nourrissent d'un collectif de partenaires à l'expertise pointue, afin de proposer des réponses sur-mesure à toutes vos problématiques de communication, quelles qu'elles soient.
              </p>
            </div>
          </div>
        </section>
        
        {/* Section 5 - Offres verticales */}
        <section className="bg-[#FFC9D1] relative z-10 py-12 sm:py-20 rounded-t-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20 mb-12 lg:mb-20">
              <div className="flex-1">
                <span className="text-[#E54259] text-xs uppercase tracking-wider font-semibold">Verticales</span>
                <h2 className="text-[#252525] text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                  Nos offres sur-mesure
                </h2>
              </div>
              
              <p className="flex-1 text-[#252525]/80 leading-relaxed">
                Parce que certains sujets sont plus complexes que d'autres, nous avons développé des expertises pointues sur certaines thématiques, afin de mieux répondre aux problématiques spécifiques de nos clients. Et toujours dans l'esprit citizen-centric qui nous anime !
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {formations.map((card) => (
                <OffreCard 
                  key={card.id}
                  variant={card.variant}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>   
        </section>
      </div>
    </>
  );
}