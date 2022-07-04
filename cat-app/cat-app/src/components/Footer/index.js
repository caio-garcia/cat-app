import styles from "./styles.module.css";

export function Footer() {
  return (
    <>
      <footer>
        <h2>
          Developed by{" "}
          <a href="https://github.com/Tathy-Max" target="_blank">
            Tathy
          </a>{" "}
          and{" "}
          <a href="https://github.com/caio-garcia/" target="_blank">
            Caio
          </a>
        </h2>
        <span>
          Would you like to contribute this project? Please reach out its{" "}
          <a href="https://github.com/caio-garcia/cat-app" target="_blank">
            repo
          </a>
          !
        </span>
      </footer>
    </>
  );
}
