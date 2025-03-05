'use client';

import { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import styles from '../styles/Menu.module.scss';
import Image from 'next/image'; // Usa il componente Image per caricare le immagini in modo ottimizzato

// Definizione del tipo di dati
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  imageURL: { asset: { url: string } } | null; // Aggiungi il controllo per l'assenza di immagine
  allergens: { symbol: string; name: string }[]; // Assumendo che gli allergeni siano oggetti con simbolo e nome
}

interface Allergen {
  symbol: string;
  name: string;
}

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, 
});

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [allergensData, setAllergensData] = useState<Allergen[]>([]);
  const [loading, setLoading] = useState(true); // Stato di caricamento per mostrare un indicatore durante il fetch dei dati

  useEffect(() => {
    // Fetch dei dati dal dataset di Sanity per il menu e gli allergeni
    Promise.all([
      client.fetch(`
        *[_type == "menuItem"]{
          _id,
          name,
          description,
          price,
          imageURL{asset->{url}},
          allergens[]->{symbol, name}
        }
      `),
      client.fetch(`
        *[_type == "allergen"]{
          symbol,
          name
        }
      `)
    ])
    .then(([menuData, allergensData]) => {
      setMenuItems(menuData);
      setAllergensData(allergensData);
      setLoading(false); // Imposta lo stato di caricamento a false quando i dati sono stati caricati
    })
    .catch(console.error);
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>; // Mostra un messaggio di caricamento mentre i dati vengono recuperati
  }

  return (
    <section className={styles.menuSection}>
      <h2 className={styles.sectionTitle}>Our Menu</h2>
      <div className={styles.menuList}>
        {menuItems.length === 0 ? (
          <p className={styles.noMenu}>Menu not available</p> // Messaggio di fallback se non ci sono articoli nel menu
        ) : (
          menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              {/* Controllo per verificare la presenza dell'immagine */}
              {item.imageURL?.asset?.url ? (
                <Image 
                  src={item.imageURL.asset.url} 
                  alt={item.name} 
                  width={300} // Imposta la larghezza dell'immagine
                  height={200} // Imposta l'altezza dell'immagine
                  className={styles.image} 
                  priority // Carica l'immagine con priorità
                />
              ) : (
                <div className={styles.imagePlaceholder}>No Image Available</div>
              )}
              <div className={styles.textContainer}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}</p>
              </div>
              {Array.isArray(item.allergens) && item.allergens.length > 0 && (
              <div className={styles.allergens}>
                {item.allergens.map((icon, i) => (
                  <span key={i}>{icon.symbol} </span> // Mostra il simbolo dell'allergene
                ))}
              </div>
            )}
            </div>
          ))
        )}
      </div>

      {/* Legenda degli allergeni */}
      <div className={styles.allergenLegend}>
        <h3 className={styles.legendTitle}>Allergen Legend</h3>
        <div className={styles.legendItems}>
          {allergensData.length === 0 ? (
            <p>No allergens available</p> // Messaggio di fallback se non ci sono allergeni
          ) : (
            allergensData.map((allergen, index) => (
              <div key={index} className={styles.legendItem}>
                <span>{allergen.symbol}</span>
                <p>{allergen.name}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
