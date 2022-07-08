import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import catLogoNavbar from "../../assets/pictures/catCatchRowCropped (2).png";
// import logo from "../../assets/pictures/CatchYourCatBlack(1080 × 768 px) (5).png";

export function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">
          <div className={styles.navbarImages}>
            <img src={catLogoNavbar} alt="catLogoNavbar" />
          </div>
        </Link>

        <div className={styles.navbarButtons}>
          <Link to="/quiz">
            <button>Take the quiz</button>
          </Link>
          <Link to="/breeds">
            <button>Breeds' List</button>
          </Link>
          <Link to="/happy-matches">
            <button>Happy Matches</button>
          </Link>
          <Link to="/about">
            <button>Our Team</button>
          </Link>
        </div>
      </div>
    </>
  );
}
