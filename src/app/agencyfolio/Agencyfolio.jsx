"use client"

import NavBar from "../../components/NavBar";
import Image from "next/image";
//import SoftAurora from "../../components/SoftAurora"; 




export default function Home()
{
 return(
  <div className="">
         <NavBar/>
          <div className="flex flex-col min-h-screen relative pt-25 overflow-x-hidden">

                 {/* Backgrounds décoratifs */}
                   {/* <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
                     <div className="absolute top-[-100px] left-0 w-full">
                       <Image src="/agency/blur1.svg" alt="" width={115} height={100} className="select-none w-full" draggable="false" />
                     </div>
                     <div className="absolute top-[6000px] left-0 w-full">
                       <Image src="/agency/blur5.svg" alt="" width={115} height={100} className="select-none w-full" draggable="false" priority />
                     </div>
                     <div className="absolute top-0 left-0 w-full">
                       <Image src="/agency/blur2.svg" alt="" width={1080} height={2565} className="select-none w-full" draggable="false" />
                     </div>
                     <div className="absolute top-[2400px] left-0 w-full">
                       <Image src="/agency/blur4.svg" alt="" width={1080} height={2565} className="select-none w-full" draggable="false" />
                     </div>
                     <div className="absolute top-[800px] left-0 w-full">
                       <Image src="/agency/blur3.svg" alt="" width={1080} height={2565} className="select-none w-full" draggable="false" />
                     </div>
                   </div> */}



          </div>
        
  </div>
 
  

 );
 
}