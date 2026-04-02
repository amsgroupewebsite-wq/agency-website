"use client";

import NavBar from "../NavBar"
import Image from "next/image";
import Footer from "../Footer";
import { useTranslation } from "../../hooks/useTranslation";
import { motion } from "framer-motion";


export default function InphaMedis () {
    const { t } = useTranslation("inpha-medis");
    console.log(t("social_media.paragraph_1"));
    const groupContact=[
        "+213 (0) 20 30 68 28",
        "+213 (0) 770 93 69 65",
        "+213 (0) 770 77 09 92",
      ]
      const groupEmail = ["contact@amsgroupe.com"];

    return (
        <div className="flex flex-col justify-center">
             <div className=" hidden lg:block -z-20 w-full absolute top-0 left-0">
                <Image
                  src="/agency/clients/inpha-medis/blur1.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <div className="lg:hidden -z-20 w-full absolute top-0 left-0">
                <Image
                  src="/agency/clients/inpha-medis/bg-mobile.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <NavBar/>
            <div className="flex flex-col justify-between items-center w-9/12 mx-auto lg:mt-32 mt-16">
                <h1 className="text-white text-center font-bold text-5xl lg:text-[150px] tracking-tight">
                    INPHA-Médis
                </h1>
                <p className="text-white text-lg lg:text-2xl text-center ">
                {t("hero.subtitle")}
                </p>

            </div>
            <div className="-z-30 relative top-O left-0 w-full">
                    <Image
                    src="/agency/clients/inpha-medis/socials.jpg"
                    alt="Background Image"
                    width={1441}
                    height={872}
                    className="select-none w-full"
                    draggable="false"
                    />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-8 gap-2 rounded-4xl bg-linear-to-b from-blue-200 to-stone-100 mx-auto lg:p-10 p-4 mb-20 text-[#252525] items-start lg:text-base text-sm">
                <div className="flex flex-col justify-center items-start lg:gap-4">
                    <Image
                    src="/agency/clients/inpha-medis/insight-icon.svg"
                    alt="icon"
                    width={28}
                    height={28}
                    
                    />
                    <h3 className="text-lg lg:text-2xl font-[400]">{t("project.client")}</h3>
                    <p>
                    {t("project.client_name")}
                    </p>
                        
                    

                </div>
                <div className="flex flex-col justify-center items-start lg:gap-4">
                    <Image
                    src="/agency/clients/inpha-medis/insight-icon.svg"
                    alt="icon"
                    width={28}
                    height={28}
                    
                    />
                   <h3 className="text-lg lg:text-2xl font-[400]">{t("project.requests")}</h3>
                    <p>
                    {t("project.requests_value")} 
                    </p>
                        
                    

                </div>
                 <div className="flex flex-col justify-center items-start lg:gap-4">
                    <Image
                    src="/agency/clients/inpha-medis/insight-icon.svg"
                    alt="icon"
                    width={28}
                    height={28}
                    
                    />
                   <h3 className="text-lg lg:text-2xl font-[400]">{t("project.category")} </h3>
                    <p>
                    {t("project.category_value")} 
                    </p>
                        
                    

                </div>
                 <div className="flex flex-col justify-center items-start lg:gap-4">
                    <Image
                    src="/agency/clients/inpha-medis/insight-icon.svg"
                    alt="icon"
                    width={28}
                    height={28}
                    
                    />
                   <h3 className="text-lg lg:text-2xl font-[400]">{t("project.socials")}:</h3>
                    <div className="flex flex-row gap-2">
                        <a className="cursor-pointer">
                            <Image
                            src={'/li.svg'}
                            alt="logo"
                            width={50}
                            height={50}

                            />
                        </a>

                     
                        <a className="cursor-pointer">
                            <Image
                            src={'/ig.svg'}
                            alt="logo"
                            width={50}
                            height={50}

                            />
                        </a>
                        <a className="cursor-pointer">
                            <Image
                            src={'/fb.svg'}
                            alt="logo"
                            width={50}
                            height={50}

                            />
                        </a>

                    </div>
                        
                    

                </div>

            </div>
            <div className="flex flex-col lg:flex-row lg:gap-32 gap-10 justify-center items-center mx-auto mt-20 w-10/12 ">
                <Image
                    src="/agency/clients/inpha-medis/inphalogo.png"
                    alt="logo"
                    width={281}
                    height={232}

                />
                <div className="flex flex-col gap-8 lg:gap-20 justify-center items-center lg:items-start  text-center lg:w-5/12 lg:text-xl text-lg">
                    <p>
                    {t("about.description")} 
                    </p>
                    <a href="www.inphamedis.dz" className="underline text-center ">
                    www.inphamedis.dz
                    </a>

                </div>

            </div>
            <div className="relative flex flex-col justify-center items-center text-center">
            <div className="-z-20 w-full absolute top-10 lg:-top-20 left-0">
                <Image
                  src="/agency/clients/inpha-medis/blur2.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <h2 className="text-white font-bold lg:text-9xl text-5xl tracking-tight text-center lg:mt-48 mt-32  w-6/12">
            {t("social_media.title")} 
            </h2>
                <h3 className="lg:text-3xl text-lg text-white ">{t("social_media.subtitle")} </h3>
            </div>

            <div className="relative lg:hidden flex flex-col justify-center items-center gap-4 mt-10 w-full ">
            <div className="-z-40 absolute  top-30 right-0">
                            <Image
                            src="/agency/clients/inpha-medis/bg-logo.svg"
                            alt="Background Image"
                            width={400} // match size of blur1
                            height={958}
                            className="select-none "
                            draggable="false"
                            />
                        </div>
                <Image
                src="/agency/clients/inpha-medis/socials-phone.png"
                alt="phone socials"
                width={450}
                height={177}
                className=""
            
                />
                
              <div className="flex flex-col gap-3 justify-center w-9/12 text-base font-normal text-[#252525] text-center"> 
                     <p>{t("social_media.paragraph_1")}</p>
                     <p>{t("social_media.paragraph_2")}</p>
                     <p>{t("social_media.paragraph_3")}</p>
              </div>

         
                
                
            <div/>
           

            </div>

            <div className="relative hidden lg:flex flex-row justify-center gap-4 mt-72 w-full ">
            <div className="-z-40 absolute  top-20 right-0">
                            <Image
                            src="/agency/clients/inpha-medis/bg-logo.svg"
                            alt="Background Image"
                            width={2209} // match size of blur1
                            height={658}
                            className="select-none w-full"
                            draggable="false"
                            />
                        </div>
                <Image
                src="/agency/clients/inpha-medis/socials-phone.png"
                alt="phone socials"
                width={743}
                height={977}
                className="mx-32"
                
                />
                
                <div className=" flex flex-col gap-20 justify-center w-4/12 text-xl font-normal text-[#252525]"> 
                           
                      <p dangerouslySetInnerHTML={{ __html: t("social_media.paragraph_1") }} />
                     <p>{t("social_media.paragraph_2")}</p>
                     <p>{t("social_media.paragraph_3")}</p>


                </div>
         
                
                
            <div/>
           

            </div>
            <div className="relative hidden lg:flex flex-row justify-center gap-4 w-12/12 h-fit lg:mt-0 ">
                <div className="-z-20 absolute -top-40  ">
                                <Image
                                src="/agency/clients/inpha-medis/bg-dots.svg"
                                alt="Background Image"
                                width={1440} // match size of blur1
                                height={1000}
                                className="select-none w-screen h-fit"
                                draggable="false"
                                
                                />
                </div>
                <div className="flex flex-row gap-48 justify-center items-start">
                    <div>
                     <h2 className="text-[#003DA6] text-7xl font-bold tracking-tight">
                        {t("social_media.posts_title_1")}
                    </h2>
                    <h2 className="text-white bg-[#003DA6] text-7xl font-bold tracking-tight px-4">
                
                    {t("social_media.posts_title_2")}
                    </h2>
                    <Image
                    src={"/agency/clients/inpha-medis/phone1.png"}
                    alt="phone image"
                    width={568}
                    height={1114}
                    />
                    </div>

         
               
                  
                    <div> 
                        <Image
                    src={"/agency/clients/inpha-medis/phone2.png"}
                    alt="phone image"
                    width={568}
                    height={1114}
                    />
                    </div>
              
                    </div>
             </div>
             <div className="relative lg:hidden flex flex-row justify-center gap-4 w-12/12 h-fit mt-20">
                <div className="-z-20 absolute top-0  ">
                                <Image
                                src="/agency/clients/inpha-medis/bg-dots.svg"
                                alt="Background Image"
                                width={2440} // match size of blur1
                                height={2000}
                                className="select-none w-screen h-fit"
                                draggable="false"
                                
                                />
                </div>
                <div className="flex flex-row gap-10 justify-center items-start w-11/12 mx-auto">
                    <div>
                     <h2 className="text-[#003DA6] text-xl font-bold tracking-tight">
                         {t("social_media.posts_title_1")}
                    </h2>
                    <h2 className="text-white bg-[#003DA6] text-xl font-bold tracking-tight px-4">
                
                    {t("social_media.posts_title_2")}
                    </h2>
                    <Image
                    src={"/agency/clients/inpha-medis/phone1.png"}
                    alt="phone image"
                    width={568}
                    height={1114}
                    />
                    </div>

         
               
                  
                    <div> 
                        <Image
                    src={"/agency/clients/inpha-medis/phone2.png"}
                    alt="phone image"
                    width={568}
                    height={1114}
                    />
                    </div>
              
                    </div>
             </div>
            <div className="relative flex flex-col justify-center items-center lg:mt-0 mt-18">
            <div className="-z-20 w-full absolute -top-30 left-0">
                <Image
                  src="/agency/clients/inpha-medis/blur2.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <h2 className="text-white font-bold lg:text-9xl text-4xl tracking-tight text-center lg:mt-48 lg:w-6/12">
            {t("events.title")}
            </h2>
            <h3 className="text-xl lg:text-7xl text-white font-thin lg:mb-10">Bakou 2025</h3>
            <h3 className="text-xl lg:text-3xl text-white ">{t("events.subtitle")}</h3>
            </div>
            <div className="hidden lg:flex flex-row justify-between mt-48 w-8/12 mx-auto">
                <div className="flex flex-col gap-2">
                     <h2 className="text-[#00ABC8] text-4xl font-bold tracking-tight">
                     Un logo
                   
                    </h2>
                    <h2 className="text-white bg-[#00ABC8] text-4xl font-bold tracking-tight px-4">
                
                    {t("events.subtitle")}
                    </h2>
                    </div>

                    <div className="flex flex-col gap-2 text-right">
                     <h2 className="text-[#00ABC8] text-4xl font-bold tracking-tight">
                     Accordons
                    
                    </h2>
                    <h2 className="text-[#1D61AB] text-4xl font-bold tracking-tight ">
                
                    Nos Violons
                    </h2>
                    </div>

            </div>
            <div className="lg:hidden flex flex-row justify-between mt-10 w-11/12 mx-auto">
                <div className="flex flex-col gap-1">
                     <h2 className="text-[#00ABC8] lg:text-4xl  text-2xl  font-bold tracking-tight">
                     Un logo
                   
                    </h2>
                    <h2 className="text-white bg-[#00ABC8] lg:text-4xl text-2xl font-bold tracking-tight px-4">
                
                    événementiel
                    </h2>
                    </div>

                    <div className="flex flex-col gap-1 text-right">
                     <h2 className="text-[#00ABC8] lg:text-4xl text-2xl  font-bold tracking-tight">
                     Accordons
                    
                    </h2>
                    <h2 className="text-[#1D61AB] lg:text-4xl  text-2xl  font-bold tracking-tight ">
                
                    Nos Violons
                    </h2>
                    </div>

            </div>
            <div className=" hidden lg:block mt-10 w-8/12 mx-auto">
            <Image
            src={"/agency/clients/inpha-medis/violon-logo.png"}
            alt="logos"
            width={1551}
            height={787}
            />

            </div>
            <div className=" lg:hidden mt-10 w-10/12 mx-auto">
            <Image
            src={"/agency/clients/inpha-medis/violon-logo.png"}
            alt="logos"
            width={1551}
            height={787}
            />

            </div>
            <div className=" mt-10 lg:mt-20 lg:w-6/12  w-10/12 mx-auto">
            <p className="text-center lg:text-xl text-base ">
            {t("objective")}
            </p>
            </div>
            <div className="w-full">
                <Image
                src={"/agency/clients/inpha-medis/goodies.jpg"}
                width={1440}
                height={1440}
                alt="goodies"
                className="relative -z-50 lg:w-11/12 w mx-auto mt-10"
                />

            </div>
        
           <div className="relative hidden lg:flex flex-col justify-center items-center">
            <div className="-z-20 w-full absolute -top-20 left-0">
                <Image
                  src="/agency/clients/inpha-medis/blur2.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <h2 className="text-white font-bold text-8xl tracking-tight text-center lg:mt-48 mt-20 lg:w-6/12 w-10/12">
             {t("production.title")}
            </h2>
                <h3 className="text-3xl text-white font-normal mt-8">{t("events.subtitle")}</h3>
            </div>


            <div className="relative lg:hidden flex flex-col justify-center items-center">
            <div className="-z-20 w-full absolute -top-20 left-0">
                <Image
                  src="/agency/clients/inpha-medis/blur2.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <h2 className="text-white font-bold text-4xl lg:text-9xl tracking-tight text-center mt-10 lg:w-6/12">
            Production Audio-Visuel {t("production.title")}
            </h2>
                <h3 className="lg:text-3xl text-xl text-white font-normal mt-2">{t("events.subtitle")}</h3>
            </div>


            <div className="lg:hidden flex flex-col gap-1 justify-center items-center mt-10">
                <div className="flex flex-row gap-1 justify-center items-center">
                    <Image
                    src={"/agency/clients/inpha-medis/tv1.png"}
                    alt="audio visuel production"
                    width={106}
                    height={235}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv2.png"}
                    alt="audio visuel production"
                    width={106}
                    height={235}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv3.png"}
                    alt="audio visuel production"
                    width={106}
                    height={235}
                    className="rounded-lg"
                    
                    />

                </div>
                <div className="flex flex-row gap-1 justify-center items-center">
                    <Image
                    src={"/agency/clients/inpha-medis/tv4.png"}
                    alt="audio visuel production"
                    width={63}
                    height={418}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv5.png"}
                    alt="audio visuel production"
                    width={193}
                    height={411}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv6.png"}
                    alt="audio visuel production"
                    width={63}
                    height={418}
                    className="rounded-lg"
                    
                    />

                </div>

            </div>



            <div className="hidden lg:flex flex-col gap-4 justify-center items-center mt-20">
                <div className="flex flex-row gap-2 justify-center items-center">
                    <Image
                    src={"/agency/clients/inpha-medis/tv1.png"}
                    alt="audio visuel production"
                    width={419}
                    height={235}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv2.png"}
                    alt="audio visuel production"
                    width={419}
                    height={235}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv3.png"}
                    alt="audio visuel production"
                    width={419}
                    height={235}
                    className="rounded-lg"
                    
                    />

                </div>
                <div className="flex flex-row gap-8 justify-center items-center">
                    <Image
                    src={"/agency/clients/inpha-medis/tv4.png"}
                    alt="audio visuel production"
                    width={236}
                    height={418}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv5.png"}
                    alt="audio visuel production"
                    width={731}
                    height={411}
                    className="rounded-lg"
                    
                    />
                     <Image
                    src={"/agency/clients/inpha-medis/tv6.png"}
                    alt="audio visuel production"
                    width={236}
                    height={418}
                    className="rounded-lg"
                    
                    />

                </div>

            </div>



            <div className="relative flex flex-col justify-center items-center">
            <div className="-z-20 w-full absolute lg:-top-40 -top-10 left-0">
                <Image
                  src="/agency/clients/inpha-medis/blur2.svg"
                  alt="Background Image"
                  width={1080} // match size of blur1
                  height={2565}
                  className="select-none w-full"
                  draggable="false"
                />
            </div>
            <h2 className="text-white font-bold text-4xl lg:text-9xl tracking-tight text-center lg:mt-72  mt-20 w-6/12">
            {t("production.animation.title")}
            </h2>
                <h3 className="text-xl lg:text-3xl text-white font-normal mt-2 lg:mt-8">{t("production.animation.subtitle")}</h3>
            </div>
            <div className="lg:hidden ">
                <div>
                <div className="grid grid-cols-2 w-full mt-20 relative ">
                {/* Bloc 1 : Image + Texte */}
                <Image
                    src={"/agency/clients/inpha-medis/animation.jpg"}
                    alt="video d'animation"
                    width={1800}
                    height={632}
                    className="w-full h-auto object-cover relative -z-50"
                />
                <div className="flex flex-col justify-center items-start ">
                    <h2 className="text-[#003DA6] lg:text-3xl font-bold tracking-tight text-left">
                    {t("production.video_animation.title")}
                    </h2>
                    <h2 className="text-white bg-[#003DA6] lg:text-3xl font-bold tracking-tight px-4">
                    {t("production.video_animation.subtitle")}
                    </h2>
                </div>

                {/* Bloc 2 : Texte + Image */}
                <div className=" ml-10 flex flex-col justify-center items-start ">
                <h2 className="text-[#003DA6] lg:text-3xl font-bold tracking-tight text-left">
                    {t("production.website_launch.title")}

                    </h2>
                    <h2 className="text-white bg-[#003DA6] lg:text-3xl font-bold tracking-tight px-4">
                    {t("production.website_launch.subtitle")}
                    </h2>
                </div>
                <Image
                    src={"/agency/clients/inpha-medis/siteweb.jpg"}
                    alt="site web"
                    width={1800}
                    height={632}
                    className="w-full h-auto object-cover relative -z-50"
                />
                </div>
                </div>



        
                </div>
                <div className="hidden lg:block ">
                <div>
                <div className="grid grid-cols-2 w-full mt-48">
                {/* Bloc 1 : Image + Texte */}
                <Image
                    src={"/agency/clients/inpha-medis/animation.jpg"}
                    alt="video d'animation"
                    width={1800}
                    height={632}
                    className="w-full h-auto object-cover relative -z-50"
                />
                <div className="flex flex-col justify-center items-start px-20">
                    <h2 className="text-[#003DA6] text-7xl font-bold tracking-tight text-left">
                    {t("production.video_animation.title")}
                    </h2>
                    <h2 className="text-white bg-[#003DA6] text-7xl font-bold tracking-tight px-4">
                    {t("production.video_animation.subtitle")}
                    </h2>
                </div>

                {/* Bloc 2 : Texte + Image */}
                <div className="flex flex-col justify-center items-start px-20 ml-48">
                    <h2 className="text-[#003DA6] text-7xl font-bold tracking-tight text-left">
                    {t("production.website_launch.title")} 

                    </h2>
                    <h2 className="text-white bg-[#003DA6] text-7xl font-bold tracking-tight px-4">
                        {t("production.website_launch.subtitle")}
                    </h2>
                </div>
                <Image
                    src={"/agency/clients/inpha-medis/siteweb.jpg"}
                    alt="site web"
                    width={1800}
                    height={632}
                    className="w-full h-auto object-cover relative -z-50"
                />
                </div>
                </div>
                </div>
            
               
                      <Footer 
                                contact={groupContact}
                                email={groupEmail}
                                slogan={t("footer.slogan")}
                                logo="/footer/Artboard 4.png"
                                logoAlt="Logo AMS"
                                maps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.7744929359358!2d3.0248579390855235!3d36.76116519320583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3d5ed4eab9b%3A0x1de850a86f3b5afe!2sAMS%20Groupe!5e0!3m2!1sen!2sdz!4v1753195888333!5m2!1sen!2sdz"
                                location="Boulevard du 11 Décembre 1960, BT 09,El Biar Algérie"
                              /> 

                
                        

     </div>
    )

}