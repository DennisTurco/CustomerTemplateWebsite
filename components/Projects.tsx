import styles from "../styles/Projects.module.scss";
import projects from "../data/projects.js";
  
const Project = () => {
return (
    <section className={styles.projectSection}>
    <h2 className={styles.sectionTitle}>Our Projects</h2>
    <div className={styles.projectGrid}>
        {projects.map((project, index) => (
        <div key={index} className={styles.card}>
            <img src={project.imageURL} alt={project.title} className={styles.image} />
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <a href={project.link} className={styles.button}>Learn More</a>
        </div>
        ))}
    </div>
    </section>
);
};
  
export default Project;