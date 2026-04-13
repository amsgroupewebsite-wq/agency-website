// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";
// import { useLang } from "../app/context/LangContext";
// import { useTranslation } from "../hooks/useTranslation";

// export default function NavBar() {
//  const [isScrolled, setIsScrolled] = useState(false);
// const [menuOpen, setMenuOpen] = useState(false);
// const lastPath = usePathname();
// const { lang, setlang } = useLang();
// const { t } = useTranslation("home");

// const pathname = usePathname();

// const currentPage = pathname;

// const blackPaths = ["/Agencyfolio", "/contact", "/privacy-policy"];

// const whitePaths = [
//   "/",
//   "/cosider",
//   "/inpha-medis",
//   "/capilos",
//   "/ams-groupe",
// ];

// const logoMap = {
//   "/": {
//     white: "/nav-logo-ams-agency.png",
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/contact": {
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/Agencyfolio": {
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/privacy-policy": {
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/cosider": {
//     white: "/nav-logo-ams-agency.png",
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/inpha-medis": {
//     white: "/nav-logo-ams-agency.png",
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/capilos": {
//     white: "/nav-logo-ams-agency.png",
//     black: "/nav-logo-ams-agency-black.png",
//   },
//   "/ams-groupe": {
//     white: "/nav-logo-ams-groupe.png",
//     black: "/nav-logo-ams-groupe-black.png",
//   },
// };
// const defaultLogo = "/nav-logo-ams-groupe-black.png";
// const logos = logoMap[currentPage];
// let logoSrc = defaultLogo;
// if (logos) {
//   if (logos.white && logos.black) {
//     logoSrc = isScrolled ? logos.black : logos.white;
//   } else {
//     logoSrc = logos.black;
//   }
// }
// useEffect(() => {
//   const onScroll = () => setIsScrolled(window.scrollY > 0);
//   onScroll();
//   window.addEventListener("scroll", onScroll);
//   return () => window.removeEventListener("scroll", onScroll);
// }, []);
// let textColorClass = "text-black";
// if (whitePaths.includes(currentPage)) {
//   textColorClass = isScrolled ? "text-black" : "text-white";
// } else if (blackPaths.includes(currentPage)) {
//   textColorClass = "text-black";
// } else {
//   textColorClass = isScrolled ? "text-black" : "text-white";
// }
//   return (
//     <div
//       className={`sticky top-0 z-50 flex items-center justify-between px-6 lg:px-10 py-4 text-xl
//         ${textColorClass} transition-all duration-300`}
//       style={{ backgroundColor: `rgba(255,255,255,${isScrolled ? 1 : 0})` }}
//     >
//       <Link href="/">
//         <Image src={logoSrc} alt="Logo" width={70} height={70} unoptimized/>
//       </Link>

//       {/* Desktop Menu */}
//       <nav className="hidden lg:block">
//         <ul className="flex space-x-10">
//           <li><Link href="/">{t("navbar.home")}</Link></li>
//           <li><Link href="/Agencyfolio">Agencyfolio</Link></li>
//           <li><Link href="/contact">{t("navbar.contact")}</Link></li>

//          <li className="relative group">
//   <span>{t("navbar.language")} ▼</span>
//   <ul className="absolute hidden group-hover:block bg-white text-black p-0 rounded-lg">
//     <li>
//       <button className="px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => setlang("fr")}>
//         {t("navbar.french")}
//       </button>
//     </li>
//     <li>
//       <button className="px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => setlang("en")}>
//         {t("navbar.english")}
//       </button>
//     </li>
//     <li>
//       <button className="px-4 py-2 w-full text-left hover:bg-gray-100" onClick={() => setlang("es")}>
//         {t("navbar.spanish")}
//       </button>
//     </li>
//   </ul>
// </li>

//         </ul>
//       </nav>

//       {/* Mobile Menu */}
//       <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? <X /> : <Menu />}
//       </button>

//       {menuOpen && (
//         <div className={`absolute top-full left-0 w-full bg-[#1E62AC]/90 text-lg flex flex-col px-10 py-6 space-y-6 lg:hidden ${whitePaths.includes(lastPath) && !isScrolled ? "text-white" : "text-black"}`}>
//           <Link href="/" className="text-white" onClick={() => setMenuOpen(false)}>{t("navbar.home")}</Link>
//           <Link href="/Agencyfolio" className="text-white" onClick={() => setMenuOpen(false)}>Agencyfolio</Link>
//           <Link href="/contact" className="text-white" onClick={() => setMenuOpen(false)}>{t("navbar.contact")}</Link>

//           <details className="w-full px-6">
//             <summary className="text-white">{t("navbar.language")}</summary>
//             <div className="flex flex-col mt-2 space-y-2">
//               <button className="text-white" onClick={() => { setlang("fr"); setMenuOpen(false); }}>{t("navbar.french")}</button>
//               <button className="text-white" onClick={() => { setlang("en"); setMenuOpen(false); }}>{t("navbar.english")}</button>
//               <button className="text-white" onClick={() => { setlang("es"); setMenuOpen(false); }}>{t("navbar.spanish")}</button>
//             </div>
//           </details>
//         </div>
//       )}
//     </div>
//   );
// }
//___________________________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________________________
// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { usePathname } from "next/navigation";
// import { useLang } from "../app/context/LangContext";
// import { useTranslation } from "../hooks/useTranslation";
// import CardNav from "./CardNav";

// export default function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const pathname = usePathname();
//   const { lang, setlang } = useLang();
//   const { t } = useTranslation("home");

//   const blackPaths = ["/Agencyfolio", "/contact", "/privacy-policy" , "/actu", "/Offre"];
//   const whitePaths = ["/", "/cosider", "/inpha-medis", "/capilos", "/ams-groupe"];

//   const isBlackPath = blackPaths.includes(pathname);
//   const useWhiteBackground = isBlackPath || isScrolled;

//   const logoMap = {
//     "/": { white: "/nav-logo-ams-agency.png", black: "/nav-logo-ams-agency-black.png" },
//     "/contact": { black: "/nav-logo-ams-agency-black.png" },
//     "/Agencyfolio": { black: "/nav-logo-ams-agency-black.png" },
//     "/privacy-policy": { black: "/nav-logo-ams-agency-black.png" },
//     "/cosider": { white: "/nav-logo-ams-agency.png", black: "/nav-logo-ams-agency-black.png" },
//     "/inpha-medis": { white: "/nav-logo-ams-agency.png", black: "/nav-logo-ams-agency-black.png" },
//     "/capilos": { white: "/nav-logo-ams-agency.png", black: "/nav-logo-ams-agency-black.png" },
//     "/ams-groupe": { white: "/nav-logo-ams-groupe.png", black: "/nav-logo-ams-groupe-black.png" },
//     "/actu": { black: "/nav-logo-ams-agency-black.png" },
//     "/Offre": { black: "/nav-logo-ams-agency-black.png" },
//   };

//     const iconMap = {
//     "/": { white: "/langue-icon-blanc.png", black: "/langue-icon.png" },
//     "/contact": { black: "/langue-icon.png" },
//     "/Agencyfolio": { black: "/langue-icon.png" },
//     "/privacy-policy": { black: "/langue-icon.png" },
//     "/cosider": { white: "/langue-icon-blanc.png", black: "/langue-icon.png" },
//     "/inpha-medis": { white: "/langue-icon-blanc.png", black: "/langue-icon.png" },
//     "/capilos": { white: "/langue-icon-blanc.png", black: "/langue-icon.png" },
//     "/ams-groupe": { white: "/langue-icon-blanc.png", black: "/langue-icon.png" },
//     "/actu": { black: "/langue-icon.png" },
//     "/Offre": { black: "/langue-icon.png" },
//   };

//    const homeiconMap = {
//     "/": { white: "/home-icon-blanc.png", black: "/home-icon.png" },
//     "/contact": { black: "/home-icon.png" },
//     "/Agencyfolio": { black: "/home-icon.png" },
//     "/privacy-policy": { black: "/home-icon.png" },
//     "/cosider": { white: "/home-icon-blanc.png", black: "/home-icon.png" },
//     "/inpha-medis": { white: "/home-icon-blanc.png", black: "/home-icon.png" },
//     "/capilos": { white: "/home-icon-blanc.png", black: "/home-icon.png" },
//     "/ams-groupe": { white: "/home-icon-blanc.png", black: "/home-icon.png" },
//     "/actu": { black: "/home-icon.png" },
//     "/Offre": { black: "/home-icon.png" },
//   };

//      const contacticonMap = {
//     "/": { white: "/contact-icon-blanc.png", black: "/contact-icon.png" },
//     "/contact": { black: "/contact-icon.png" },
//     "/Agencyfolio": { black: "/contact-icon.png" },
//     "/privacy-policy": { black: "/contact-icon.png" },
//     "/cosider": { white: "/contact-icon-blanc.png", black: "/contact-icon.png" },
//     "/inpha-medis": { white: "/contact-icon-blanc.png", black: "/contact-icon.png" },
//     "/capilos": { white: "/contact-icon-blanc.png", black: "/contact-icon.png" },
//     "/ams-groupe": { white: "/contact-icon-blanc.png", black: "/contact-icon.png" },
//     "/actu": { black: "/contact-icon.png" },
//     "/Offre": { black: "/contact-icon.png" },
//   };

//   const defaultLogo = "/nav-logo-ams-groupe-black.png";
//   const logos = logoMap[pathname];
//   let logoSrc = defaultLogo;
//   if (logos) {
//     logoSrc = logos.white && logos.black
//       ? (isScrolled ? logos.black : logos.white)
//       : logos.black;
//   }

//     const defaulticon = "/langue-icon.png";
//   const icon = iconMap[pathname];
//   let iconSrc = defaulticon;
//   if (icon) {
//     iconSrc = icon.white && icon.black
//       ? (isScrolled ? icon.black : icon.white)
//       : icon.black;
//   }

//       const defaulticonhome = "/home-icon.png";
//   const homeicon = homeiconMap[pathname];
//   let homeiconSrc = defaulticonhome;
//   if (homeicon) {
//     homeiconSrc = homeicon.white && homeicon.black
//       ? (isScrolled ? homeicon.black : homeicon.white)
//       : homeicon.black;
//   }

//         const defaulticoncontact = "/contact-icon.png";
//         const contacticon = contacticonMap[pathname];
//         let contacticonSrc = defaulticoncontact;
//         if (contacticon) {
//         contacticonSrc = contacticon.white && contacticon.black
//       ? (isScrolled ? contacticon.black : contacticon.white)
//       : contacticon.black;
//   }

 
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 0);
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ✅ useMemo : navItems ne se recrée que si lang, t, useWhiteBackground ou setlang changent.
//   // Quand l'utilisateur clique sur une langue, seul t change (nouvelle traduction),
//   // donc navItems se met à jour avec les nouveaux labels SANS recréer la timeline GSAP.
//   const navItems = useMemo(() => [
//     {
//       label: t("navbar.home"),
//       bgColor: useWhiteBackground ? "#f5f5f5" : "#CEABBA",
//       textColor: useWhiteBackground ? "#111" : "#fff",
//       icon: homeiconSrc,
//       links: [
//         { label: t("navbar.home"), href: "/", ariaLabel: "Home" },
//         { label: "Offre", href: "/Offre", ariaLabel: "Offre" },
//         { label: "What We Do", href: "/Agencyfolio", ariaLabel: "Agencyfolio" },
//       ],
//     },
//     {
//       label: t("navbar.contact"),
//       bgColor: useWhiteBackground ? "#f5f5f5" : "#CEABBA",
//       textColor: useWhiteBackground ? "#111" : "#fff",
//       icon: contacticonSrc,
//       links: [
//         { label: "Newsletter", href: "/Newsletter", ariaLabel: "Newsletter" },
//         { label: t("navbar.contact"), href: "/contact", ariaLabel: "Contact" },
//         { label: "Privacy Policy", href: "/privacy-policy", ariaLabel: "Privacy Policy" },
//       ],
//     },
//   ], [t, useWhiteBackground, setlang]);
//   // ⚠️ Ne pas ajouter lang ici — t change déjà quand lang change, c'est suffisant.

//   return (
//     <div className="sticky top-0 z-50 w-full px-4 pt-0">
//       <CardNav
//         logo={logoSrc}
//         icon={iconSrc}
//         lang={lang}
//         setlang={setlang}
//         logoAlt="AMS Agency Logo"
//         items={navItems}
//         baseColor={useWhiteBackground ? "#ffffff" : "rgba(255,255,255,0.08)"}
//         menuColor={useWhiteBackground ? "#000" : "#fff"}
//         buttonBgColor={useWhiteBackground ? "#1E62AC" : "#fff"}
//         buttonTextColor={useWhiteBackground ? "#fff" : "#1E62AC"}
//         ease="power3.out"
//         className="mb-10"
//       />
//     </div>
//   );
// }

//___________________________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________________________
//___________________________________________________________________________________________________________________________________

//

"use client";

import PillNav from "../components/PillNav";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const logoMap = {
    "/": { white: "/logoRose.png", black: "/nav-logo-ams-agency-black.png" },
    "/contact": { black: "/nav-logo-ams-agency-black.png" },
    "/agencyfolio": { black: "/nav-logo-ams-agency-black.png" },
    "/privacy-policy": { black: "/nav-logo-ams-agency-black.png" },
    "/actu": { black: "/nav-logo-ams-agency-black.png" },
    "/offre": { black: "/nav-logo-ams-agency-black.png" },
  };

  // Pages avec fond clair → logo noir, pages avec fond foncé/image → logo blanc
  const darkBgPaths = ["/", "/agencyfolio", "/actu", "/offre", "/contact", "/privacy-policy"];
  const isDarkBg = darkBgPaths.includes(pathname);

  const logos = logoMap[pathname];
  const defaultLogo = "/nav-logo-ams-agency-black.png";

  let logo = defaultLogo;
  if (logos) {
    logo = logos.white && isDarkBg ? logos.white : logos.black ?? defaultLogo;
  }

  // Couleurs adaptées selon la page
  const isLightPage = [].includes(pathname);

  const navItems = [
    { label: "Offre", href: "/offre", ariaLabel: "Offre" },
    { label: "Projet", href: "/projets", ariaLabel: "Projet" },
    { label: "Équipe", href: "/equipe", ariaLabel: "Équipe" },
    { label: "Actu", href:"/actu", ariaLabel: "Actu" },
    { label: "Contact", href: "/contact", ariaLabel: "Contact" },
  ];

  return (
    <PillNav
      logo={logo}
      logoAlt="Company Logo"
      logoHref="/"
      items={navItems}
      activeHref={pathname}
      className="custom-nav"
      ease="power3.out"
      baseColor={isLightPage ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)"}
      pillColor={isLightPage ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.95)"}
      hoveredPillTextColor="#E72048"
      pillTextColor={isLightPage ? "#ffffff" : "#000000"}
      initialLoadAnimation={false}
    />
  );
}