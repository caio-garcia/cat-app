import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import q1 from "../../assets/pictures/q1.png";
import q2 from "../../assets/pictures/q2.png";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function HappyMatchesDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [match, setMatch] = useState([]);

  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [solved, setSolved] = useState(false);

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
    console.log(match);
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
    console.log(match);
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
      console.log("Error! You must fill in all questions!");
    }
  }

  return loading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : editMode ? (
    <>
      <Navbar />
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div className="d-flex flex-column m-4">
        <form className="d-flex flex-column">
          <h2>This is {match.name}'s answers! </h2>
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
          <div>
            <p>Question 1: How many kids live in your home?</p> {" "}
            <img
              style={{ width: 500, height: 450, margin: 10 }}
              className="question3-logo"
              src={q1}
              alt="question3-logo"
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
           {" "}
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
          <p>Question 4: What kind of environment do you prefer?</p> {" "}
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
          <div>
            {solved ? (
              <>
                <h1>{match.result.name}</h1>

                {match.result.image === undefined ||
                match.result.image === {} ? (
                  <span>No image available</span>
                ) : (
                  <img
                    src={match.result.image.url}
                    alt={match.result.name}
                    style={{ width: "200px", "border-radius": "22px" }}
                  />
                )}
                <h2>{match.result.temperament}</h2>
                <p>{match.result.description}</p>
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
                className="btn btn-primary d-grid gap-2"
                // type="submit"
                onClick={resultCat}
              >
                Results
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <div>
        <button onClick={turnEditMode}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <h2>{match.name}</h2>
        <h3>Perfect Cat: {match.result.name}</h3>
        <span>Perfect because: {match.result.temperament}</span>
      </div>
      <Footer />
    </>
  );
}
