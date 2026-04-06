"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer";
import { ContainerTextFlip } from "../../components/ui/container-text-flip";
import TeamScrollSection from "../../components/TeamScrollSection";




const words = [
  "vision commune",
  "ambition partagée",
  "exigence créative",
  "culture d’excellence",
  "énergie collective",
  "même ADN"
];

export default function Home() {
    return (
<>
       <NavBar /> 
        <section className="pt-20 md:pt-30 px-4 sm:px-6 flex flex-col items-start max-w-6xl mx-auto">
        <span className="text-xs text-[#b0b0b0]">Offre</span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={cn(
            "mb-6 w-full text-left text-xl sm:text-4xl leading-normal font-bold tracking-tight md:text-5xl lg:text-7xl",
          )}
        >
   <h1 className="inline text-[#252525]">
  Un collectif de talents unis{" "}
  <span className="inline-flex items-center align-middle">
    <ContainerTextFlip words={words} />
  </span>
  <span className="text-[#E54259]">.</span>
</h1>
        </motion.div>
      </section>

      <section className="bg-[#FFF8E8] w-full py-20">
                <TeamScrollSection/>
      </section>
</>

    );
}