// Fichier: TeamScrollSection.jsx
"use client";

import {  useState } from "react";

const domains = [
  { name: "Médecine" },
  { name: "Éducation" },
  { name: "Média" },
  { name: "Technologie" },
  { name: "Finance" },
  { name: "Marketing" },
  { name: "Design" },
  { name: "Commerce" },
  { name: "Industrie" },
  { name: "Agriculture" },
  { name: "Énergie" },
];

const rows = [
  { items: [...domains, ...domains], direction: "left" },
  { items: [...[...domains].reverse(), ...[...domains].reverse()], direction: "right"  },
  { items: [...domains.slice(4), ...domains, ...domains.slice(0, 4)], direction: "left" },
];

export default function DomainsScrollSection() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (member, e) => {
    setHovered(member);
    updatePos(e);
  };

  const updatePos = (e) => {
    setPos({ x: e.clientX + 20, y: e.clientY - 80 });
  };

  return (
    <section className="py-20 overflow-hidden w-full relative">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex gap-8 w-max mb-6 ${
            row.direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
        >
          {row.items.map((member, j) => (
            <div
              key={j}
              className="cursor-pointer px-5 py-2.5  rounded-full  whitespace-nowrap  transition-all"
              onMouseEnter={(e) => handleMouseEnter(member, e)}
              onMouseMove={updatePos}
              onMouseLeave={() => setHovered(null)}
            >
             <p
             className="font-extrabold text-[64px] m-0 "
             style={{
               color: 'transparent',
               WebkitTextStroke: '1px #252525',
               transition: 'color 0.3s ease, WebkitTextStroke 0.3s ease',
             }}
             onMouseEnter={e => {
               e.currentTarget.style.color = '#e54259';
               e.currentTarget.style.webkitTextStroke = '0px';
             }}
             onMouseLeave={e => {
               e.currentTarget.style.color = 'transparent';
               e.currentTarget.style.webkitTextStroke = '1px #252525';
             }}
            >           
                 {member.name}
            </p>
            </div>
          ))}
        </div>
      ))}

      {/* Hover Card */}
      {hovered && (
        <div
          className="fixed z-50 bg-white border border-[#e0e0e0] rounded-xl p-5 w-[220px] pointer-events-none shadow-md"
          style={{ left: pos.x, top: pos.y }}
        >
          {hovered.photo ? (
            <img
              src={hovered.photo}
              alt={hovered.name}
              className="w-14 h-14 rounded-full object-cover mb-3"
            />
          ) : (
            // <div className="w-14 h-14 rounded-full bg-[#fde8ec] flex items-center justify-center text-[#E54259] font-medium text-lg mb-3">
            //   {hovered.initials}
            // </div>
            <div></div>
          )}
    
          <p className="text-[13px] text-[#888] m-0 mt-0.5">voir nos projets</p>
        </div>
      )}
    </section>
  );
}