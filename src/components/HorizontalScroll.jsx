'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CarouselCard from './CarouselCard';

export default function HorizontalScroll() {

  const containerRef = useRef(null);

  const [pageIndex, setPageIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [cardWidth, setCardWidth] = useState(370);

  const cards = [
    {
      text: "Inpha-Medix Cycle Meeting ",
      image: "/agency/carousel/cover1.png"
    },
    {
      text: "AMS Tech Offre de service",
      image: "/agency/carousel/cover2.png"
    },
    {
      text: "AMS Algerie ICT Maghreb",
      image: "/agency/carousel/cover3.png"
    },
    {
      text: "INPHA-MediS Production Audiovisuel",
      image: "/agency/carousel/cover4.svg"
    },
    {
      text: "INPHA-MediS Production Audiovisuel",
      image: "/agency/carousel/cover5.svg"
    }
  ];

  /* Detect cards per page dynamically */
  useEffect(() => {

    const updateLayout = () => {

      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;

      const firstCard =
        containerRef.current.querySelector('.carousel-card');

      if (!firstCard) return;

      const style = window.getComputedStyle(firstCard);

      const width =
        firstCard.offsetWidth +
        parseInt(style.marginRight || 0);

      setCardWidth(width);

      const perPage =
        Math.max(1, Math.floor(containerWidth / width));

      setCardsPerPage(perPage);

      // prevent overflow page index
      const maxPage =
        Math.ceil(cards.length / perPage) - 1;

      setPageIndex(prev =>
        Math.min(prev, maxPage)
      );
    };

    updateLayout();

    window.addEventListener('resize', updateLayout);

    return () =>
      window.removeEventListener('resize', updateLayout);

  }, [cards.length]);

  const totalPages =
    Math.ceil(cards.length / cardsPerPage);

  const scrollPrev = () =>
    setPageIndex(prev => Math.max(prev - 1, 0));

  const scrollNext = () =>
    setPageIndex(prev =>
      Math.min(prev + 1, totalPages - 1)
    );

  const xOffset =
    pageIndex * cardsPerPage * cardWidth;

  return (
    <div className="relative w-full flex flex-col items-center my-10 mb-54">

      {/* LEFT */}
      <button
        onClick={scrollPrev}
        disabled={pageIndex === 0}
        className="
          absolute left-2 top-1/2 -translate-y-1/2 z-10
          p-2 rounded-full
          bg-black
          hover:bg-[#1E62AC]
          transition-all duration-200
          disabled:opacity-30
        "
      >
        <Image
          src="/arrow-left.svg"
          alt="Previous"
          width={40}
          height={40}
        />
      </button>

      {/* RIGHT */}
      <button
        onClick={scrollNext}
        disabled={pageIndex === totalPages - 1}
        className="
          absolute right-2 top-1/2 -translate-y-1/2 z-10
          p-2 rounded-full
          bg-black
          hover:bg-[#1E62AC]
          transition-all duration-200
          disabled:opacity-30
        "
      >
        <Image
          src="/arrow-right.svg"
          alt="Next"
          width={40}
          height={40}
        />
      </button>

      {/* CONTAINER */}
      <div
        ref={containerRef}
        className="overflow-hidden w-10/12"
      >

        <motion.div
          className="flex gap-7 cursor-grab"
          drag="x"
          dragConstraints={{
            left:
              -(cards.length * cardWidth -
              cardsPerPage * cardWidth),
            right: 0
          }}
          animate={{
            x: -xOffset
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >

          {cards.map((card, i) => (

            <div
              key={i}
              className="carousel-card flex-shrink-0"
            >
              <CarouselCard
                text={card.text}
                image={card.image}
              />
            </div>

          ))}

        </motion.div>

      </div>

    </div>
  );
}
