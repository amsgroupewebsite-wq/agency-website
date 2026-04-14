"use client";

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { gsap } from 'gsap';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  logoHref = '/',
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  pillColor = '#060010',
  hoveredPillTextColor = '#060010',
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const logoImgRef = useRef(null);
  const logoTweenRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);
  const navWrapperRef = useRef(null);

  // ── Hide / show au scroll ──
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const wrapper = navWrapperRef.current;
          if (!wrapper) return;

          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            // Scroll vers le bas → cache la nav + ferme le menu mobile
            gsap.to(wrapper, { y: -100, opacity: 0, duration: 0.3, ease: 'power2.out' });
            if (mobileMenuRef.current) {
              gsap.to(mobileMenuRef.current, {
                opacity: 0, y: 10, duration: 0.2, ease: 'power2.out',
                onComplete: () => gsap.set(mobileMenuRef.current, { visibility: 'hidden' })
              });
              setIsMobileMenuOpen(false);
            }
          } else {
            // Scroll vers le haut → montre la nav
            gsap.to(wrapper, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Animation initiale ──
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (menu) gsap.set(menu, { visibility: 'hidden', opacity: 0 });

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;
      if (logoEl) {
        gsap.set(logoEl, { scale: 0 });
        gsap.to(logoEl, { scale: 1, duration: 0.6, ease });
      }
      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: 'hidden' });
        gsap.to(navItems, { width: 'auto', duration: 0.6, ease });
      }
    }
  }, [items, ease, initialLoadAnimation]);

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.fromTo(img,
      { rotate: 0 },
      { rotate: 360, duration: 0.6, ease, overwrite: 'auto' }
    );
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 7, duration: 0.3, ease });
        gsap.to(lines[1], { opacity: 0, scaleX: 0, duration: 0.2, ease });
        gsap.to(lines[2], { rotation: -45, y: -7, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { opacity: 1, scaleX: 1, duration: 0.3, ease });
        gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(menu,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease }
        );
      } else {
        gsap.to(menu, {
          opacity: 0, y: 10, duration: 0.2, ease,
          onComplete: () => gsap.set(menu, { visibility: 'hidden' })
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    '--base': baseColor,
    '--pill-bg': pillColor,
    '--hover-text': hoveredPillTextColor,
    '--pill-text': resolvedPillTextColor,
    '--nav-h': '52px',
    '--pill-pad-x': '22px',
    '--pill-gap': '4px'
  };

  const glassStyle = {
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.2)'
  };

  return (
    <div
      ref={navWrapperRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000]"
      style={{ willChange: 'transform, opacity' }}
    >
      <nav
        className={`flex items-center gap-2 ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        {/* Logo */}
        <Link
          href={logoHref}
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
          className="rounded-full inline-flex items-center justify-center overflow-hidden flex-shrink-0 transition-transform duration-200 hover:scale-110"
          style={{ width: '52px', height: '52px', background: 'var(--base)', padding: '6px', ...glassStyle }}
        >
          <img src={logo} alt={logoAlt} ref={logoImgRef} className="w-full h-full object-contain block" />
        </Link>

        {/* Desktop */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex"
          style={{ height: 'var(--nav-h)', background: 'var(--base)', ...glassStyle }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-[3px] h-full"
            style={{ gap: 'var(--pill-gap)' }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const isHovered = hoveredIndex === i;

              return (
                <li key={item.href} role="none" className="flex h-full">
                  <Link
                    role="menuitem"
                    href={item.href}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative inline-flex items-center justify-center h-full rounded-full px-[22px] text-[16px] tracking-[0.2px] whitespace-nowrap cursor-pointer transition-all duration-200"
                    style={{
                      background: isHovered || isActive ? 'var(--base)' : 'var(--pill-bg)',
                      color: isHovered ? 'var(--hover-text)' : 'var(--pill-text)',
                      transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                    }}
                  >
                    {item.label}

                    {/* Point actif */}
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]"
                        style={{ background: 'var(--base)' }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hamburger mobile */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0 flex-shrink-0 transition-transform duration-200 hover:scale-110"
          style={{ width: '52px', height: '52px', background: 'var(--base)', ...glassStyle }}
        >
          <span className="hamburger-line w-5 h-[2px] rounded-full origin-center" style={{ background: '#1a1a1a' }} />
          <span className="hamburger-line w-5 h-[2px] rounded-full origin-center" style={{ background: '#1a1a1a' }} />
          <span className="hamburger-line w-5 h-[2px] rounded-full origin-center" style={{ background: '#1a1a1a' }} />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3.5em] left-0 right-0 rounded-[27px] z-[998] origin-top"
        style={{ ...cssVars, background: 'var(--base)', ...glassStyle }}
      >
        <ul className="list-none m-0 p-[3px] flex flex-col gap-[3px]">
          {items.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200"
                style={{ background: 'var(--pill-bg)', color: 'var(--pill-text)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--base)';
                  e.currentTarget.style.color = 'var(--hover-text)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--pill-bg)';
                  e.currentTarget.style.color = 'var(--pill-text)';
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;