"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import styles from "../styles/NavBar.module.scss";
import Contacts from "../components/Contact";

export const Navbar: React.FC = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const openPopup = () => {
        setIsPopupVisible(true);
    };

    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <header className={styles.container}>
            <Link href="/" className={styles.logoContainer}>
                <img src="/images/logo.png" alt="logo" className={styles.logo}/>
                <span className={styles.logoText}>Fusa & Caffè</span>
            </Link>

            <div className={styles.link_container}>
                <Link href="/"> Home </Link>
                <Link href="/Menu"> Menu </Link>
                <Link href="/Cats"> Gatti </Link>
                {/* <Link href="/Projects"> Progetti </Link> */}
                {/* <Link href="" onClick={(e) => { e.preventDefault(); openPopup(); }}> Contattaci </Link> */}
            </div>

            {hamburgerClicked ? (
                <GrFormClose
                    className={styles.hamburger}
                    onClick={() => setHamburgerClicked(!hamburgerClicked)}
                />
            ) : (
                <GiHamburgerMenu
                    className={styles.hamburger}
                    onClick={() => setHamburgerClicked(!hamburgerClicked)}
                />
            )}

            <div
                className={styles.menu_container}
                style={hamburgerClicked ? { display: "block" } : { display: "none" }}
            >
                <div className={styles.menu_links_container}>
                    <Link href="/" onClick={() => setHamburgerClicked(false)}> Home </Link>
                    <Link href="/Menu" onClick={() => setHamburgerClicked(false)}> Menu </Link>
                    <Link href="/Cats" onClick={() => setHamburgerClicked(false)}> Gatti </Link>
                    {/* <Link href="#" onClick={(e) => { e.preventDefault(); openPopup(); }}> Contattaci </Link> */}
                </div>
            </div>

            {/* Popup Contatti */}
            <Contacts isOpen={isPopupVisible} closePopup={closePopup} />
        </header>
    );
};
