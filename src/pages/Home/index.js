// import home from "../../assets/pictures/home.png";
import { Link } from "react-router-dom";
import quizButton from "../../assets/pictures/quizButton.png";
import matchesButton from "../../assets/pictures/matchesButton.png";
import breedsButton from "../../assets/pictures/breedsButton.png";
import aboutButton from "../../assets/pictures/aboutButton.png";
import ourPetsButton from "../../assets/pictures/ourPetsButton.png";
import catHome from "../../assets/pictures/cat (1080 × 768 px).png";
import logo from "../../assets/pictures/CatchYourCatComplete.png";
import styles from "./styles.module.css";
import stars from "../../assets/pictures/estrelaLogo.png";

export function Home() {
  return (
    <>
      <div className={styles.teste}>
        <div className={styles.catLogoDiv}>
          <img src={catHome} alt="catLogo" />
          <img src={stars} alt="starsLogo" />
        </div>
        <div className={styles.logoButton}>
          <div className={styles.logoDiv}>
            <img src={logo} alt="logoLogo" />
          </div>
          <div className={styles.buttonDiv}>
            <Link to="/quiz">
              <img src={quizButton} alt="quizButtonLogo" />
            </Link>
            <Link to="/happy-matches">
              <img src={matchesButton} alt="matchesButtonLogo" />
            </Link>
            <Link to="/breeds">
              <img src={breedsButton} alt="breedsButtonLogo" />
            </Link>
            <Link to="/about">
              <img src={aboutButton} alt="aboutButtonLogo" />
            </Link>
            {/* <Link to="/about"> */}
            {/* <img src={ourPetsButton} alt="ourPetsButtonLogo" /> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
