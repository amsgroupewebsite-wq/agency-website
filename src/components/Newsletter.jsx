"use client";

import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      
      <div className="
        w-full max-w-6xl
        bg-[#FFCCB8]
        flex flex-col lg:flex-row
        items-start lg:items-center
        justify-between
        gap-8 lg:gap-12
        my-16
        rounded-2xl
        p-6 sm:p-8 lg:p-10 xl:px-16
      ">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5 max-w-xl">
          
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shrink-0">
              <Mail size={24} className="text-[#E54259]" />
            </div>

            <h2 className="text-lg sm:text-xl font-semibold leading-snug text-white">
              S'abonner à la newsletter{" "}
              <span className="text-[#E54259]">PICKS</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            Tous les 15 jours, le meilleur des nouvelles tendances du digital dans votre boîte mail.
          </p>
        </div>

        {/* CTA */}
        <div className="w-full lg:w-auto">
          <a
            href="/Newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full lg:w-auto
              inline-flex items-center justify-center
              px-6 py-3
              rounded-lg
              text-sm sm:text-base
              font-medium
              text-white
              bg-[#E54259]
              hover:bg-[#c73a4f]
              active:bg-[#b0323f]
              transition-all duration-200
            "
          >
            S'abonner
          </a>
        </div>

      </div>
    </section>
  );
}