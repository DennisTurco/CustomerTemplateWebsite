import React from "react";
import Link from "next/link";
import Copyright from "./Copyright";
import { GiCoffeePot } from "react-icons/gi";
import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/">
                <GiCoffeePot className={styles.logo} size={32} />
            </Link>

            <div className={styles.links_container}>
                <Link href="/">HOME</Link>
                <Link href="/about">ABOUT US</Link>
                <Link href="/contact">CONTATTI</Link>
            </div>

            <div className={styles.social_container}>
                <Link href="/"><RiFacebookCircleLine size={32} className={styles.social_link} /></Link>
                <Link href="/"><RiInstagramLine size={32} className={styles.social_link} /></Link>
                <Link href="/"><RiTwitterLine size={32} className={styles.social_link} /></Link>
            </div>

            {/* Il copyright ora avrà la larghezza del footer e sarà centrato */}
            <div className={styles.copyright_wrapper}>
                <Copyright />
            </div>
        </footer>
    );
};
