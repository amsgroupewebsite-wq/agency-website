import Image from "next/image";
import { clients } from "../lib/home";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  imageClassName?: string;
}

export default function ClientsGrid({ className = "", imageClassName = "w-auto h-22" }: Props) {
  return (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center mt-10 sm:mt-0 py-8">
              {clients.map((client, i) => (
                <motion.div
                  key={client.alt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={220}
                    height={100}
                    sizes="(max-width: 640px) 120px, 220px"
                    className="w-auto h-12 sm:h-16 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all"
                  />
                </motion.div>
              ))}
            </div>
  );
}