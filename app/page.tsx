"use client";
import { motion } from "framer-motion";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import Hero from "../components/Hero4";
// import WhySection from "../components/Why";
// import AboutSection from "../components/AboutSection";
// import styles from "../styles/Home.module.scss";
import MapsPosition from "../components/MapsPosition";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


export default function HomePage() {

  return (
    <div>
      <Navbar />
      
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Hero />
      </motion.section>

        {/* <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <AboutSection aboutData={aboutData} fadeIn={fadeIn} />
        </motion.section> */}

        {/* <motion.section className={styles.why_container} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <WhySection whyData={whyData} fadeIn={fadeIn} client={client} />
        </motion.section> */}

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <MapsPosition />
      </motion.div>

      <Footer />
    </div>
  );
}
