"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiCoffeePot, GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import styles from "../styles/NavBar.module.scss";

export const Navbar: React.FC = () => {
    const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);

    return (
        <header className={styles.container}>
            <Link href="/">
                <GiCoffeePot size={44} />
            </Link>

            <div className={styles.link_container}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About us
                </Link>
                <Link href="/buy-coffee">
                    Buy Coffee
                </Link>
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
                    <Link href="/" onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                        Home
                    </Link>
                    <Link href="/about" onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                        About us
                    </Link>
                    <Link href="/buy-coffee" onClick={() => setHamburgerClicked(!hamburgerClicked)}>
                        Buy Coffee
                    </Link>
                </div>
            </div>
        </header>
    );
};
