'use client';

import { motion } from 'framer-motion';

export default function HeroAnimation() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative flex items-end space-x-10">
        {/* Gatto */}
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, -2, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <circle cx="50" cy="50" r="40" fill="#333" />
          <motion.path
            d="M30 80 C40 90, 60 90, 70 80"
            stroke="#000"
            strokeWidth="5"
            fill="transparent"
            animate={{ d: [
              "M30 80 C40 90, 60 90, 70 80",
              "M30 82 C40 88, 60 88, 70 82",
              "M30 80 C40 90, 60 90, 70 80"
            ] }}
            transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
          />
        </motion.svg>

        {/* Tazza di caffè */}
        <div className="relative">
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="10" y="40" width="60" height="30" rx="5" fill="#A52A2A" />
            <path d="M70 45 Q80 50, 70 55" stroke="#A52A2A" strokeWidth="5" fill="none" />
          </motion.svg>
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-white rounded-full opacity-50"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 0.2, 0.5]
            }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </div>
  );
}
