import axios from "axios";
import { useState, useEffect } from "react";
import q1 from "../../assets/pictures/q1.png";
import q2 from "../../assets/pictures/q2.png";
import q3 from "../../assets/pictures/q3.png";
import q4 from "../../assets/pictures/q4.png";
import q5 from "../../assets/pictures/q5.png";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import styles from "../Form/styles.module.css";

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
    result: [],
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
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
    console.log(form);
    if (
      form.question1 &&
      form.question2 &&
      form.question3 &&
      form.question4 &&
      form.question5
    ) {
      setForm({
        ...form,
        result: APISearch1(
          form.question1,
          form.question2,
          form.question3,
          form.question4,
          form.question5
        ),
      });
      setSolved(true);
    } else {
      console.log("Error! You must fill in all questions!");
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.dataDiv}>
        <form>
          <h2>Let's find your cat. Start here!</h2>
          <label htmlFor="input-name" className="form-label">
            Name:
          </label>
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
          <div>
            <p>Question 1: How many kids live in your home?</p> {" "}
            <img
              style={{ width: 500, height: 450, margin: 10 }}
              className="question-logo"
              src={q1}
              alt="question1-logo"
            />{" "}
            <br></br>
            <input
              type="radio"
              id="A"
              name="question1"
              value="A"
              onChange={handleChange}
            />
          </div>
            <label htmlFor="A">None</label>
          <input
            type="radio"
            id="B"
            name="question1"
            value="B"
            onChange={handleChange}
          />
            <label htmlFor="B">One kid</label>
          <input
            type="radio"
            id="C"
            name="question1"
            value="C"
            onChange={handleChange}
          />
            <label htmlFor="C">Two or more kids</label>
          <p>
            Question 2: How often does your life change (home, work, travel)?
          </p>
          <img
            style={{ width: 500, height: 450, margin: 10 }}
            className="question-logo"
            src={q2}
            alt="question2-logo"
          />
          <input
            type="radio"
            id="A"
            name="question2"
            value="A"
            onChange={handleChange}
          />
            <label htmlFor="A">Occasionaly</label>
          <input
            type="radio"
            id="B"
            name="question2"
            value="B"
            onChange={handleChange}
          />
            <label htmlFor="B">Sometimes</label>
          <input
            type="radio"
            id="C"
            name="question2"
            value="C"
            onChange={handleChange}
          />
            <label htmlFor="C">Fequently</label>
          <p>
            Question 3: How much time do you have to spend with your cat?
          </p> {" "}
          <img
            style={{ width: 500, height: 450, margin: 10 }}
            className="question-logo"
            src={q3}
            alt="question3-logo"
          />{" "}
          <input
            type="radio"
            id="A"
            name="question3"
            value="A"
            onChange={handleChange}
          />
            <label htmlFor="A">One hour or less</label>
          <input
            type="radio"
            id="B"
            name="question3"
            value="B"
            onChange={handleChange}
          />
            <label htmlFor="B">Between one to two hours</label>
          <input
            type="radio"
            id="C"
            name="question3"
            value="C"
            onChange={handleChange}
          />
            <label htmlFor="C">More then two hours</label>
          <p>Question 4: How do you usually feel when you are alone?</p> {" "}
          <img
            style={{ width: 500, height: 450, margin: 10 }}
            className="question-logo"
            src={q4}
            alt="question4-logo"
          />{" "}
          <input
            type="radio"
            id="A"
            name="question4"
            value="A"
            onChange={handleChange}
          />
            <label htmlFor="A">I feel good</label>
          <input
            type="radio"
            id="B"
            name="question4"
            value="B"
            onChange={handleChange}
          />
            <label htmlFor="B">I don't mind</label>
          <input
            type="radio"
            id="C"
            name="question4"
            value="C"
            onChange={handleChange}
          />
            <label htmlFor="C">I don't like to be alone</label>
          <p>Question 5: What kind of environment do you prefer?</p> {" "}
          <img
            style={{ width: 500, height: 450, margin: 10 }}
            className="question-logo"
            src={q5}
            alt="question5-logo"
          />{" "}
          <input
            type="radio"
            id="A"
            name="question5"
            value="A"
            onChange={handleChange}
          />
            <label htmlFor="A">Chill</label>
          <input
            type="radio"
            id="B"
            name="question5"
            value="B"
            onChange={handleChange}
          />
            <label htmlFor="B">Both</label>
          <input
            type="radio"
            id="C"
            name="question5"
            value="C"
            onChange={handleChange}
          />
            <label htmlFor="C">Agitated</label>
          <div></div>
          {solved ? (
            <>
              <h1>{form.result.name}</h1>

              {form.result.image === undefined || form.result.image === {} ? (
                <span>No image available</span>
              ) : (
                <img
                  src={form.result.image.url}
                  alt={form.result.name}
                  style={{ width: "200px", "border-radius": "22px" }}
                />
              )}
              <h2>{form.result.temperament}</h2>
              <p>{form.result.description}</p>
              <button
                className="btn btn-primary d-grid gap-2"
                type="submit"
                onClick={handleSubmit}
              >
                Send my answers
              </button>
            </>
          ) : (
            <button
              className="button"
              // type="submit"
              onClick={resultCat}
            >
              Results
            </button>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}
