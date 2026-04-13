"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { expertises } from "../lib/home";

export default function ExpertiseDesktop() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex-1 flex flex-col">
      {expertises.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="group relative flex items-center justify-between border-b border-white/10 py-6 cursor-pointer"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            className="font-bold text-4xl lg:text-2xl  xl:text-5xl md:text-md tracking-tight leading-none transition-all duration-300"
            style={{
              color:
                hoveredIndex === null
                  ? "#ffffff"
                  : hoveredIndex === i
                  ? "#E72048"
                  : "rgba(255,255,255,0.25)",
              transform: hoveredIndex === i ? "translateX(12px)" : "translateX(0)",
            }}
          >
            {item.label}
          </span>

          {hoveredIndex === i && item.image && (
            <div className="absolute right-0 top-[110%] -translate-y-1/2 w-96 h-64 rounded-xl overflow-hidden pointer-events-none z-10 animate-fadeScaleIn">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="384px"
                className="object-cover"
              />
            </div>
          )}
        </Link>
      ))}
      <div className="border-t border-white/10" />
    </div>
  );
}