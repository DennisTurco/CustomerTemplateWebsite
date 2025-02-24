import styles from "/styles/MapsPosition.module.scss";

const MapsPosition = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Dove Trovarci</h3>
        <p className={styles.text}>Vieni a trovarci, siamo a Fidenza (PR) 43036.</p>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22624.413195324698!2d10.048936738509!3d44.86124331022442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47805e2460c27007%3A0x896e3cfd8d45d0e3!2s43036%20Fidenza%20PR!5e0!3m2!1sit!2sit!4v1740176152415!5m2!1sit!2sit"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default MapsPosition;