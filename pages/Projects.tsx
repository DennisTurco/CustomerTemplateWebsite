import "../styles/global.scss"
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero2";
import Projects from "../components/Projects";

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* Navbar */}
            <div><Navbar /></div>

            {/* Hero Section */}
            <section><Hero imagePath={'/images/catsBanner.jpg'} title={""} /></section>

            {/* Projects list */}
            <div><Projects /></div>

            {/* Footer */}
            <div> <Footer /> </div>
        </div>
    );
}