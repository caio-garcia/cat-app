// import home from "../../assets/pictures/home.png";
import { Link } from "react-router-dom";
import quizButton from "../../assets/pictures/quizButton.png";
import matchesButton from "../../assets/pictures/matchesButton.png";
import breedsButton from "../../assets/pictures/breedsButton.png";
import aboutButton from "../../assets/pictures/aboutButton.png";
import ourPetsButton from "../../assets/pictures/ourPetsButton.png";
import catHome from "../../assets/pictures/cat (1080 × 768 px).png";
import logo from "../../assets/pictures/CatchYourCatComplete.png";

export function Home() {
  return (
    <>
      <div className="cat-logo-div">
        <div>
          <img
            style={{ width: 800, height: 650 }}
            className="home-logo"
            src={catHome}
            alt="catHome-logo"
          />
        </div>
        <div className="logo-logo-div">
          <img
            style={{ width: 700, height: 500 }}
            className="cat-logo-logo"
            src={logo}
            alt="logo-logo"
          />{" "}
          <div className="button-div">
            <Link to="/quiz">
              <img src={quizButton} alt="quizButton-logo" />
            </Link>
            <Link to="/breeds">
              <img src={breedsButton} alt="breedsButton-logo" />
            </Link>
            <Link to="/happy-matches">
              <img src={matchesButton} alt="matchesButton-logo" />
            </Link>
            <Link to="/about">
              <img src={aboutButton} alt="aboutButton-logo" />
            </Link>
            {/* <Link to="/about"> */}
            <img src={ourPetsButton} alt="ourPetsButton-logo" />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
