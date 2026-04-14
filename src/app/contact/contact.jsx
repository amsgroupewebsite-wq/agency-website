"use client";
import NavBar from "../../components/NavBar"
import ContactForm from "../../components/ContactForm"
//import Image from "next/image"
//import Footer from "../../components/Footer"
//import { useTranslation } from "../../hooks/useTranslation";
import AnimatedWords from "../../components/AnimatedWords";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import Footer from "../../components/Footer";


export default function Home (){

   // const { t, tArray } = useTranslation("contactPage"); 

    
    return(
        <>
          <NavBar/>
          {/* version 1 */}

          {/* <section className="pt-30 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
    
            
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

                
                 <div>
                   <ContactForm />
                 </div>

            </div>
          </section>  */}

          {/* version 2 */}
          <section>
             <section className="relative z-0 pt-20 md:pt-30 px-4 sm:px-6 flex flex-col items-start max-w-6xl mx-auto  py-30">
                          <span className="text-xs text-[#b0b0b0]">Offre</span>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className={cn(
                              "mb-6 w-full text-left text-3xl sm:text-4xl leading-normal font-bold tracking-tight md:text-5xl lg:text-7xl",
                            )}
                          >
                            <h1 className="inline  text-[#252525]">
                              Envie de nous confier <span className="text-5xl md:text-6xl text-[#E54259] font-extrabold"><AnimatedWords /></span> 
                            </h1>
                          </motion.div>
                          <p className="text-sm sm:text-base mb-10 max-w-6xl">
                             Pour prendre contact avec nous, laissez-nous un message en remplissant ce formulaire. 
                             Nous vous répondrons dans les plus brefs délais.
                          </p>
                </section>
                <section className="sticky top-0 z-20 bg-[#FFF8E8]">
                    <ContactForm />
                </section>
            
          </section>
             
              
              
        </>
    )
}