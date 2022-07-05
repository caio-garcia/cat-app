import styles from "./styles.module.css";

export function About() {
  return (
    <>
      <div className={styles.about}>
        <h1>The Catch or Cat Project</h1>
        <span>
          This project was developed as part of Ironhack's full-time Web
          Develpment bootcamp.
        </span>
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
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
