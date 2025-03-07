import React from "react";
import Link from "next/link";
import Copyright from "./Copyright";
import { RiFacebookCircleLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import styles from "../styles/Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/" className="flex flex-col items-center"> 
                Fusa & Caffè
                <img src="/images/logo.png" alt="logo" className="max-w-[80px] mb-4" />  
            </Link>

            <div className={styles.links_container}>
                <Link href="/">HOME</Link>
                <Link href="/Menu">MENU</Link>
                <Link href="/Cats">GATTI</Link>
            </div>

            <div className={styles.social_container}>
                <Link href="/"><RiFacebookCircleLine size={32} className={styles.social_link} /></Link>
                <Link href="/"><RiInstagramLine size={32} className={styles.social_link} /></Link>
                <Link href="/"><RiTwitterLine size={32} className={styles.social_link} /></Link>
            </div>

            <div className={styles.copyright_wrapper}>
                <Copyright />
            </div>
        </footer>

    );
};
