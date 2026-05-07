"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contactus() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12">
        
        {/* Titre */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="block text-[#282C2E]">Envie de nous confier</span>
          <span className="block text-[#E54259]">un projet ?</span>
        </h1>

        {/* CTA */}
        <Link
          href="/contact"
          className="group flex items-center gap-4 sm:gap-6"
          aria-label="Accéder au formulaire de contact"
        >
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-[#252525]">
              Contactez-nous !
            </h2>
            <p className="text-sm text-[#252525]/60">
              Accéder au formulaire
            </p>
          </div>

          <Image
            src="/flech.png"
            alt=""
            width={41}
            height={45}
            className="transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110"
          />
        </Link>

      </div>
    </section>
  );
}