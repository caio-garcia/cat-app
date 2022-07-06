import styles from "./styles.module.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function About() {
  return (
    <>
      <Navbar />

      <div className={styles.about}>
        <div className={styles.aboutTitle}>
          <h1>
            The <i>Catch Your Cat</i> Project
          </h1>
          <h4>
            This project was developed as part of Ironhack's full-time Web
            Develpment bootcamp.
          </h4>
        </div>
        <div className={styles.contributors}>
          <div className={styles.personalCard}>
            <img
              src="https://avatars.githubusercontent.com/u/22815223?v=4"
              alt="Caio Garcia"
            />
            <h2>Caio Garcia</h2>
            <span>Former ERP consultant and aspiring technoligist.</span>
          </div>
          <div className={styles.personalCard}>
            <img
              src="https://avatars.githubusercontent.com/u/106126657?v=4"
              alt="Tathy Max"
            />
            <h2>Tathy Max</h2>
            <span>
              Former Veterinarian now helping out animals trhough technology.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
