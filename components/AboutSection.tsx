import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function AboutSection({ aboutData, fadeIn }) {
  const rows = aboutData?.data || [];

  if (rows.length === 0) {
    return <div>Loading data...</div>; // Or a fallback message
  }

  return (
    <motion.section
      className="max-w-7xl mx-auto py-16 px-6 flex flex-col gap-12"
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      {rows.map((row, index) => (
        <div className="flex flex-col md:flex-row gap-6 w-full" key={index}>
          {/* Colonna testo */}
          <div className={`flex-1 p-4 ${index % 2 === 1 ? "order-last" : ""}`}>
            <h2 className="text-4xl font-extrabold text-blue-600">{row.title}</h2>
            <p className="mt-4 text-lg text-gray-600">{row.description}</p>
          </div>

          {/* Colonna immagine */}
          <div className="flex-1 p-4 flex justify-center relative">
            {/* Aggiungi la GIF solo per la prima riga */}
            {index === 0 && (
              <div className="absolute top-[-72px] left-1/2 transform -translate-x-1/2">
                <img src="/gifs/catAnim.gif" alt="cat" className="w-60 h-48" />
              </div>
            )}

            {/* Assicurati di usare l'immagine dinamica da Sanity */}
            {row.image?.asset?.url ? (
              <Image
                src={row.image.asset.url} // Usando l'URL dell'immagine dal campo `image` di Sanity
                alt={row.title}
                width={1000}
                height={650}
                className="rounded-2xl shadow-lg w-full max-h-[350px]" // Limita l'altezza massima e mantiene l'aspect ratio
              />
            ) : (
              <div className="w-full h-96 bg-gray-300 flex items-center justify-center text-xl">Immagine non disponibile</div>
            )}
          </div>
        </div>
      ))}
    </motion.section>
  );
}

export default AboutSection;
