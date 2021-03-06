import axios from "axios";
import { useState, useEffect } from "react";
import q1 from "../../assets/pictures/q1.png";
import q2 from "../../assets/pictures/q2.png";
import q3 from "../../assets/pictures/q3.png";
import q4 from "../../assets/pictures/q4.png";
import q5 from "../../assets/pictures/q5.png";
import q6 from "../../assets/pictures/q6.png";
import q7 from "../../assets/pictures/q7.png";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import styles from "../Form/styles.module.css";
import catLogoNavbar from "../../assets/pictures/catCatchRowCropped (2).png";
import { toast, Toaster } from "react-hot-toast";

export function Form() {
  const navigate = useNavigate();

  const [solved, setSolved] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    result: [],
  });

  const [questionNo, setQuestionNo] = useState(1);

  function nextQuestion() {
    if (questionNo === 7) {
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

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    // console.log(form);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const sent = await axios.post(
        "https://ironrest.herokuapp.com/cat-app-form-collection",
        form
      );
      console.log(sent);
      navigate("/");
    } catch (error) {
      //   console.log(error);
    }
  }

  //CAT API FETCHING
  const [catsBreeds, setCatsBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

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
  function APISearch1(q1, q2, q3, q4, q5, q6, q7) {
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
    let att6 = "dog_friendly";
    filterCats(q6, att6);

    let att7 = "grooming";
    filterCats(q7, att7);

    const resultado =
      filteredCats[Math.floor(Math.random() * filteredCats.length)];
    console.log(resultado);
    return resultado;
  }

  function resultCat(e) {
    e.preventDefault();
    // console.log(form);
    if (
      form.question1 &&
      form.question2 &&
      form.question3 &&
      form.question4 &&
      form.question5 &&
      form.question6 &&
      form.question7
    ) {
      setForm({
        ...form,
        result: APISearch1(
          form.question1,
          form.question2,
          form.question3,
          form.question4,
          form.question5,
          form.question6,
          form.question7
        ),
      });
      setSolved(true);
      toast("Nice Cat!", { icon: "????" });
    } else {
      toast("Error! You must answer all questions!", { icon: "????" });
    }
  }

  return (
    <>
      <Toaster />
      <div className={styles.container}>
        <Navbar />

        <div className={styles.dataDiv}>
          <form className={styles.dataDiv}>
            <h2>Let's find your cat. Start here!</h2>
            <label htmlFor="input-name">Name:</label>
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              type="text"
              required
            />
            <label htmlFor="input-email">Email:</label>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
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
                    checked={form.question1 === "A" ? true : false}
                  />
                  <label htmlFor="A">None</label>
                  <input
                    type="radio"
                    id="B"
                    name="question1"
                    value="B"
                    onChange={handleChange}
                    checked={form.question1 === "B" ? true : false}
                  />
                  <label htmlFor="B">One kid</label>
                  <input
                    type="radio"
                    id="C"
                    name="question1"
                    value="C"
                    onChange={handleChange}
                    checked={form.question1 === "C" ? true : false}
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
                    checked={form.question2 === "A" ? true : false}
                  />
                  <label htmlFor="A">Occasionaly</label>
                  <input
                    type="radio"
                    id="B"
                    name="question2"
                    value="B"
                    onChange={handleChange}
                    checked={form.question2 === "B" ? true : false}
                  />
                  <label htmlFor="B">Sometimes</label>
                  <input
                    type="radio"
                    id="C"
                    name="question2"
                    value="C"
                    onChange={handleChange}
                    checked={form.question2 === "C" ? true : false}
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

              {questionNo === 3 && (
                <div className={styles.dataDivQ}>
                  {/* <p>
                  Question 3: How much time do you have to spend with your cat?
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
                    checked={form.question3 === "A" ? true : false}
                  />
                  <label htmlFor="A">One hour or less</label>
                  <input
                    type="radio"
                    id="B"
                    name="question3"
                    value="B"
                    onChange={handleChange}
                    checked={form.question3 === "B" ? true : false}
                  />
                  <label htmlFor="B">Between one to two hours</label>
                  <input
                    type="radio"
                    id="C"
                    name="question3"
                    value="C"
                    onChange={handleChange}
                    checked={form.question3 === "C" ? true : false}
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
                    checked={form.question4 === "A" ? true : false}
                  />
                  <label htmlFor="A">I feel good</label>
                  <input
                    type="radio"
                    id="B"
                    name="question4"
                    value="B"
                    onChange={handleChange}
                    checked={form.question4 === "B" ? true : false}
                  />
                  <label htmlFor="B">I don't mind</label>
                  <input
                    type="radio"
                    id="C"
                    name="question4"
                    value="C"
                    onChange={handleChange}
                    checked={form.question4 === "C" ? true : false}
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
                    checked={form.question5 === "A" ? true : false}
                  />
                  <label htmlFor="A">Chill</label>
                  <input
                    type="radio"
                    id="B"
                    name="question5"
                    value="B"
                    onChange={handleChange}
                    checked={form.question5 === "B" ? true : false}
                  />
                  <label htmlFor="B">Both</label>
                  <input
                    type="radio"
                    id="C"
                    name="question5"
                    value="C"
                    onChange={handleChange}
                    checked={form.question5 === "C" ? true : false}
                  />
                  <label htmlFor="C">Agitated</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={previousQuestion}>
                      Previous Question
                    </button>
                    <button onClick={nextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
              {questionNo === 6 && (
                <div className={styles.dataDivQ}>
                  {/* <p>Question 6: Do you have dogs living with you?</p> */}
                  <img
                    className={styles.questionLogo}
                    src={q6}
                    alt="question6-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question6"
                    value="A"
                    onChange={handleChange}
                    checked={form.question6 === "A" ? true : false}
                  />
                  <label htmlFor="A">None</label>
                  <input
                    type="radio"
                    id="B"
                    name="question6"
                    value="B"
                    onChange={handleChange}
                    checked={form.question6 === "B" ? true : false}
                  />
                  <label htmlFor="B">1 - 2 dogs</label>
                  <input
                    type="radio"
                    id="C"
                    name="question6"
                    value="C"
                    onChange={handleChange}
                    checked={form.question6 === "C" ? true : false}
                  />
                  <label htmlFor="C">2+ dogs</label>
                  <div className={styles.questionsButtons}>
                    <button onClick={previousQuestion}>
                      Previous Question
                    </button>
                    <button onClick={nextQuestion}>Next Question</button>
                  </div>
                </div>
              )}
              {questionNo === 7 && (
                <div className={styles.dataDivQ}>
                  {/* <p>
                    Question 7: How comfortable are you with your cat's grooming
                    habits?
                  </p> */}
                  <img
                    className={styles.questionLogo}
                    src={q7}
                    alt="question7-logo"
                  />
                  <input
                    type="radio"
                    id="A"
                    name="question7"
                    value="A"
                    onChange={handleChange}
                    checked={form.question7 === "A" ? true : false}
                  />
                  <label htmlFor="A">I don't mind.</label>
                  <input
                    type="radio"
                    id="B"
                    name="question7"
                    value="B"
                    onChange={handleChange}
                    checked={form.question7 === "B" ? true : false}
                  />
                  <label htmlFor="B">
                    A little bit of grooming isn't that bad
                  </label>
                  <input
                    type="radio"
                    id="C"
                    name="question7"
                    value="B"
                    onChange={handleChange}
                    checked={form.question7 === "B" ? true : false}
                  />
                  <label htmlFor="C">I'd prefer a tidy and groomed cat</label>
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
            </div>
            {solved ? (
              <>
                <div className={styles.resultsDiv}>
                  <img
                    className={styles.catLogoResults}
                    src={catLogoNavbar}
                    alt="catLogo"
                  />
                  <p>Your best match is:</p>
                  <h1>{form.result.name}</h1>
                  {form.result.image === undefined ||
                  form.result.image === {} ? (
                    <span>Sorry! No image available</span>
                  ) : (
                    <img
                      className={styles.catResults}
                      src={form.result.image.url}
                      alt={form.result.name}
                    />
                  )}
                  <h2>{form.result.temperament}</h2>
                  <p>{form.result.description}</p>

                  <p>Other characteristics:</p>
                  <p>Life Span: {form.result.life_span} years</p>
                  <p>Health Issues: {form.result.health_issues} (scale: 0-5)</p>
                  <p>
                    Shedding Level: {form.result.shedding_level} (scale: 0-5)
                  </p>
                  <button
                    className={styles.resultsButton}
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
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
