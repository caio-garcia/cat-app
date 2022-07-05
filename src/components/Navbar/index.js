import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <h1>Catch Your Cat</h1>
        </Link>
        <Link to="/quiz">
          <h2>Take a quiz!</h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
    </>
  );
}
