'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/images/banner2.jpg',
  
  '/images/banner3.jpg',
  '/images/menuBanner.jpg',
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.img
        key={index}
        src={images[index]}
        alt="Hero Image"
        className="absolute w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* Text on top of the image */}
      <div className="absolute top-16 w-full text-center z-2">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">Benvenuto nel nostro mondo</h1>
        </div>
      {/* Buttons */}
      <div className="absolute bottom-10 flex gap-4 z-2">
        <button onClick={prevImage} className="bg-black text-white px-4 py-2 rounded-lg">❮</button>
        <button onClick={nextImage} className="bg-black text-white px-4 py-2 rounded-lg">❯</button>
      </div>
      {/* Indicator Dots */}
      <div className="absolute bottom-4 flex gap-2 z-1">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
