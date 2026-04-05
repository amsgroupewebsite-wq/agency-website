"use client"

import { useState } from "react";

export default function ValeurItem({ titre, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="py-6 cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-bold text-lg sm:text-xl text-[#333] group-hover:text-[#E72048] transition-colors duration-300">
          {titre}
        </h3>
        <span
          className="text-[#E72048] text-2xl font-light shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </div>

      {/* Description — accordéon */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-sm sm:text-base text-black/60 leading-relaxed mt-4 max-w-xl">
          {desc}
        </p>
      </div>
    </div>
  );
}