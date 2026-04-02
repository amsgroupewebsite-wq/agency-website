import { useLayoutEffect, useRef, useState, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CardNav = ({
  logo,
  icon,
  logoAlt = 'Logo',
  items,
  lang,        
  setlang,     
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandedRef = useRef(false); // ✅ miroir ref pour éviter stale closure
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const closeMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setIsHamburgerOpen(false);
    tl.eventCallback('onReverseComplete', () => {
      isExpandedRef.current = false;
      setIsExpanded(false);
    });
    tl.reverse();
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisibility = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;
        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        contentEl.offsetHeight;
        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;
        contentEl.style.visibility = wasVisibility;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;
        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;
    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, { height: calculateHeight, duration: 0.4, ease });
    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');
    return tl;
  };

  // ✅ Ne dépend QUE de ease — jamais de items
  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    return () => { tl?.kill(); tlRef.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease]);

  // ✅ Quand items change (changement de langue) : on ne recrée PAS la timeline.
  // Si le menu est ouvert, on recalcule juste la hauteur pour s'adapter
  // aux nouveaux labels (qui peuvent avoir une longueur différente).
  useLayoutEffect(() => {
    if (!tlRef.current || !isExpandedRef.current) return;
    const newHeight = calculateHeight();
    gsap.set(navRef.current, { height: newHeight });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpandedRef.current) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) { newTl.progress(1); tlRef.current = newTl; }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) tlRef.current = newTl;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  // ✅ Plus de dépendance sur isExpanded — on lit isExpandedRef

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpandedRef.current) {
      isExpandedRef.current = true;
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      closeMenu();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isHamburgerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isHamburgerOpen]);

  const setCardRef = (i) => (el) => { if (el) cardsRef.current[i] = el; };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-[2]">
          <div
            className="relative h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] select-none"
            onClick={toggleMenu}
            role="button"
            aria-label={isHamburgerOpen ? "Close menu" : "Open menu"}
            aria-expanded={isHamburgerOpen}
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleMenu()}
            style={{ color: menuColor || "#000" }}
          >
            <div className={`w-[28px] h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isHamburgerOpen ? "translate-y-[8px] rotate-45" : ""}`} />
            <div className={`w-[28px] h-[2px] bg-current rounded-full transition-all duration-200 ease-in-out ${isHamburgerOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100 scale-y-117"}`} />
            <div className={`w-[28px] h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out ${isHamburgerOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <Link href="/" onClick={closeMenu}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt={logoAlt} className="logo h-[36px] w-auto" />
            </Link>
          </div>

         <motion.button
  onClick={() => {
    const langs = ['fr', 'en', 'es'];
    const currentIndex = langs.indexOf(lang);
    const nextLang = langs[(currentIndex + 1) % langs.length];
    setlang(nextLang);
  }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Switch language"
  className="cursor-pointer"
>
  <motion.img
    src={icon}
    alt="icon"
    className="w-[30px] h-auto m-2"
    whileHover={{ rotate: 20 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  />
</motion.button>
          
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >

          {(items || []).slice(0, 3).map((item, idx) => (
            
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col justify-center items-start  rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal p-0 tracking-[-0.5px] text-[18px] md:text-[22px]">
                <img src={item.icon} alt="" className="w-[34px] h-auto m-2" />
                
              </div>
              
              <div className="nav-card-links mt-2 flex flex-col gap-[2px] p-3">
                {item.links?.map((lnk, i) => {

                

                  // ✅ Lien de navigation : ferme le menu
                  return (
                    <Link
                      key={`${lnk.label}-${i}`}
                      href={lnk.href || '#'}
                      className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                      style={{ color: item.textColor }}
                      aria-label={lnk.ariaLabel}
                      onClick={closeMenu}
                    >
                      <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                      {lnk.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;