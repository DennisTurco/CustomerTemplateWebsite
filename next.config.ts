import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["e7.pngegg.com", "cdn.sanity.io"], // Aggiungi il dominio da cui stai cercando di caricare l'immagine
    unoptimized: true,
  },
  output: "export"
};

export default nextConfig;