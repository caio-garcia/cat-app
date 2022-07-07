import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import q1 from "../../assets/pictures/q1.png";
import q2 from "../../assets/pictures/q2.png";
import q3 from "../../assets/pictures/q3.png";
import q4 from "../../assets/pictures/q4.png";
import q5 from "../../assets/pictures/q5.png";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import styles from "../HappyMatchesDetail/styles.module.css";
import catLogoNavbar from "../../assets/pictures/catCatchRowCropped.png";
import { toast, Toaster } from "react-hot-toast";

export function HappyMatchesDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [match, setMatch] = useState([]);

  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [solved, setSolved] = useState(false);

  const [questionNo, setQuestionNo] = useState(1);

  function nextQuestion() {
    if (questionNo === 5) {
      return;
    }
    setQuestionNo(questionNo + 1);
  }
  function previousQuestion() {
    if (questionNo === 1) {
      return;
    }
    setQuestionNo(questionNo - 1);
  }

  useEffect(() => {
    async function fetchMatch() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/cat-app-form-collection/${id}`
        );
        setMatch(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMatch();
  }, []);

  function handleChange(event) {
    setMatch({ ...match, [event.target.name]: event.target.value });
    // console.log(match);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const clone = { ...match };
    delete clone._id;
    try {
      const sent = await axios.put(
        `https://ironrest.herokuapp.com/cat-app-form-collection/${id}`,
        clone
      );
      // console.log(sent);
      navigate(`/happy-matches/`);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDelete() {
    async function deleteData() {
      const deleteResponse = await axios.delete(
        `https://ironrest.herokuapp.com/cat-app-form-collection/${id}`,
        match
      );
    }
    deleteData();
    console.log("Deleted!");
    navigate("/happy-matches");
  }

  function turnEditMode() {
    setEditMode(true);
  }

  //CAT API FETCHING
  const [catsBreeds, setCatsBreeds] = useState([]);

  useEffect(() => {
    async function fetchAPIData() {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/breeds/"
        );
        setCatsBreeds(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPIData();
  }, []);

  //************** */
  //API Search
  //************** */
  function APISearch1(q1, q2, q3, q4, q5) {
    //filtering out the cats

    let filteredCats = [...catsBreeds];

    function filterCats(category, attribute) {
      filteredCats = filteredCats.filter((elem) => {
        if (category === "A") {
          return elem[attribute] > 0;
        } else if (category === "B") {
          return elem[attribute] >= 3;
        } else if (category === "C") {
          // console.log(elem[attribute]);
          return elem[attribute] >= 4;
        }
      });
      // console.log(filteredCats);
    }
    let att = "child_friendly";
    filterCats(q1, att);
    let att2 = "adaptability";
    filterCats(q2, att2);
    let att3 = "social_needs";
    filterCats(q3, att3);
    let att4 = "affection_level";
    filterCats(q4, att4);
    let att5 = "energy_level";
    filterCats(q5, att5);

    const resultado =
      filteredCats[Math.floor(Math.random() * filteredCats.length)];

    return resultado;
  }

  function resultCat(e) {
    e.preventDefault();
    // console.log(match);
    if (
      match.question1 &&
      match.question2 &&
      match.question3 &&
      match.question4 &&
      match.question5
    ) {
      setMatch({
        ...match,
        result: APISearch1(
          match.question1,
          match.question2,
          match.question3,
          match.question4,
          match.question5
        ),
      });
      setSolved(true);
    } else {
      toast.error("Error! You must fill in all questions!");
    }
  }

  return loading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : editMode ? (
    <>
      <Toaster />
      <div className={styles.container}>
        <Navbar />
        {/* <div className={styles.deleteButtonContainer}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </div> */}
        <div className={styles.dataDiv}>
          <form className={styles.dataDiv}>
            <h2>Edit {match.name}'s answers! </h2>
            <label htmlFor="input-name">Name:</label>
            <input
              name="name"
              onChange={handleChange}
              value={match.name}
              type="text"
              required
            />
            <label htmlFor="input-email">Email:</label>
            <input
              name="email"
              onChange={handleChange}
              value={match.email}
              type="text"
              required
            />
            <br></br>
            <div className={styles.questionsContainer}>
              {questionNo === 1 && (
                <div className={styles.dataDivQ}>
                  {/* <p>Question 1: How many kids live in your home?</p> */}
                  <img
                    className={styles.questionLogo}
                    src={q1}
                    alt="question1-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question1"
                    value="A"
                    onChange={handleChange}
                    checked={match.question1 === "A" ? true : false}
                  />
                  <label htmlFor="A">None</label>
                  <input
                    type="radio"
                    id="B"
                    name="question1"
                    value="B"
                    onChange={handleChange}
                    checked={match.question1 === "B" ? true : false}
                  />
                  <label htmlFor="B">One kid</label>
                  <input
                    type="radio"
                    id="C"
                    name="question1"
                    value="C"
                    onChange={handleChange}
                    checked={match.question1 === "C" ? true : false}
                  />
                  <label htmlFor="C">Two or more kids</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={nextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
              {questionNo === 2 && (
                <div className={styles.dataDivQ}>
                  {/* <p>
                    Question 2: How often does your life change (home, work,
                    travel)?
                  </p> */}
                  <img
                    className={styles.questionLogo}
                    src={q2}
                    alt="question2-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question2"
                    value="A"
                    onChange={handleChange}
                    checked={match.question2 === "A" ? true : false}
                  />
                  <label htmlFor="A">Occasionaly</label>
                  <input
                    type="radio"
                    id="B"
                    name="question2"
                    value="B"
                    onChange={handleChange}
                    checked={match.question2 === "B" ? true : false}
                  />
                  <label htmlFor="B">Sometimes</label>
                  <input
                    type="radio"
                    id="C"
                    name="question2"
                    value="C"
                    onChange={handleChange}
                    checked={match.question2 === "C" ? true : false}
                  />
                  <label htmlFor="C">Fequently</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={previousQuestion}>
                      Previous Question
                    </button>
                    <button onClick={nextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
              <br></br>
              {questionNo === 3 && (
                <div className={styles.dataDivQ}>
                  {/* <p>
                    Question 3: How much time do you have to spend with your
                    cat?
                  </p> */}
                  <img
                    className={styles.questionLogo}
                    src={q3}
                    alt="question3-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question3"
                    value="A"
                    onChange={handleChange}
                    checked={match.question3 === "A" ? true : false}
                  />
                  <label htmlFor="A">One hour or less</label>
                  <input
                    type="radio"
                    id="B"
                    name="question3"
                    value="B"
                    onChange={handleChange}
                    checked={match.question3 === "B" ? true : false}
                  />
                  <label htmlFor="B">Between one to two hours</label>
                  <input
                    type="radio"
                    id="C"
                    name="question3"
                    value="C"
                    onChange={handleChange}
                    checked={match.question3 === "C" ? true : false}
                  />
                  <label htmlFor="C">More then two hours</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={previousQuestion}>
                      Previous Question
                    </button>
                    <button onClick={nextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
              <br></br>
              {questionNo === 4 && (
                <div className={styles.dataDivQ}>
                  {/* <p>Question 4: How do you usually feel when you are alone?</p> */}
                  <img
                    className={styles.questionLogo}
                    src={q4}
                    alt="question4-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question4"
                    value="A"
                    onChange={handleChange}
                    checked={match.question4 === "A" ? true : false}
                  />
                  <label htmlFor="A">I feel good</label>
                  <input
                    type="radio"
                    id="B"
                    name="question4"
                    value="B"
                    onChange={handleChange}
                    checked={match.question4 === "B" ? true : false}
                  />
                  <label htmlFor="B">I don't mind</label>
                  <input
                    type="radio"
                    id="C"
                    name="question4"
                    value="C"
                    onChange={handleChange}
                    checked={match.question4 === "C" ? true : false}
                  />
                  <label htmlFor="C">I don't like to be alone</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={previousQuestion}>
                      Previous Question
                    </button>
                    <button onClick={nextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
              <br></br>
              {questionNo === 5 && (
                <div className={styles.dataDivQ}>
                  {/* <p>Question 5: What kind of environment do you prefer?</p> */}
                  <img
                    className={styles.questionLogo}
                    src={q5}
                    alt="question5-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question5"
                    value="A"
                    onChange={handleChange}
                    checked={match.question5 === "A" ? true : false}
                  />
                  <label htmlFor="A">Chill</label>
                  <input
                    type="radio"
                    id="B"
                    name="question5"
                    value="B"
                    onChange={handleChange}
                    checked={match.question5 === "B" ? true : false}
                  />
                  <label htmlFor="B">Both</label>
                  <input
                    type="radio"
                    id="C"
                    name="question5"
                    value="C"
                    onChange={handleChange}
                    checked={match.question5 === "C" ? true : false}
                  />
                  <label htmlFor="C">Agitated</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={previousQuestion}>
                      Previous Question
                    </button>
                    <button
                      className={styles.resultsButton}
                      // type="submit"
                      onClick={resultCat}
                    >
                      Get Your Match!
                    </button>
                  </div>
                </div>
              )}
              <div>
                {solved ? (
                  <>
                    <div className={styles.resultsDiv}>
                      <img
                        className={styles.catLogoResults}
                        src={catLogoNavbar}
                        alt="catLogo"
                      />
                      <p>Your best match is:</p>
                      <h1>{match.result.name}</h1>

                      {match.result.image === undefined ||
                      match.result.image === {} ? (
                        <span>No image available</span>
                      ) : (
                        <img
                          className={styles.catResults}
                          src={match.result.image.url}
                          alt={match.result.name}
                        />
                      )}
                      <h2>{match.result.temperament}</h2>
                      <p>{match.result.description}</p>

                      <p>Other characteristics:</p>
                      <p>Life Span: {match.result.life_span} years</p>
                      <p>
                        Health Issues: {match.result.health_issues} (scale: 0-5)
                      </p>
                      <p>
                        Shedding Level: {match.result.shedding_level} (scale:
                        0-5)
                      </p>

                      <button
                        // className={styles.resultsButton}
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Send my answers
                      </button>
                    </div>
                  </>
                ) : (
                  <></>
                  // <button
                  //   className={styles.resultsButton}
                  //   // type="submit"
                  //   onClick={resultCat}
                  // >
                  //   Get Your Match!
                  // </button>
                )}
              </div>
            </div>
          </form>
          {/* </div> */}
        </div>
      </div>
      <div className={styles.container}>
        <Footer />
      </div>
    </>
  ) : (
    <>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.editResultsDiv}>
          <h2>{match.name}</h2>
          <h3>Perfect Cat: {match.result.name}</h3>
          <img
            className={styles.catResults}
            src={match.result.image.url}
            alt={match.result.name}
          />
          <span>
            Perfect because: {match.result.name} is{" "}
            {match.result.temperament.toLowerCase()}.
          </span>
          <p>{match.result.description}</p>
        </div>
        <div className={styles.resultsButtonDiv}>
          <button className={styles.resultsButton} onClick={turnEditMode}>
            Edit Answers
          </button>
          <button className={styles.resultsButton} onClick={handleDelete}>
            Delete Match
          </button>
        </div>
      </div>
      <div className={styles.footerDiv}>
        <Footer />
      </div>
    </>
  );
}
