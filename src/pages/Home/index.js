import home from "../../assets/pictures/home.png";
import { Link } from "react-router-dom";
import quizButton from "../../assets/pictures/quizButton.png";

export function Home() {
  return (
    <>
      <div className="container" style={{ background: "#53a24f" }}>
        <img
          style={{ width: 800, height: 500 }}
          className="home-logo"
          src={home}
          alt="question3-logo"
        />{" "}
      </div>
      <Link to="/quiz">
        <button>
          <img src={quizButton} alt="quizButton-logo" />
        </button>
      </Link>
    </>
  );
}
