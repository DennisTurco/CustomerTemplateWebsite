import Image from "next/image";
import fs from "fs";
import path from "path";
import Contact from "../components/Contact";

// Funzione per leggere i dati dal file JSON
async function getGatti() {
  const filePath = path.join(process.cwd(), "/data/gatti.json"); // Percorso assoluto del file JSON
  const fileContents = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export default async function HomePage() {
  const gatti = await getGatti(); // Carichiamo i dati lato server

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          <h1 className="text-5xl font-extrabold">Benvenuto nel nostro sito Demo</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600">Chi Siamo</h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
          Il nostro sito Demo è il primo della Emilia Romagna!
        </p>
      </section>

      {/* Gatti Section (Dinamico) */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-600">I Nostri Developer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {gatti.map((gatto) => (
              <div key={gatto.id} className="bg-white shadow-lg rounded-lg p-4">
              <Image src={gatto.foto} width={300} height={200} alt={gatto.nome} className="rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">{gatto.nome}</h3>
              <ul className="mt-2 text-gray-500 list-disc list-inside text-left">
                <li><strong>Età:</strong> {gatto.eta} anni</li>
              </ul>
              <p className="mt-2 text-gray-500 text-left">{gatto.descrizione}</p>
            </div>           
            ))}
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section className="bg-green-600 py-12">
      <div>
        <Contact />
      </div>
      </section>

      {/* Footer con Google Maps */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold">Dove Trovarci</h3>
          <p className="mt-4 text-xl">Vieni a trovarci, siamo a Fidenza (PR).</p>

          {/* Google Maps Embed */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22624.413195324698!2d10.048936738509!3d44.86124331022442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805e2460c27007%3A0x896e3cfd8d45d0e3!2s43036%20Fidenza%20PR!5e0!3m2!1sit!2sit!4v1740176152415!5m2!1sit!2sit"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </footer>
    </div>
  );
}
