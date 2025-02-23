import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Why from "../components/Why";
import WhyData from "../data/why.js";
import styles from "../styles/Home.module.scss";

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* Hero Section */}
            <section
                className="relative w-full h-96 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/bannerv2.png')",
                    marginTop: "78px", // Aggiungi il margine superiore per spostare il contenuto più in basso
                }}
                >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                    <h1 className="text-5xl font-extrabold">Benvenuto nel nostro sito Demo</h1>
                </div>
            </section>


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

            <section>
                <Navbar />
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

            {/* Footer con Google Maps */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-2xl font-semibold">Dove Trovarci</h3>
                    <p className="mt-4 text-xl">Vieni a trovarci, siamo a Fidenza (PR) 43036.</p>

                    {/* Google Maps Embed */}
                    <div className="mt-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22624.413195324698!2d10.048936738509!3d44.86124331022442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805e2460c27007%3A0x896e3cfd8d45d0e3!2s43036%20Fidenza%20PR!5e0!3m2!1sit!2sit!4v1740176152415!5m2!1sit!2sit"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                        <br></br>
                    </div>

                    {/* Contact */}
                    <div className="max-w-7xl mx-auto text-center">
                        <table className="max-w-7xl mx-auto text-center">
                            <thead>
                                <tr>
                                    <th className="max-w-7xl mx-auto text-left">Indirizzo</th>
                                    <th className="max-w-7xl mx-auto text-right">Indirizzo</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

                <Footer />

            </footer>
        </div>
    );
}