"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <Image
          src="/agency/agency-logo-black.svg"
          alt="AMS Logo"
          width={220}
          height={220}
          className="mb-20"
        /> */}
      </motion.div>

      {/* Code 404 */}
      <motion.h1
        className="text-6xl font-bold text-[#1D61AB]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Image
          src="/404error.svg"
          alt="404 Not Found"
          width={778}
          height={334}
        />
      </motion.h1>

      {/* Texte */}
      <motion.p
        className="text-gray-600 mt-4 text-lg max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Oups... La page que vous recherchez n'existe pas ou a été déplacée.
      </motion.p>

      {/* Bouton retour */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            bg-[#1D61AB]
            text-white
            px-6 py-3
            rounded-lg
            font-medium
            shadow-md
            hover:bg-[#174a82]
            hover:scale-105
            transition-all duration-300
          "
        >
          ← Retour à l'accueil
        </Link>
      </motion.div>

     

    </div>
  );
}
