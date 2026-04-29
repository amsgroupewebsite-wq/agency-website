"use client";

import { motion } from "motion/react";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import TeamScrollSection from "../../components/TeamScrollSection";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

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

      <Footer />
    </>
  );
}