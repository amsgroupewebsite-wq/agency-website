"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";


export default function ProjetLink({ p, i }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <Link
      href={`/projets/${p.slug}`}
      className="relative max-w-7xl mx-auto flex items-center justify-between mt-40 py-6 border-b border-black/10 group overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Infos gauche */}
      <div className="flex flex-col gap-1 z-10">
        {i === 0 && (
          <span className="flex items-center gap-1.5 text-xs text-[#E54259] font-semibold mb-1">
            <span className="w-2 h-2 rounded-sm bg-[#E54259] inline-block" />
            À la une
          </span>
        )}
        <h3 className="text-lg font-bold text-[#252525] group-hover:text-[#E54259] transition-colors duration-200">
          {p.title}
        </h3>
        <span className="text-sm text-[#252525]/50">
          {p.expertise} · {p.secteur}
        </span>
      </div>

      {/* Image flottante au hover avec parallaxe */}
      {p.images?.[0] && (
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-20 rounded-xl overflow-hidden"
          style={{
            width: 220,
            height: 140,
            opacity: isHovered ? 1 : 0,
            transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
            top: "50%",
            transition: isHovered
              ? "opacity 0.2s ease, transform 0.1s ease"
              : "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <Image
            src={p.images[0]}
            alt={p.title}
            fill
            className="object-cover"
            sizes="220px"
          />
        </div>
      )}

      {/* Label "Je veux voir" + flèche droite */}
      <div className="flex items-center gap-3 z-10 flex-shrink-0">
        <span
          className="text-sm font-medium text-[#252525]/0 group-hover:text-[#E54259] transition-all duration-200 whitespace-nowrap"
          style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.2s ease" }}
        >
          Je veux voir
        </span>
        <div className="w-9 h-9 rounded-full border-2 border-black/20 flex items-center justify-center text-[#252525]/40 flex-shrink-0 group-hover:border-[#E54259] group-hover:text-[#E54259] group-hover:bg-[#fff1f2] transition-all duration-200">
          →
        </div>
      </div>
    </Link>
  );
}
