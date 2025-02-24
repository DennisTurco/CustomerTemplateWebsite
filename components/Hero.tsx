import styles from "/styles/Hero.module.scss";
import { FaChevronDown } from "react-icons/fa"; // Importa un'icona di freccia da FontAwesome

const Hero = () => {
    return (
        <section
            className={styles.heroSection} 
            style={{
                backgroundImage: "url('/images/bannerv2.png')"
            }}
        >
            <div className={styles.overlay}></div> 
            <div className={styles.content}>
            </div>
            <div className={styles.scrollDown}>
                <FaChevronDown />
            </div>
        </section>
    );
};

export default Hero;
