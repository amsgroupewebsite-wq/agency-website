// Fichier: TeamScrollSection.jsx
"use client";

import { useEffect, useRef, useState } from "react";

const members = [
  { name: "Meriem Beyoucef", post: "Directrice artistique", initials: "MB" },
  { name: "Mourad Akli", post: "Développeur front-end", initials: "MA" },
  { name: "Lylia Zehraoui", post: "Chef de projet", initials: "LZ" },
  { name: "Mohamed Rahil", post: "Stratège digital", initials: "MR" },
  { name: "Isleme", post: "Community manager", initials: "IS" },
  { name: "Youcef Zellali", post: "UX Designer", initials: "YZ" },
  { name: "Akli Ait Ahcene", post: "Développeur back-end", initials: "AA" },
  { name: "Abdelhamid Ouinissi", post: "Directeur technique", initials: "AO" },
  { name: "Imene Aissa", post: "Responsable contenu", initials: "IA" },
  { name: "Fares Benammar", post: "Motion designer", initials: "FB" },
  { name: "Imen El Mokretar", post: "Chargée de communication", initials: "IE" },
  { name: "Maria Laieb", post: "UI Designer", initials: "ML" },
  { name: "Oussama Aba", post: "Développeur mobile", initials: "OA" },
];

const rows = [
  { items: [...members, ...members], direction: "left" },
  { items: [...[...members].reverse(), ...[...members].reverse()], direction: "right"  },
  { items: [...members.slice(4), ...members, ...members.slice(0, 4)], direction: "left" },
];

export default function TeamScrollSection() {
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
              className="cursor-pointer px-5 py-2.5 border border-[#e0e0e0] rounded-full text-[15px] font-medium text-[#252525] whitespace-nowrap hover:border-[#E54259] hover:bg-[#fafafa] transition-all"
              onMouseEnter={(e) => handleMouseEnter(member, e)}
              onMouseMove={updatePos}
              onMouseLeave={() => setHovered(null)}
            >
              {member.name}
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
          <p className="font-medium text-[15px] text-[#252525] m-0">{hovered.name}</p>
          <p className="text-[13px] text-[#888] m-0 mt-0.5">{hovered.post}</p>
        </div>
      )}
    </section>
  );
}