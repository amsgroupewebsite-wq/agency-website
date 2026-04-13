"use client"

import NavBar from "../../components/NavBar";
import Image from "next/image"; 
import Actu from "../../components/Actu"
//import { Mail } from "lucide-react";
//import SoftAurora from "../../components/SoftAurora"; 




export default function Home()
{
 return(
<>

<section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-20 justify-between mt-40 max-w-6xl mx-auto">
  <div className="flex flex-col max-w-3xl items-start justify-start gap-10">
    <h1 className="text-xs text-[#252525]">Nos actualites</h1>
    <h2 className="text-7xl text-[#252525] font-bold" >En ce moment <span className="text-[#E82248] text-7xl font-bold" >à l'agence</span> </h2>
    
    <p className="text-md text-[#252525]">
        Tous les moyens sont bons (ou presque)
        pour suivre nos aventures, dernières
        tendances, coups de cœur de l'équipe,
        nouveaux postes, nouveaux clients,
        dernières réalisations ...</p>

  </div>

  <div  className="w-full flex flex-col justify-center bg-[#FFCCB8] gap-8 lg:gap-12
        my-16
        rounded-2xl
        p-6 sm:p-8 lg:p-10 xl:px-16 px-4 sm:px-6 lg:px-8">
    
            <div className="w-12 h-12 sm:w-14 sm:h-14  bg-transparent flex items-center justify-center shrink-0">
               <Image src="/mail.png" alt="actu" width={65} height={46} />
            </div>

            <h2 className="text-5xl font-bold leading-snug text-[#252525]">
              S'abonner à la newsletter{" "}
              <span className="text-[#E54259]">PICKS</span>
            </h2>
          

          {/* Description */}
          <p className="text-sm sm:text-base text-[#252525]/90 leading-relaxed">
            Tous les 15 jours, le meilleur des nouvelles tendances du digital dans votre boîte mail.
          </p>
          {/* CTA */}
        <div className="w-full lg:w-auto">
          <a
            href="/Newsletter"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full lg:w-auto
              inline-flex items-center justify-center
              px-6 py-3
              rounded-lg
              text-sm sm:text-base
              font-medium
              text-white
              bg-[#E54259]
              hover:bg-[#c73a4f]
              active:bg-[#b0323f]
              transition-all duration-200
            "
          >
            S'abonner
          </a>
        </div>
        </div>

        

    

  

</section>


<section>
<Actu/>
</section>
</>
);
 
}