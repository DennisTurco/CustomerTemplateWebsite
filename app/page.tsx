import Contact from "../components/Contact";
import { Navbar } from "../components/NavBar";
import Why from "../components/Why";
import WhyData from "../data/why.js";
import styles from "../styles/Home.module.scss";

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          <h1 className="text-5xl font-extrabold">Benvenuto nel nostro Cat Café</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-12 px-6 text-center">
        <h2 className="text-4xl font-bold text-green-600">Chi Siamo</h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
          Il nostro Cat Café è il primo della Emilia Romagna! Un luogo dove puoi goderti una tazza di caffè mentre
          ti godi la compagnia dei gatti. Siamo anche in collaborazione con l'ENPA, quindi puoi adottare uno dei nostri
          adorabili gatti!
        </p>
      </section>

      <section className="bg-green-600 py-12">
        <Navbar />
      </section>

      <section className={styles.why_container}>
        <div className={styles.why_text_content}>
          <h2>Why choose us?</h2>
          <p>
            Because we're easy to work with. We take the work seriously, but
            not ourselves. We're not prickly, precious or pretentious.
            <br />- abccopywriting
          </p>
        </div>
        <div className={styles.why_card_container}>
          {WhyData.data.map((data, key) => (
            <Why key={key} {...data} />
          ))}
        </div>
      </section>

      {/* Contatti */}
      <section className="bg-green-600 py-12">
        <Contact />
      </section>

      {/* Footer con Google Maps */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold">Dove Trovarci</h3>
          <p className="mt-4 text-xl">Visita il nostro Cat Café! Siamo in Emilia Romagna.</p>

          {/* Google Maps Embed */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_LINK_HERE"
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