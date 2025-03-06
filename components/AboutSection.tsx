import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function AboutSection({ aboutData, fadeIn }) {
  return (
    <motion.section
      className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row items-center gap-12"
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-6 w-full">
        
        {/* Colonna testo */}
        <div className="flex-1 p-4">
          <h2 className="text-4xl font-extrabold text-blue-600">{aboutData.title}</h2>
          <p className="mt-4 text-lg text-gray-600">{aboutData.description}</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
            Scopri di più
          </button>
        </div>

        {/* Colonna immagine */}
        <div className="flex-1 p-4 flex justify-center relative">
          {/* GIF sopra l'immagine */}
          <div className="absolute top-[-72px] left-1/2 transform -translate-x-1/2">
            <img
              src="/gifs/catAnim.gif"
              alt="cat"
              className="w-60 h-48"
            />
          </div>

          <Image
            src="/images/banner.jpg"
            alt="Chi siamo"
            width={1000}
            height={650}
            className="rounded-2xl shadow-lg w-full" 
          />
        </div>
        
      </div>
    </motion.section>
  );
}

export default AboutSection;
