import Image from "next/image";
import Link from "next/link";
import { expertises } from "../lib/home";

export default function ExpertiseDesktop() {
  return (
    <div className="flex-1 flex flex-col border-y border-white/10 divide-y divide-white/10 group/list">
      {expertises.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group/item relative flex items-center justify-between py-6"
        >
          <span
            className="font-bold text-4xl xl:text-5xl tracking-tight leading-none text-white
                       transition-all duration-300
                       group-hover/list:text-white/25
                       group-hover/item:!text-[#E72048]
                       group-hover/item:translate-x-3"
          >
            {item.label}
          </span>

          {item.image && (
            <div
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-10
                         w-96 h-64 rounded-xl overflow-hidden
                         opacity-0 scale-95 transition-all duration-300
                         group-hover/item:opacity-100 group-hover/item:scale-100"
            >
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
    </div>
  );
}