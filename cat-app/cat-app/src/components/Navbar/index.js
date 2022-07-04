import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <h1>Cat or Catch?</h1>
        </Link>
        <Link to="/quiz" style={{ textDecoration: "none" }}>
          <h2>Take the quiz!</h2>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <h2>About</h2>
        </Link>
      </div>
    </>
  );
}
