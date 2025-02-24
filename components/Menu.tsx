import styles from "/styles/Menu.module.scss";
import menuItems from "../data/menu";
import allergensData from "../data/allergen";

const Menu = () => {
    return (
      <section className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Our Menu</h2>
        <div className={styles.menuList}>
          {menuItems.map((item, index) => (
            <div key={index} className={styles.menuItem}>
              <img src={item.imageURL} alt={item.name} className={styles.image} />
              <div className={styles.textContainer}>
                <h3 className={styles.name}>{item.name}</h3>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.price}>{item.price}</p>
              </div>
              {item.allergens.length > 0 && (
                <div className={styles.allergens}>
                  {item.allergens.map((icon, i) => (
                    <span key={i}>{icon} </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
  
        {/* Legenda degli allergeni */}
        <div className={styles.allergenLegend}>
            <h3 className={styles.legendTitle}>Allergen Legend</h3>
            <div className={styles.legendItems}>
            {allergensData.map((allergen, index) => (
                <div key={index} className={styles.legendItem}>
                <span>{allergen.symbol}</span>
                <p>{allergen.name}</p>
                </div>
            ))}
            </div>
        </div>
      </section>
    );
  };

export default Menu;
