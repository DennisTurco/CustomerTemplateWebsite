import "/styles/global.scss"
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import MapsPosition from "../components/MapsPosition";
import Menu from "../components/Menu";

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* Navbar */}
            <div><Navbar /></div>

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

            {/* Menu list */}
            <div><Menu /></div>

            {/* Google Maps */}
            <div> <MapsPosition /> </div>

            {/* Footer */}
            <div> <Footer /> </div>
        </div>
    );
}