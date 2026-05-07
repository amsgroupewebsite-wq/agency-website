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
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Actu from "../components/Actu";
import Contactus from "../components/Contactus";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const SHOW_VALEURS_DESKTOP = false;
const SHOW_VALEURS_MOBILE = false;

const auroraConfig = {
  speed: 0.6,
  scale: 1.5,
  brightness: 1,
  color1: "#FFF8E8",
  color2: "#E5425922",
  color3: "#EE848D",
  noiseFrequency: 2.5,
  noiseAmplitude: 1,
  bandHeight: 0.5,
  bandSpread: 1,
  octaveDecay: 0.1,
  layerOffset: 0,
  colorSpeed: 1,
  enableMouseInteraction: true,
  mouseInfluence: 0.25,
};

export default function Home() {
  return (
    <>
      <NavBar />

      {/* Aurora background fixe */}
      <div
        className="fixed inset-0 -z-20 pointer-events-none bg-[#FFF8E8]"
        aria-hidden="true"
      >
        <SoftAurora {...auroraConfig} />
      </div>

      {/* ══════════════════════ DESKTOP ══════════════════════ */}
      <div className="hidden lg:block relative">
        {/* Decorative blur */}
        <div
          className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/agency/blur6.svg"
            alt=""
            width={1815}
            height={800}
            className="absolute -top-[120px] -left-[180px] w-full select-none"
            draggable={false}
            priority
          />
        </div>

        {/* Hero — flux normal */}
        <section className="relative z-0 min-h-screen flex items-center px-8 lg:px-16 pt-20 lg:pt-[100px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-6 w-full lg:w-1/2"
          >
            <Image
              src="/agency/agency-logo.svg"
              alt="Logo AMS Agency"
              width={720}
              height={550}
              priority
              className="select-none w-full max-w-[400px] lg:max-w-[600px] h-auto"
            />
            <p className="text-white text-lg lg:text-2xl leading-relaxed w-full lg:w-10/12">
              AMS Agency, le partenaire stratégique qui donne vie à des expériences mémorables.
            </p>
            <Link
              href="/contact"
              className="bg-[#E54259] text-white text-base lg:text-lg font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full border border-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </section>

        {/* ─── STICKY OVERLAP STACK ─── 
            Chaque section sticky reste épinglée pendant que la suivante glisse par-dessus.
            Z-index croissants pour la superposition. */}
{/* <div className="relative h-[150vh] lg:h-[180vh] xl:h-[200vh] 2xl:h-[120vh]">
  <section
    className=""
  >
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex flex-col gap-4 lg:gap-6"></div> */}
        {/* Dark — z-10, première à se coller */}
        
        <section className="sticky z-10 bg-[#252525] rounded-t-3xl
               px-6 lg:pl-16 xl:pl-24 2xl:pl-32 pt-12 lg:pt-16 xl:pt-20
               top-0 lg:-top-10 xl:-top-20
               h-screen lg:h-[190vh] xl:h-[200vh] 2xl:h-screen">
          <div className="max-w-8xl mx-auto h-full flex flex-col">
            <div className="flex flex-col gap-4 lg:gap-6">
              <span className="text-xs text-white/50 uppercase tracking-widest">
                Offre de services
              </span>
              <ExpertiseDesktop />
              <div className="mt-6 lg:mt-4 xl:mt-6">
                <Link
                  href="/offre"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs lg:text-sm uppercase tracking-widest transition-all duration-200 hover:gap-3"
                >
                  Découvrir notre offre <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Image — z-20, glisse par-dessus la dark */}
        <section
          className="sticky -top-30 z-20 h-screen overflow-hidden"
          
        >
          <Image
            src="/home2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover select-none pointer-events-none"
            priority
          />
        </section>

        {/* Peach — z-30, flux normal, glisse par-dessus l'image et défile naturellement */}
        {!SHOW_VALEURS_DESKTOP && (
          <section className="relative z-30 bg-[#fbbaa0] rounded-t-3xl">
            <div className="max-w-8xl mx-auto px-6 lg:pl-16 xl:pl-24 2xl:pl-32 lg:pr-12 xl:pr-16">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-50 xl:gap-20 py-12 lg:py-16 xl:py-20">
                <div className="lg:sticky lg:top-24 xl:top-28 lg:self-start lg:max-w-[260px] xl:max-w-xs shrink-0">
                  <span className="text-xs text-black/50 uppercase tracking-widest">
                    Notre ligne de conduite
                  </span>
                  <h2 className="font-bold leading-tight tracking-wide text-[#333] mt-3 text-3xl lg:text-4xl xl:text-5xl">
                    Donner aux marques le pouvoir{" "}
                    <span className="text-[#E72048]">d&apos;agir.</span>
                  </h2>
                </div>

                <div className="flex-1 flex flex-col divide-y divide-black/10 min-w-0">
                  {valeurs.map((item) => (
                    <ValeurItem key={item.titre} titre={item.titre} desc={item.desc} />
                  ))}
                </div>
              </div>
            </div>

            <ClientsGrid
              className="p-10 mb-10"
              
            />
          </section>
        )}
      </div>

      {/* ══════════════════════ MOBILE & TABLET ══════════════════════ */}
      <div className="lg:hidden flex flex-col min-h-screen">
        {/* Hero Mobile */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 min-h-[90vh] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center gap-5 w-full"
          >
            <Image
              src="/agency/agency-logo.svg"
              alt="Logo AMS Agency"
              width={280}
              height={200}
              priority
              className="select-none w-[200px] sm:w-[260px] md:w-[300px] h-auto"
            />
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
              AMS Agency est un partenaire stratégique dédié à transformer vos projets en expériences mémorables
            </p>
            <Link
              href="/contact"
              className="bg-[#E54259] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 rounded-full border border-white/60 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
            >
              Contactez-nous
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            aria-hidden="true"
          >
            <span className="text-white/40 text-[10px] tracking-widest uppercase">Scroll</span>
            <motion.div
              className="w-px h-6 bg-gradient-to-b from-white/40 to-transparent"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* Dark section Mobile */}
        <section className="relative z-10 bg-[#252525] -mt-8 rounded-t-2xl px-4 sm:px-6 pt-12 pb-16 min-h-screen">
          <div className="max-w-xl mx-auto">
            <span className="text-xs text-white/50 uppercase tracking-widest">
              Offre de services
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl tracking-wide leading-tight text-white mt-3 mb-6">
              Nos expertises métiers
            </h2>
            <ExpertiseMobile />
            <div className="mt-8">
              <Link
                href="/offre"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs sm:text-sm uppercase tracking-widest transition-all duration-200"
              >
                Découvrir notre offre <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Peach Mobile */}
        {!SHOW_VALEURS_MOBILE && (
          <section className="relative z-10 bg-[#FFCCB8] -mt-8 rounded-t-2xl px-4 sm:px-6 pt-12 pb-16">
            <div className="max-w-xl mx-auto">
              <span className="text-xs text-black/50 uppercase tracking-widest">
                Notre ligne de conduite
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl tracking-wide leading-tight text-[#333] mt-3 mb-8">
                Donner aux marques le pouvoir{" "}
                <span className="text-[#E72048]">d&apos;agir.</span>
              </h2>
              <div className="flex flex-col divide-y divide-black/10">
                {valeurs.map((item) => (
                  <ValeurItem key={item.titre} titre={item.titre} desc={item.desc} />
                ))}
              </div>
            </div>
            <ClientsGrid
              className="mt-12 px-4 sm:px-6"
              imageClassName="w-auto h-10 sm:h-12 md:h-14"
            />
          </section>
        )}
      </div>

        <section
  className="bg-white  py-12 lg:py-16 max-w-8xl"
 
>
  <header className="flex flex-col justify-start items-start max-w-8xl mx-auto px-30 ">
    <p className="text-xs text-[#252525]/80 mb-4">les news</p>
    <h2 id="news-heading" className="text-6xl sm:text-8xl font-semibold sm:font-bold leading-none">
      <span className="block text-[#E43E56]">Ça se passe</span>
      <span className="block text-[#252525] mt-0 sm:mt-8">en ce moment</span>
    </h2>
  </header>

  <Actu />
  <Contactus />
</section>
      
      <Footer />
    </>
  );
}