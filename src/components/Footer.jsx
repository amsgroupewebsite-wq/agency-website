"use client"

import Image from 'next/image';
import Newsletter from './Newsletter';
import { useEffect, useRef, useState } from 'react';

const socialMediaLinks = {
  facebook:  "https://www.facebook.com/amsagencyofficiel/",
  instagram: "https://www.instagram.com/amsagencyofficiel/",
  linkedin:  "https://dz.linkedin.com/company/ams-agency",
};

export default function Footer() {
  const footerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const rect = footerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const footerH = footerRef.current.offsetHeight;
      const raw = (windowH - rect.top) / footerH;
      setProgress(Math.min(Math.max(raw, 0), 1));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-white text-[#252525] w-full px-6 sm:px-12 lg:px-26 py-12"
      style={{
        opacity: Math.min(progress * 2, 1),
        transform: `translateY(${(1 - Math.min(progress * 1.5, 1)) * 30}px)`,
      }}
    >
      <Newsletter />

      {/* Logo */}
      <div className="pt-8 pb-4">
        <Image
          src="/agency/footer.svg"
          alt="AMS Agency Logo"
          width={1782}
          height={179}
          className="w-full h-auto"
        />
      </div>

      {/* Footer Bottom Grid */}
      <div className="px-0 sm:px-4 lg:px-8 py-10 sm:py-16 lg:py-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

        {/* Colonne 1 : Adresse + Téléphone + Réseaux — pleine largeur sur mobile */}
        <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col gap-1 text-sm text-[#252525]">
          <p className="font-bold text-base sm:text-lg lg:text-xl leading-snug">
            Rue 11 Décembre 1960, Val d'Hydra, El Biar
          </p>
          <p className="font-bold text-base sm:text-lg lg:text-xl mt-1">
            +213 (0)23 37 78 07
          </p>
          <div className="flex items-center gap-3 mt-3">
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
              </svg>
            </a>
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
              </svg>
            </a>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2M7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5M12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7M12 9C10.35 9 9 10.35 9 12C9 13.65 10.35 15 12 15C13.65 15 15 13.65 15 12C15 10.35 13.65 9 12 9Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Colonne 2 : Navigation principale */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 text-sm text-[#252525]">
          <a href="/contact" className="font-bold text-sm sm:text-base">Nous contacter</a>
          {/* <a href="/carriere" className="font-bold text-sm sm:text-base">Vous engager</a>
          <a href="/charte-ia" className="font-bold text-sm sm:text-base">Charte IA</a> */}
        </div>

        {/* Colonne 3 : Légal */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-10 text-sm">
          <a href="/privacy-policy" className="font-bold text-sm sm:text-base">Mentions légales</a>
          <a href="/privacy-policy" className="font-bold text-sm sm:text-base">Politique de confidentialité</a>
          <a href="/#" className="font-bold text-sm sm:text-base">Cookies</a>
        </div>

        {/* Colonne 4 : Plan du site */}
        {/* <div className="flex flex-col text-sm text-[#252525]">
          <a href="/plan-du-site" className="hover:underline text-sm sm:text-base">Plan du site</a>
        </div> */}

      </div>
    </footer>
  );
}