import Link from "next/link";
import { expertises } from "../lib/home";

export default function ExpertiseMobile() {
  return (
    <div className="flex flex-col border-y border-white/10 divide-y divide-white/10">
      {expertises.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex items-center justify-between py-5"
        >
          <span className="font-bold text-2xl text-white transition-all duration-300 group-hover:text-[#E72048] group-hover:translate-x-2">
            {item.label}
          </span>
          <span
            className="text-white/30 text-lg transition-colors duration-300 group-hover:text-[#E72048]"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      ))}
    </div>
  );
}