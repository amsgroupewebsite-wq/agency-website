"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SoftAurora from "../components/SoftAurora";
import ValeurItem from "../components/ValeurItem";

import ExpertiseDesktop from "../components/ExpertiseDesktop";
import ExpertiseMobile from "../components/ExpertiseMobil";
import ClientsGrid from "../components/ClientsGrid";
import { valeurs } from "../lib/home";

//
const fadeUp = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};
const viewport = { once: false, amount: 0.3 };


export default function Home() {
  return (
    <>
  

      {/* Aurora background — desktop only */}
      <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none lg:block" aria-hidden="true">
        <SoftAurora
          speed={0.6} scale={1.5} brightness={1}
          color1="#FFF8E8" color2="#E5425922" color3="#EE848D"
          noiseFrequency={2.5} noiseAmplitude={1}
          bandHeight={0.5} bandSpread={1}
          octaveDecay={0.1} layerOffset={0}
          colorSpeed={1} enableMouseInteraction mouseInfluence={0.25}
        />
      </div>

      {/* ══════════════════════ DESKTOP ══════════════════════ */}
      <div className="hidden lg:block">

        {/* Decorative blur */}
        <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none" aria-hidden="true">
          <Image
            src="/agency/blur6.svg" alt=""
            width={1815} height={800}
            className="absolute -top-30 -left-45 w-full select-none"
            draggable="false"
          />
        </div>

        {/* Hero */}
        <section className="relative w-full min-h-screen flex items-center justify-between px-16 pt-25">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={viewport} variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 w-1/2"
          >
            <Image
              src="/agency/agency-logo.svg" alt="Logo AMS Agency"
              width={720} height={550} loading="eager" priority
              style={{ height: "auto" }} className="select-none w-[600px]"
            />
            <p className="text-white text-2xl leading-relaxed w-9/12">
              AMS Agency, le partenaire stratégique qui donne vie à des expériences mémorables.
            </p>
            <Link
              href="/contact"
              className="bg-[#E54259] text-white text-lg font-semibold px-8 py-4 rounded-full border border-white hover:scale-105 transition-transform duration-300"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </section>

    
{/* Dark section (sticky overlap) */}
<div 
  className="relative p-0 m-0 h-[150svh] lg:h-[200svh] xl:h-[150svh]"
>
  <section
    className="sticky top-0 lg:-top-65 xl:top-0 z-10 bg-[#252525] rounded-t-3xl 
               px-6 md:px-10 lg:pl-24 xl:pl-32 
               pt-12 md:pt-1 lg:pt-16 xl:pt-24
               h-[150svh] lg:h-[270svh] xl:h-svh"
  >
    <div className="max-w-7xl mx-auto h-full flex flex-col justify-start">
      <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
        <span className="text-xs text-white/50 uppercase tracking-widest">
          Offre de services
        </span>
        <ExpertiseDesktop />
        <div className="mt-4 md:mt-6 lg:mt-8 xl:mt-10">
          <Link
            href="/offre"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white 
                       text-xs md:text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Découvrir notre offre <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
</div>


{/* Peach section */}
<section className="relative z-20 bg-[#FFCCB8] rounded-t-3xl
                   -mt-16 md:-mt-60 lg:-mt-28 xl:-mt-40 md:z-50">
  <div className="max-w-7xl mx-auto 
                  px-6 md:px-10 lg:pl-24 xl:pl-32 lg:pr-12 xl:pr-16">
    <div className="flex flex-col lg:flex-row items-start justify-between 
                    gap-10 md:gap-14 lg:gap-16 xl:gap-32 
                    py-12 md:py-16 lg:py-20 xl:py-24">

      <div className="lg:sticky lg:top-24 xl:top-28 lg:self-start 
                      lg:max-w-[260px] xl:max-w-xs 2xl:max-w-sm shrink-0">
        <span className="text-xs text-black/50 uppercase tracking-widest">
          Notre ligne de conduite
        </span>
        <h2 className="font-bold leading-tight tracking-wide text-[#333] mt-3
                       text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Donner aux marques le pouvoir{" "}
          <span className="text-[#E72048]">d'agir.</span>
        </h2>
      </div>

      <div className="flex-1 flex flex-col divide-y divide-black/10 min-w-0">
        {valeurs.map((item, i) => (
          <ValeurItem key={i} titre={item.titre} desc={item.desc} />
        ))}
      </div>

    </div>
  </div>

  <ClientsGrid 
    className="px-6 md:px-10 lg:px-24 xl:px-32 pb-12 md:pb-16 lg:pb-20 xl:pb-24" 
    imageClassName="w-auto h-16 md:h-18 lg:h-20 xl:h-24" 
  />
</section>

      </div>

      {/* ══════════════════════ MOBILE ══════════════════════ */}
      <div className="lg:hidden flex flex-col min-h-screen">

        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{ background: "linear-gradient(160deg, #FFF8E8 0%, #E5425922 50%, #EE848D 100%)" }}
          aria-hidden="true"
        />

        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-16 pb-14 min-h-screen gap-8">
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none -z-10"
            style={{ background: "radial-gradient(circle, rgba(228,62,86,0.25) 0%, rgba(29,97,171,0.15) 50%, transparent 75%)" }}
            aria-hidden="true"
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
            aria-hidden="true"
          >
            <span className="text-white/30 text-[10px] tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* Dark section */}
        <section className="relative z-10 bg-[#252525] -mt-10 rounded-t-2xl px-6 pt-16 pb-20 min-h-screen">
          <div className="max-w-xl mx-auto">
            <span className="text-xs text-white/50 uppercase tracking-widest">Offre de services</span>
            <h2 className="font-bold text-4xl tracking-wide leading-tight text-white mt-3 mb-8">
              Nos expertises métiers
            </h2>
            <ExpertiseMobile />
            <div className="mt-10">
              <Link
                href="/offre"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200"
              >
                Découvrir notre offre <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Peach section */}
        <section className="relative z-10 bg-[#FFCCB8] -mt-10 rounded-t-2xl px-6 pt-16 pb-20">
          <div className="max-w-xl mx-auto">
            <span className="text-xs text-black/50 uppercase tracking-widest">Notre ligne de conduite</span>
            <h2 className="font-bold text-4xl tracking-wide leading-tight text-[#333] mt-3 mb-10">
              Donner aux marques le pouvoir{" "}
              <span className="text-[#E72048]">d'agir.</span>
            </h2>
            <div className="flex flex-col divide-y divide-black/10">
              {valeurs.map((item, i) => (
                <ValeurItem key={i} titre={item.titre} desc={item.desc} />
              ))}
            </div>
          </div>
          <ClientsGrid className="mt-16 px-6" imageClassName="w-auto h-14" />
        </section>

      </div>


    </>
  );
}