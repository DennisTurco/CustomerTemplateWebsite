import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Colonna 1: Logo, Descrizione e Social */}
        <div style={styles.column}>
          <img src="/public/images/logo.png" alt="Logo" style={styles.logo} />
          <p style={styles.description}>Descrizione della tua azienda o sito web.</p>
          <div style={styles.socialIcons}>
            <Link href="https://facebook.com" passHref>
              <FaFacebook size={24} style={styles.icon} />
            </Link>
            <Link href="https://twitter.com" passHref>
              <FaTwitter size={24} style={styles.icon} />
            </Link>
            <Link href="https://instagram.com" passHref>
              <FaInstagram size={24} style={styles.icon} />
            </Link>
          </div>
        </div>

        {/* Colonna 2: Link */}
        <div style={styles.column}>
          <h3 style={styles.title}>Link Utili</h3>
          <ul style={styles.list}>
            <li><Link href="/about" style={styles.link}>Chi siamo</Link></li>
            <li><Link href="/services" style={styles.link}>Servizi</Link></li>
            <li><Link href="/contact" style={styles.link}>Contatti</Link></li>
          </ul>
        </div>

        {/* Colonna 3: Link */}
        <div style={styles.column}>
          <h3 style={styles.title}>Supporto</h3>
          <ul style={styles.list}>
            <li><Link href="/faq" style={styles.link}>FAQ</Link></li>
            <li><Link href="/terms" style={styles.link}>Termini e condizioni</Link></li>
            <li><Link href="/privacy" style={styles.link}>Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Colonna 4: Link */}
        <div style={styles.column}>
          <h3 style={styles.title}>Seguici</h3>
          <ul style={styles.list}>
            <li><Link href="/blog" style={styles.link}>Blog</Link></li>
            <li><Link href="/careers" style={styles.link}>Carriere</Link></li>
            <li><Link href="/partners" style={styles.link}>Partnership</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  column: {
    flex: 1,
    padding: '0 20px',
  },
  logo: {
    width: '150px',
    marginBottom: '10px',
  },
  description: {
    marginBottom: '20px',
    fontSize: '14px',
    color: '#bbb',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    color: '#fff',
    transition: 'color 0.3s ease',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#fff',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  link: {
    color: '#bbb',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
    transition: 'color 0.3s ease',
  },
};