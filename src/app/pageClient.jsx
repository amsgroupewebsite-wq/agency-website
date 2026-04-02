"use client";

import NavBar from "../components/NavBar";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { motion } from "framer-motion";
import SoftAurora from "../components/SoftAurora";
import MetaBalls from "../components/MetaBalls";
import Newsletter from "../components/Newsletter";
import { useEffect, useRef ,useState} from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const viewport = { once: false, amount: 0.3 };

const expertises = [
  { label: "Site Web", href: "/offre/site-web", image: "/expertises/site-web.png" },
  { label: "Campagnes digitales", href: "/offre/campagnes", image: "/expertises/site-web.png" },
  { label: "Social media", href: "/offre/social-media", image: "/expertises/site-web.png" },
  { label: "Évènementiel", href: "/offre/evenementiel", image: "/expertises/site-web.png" },
  { label: "Identité de marque", href: "/offre/identite", image: "/expertises/site-web.png" },
  { label: "Stratégie & Conseil", href: "/offre/strategie", image: "/expertises/site-web.png" },
];


export default function Home() {


  // ✅ CORRECTION 1 — hooks à l'intérieur du composant
  const section2Ref = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add("dark-section");
        } else {
          document.body.classList.remove("dark-section");
        }
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    if (section2Ref.current) observer.observe(section2Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ✅ CORRECTION 2 — pas de className fixed ici, PillNav gère son propre positionnement */}
      <NavBar />

      <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none lg:block">
        <SoftAurora
          speed={0.6}
          scale={1.5}
          brightness={1}
          color1="#f7f7f7"
          color2="#e100ff"
          noiseFrequency={2.5}
          noiseAmplitude={1}
          bandHeight={0.5}
          bandSpread={1}
          octaveDecay={0.1}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction
          mouseInfluence={0.25}
        />
      </div>

      <div className="flex flex-col min-h-screen relative pt-25 overflow-x-hidden">

        {/* ===================== DESKTOP ===================== */}
        <div className="hidden lg:block">

          <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-100px] left-0 w-full">
              <Image src="/agency/blur1.svg" alt="" width={115} height={100} className="select-none w-full" draggable="false" loading="eager" />
            </div>
            <div className="absolute top-[6000px] left-0 w-full">
              <Image src="/agency/blur5.svg" alt="" width={115} height={100} className="select-none w-full" draggable="false" priority />
            </div>
            <div className="absolute top-0 left-0 w-full">
              <Image src="/agency/blur2.svg" alt="" width={1080} height={2565} className="select-none w-full" draggable="false" />
            </div>
            <div className="absolute top-[2400px] left-0 w-full">
              <Image src="/agency/blur4.svg" alt="" width={1080} height={2565} className="select-none w-full" draggable="false" />
            </div>
            <div className="absolute top-[800px] left-0 w-full">
              <Image src="/agency/blur3.svg" alt="" width={1080} height={2565} className="select-none w-full" draggable="false" />
            </div>
          </div>

          <section className="pt-1">

            <section className="relative w-full min-h-screen flex flex-row items-center justify-between px-16 overflow-hidden">

              <div className="absolute left-200 inset-0">
                <MetaBalls
                  color="#ffffff"
                  cursorBallColor="#ffffff"
                  cursorBallSize={2}
                  ballCount={7}
                  animationSize={30}
                  enableMouseInteraction
                  enableTransparency={true}
                  hoverSmoothness={0.15}
                  clumpFactor={1}
                  speed={0.3}
                />
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start gap-6 w-1/2"
              >
                <Image
                  src="/agency/agency-logo.svg"
                  alt="Logo AMS Agency"
                  width={720}
                  height={550}
                  loading="eager"
                  priority
                  style={{ height: "auto" }}
                  className="select-none w-[600px]"
                />
                <p className="text-white text-2xl w-9/12">
                  AMS Agency est un partenaire stratégique dédié à transformer vos projets en expériences mémorables
                </p>
                <Link
                  href="/contact"
                  className="bg-transparent text-white text-lg font-semibold px-8 py-4 rounded-full border border-white hover:scale-105 transition-transform duration-300"
                >
                  Contactez-nous
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="w-1/2 flex justify-center items-center"
              />

            </section>

            
          </section>

         
          <section
      ref={section2Ref}
      className="relative z-20 bg-[#252525]  pl-32  pt-30   min-h-screen  rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
    >
      <div className="max-w-6xl ">

        {/* Label */}
        <span className="text-xs  text-white/50 uppercase tracking-widest">
          Offre de services
        </span>

        {/* Liste */}
        <div className="mt-6 flex flex-col">
          {expertises.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative flex items-center justify-between  border-white/10 py-3  cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Texte */}
              <h2
                className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none transition-all duration-300"
                style={{
                  color: hoveredIndex === null
                    ? "#ffffff"
                    : hoveredIndex === i
                    ? "#E72048"
                    : "rgba(255,255,255,0.25)",
                  transform: hoveredIndex === i ? "translateX(12px)" : "translateX(0)",
                }}
              >
                {item.label}
              </h2>

            

              {/* Image au hover — flottante */}
            {hoveredIndex === i && item.image && (
  <div
    className="absolute -right-155 top-[110%] -translate-y-1/2 w-96 min-h-64  rounded-xl overflow-hidden pointer-events-none z-10"
    style={{ animation: "fadeScaleIn 0.2s ease forwards" }}
  >
    <Image
      src={item.image}
      alt={item.label}
      fill
      className="object-cover"
    />
  </div>
)}
            </Link>
          ))}

          {/* Dernière bordure */}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/offre"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Découvrir notre offre
            <span>→</span>
          </Link>
        </div>
      </div>

      
      

      {/* Animations CSS */}
      <style>{`
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: translateY(-50%) scale(0.92); }
          to   { opacity: 1; transform: translateY(-50%) scale(1); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>

        </div>

        {/* ===================== MOBILE ===================== */}
        <div className="lg:hidden flex flex-col min-h-screen">

          <div
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ background: "linear-gradient(160deg, #0a0a1a 0%, #1D61AB22 50%, #0a0a1a 100%)" }}
          />

          <div className="absolute top-0 left-0 w-full pointer-events-none -z-10 opacity-60">
            <Image src="/agency/blur1.svg" alt="" width={800} height={400} className="w-full select-none" draggable="false" />
          </div>

          <section className="flex-1 flex flex-col">

            <section className="relative flex flex-col items-center justify-center text-center px-6 pt-16 pb-14 min-h-screen gap-8">

              <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full pointer-events-none -z-10"
                style={{ background: "radial-gradient(circle, rgba(228,62,86,0.25) 0%, rgba(29,97,171,0.15) 50%, transparent 75%)" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col items-center gap-6 w-full"
              >
                <Image
                  src="/agency/agency-logo.svg"
                  alt="Logo AMS Agency"
                  width={320}
                  height={240}
                  loading="eager"
                  priority
                  style={{ height: "auto" }}
                  className="select-none w-[260px] sm:w-[300px]"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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

          </section>

                       <section
      ref={section2Ref}
      className="relative z-10 bg-[#252525] px-6 sm:px-12 lg:px-20 pt-16 sm:pt-24 pb-20 sm:pb-40 min-h-screen sm:-mt-32 rounded-t-2xl sm:rounded-t-3xl overflow-hidden"
    >
      <div className="max-w-6xl ">

        {/* Label */}
        <span className="text-xs text-white/50 uppercase tracking-widest">
          Offre de services
        </span>

        {/* Liste */}
        <div className="mt-6 flex flex-col">
          {expertises.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative flex items-center justify-between  border-white/10 py-3  cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Texte */}
              <h2
                className="font-bold  text-5xl  tracking-tight leading-none transition-all duration-300"
                style={{
                  color: hoveredIndex === null
                    ? "#ffffff"
                    : hoveredIndex === i
                    ? "#E72048"
                    : "rgba(255,255,255,0.25)",
                  transform: hoveredIndex === i ? "translateX(12px)" : "translateX(0)",
                }}
              >
                {item.label}
              </h2>

            

              {/* Image au hover — flottante */}
{hoveredIndex === i && item.image && (
  <div
    className="absolute -right-0 top-[100%] -translate-y-1/2  w-64 h-44 rounded-xl overflow-hidden pointer-events-none z-10"
    style={{ 
      animation: "fadeScaleIn 0.2s ease forwards",
      transform: "translateY(-50%) scale(1.5)", // Agrandit de 50%
      transformOrigin: "center"
    }}
  >
    <Image
      src={item.image}
      alt={item.label}
      fill
      className="object-cover"
    />
  </div>
)}
            </Link>
          ))}

          {/* Dernière bordure */}
          <div className="border-t border-white/10" />
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/offre"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm uppercase tracking-widest transition-colors duration-200"
          >
            Découvrir notre offre
            <span>→</span>
          </Link>
        </div>
      </div>



      {/* Animations CSS */}
      <style>{`
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: translateY(-50%) scale(0.92); }
          to   { opacity: 1; transform: translateY(-50%) scale(1); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
          
        </div>

      </div>
    </>
  );
}