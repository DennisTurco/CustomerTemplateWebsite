import "/styles/global.scss"
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero2";
import MapsPosition from "../components/MapsPosition";
import Menu from "../components/Menu";

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* Navbar */}
            <div><Navbar /></div>

            {/* Hero Section */}
            <section><Hero /></section>

            {/* Menu list */}
            <div><Menu /></div>

            {/* Google Maps */}
            <div> <MapsPosition /> </div>

            {/* Footer */}
            <div> <Footer /> </div>
        </div>
    );
}