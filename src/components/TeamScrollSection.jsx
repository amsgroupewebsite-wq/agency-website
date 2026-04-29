"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

// `photo` and `linkedin` are both optional
const members = [
  { name: "Meriem Beyoucef",        post: "Chargée de planification",         initials: "MB",                             linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341" },
  { name: "Mourad Akli",            post: "Commercial senior",                initials: "MA", photo: "/team/mourad.jpg",  linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341" },
  { name: "Lylia Zehraoui",         post: "Commerciale senior",               initials: "LZ", photo: "/team/lylia.jpeg",   linkedin: "https://www.linkedin.com/in/lylia-zahraoui-6690b7184/" },
  { name: "Mohamed Islam Rahil",    post: "Développeur full-stack",           initials: "MR", photo: "/team/islam.jpeg",  linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341" },
  { name: "Youcef Zellali",         post: "Film maker",                       initials: "YZ",                             linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341" },
  { name: "Kartout Younes cherif",  post: "Chargé événementiel",              initials: "YO" ,                            linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341"},
  { name: "Abdelhamid Ouinissi",    post: "Chargé administratif",             initials: "AO" ,                            linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341"},
  //{ name: "Imene Aissa",            post: "Responsable contenu",              initials: "IA", photo: "/team/imene.jpg",   linkedin: "https://www.linkedin.com/in/imene-aissa/" },
  { name: "Fares Benammar",         post: "Chargé digital",                   initials: "FB" ,photo: "/team/fares.jpeg",  linkedin: "https://www.linkedin.com/in/faresbenammar1/"},
  { name: "Imen El Mokretar",       post: "Assistante administrative",        initials: "IE",                             },
  { name: "Maria Laieb",            post: "Community manager",                initials: "ML",                             linkedin: "https://www.linkedin.com/in/maria-laieb/" },
  { name: "Oussama Aba",            post: "Graphic designer",                 initials: "OA", photo: "/team/oussama.jpeg",linkedin: "https://www.linkedin.com/in/oussama-aba-tlm/" },
];

const rows = [
  { items: [...members, ...members],                                       direction: "left"  },
  { items: [...[...members].reverse(), ...[...members].reverse()],         direction: "right" },
  { items: [...members.slice(4), ...members, ...members.slice(0, 4)],      direction: "left"  },
];

const CARD_W = 240;
const CARD_H = 360;

export default function TeamScrollSection() {
  const [hovered, setHovered] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const updatePos = useCallback((e) => {
    const x = Math.min(e.clientX + 20, window.innerWidth - CARD_W - 16);
    const y = Math.max(16, Math.min(e.clientY - 90, window.innerHeight - CARD_H - 16));
    setPos({ x, y });
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-10 md:py-10">
      {rows.map((row, i) => (
        <div
          key={i}
          className={`flex w-max gap-10 sm:gap-6 md:gap-8 mb-2 sm:mb-4 md:mb-6 ${
            row.direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
          }`}
        >
          {row.items.map((member, j) => {
            const Tag = member.linkedin ? "a" : "button";
            const linkProps = member.linkedin
              ? { href: member.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": `LinkedIn de ${member.name}` }
              : { type: "button" };

            return (
              <Tag
                key={j}
                {...linkProps}
                onMouseEnter={(e) => { setHovered(member); updatePos(e); }}
                onMouseMove={updatePos}
                onMouseLeave={() => setHovered(null)}
                className={`group whitespace-nowrap border-0 bg-transparent py-4 ${
                  member.linkedin ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <span
                  className="
                    block font-extrabold leading-none
                    text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px]
                    text-transparent [-webkit-text-stroke:1px_#252525]
                    transition-colors duration-300
                    group-hover:text-[#E54259]
                    group-hover:[-webkit-text-stroke:0px_transparent]
                  "
                >
                  {member.name}
                </span>
              </Tag>
            );
          })}
        </div>
      ))}

{/* Hover card — desktop only */}
{hovered && (
  <div
    className="fixed z-50 hidden w-[240px] rounded-xl border border-[#e0e0e0] bg-white p-4 shadow-lg pointer-events-none md:block"
    style={{ left: pos.x, top: pos.y }}
  >
    {hovered.photo ? (
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg bg-[#f5f5f5]">
        <Image
          src={hovered.photo}
          alt={hovered.name}
          fill
          sizes="240px"
          className="object-cover"
        />
      </div>
    ) : (
      <div className="mb-3 flex aspect-square w-full items-center justify-center rounded-lg bg-[#fde8ec]">
        <span className="text-4xl font-bold text-[#E54259]">{hovered.initials}</span>
      </div>
    )}

    <div className="flex items-center justify-between gap-2">
      <p className="m-0 text-[15px] font-semibold text-[#252525] truncate">
        {hovered.name}
      </p>
      {hovered.linkedin && (
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 shrink-0 text-[#0A66C2]"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      )}
    </div>

    <p className="mt-1 text-[13px] text-[#888]">{hovered.post}</p>
  </div>
)}
    </section>
  );
}