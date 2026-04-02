import Image from "next/image";
export default function CarouselCard({image,text}){
    return (
        <div className="relative flex items-center justify-center h-[200px] min-w-[130px] lg:h-[536px] lg:min-w-[370px] bg-gray-100 lg:rounded-4xl rounded-2xl  overflow-hidden shadow-lg scroll-item">
            <Image      
                src={image}
                alt={text}
                width={370}
                height={536}
                className="object-cover rounded-lg h-[200px] min-w-[130px] lg:h-[536px] lg:min-w-[370px] "
                draggable={false}
            />
            <div className="absolute bottom-2 lg:bottom-8 lg:left-4 bg-white/20 lg:p-2 lg:py-4 p-0 py-2 rounded-4xl shadow-lg mx-1 lg:mx-10 text-center text-white border border-white backdrop-blur-sm lg:text-xl text-sm">
                <h3 className="text-xs lg:text-lg font-semibold">{text}</h3>
            </div>
        </div>);
}