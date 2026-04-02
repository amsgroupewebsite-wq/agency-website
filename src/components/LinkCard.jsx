import Image from 'next/image';
export default function LinkCard({ img,link }) {
    return (
        <div className='flex justify-center items-center h-[110px] w-[220px] rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-110 duration-300 '>
            <a href={link} 
            
            rel="noopener noreferrer">
                <Image
                    src={img}
                    alt="Link Image"
                    width={150}
                    height={70}
                    className=""
                />
                </a>
        </div>
    )
}
