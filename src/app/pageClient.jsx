"use client";

import NavBar from "../components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SoftAurora from "../components/SoftAurora";
import MetaBalls from "../components/MetaBalls";
import { useState } from "react";
import ValeurItem from "../components/ValeurItem";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: false, amount: 0.3 };

const valeurs = [
  {
    titre: "Placer l'humain au centre",
    desc: "Nous ne parlons pas à des cibles, mais à des personnes. Chaque stratégie que nous construisons part de l'écoute, de l'empathie et d'une compréhension fine des communautés que vous souhaitez toucher.",
  },
  {
    titre: "Agir avec responsabilité",
    desc: "Nous mettons tout en œuvre pour que chaque action soit réfléchie, mesurée et utile. De la création de contenu à la gestion des campagnes, nous privilégions la qualité à la quantité.",
  },
  {
    titre: "Servir l'impact réel",
    desc: "Nos stratégies ne visent pas la visibilité pour la visibilité. Elles visent des résultats concrets, mesurables, qui font avancer votre marque dans la bonne direction.",
  },
  {
    titre: "Innover avec éthique",
    desc: "Nous intégrons les nouvelles technologies — dont l'IA — comme des outils au service de votre stratégie, jamais comme une fin en soi. L'humain reste au cœur de chaque décision.",
  },
  {
    titre: "Construire sur le long terme",
    desc: "Une bonne communication ne se mesure pas au buzz du moment. Nous concevons des stratégies durables qui renforcent votre image dans le temps.",
  },
];

const expertises = [
  { label: "Site Web", href: "/offre/site-web", image: "/expertises/site-web.png" },
  { label: "Campagnes digitales", href: "/offre/campagnes", image: "/expertises/site-web.png" },
  { label: "Social media", href: "/offre/social-media", image: "/expertises/site-web.png" },
  { label: "Évènementiel", href: "/offre/evenementiel", image: "/expertises/site-web.png" },
  { label: "Identité de marque", href: "/offre/identite", image: "/expertises/site-web.png" },
  { label: "Stratégie & Conseil", href: "/offre/strategie", image: "/expertises/site-web.png" },
];

const clients = [
  { src: "/agency/clients/cisco.png", alt: "Cisco" },
  { src: "/agency/clients/inpha-medis.png", alt: "Inpha Medis" },
  { src: "/agency/clients/backerhughes.png", alt: "Baker Hughes" },
  { src: "/agency/clients/nestle.png", alt: "Nestlé" },
  { src: "/agency/clients/renault.png", alt: "Renault" },
  { src: "/agency/clients/sonatrach.png", alt: "Sonatrach" },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <NavBar />

      <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none lg:block">
        <SoftAurora
          speed={0.6} scale={1.5} brightness={1}
          color1="#FFF8E8" color2="#E5425922" color3="#EE848D"
          noiseFrequency={2.5} noiseAmplitude={1}
          bandHeight={0.5} bandSpread={1}
          octaveDecay={0.1} layerOffset={0}
          colorSpeed={1} enableMouseInteraction mouseInfluence={0.25}
        />
      </div>

      {/* ===================== DESKTOP ===================== */}
      <div className="hidden lg:block">

        {/* Blurs déco */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-30 -left-45  w-full">
            <Image src="/agency/blur6.svg" alt="" width={1815} height={800} className="select-none w-full" draggable="false" />
          </div>
             <div className="absolute -top-60 -left-45  w-full">
            <Image src="/agency/blur6.svg" alt="" width={1815} height={800} className="select-none w-full" draggable="false" />
          </div>
        </div>

        {/* Hero desktop */}
        <section className="relative w-full min-h-screen flex flex-row items-center justify-between px-16 pt-25">
          <div className="absolute left-200 inset-0">
            {/* <MetaBalls
              color="#ffffff" cursorBallColor="#ffffff"
              cursorBallSize={2} ballCount={7} animationSize={30}
              enableMouseInteraction enableTransparency={true}
              hoverSmoothness={0.15} clumpFactor={1} speed={0.3}
            /> */}
          </div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={viewport} variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 w-1/2 "
          >
            <Image
              src="/agency/agency-logo.svg" alt="Logo AMS Agency"
              width={720} height={550} loading="eager" priority
              style={{ height: "auto" }} className="select-none w-[600px]"
            />
            <p className="text-white text-2xl pb-0 mb-1 leading-relaxed md:text-lg w-9/12 md:w-full  ">
              AMS Agency, le partenaire stratégique qui donne vie à des expériences mémorables.
            </p>
            <Link
              href="/contact"
              className="bg-[#E54259] text-white text-lg font-semibold px-8 py-4 rounded-full border border-white hover:scale-105 transition-transform duration-300 "
            >
              Contactez-nous
            </Link>
          </motion.div>
        </section>

        {/* 
          WRAPPER OVERLAP — la clé du fix :
          - La section sombre est sticky top-0 et fait 100vh de haut
          - Le wrapper fait 200vh : 100vh pour que la section sombre soit
            entièrement visible, + 100vh de scroll avant que la peach arrive
          - La section peach est en flux normal après le wrapper
        */}
        <div className="relative" style={{ height: "150vh" }}>
          <section
            className="sticky top-10 z-10 bg-[#252525] mt-0 rounded-t-3xl px-8 lg:pl-32 pt-30 md:pt-20 md:pb-20 overflow-hidden"
            style={{ height: "100vh" }}
          >
            <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
              <div className="flex flex-col lg:flex-row lg:gap-40">

                {/* Titre */}
                <div className="lg:max-w-[280px] shrink-0 mb-10 md:mb-1 lg:mb-0">
                  <span className="text-xs text-white/50 uppercase tracking-widest">Offre de services</span>
                  <h2 className="font-bold text-5xl lg:text-6xl tracking-wide leading-tight text-white mt-3">
                    Nos expertises métiers
                  </h2>
                  <div className="mt-8 md:mt-2">
                    <Link
                      href="/offre"
                      className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200"
                    >
                      Découvrir notre offre <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Liste expertises */}
                <div className="flex-1 flex flex-col">
                  {expertises.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="group relative flex items-center justify-between border-b border-white/10 py-6 md:py-1 cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <h2
                        className="font-bold text-4xl lg:text-6xl md:text-2xl tracking-tight leading-none transition-all duration-300"
                        style={{
                          color: hoveredIndex === null ? "#ffffff"
                            : hoveredIndex === i ? "#E72048"
                            : "rgba(255,255,255,0.25)",
                          transform: hoveredIndex === i ? "translateX(12px)" : "translateX(0)",
                        }}
                      >
                        {item.label}
                      </h2>
                      {hoveredIndex === i && item.image && (
                        <div
                          className="absolute right-0 top-[110%] -translate-y-1/2 w-96 h-64 rounded-xl overflow-hidden pointer-events-none z-10"
                          style={{ animation: "fadeScaleIn 0.2s ease forwards" }}
                        >
                          <Image src={item.image} alt={item.label} fill className="object-cover" />
                        </div>
                      )}
                    </Link>
                  ))}
                  <div className="border-t border-white/10" />
                </div>

              </div>
            </div>
          </section>
        </div>

        {/* Section peach — hors du wrapper, arrive en flux normal après les 200vh */}
        <section className="relative z-20 bg-[#FFCCB8] -mt-32 py-30 rounded-t-3xl">
          <div className="max-w-6xl mx-auto px-8 lg:pl-32">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-30 lg:gap-20 py-20">
              <div className="lg:sticky lg:top-32 lg:self-start lg:max-w-[340px] shrink-0">
                <span className="text-xs text-black/50 uppercase tracking-widest">Notre ligne de conduite</span>
                <h2 className="font-bold text-start text-5xl lg:text-6xl tracking-wide leading-tight text-[#333] mt-3">
                  Donner aux marques le pouvoir <span className="text-[#E72048]">d'agir.</span>
                </h2>
              </div>
              <div className="flex-1 flex flex-col divide-y divide-black/10">
                {valeurs.map((item, i) => (
                  <ValeurItem key={i} titre={item.titre} desc={item.desc} />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center px-8 lg:px-32 pb-20">
            {clients.map((client, i) => (
              <div key={i} className="group flex items-center justify-center p-4 rounded-xl transition-all duration-300">
                <Image src={client.src} alt={client.alt} width={220} height={100} className="w-auto h-22" />
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="lg:hidden flex flex-col min-h-screen">

        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{ background: "linear-gradient(160deg, #FFF8E8 0%, #E5425922 50%, #EE848D 100%)" }}
        />

        {/* Hero mobile */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-16 pb-14 min-h-screen gap-8">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle, rgba(228,62,86,0.25) 0%, rgba(29,97,171,0.15) 50%, transparent 75%)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-6 w-full"
          >
            <Image
              src="/agency/agency-logo.svg" alt="Logo AMS Agency"
              width={320} height={240} loading="eager" priority
              style={{ height: "auto" }} className="select-none w-[260px] sm:w-[300px]"
            />
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xs">
              AMS Agency est un partenaire stratégique dédié à transformer vos projets en expériences mémorables
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-b from-[#E43E56] to-[#1D61AB4D] text-white text-base font-semibold px-8 py-3.5 rounded-full border border-white/60 hover:scale-105 active:scale-95 transition-transform duration-300 mt-2"
            >
              Contactez nous
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* Section sombre mobile */}
        <section className="relative z-10 bg-[#252525] -mt-10 rounded-t-2xl px-6 pt-16 pb-20 min-h-screen">
          <div className="max-w-xl mx-auto">
            <span className="text-xs text-white/50 uppercase tracking-widest">Offre de services</span>
            <h2 className="font-bold text-4xl tracking-wide leading-tight text-white mt-3 mb-8">
              Nos expertises métiers
            </h2>
            <div className="flex flex-col">
              {expertises.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center justify-between border-b border-white/10 py-5 cursor-pointer group"
                >
                  <h3 className="font-bold text-2xl text-white group-hover:text-[#E72048] group-hover:translate-x-2 transition-all duration-300">
                    {item.label}
                  </h3>
                  <span className="text-white/30 group-hover:text-[#E72048] transition-colors duration-300 text-lg">→</span>
                </Link>
              ))}
              <div className="border-t border-white/10" />
            </div>
            <div className="mt-10">
              <Link
                href="/offre"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200"
              >
                Découvrir notre offre <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section peach mobile */}
        <section className="relative z-10 bg-[#FFCCB8] -mt-10 rounded-t-2xl px-6 pt-16 pb-20">
          <div className="max-w-xl mx-auto">
            <span className="text-xs text-black/50 uppercase tracking-widest">Notre ligne de conduite</span>
            <h2 className="font-bold text-4xl tracking-wide leading-tight text-[#333] mt-3 mb-10">
              Donner aux marques le pouvoir <span className="text-[#E72048]">d'agir.</span>
            </h2>
            <div className="flex flex-col divide-y divide-black/10">
              {valeurs.map((item, i) => (
                <ValeurItem key={i} titre={item.titre} desc={item.desc} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center mt-16 px-6">
            {clients.map((client, i) => (
              <div key={i} className="flex items-center justify-center p-4 rounded-xl">
                <Image src={client.src} alt={client.alt} width={220} height={100} className="w-auto h-14" />
              </div>
            ))}
          </div>
        </section>

      </div>

      <style>{`
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: translateY(-50%) scale(0.92); }
          to   { opacity: 1; transform: translateY(-50%) scale(1); }
        }
      `}</style>

      <Footer />
    </>
  );
}