import "/styles/global.scss"
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero2";
import Menu from "../components/Menu";
import sanityClient from "@sanity/client";

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2024-03-10',
    useCdn: true,
  });

export default function HomePage() {
    return (
        <div className="bg-gray-100 text-gray-900">

            {/* Navbar */}
            <div><Navbar /></div>

            {/* Hero Section */}
            <section><Hero imagePath={'/images/menuBanner.jpg'} title={""} /></section>

            {/* Menu list */}
            <div><Menu client={client}/></div>

            {/* Footer */}
            <div> <Footer /> </div>
        </div>
    );
}