"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const socialMediaLinks = {
  facebook:  "https://www.facebook.com/amsagencyofficiel/",
  instagram: "https://www.instagram.com/amsagencyofficiel/",
  linkedin:  "https://dz.linkedin.com/company/ams-agency",
};

export default function Footer({ logo, slogan}) {


 
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
 
  

  return (
    <footer className="bg-black text-white relative bottom-[100%]">
       <section className='flex flex-col justify-center items-center gap-4'>
         {/* ── Main grid ─────────────────────────────── */}
      <div className="max-w-7xl  mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + slogan */}
        <div className="flex flex-col gap-4">
          <div className="relative w-32 h-32">
            <Image src={logo} alt="Logo AMS" fill sizes="128px" className="object-contain" priority />
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">{slogan}</p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            {["Accueil", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="text-white/80 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-white/50 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            
              <li  className="flex items-center gap-2 text-white/80">
                <Image src="/phone-icon.svg" alt="" width={18} height={18} />
               +213 (0) 20 30 68 28
              </li>
         
            
              <li className="flex items-center gap-2 text-white/80">
                <Image src="/email-icon.svg" alt="" width={18} height={18} style={{ width: '18px', height: '18px' }} />
                mrahil@amsgroupe.com
              </li>
          
            
              
          
          </ul>

        </div>

        {/* Carte */}
       <li className="flex items-start gap-2 text-white/80">
                <Image src="/location-icon.svg" alt="" width={18} height={18} className="mt-0.5 shrink-0" />
                <span>Boulevard du 11 Décembre 1960, BT 09, El Biar Algérie</span>
      </li>
      </div>
  {/* Background image */}
  {/* <Image
    src="/deco_footer2.png"
    alt="deco footer"
    fill
    className="object-cover opacity-30"
    priority
  /> */}
      <div className="relative m-10 w-full max-w-3xl">
  



</div>
 
      
       </section>
     
            

      {/* ── Bottom bar ────────────────────────────── */}
      <div className="border-t bg-white text-pink-500 border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Links */}
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/privacy-policy" className="text-pink-500 transition-colors">Privacy policy</Link>
            <Link href="/contact"        className="text-pink-500 transition-colors">Contact</Link>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/30">© 2024 AMS. All rights reserved.</p>

          {/* Social + scroll top */}
          <div className="flex items-center gap-3">
            {[
              { href: socialMediaLinks.facebook,  src: "/footer-icon-fb.png",    alt: "Facebook"  },
              { href: socialMediaLinks.instagram, src: "/footer-icon-insta.png", alt: "Instagram" },
              { href: socialMediaLinks.linkedin,  src: "/footer-icon-link.png",  alt: "LinkedIn"  },
            ].map(({ href, src, alt }) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer"
                 className="opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200">
                <Image src={src} alt={alt} width={32} height={32} style={{ height: "auto" }} />
              </a>
            ))}

            <button onClick={scrollToTop} aria-label="Retour en haut"
                    className="ml-1 opacity-50 hover:opacity-100 hover:scale-110 hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative w-8 h-8">
                <Image src="/footer-start.png" alt="Scroll to top" fill sizes="32px" className="object-contain" />
              </div>
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}