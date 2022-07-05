import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import q1 from "../../assets/pictures/q1.png";
import q2Video from "../../assets/pictures/q2Video.mp4";

export function HappyMatchesDetail() {
  const { id } = useParams();

  const [match, setMatch] = useState([]);

  useEffect(() => {
    async function fetchMatch() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/cat-app-form-collection/${id}`
        );
        setMatch(response.data);
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

  return (
    <>
      <div className="d-flex flex-column m-4">
        <form className="d-flex flex-column">
          <h2>This was {match.name}'s answers! </h2>
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
          <video style={{ width: 500, height: 400, margin: 10 }} autoPlay>
            <source src={q2Video} type="video/mp4" />
            Sorry, probably your browser doesn't support this tag.
          </video>
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
          {/* <div>
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
                  //   onClick={handleSubmit}
                >
                  Send my answers
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary d-grid gap-2"
                // type="submit"
                // onClick={resultCat}
              >
                Results
              </button>
            )}
          </div> */}
        </form>
      </div>
    </>
  );
}
