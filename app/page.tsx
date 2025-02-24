import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero";
import Why from "../components/Why";
import WhyData from "../data/why.js";
import styles from "../styles/Home.module.scss";
import MapsPosition from "../components/MapsPosition";

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* Navbar */}
            <div><Navbar /></div>

            {/* Hero Section */}
            <section><Hero /></section>

            {/* About Section */}
            <section className="max-w-7xl mx-auto py-12 px-6 text-center">
                <h2 className="text-4xl font-bold text-blue-600">Chi Siamo</h2>
                <br></br>
                <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
                    Operiamo nel campo Tecnico Informatico da oltre 10 anni, proponiamo tra i nostri servizi l'Assemblaggio di Computer per ogni esignenza,
                    Progettazzione di siti internet, Progettazione di applicazioni windows, assistenza tecnica e hardware di secondo livello a 360 gradi.
                </p>
                <br></br>
                <br></br>
            </section>

            {/* <section className="bg-green-600 py-12"> </section> */}

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

            {/* <section className="bg-green-600 py-12"> </section> */}

            {/* Google Maps */}
            <div> <MapsPosition /> </div>

            {/* Footer */}
            <div> <Footer /> </div>
        </div>
    );
}