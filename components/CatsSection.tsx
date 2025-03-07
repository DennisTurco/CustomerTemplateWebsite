"use client";
import styles from '../styles/Cats.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Definizione del tipo di dati
interface Gatto {
  _id: string;
  nome: string;
  sesso: string;
  eta: string;
  foto: { asset: { url: string } };
  descrizione: string;
}

export default function CatsSection({client}) {
  const [gatti, setGatti] = useState<Gatto[]>([]);

  useEffect(() => {
    // Fetch dei dati da Sanity
    client
      .fetch(`*[_type == "gatti"]{_id, nome, sesso, eta, foto{asset->{url}}, descrizione}`)
      .then((data) => setGatti(data))
      .catch(console.error);
  }, []);

  return (
    <section className={styles.gattiSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>I Nostri Gatti</h2>
        <p className={styles.subtitle}>Incontra alcuni dei gatti disponibili per l'adozione!</p>

        <div className={styles.grid}>
          {gatti.map((gatto) => (
            <div key={gatto._id} className={styles.card}>
              <Image src={gatto.foto.asset.url} width={300} height={200} alt={gatto.nome} className={styles.image} />
              <h3 className={styles.name}>{gatto.nome}</h3>
              <ul className={styles.details}>
                <li><strong>Sesso:</strong> {gatto.sesso}</li>
                <li><strong>Età:</strong> {gatto.eta}</li>
              </ul>
              <p className={styles.description}>{gatto.descrizione}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
