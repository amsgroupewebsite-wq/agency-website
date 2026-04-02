"use client"
import { useRef, useEffect , useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


const logosClientsAlgerie =[
  "/clients-logo/viareport.jpg",
  "/clients-logo/ge healtcare.png",
  "/clients-logo/avia.jpg",
  "/clients-logo/veolia.png",
  "/clients-logo/Ornua_logo.png",
  "/clients-logo/maire.jpg",
  "/clients-logo/eni.png",
  "/clients-logo/sorfert.webp",
  "/clients-logo/rnesans.png",
  "/clients-logo/British_American_Tobacco-Logo.png",
  "/clients-logo/astrazeneca.png",
  "/clients-logo/larsen and turbo.png",
  "/clients-logo/buraux veritas.png",
  "/clients-logo/thalas.png",
  "/clients-logo/ge.png",
  "/clients-logo/cegelec.jpg",
  "/clients-logo/leon grosse.jpg",
  "/clients-logo/lafarge.jpg",
  "/clients-logo/Logo_TotalEnergies.svg.png",
  "/clients-logo/novo nordisk.png",
  "/clients-logo/sealynx.png",
  "/clients-logo/suaz.png",
  "/clients-logo/Expro_Logo.jpg",
  "/clients-logo/bonatti.png",
  "/clients-logo/egis.png",
  "/clients-logo/Nestle-Logo.png",
  "/clients-logo/pttep.png",
  "/clients-logo/alstom.jpg",
  "/clients-logo/basis groupe.jpg",
  "/clients-logo/abb.jpg",
  "/clients-logo/dragon oil.png",
  "/clients-logo/baush + lomb.jpg",
  "/clients-logo/JGC_Corporation_company_logo.png",
  "/clients-logo/sarpi.png",
  "/clients-logo/siemens.jpg",
  "/clients-logo/ae2i.jpg",
  "/clients-logo/Logo-Renault.png",
  "/clients-logo/gsk.png",
  "/clients-logo/sade logo.png",
  "/clients-logo/cepsa.jpg",
  "/clients-logo/geant.jpg",
  "/clients-logo/zte.png",
  "/clients-logo/entrepose.png",
  "/clients-logo/myah tipaza.jpg",
  "/clients-logo/iepc.png",
  "/clients-logo/linde.png",
  "/clients-logo/astrazeneca-logo.png"
];
const logosClientsTech =[
  "/clients-logo/viareport.jpg",
  "/clients-logo/ge healtcare.png",
  "/clients-logo/avia.jpg",
  "/clients-logo/veolia.png",
  "/clients-logo/Ornua_logo.png",
  "/clients-logo/maire.jpg",
  "/clients-logo/eni.png",
  "/clients-logo/sorfert.webp",
  "/clients-logo/rnesans.png",
  "/clients-logo/British_American_Tobacco-Logo.png",
  "/clients-logo/astrazeneca.png",
  "/clients-logo/larsen and turbo.png",
  "/clients-logo/buraux veritas.png",
  "/clients-logo/thalas.png",
  "/clients-logo/ge.png",
  "/clients-logo/cegelec.jpg",
  "/clients-logo/leon grosse.jpg",
  "/clients-logo/lafarge.jpg",
  "/clients-logo/Logo_TotalEnergies.svg.png",
  "/clients-logo/novo nordisk.png",
  "/clients-logo/sealynx.png",
  "/clients-logo/suaz.png",
  "/clients-logo/Expro_Logo.jpg",
  "/clients-logo/bonatti.png",
  "/clients-logo/egis.png",
  "/clients-logo/Nestle-Logo.png",
  "/clients-logo/pttep.png",
  "/clients-logo/alstom.jpg",
  "/clients-logo/basis groupe.jpg",
  "/clients-logo/abb.jpg",
  "/clients-logo/dragon oil.png",
  "/clients-logo/baush + lomb.jpg",
  "/clients-logo/JGC_Corporation_company_logo.png",
  "/clients-logo/sarpi.png",
  "/clients-logo/siemens.jpg",
  "/clients-logo/ae2i.jpg",
  "/clients-logo/Logo-Renault.png",
  "/clients-logo/gsk.png",
  "/clients-logo/sade logo.png",
  "/clients-logo/cepsa.jpg",
  "/clients-logo/geant.jpg",
  "/clients-logo/zte.png",
  "/clients-logo/entrepose.png",
  "/clients-logo/myah tipaza.jpg",
  "/clients-logo/iepc.png",
  "/clients-logo/linde.png",
  "/clients-logo/astrazeneca-logo.png"
];
const logosPartenairesTech =[
  "/partners-logo/cisco.jpg",
  "/partners-logo/AVAYA.png",
  "/partners-logo/baker hughes.jpg",
  "/partners-logo/aruba.png",
  "/partners-logo/dell.png",
  "/partners-logo/hp.png",
  "/partners-logo/lenovo.png",
  "/partners-logo/logitech.png",
  "/partners-logo/siemens.png",
  "/partners-logo/DEF.png",
  "/partners-logo/fortinet.png",
  "/partners-logo/grandstream.png",
  "/partners-logo/hik.png",

  "/partners-logo/kelio.png",
  "/partners-logo/polycom.png",
  "/partners-logo/legrand.png",
  "/partners-logo/polycom.png",
  "/partners-logo/ricoh.png",
  "/partners-logo/samsung.png",
  // "/partners-logo/",
  // "/partners-logo/",
  // "/partners-logo/",
];

const selector={"algerie clients":logosClientsAlgerie,"tech clients":logosClientsTech,"tech partenaires":logosPartenairesTech}

export default function ClientCarousel({ select }) {
  const logos = selector[select] || [];
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByAmount = 800;
  const autoScrollSpeed = 0.5; // douceur 🔥

  /* ♾ duplication pour scroll infini */
  const infiniteLogos = [...logos, ...logos];

  /* 🔁 auto scroll doux */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      carouselRef.current.scrollLeft += autoScrollSpeed;

      const maxScroll =
        carouselRef.current.scrollWidth / 2;

      if (carouselRef.current.scrollLeft >= maxScroll) {
        carouselRef.current.scrollLeft = 0;
      }
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ⬅➡ flèches (pause auto) */
  const slide = (direction) => {
    if (!carouselRef.current) return;

    setIsPaused(true);

    const { scrollLeft } = carouselRef.current;
    carouselRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - scrollByAmount
          : scrollLeft + scrollByAmount,
      behavior: "smooth",
    });

    setTimeout(() => setIsPaused(false), 1000);
  };

  return (
    <div className="relative lg:w-9/12 rounded-4xl lg:p-4 p-2 lg:py-10 overflow-x-hidden my-10 bg-gradient-to-b from-[#1D61AB4D] to-[#FFFFFF4D] mx-auto">
      
      <button
        onClick={() => slide("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 mx-2 rounded-full shadow border border-black bg-white"
      >
        <ChevronLeft />
      </button>

      <div
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}   // ⏸ pause hover
        onMouseLeave={() => setIsPaused(false)} // ▶ reprise
        className="flex gap-8 overflow-x-auto scroll-smooth px-12 mx-10 scrollbar-hide"
      >
        {infiniteLogos.map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 lg:w-28 lg:h-20 w-[120px] h-[80px] flex items-center justify-center relative"
          >
            <Image
              src={src}
              alt={`Logo ${idx}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => slide("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 mx-2 rounded-full shadow border border-black bg-white"
      >
        <ChevronRight />
      </button>
    </div>
  );
}