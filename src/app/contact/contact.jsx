"use client";
import NavBar from "../../components/NavBar"
import ContactForm from "../../components/ContactForm"
//import Image from "next/image"
//import Footer from "../../components/Footer"
//import { useTranslation } from "../../hooks/useTranslation";
import AnimatedWords from "../../components/AnimatedWords";


export default function Home (){

   // const { t, tArray } = useTranslation("contactPage"); 

    
    return(
        <>
          <NavBar/>
          <section className="pt-30 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    
    {/* LEFT */}
    <div className="flex flex-col gap-4 text-[#252525]">
      <span className="text-xs">Contact</span>

      <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
        Envie de nous confier
      </h1>

      <span className="text-5xl md:text-6xl text-[#E54259] font-extrabold">
        <AnimatedWords />
      </span>

      <p className="text-base md:text-lg mt-4 max-w-md">
        Pour prendre contact avec nous, laissez-nous un message en remplissant ce formulaire. 
        Nous vous répondrons dans les plus brefs délais.
      </p>
    </div>

    {/* RIGHT */}
    <div>
      <ContactForm />
    </div>

  </div>
</section>
        </>
    )
}