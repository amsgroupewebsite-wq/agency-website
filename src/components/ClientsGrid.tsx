import Image from "next/image";
import { clients } from "../lib/home";

interface Props {
  className?: string;
  imageClassName?: string;
}

export default function ClientsGrid({ className = "", imageClassName = "w-auto h-22" }: Props) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center ${className}`}>
      {clients.map((client, i) => (
        <div key={i} className="flex items-center justify-center p-4 rounded-xl">
          <Image
            src={client.src}
            alt={client.alt}
            width={220}
            height={100}
            className={imageClassName}
          />
        </div>
      ))}
    </div>
  );
}