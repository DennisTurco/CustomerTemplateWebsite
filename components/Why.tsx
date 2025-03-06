import Image from "next/image";
import styles from "../styles/Why.module.scss";

const Why = ({ imageURL, title, description, altText }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image_box}>
          <Image
            src={imageURL}
            alt={altText}
            layout="intrinsic" // Mantiene le proporzioni dell'immagine
            width={300} // Puoi impostare un valore relativo alla larghezza
            height={200} // Mantiene un rapporto con l'altezza
            className={styles.image} // Aggiungi una classe personalizzata se necessario
          />
        </div>
        <div className={styles.text_content}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Why;
