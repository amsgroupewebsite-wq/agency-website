'use client';
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
export default function Folio() {
  const { t } = useTranslation("folio");
  const [selectedFolio, setSelectedFolio] = useState("all");

  const folioItems = [
    { src: "agency/folio/folio1.jpg", type: "event" },
    { src: "agency/folio/folio2.jpg", type: "branding" },
    { src: "agency/folio/folio3.jpg", type: "social" },
    { src: "agency/folio/folio4.jpg", type: "logo" },
    { src: "agency/folio/folio5.jpg", type: "branding" },
    { src: "agency/folio/folio6.jpg", type: "ads" },
    { src: "agency/folio/folio7.jpg", type: "web" },
    { src: "agency/folio/folio8.jpg", type: "event" },
    { src: "agency/folio/folio9.jpg", type: "logo" },
  ];

  const filters = [
    { key: "all", value: "all" },
    { key: "branding", value: "branding" },
    { key: "logo", value: "logo" },
    { key: "ads", value: "ads" },
    { key: "social", value: "social" },
    { key: "web", value: "web" },
    { key: "event", value: "event" },
  ];

  return (
    <>
    

      {/* Filters */}
      <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 mt-12 lg:mb-24 mb-8 text-[10px] sm:text-sm md:text-base lg:text-xl">
        {filters.map((item, i) => (
          <li
            key={i}
            className={`text-center mt-4 text-black cursor-pointer hover:underline px-2`}
            onClick={() => setSelectedFolio(item.value)}
          >
            {t(`folio.filters.${item.key}`)}
          </li>
        ))}
      </ul>

      {/* Grid of Folio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-16 mb-24 w-11/12 mx-auto">
        {folioItems
          .filter(
            (item) => selectedFolio === "all" || item.type === selectedFolio
          )
          .map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:rounded-3xl shadow-lg overflow-hidden w-full aspect-[288/340] flex items-center justify-center"
            >
              <Image
                src={`/${item.src}`}
                alt={item.type}
                width={940}
                height={940}
                className=""
              />
            </div>
          ))}
      </div>
    </>
  );
}
