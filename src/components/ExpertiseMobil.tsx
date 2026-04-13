import Link from "next/link";
import { expertises } from "../lib/home";

export default function ExpertiseMobile() {
  return (
    <div className="flex flex-col">
      {expertises.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="flex items-center justify-between border-b border-white/10 py-5 cursor-pointer group"
        >
          <span className="font-bold text-2xl text-white group-hover:text-[#E72048] group-hover:translate-x-2 transition-all duration-300">
            {item.label}
          </span>
          <span className="text-white/30 group-hover:text-[#E72048] transition-colors duration-300 text-lg" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
      <div className="border-t border-white/10" />
    </div>
  );
}