"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer2";
import GattiSection from "../components/GattiSection";
import WhyData from "../data/why.js";
import Hero from "../components/Hero";
import Why from "../components/Why";
import AboutSection from "../components/AboutSection";
import styles from "../styles/Home.module.scss";
import MapsPosition from "../components/MapsPosition";
import sanityClient from "@sanity/client";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const query = `*[_type == "aboutSection"][0]{ title, description }`;
const aboutData = await client.fetch(query);

export default function HomePage() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <Hero />
      </motion.section>

      {/* About Section */}
      <motion.section initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <AboutSection aboutData={aboutData} fadeIn={fadeIn} />
      </motion.section>

      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <GattiSection client={client}/>
      </motion.div>

      {/* Why Section */}
      <motion.section className={styles.why_container} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <div className={styles.why_text_content}>
          <h2>Why choose us?</h2>
          <p>Because we're easy to work with...</p>
        </div>
        <div className={styles.why_card_container}>
          {WhyData.data.map((data, key) => (
            <Why key={key} {...data} />
          ))}
        </div>
      </motion.section>

      {/* Google Maps */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <MapsPosition />
      </motion.div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
