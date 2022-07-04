import axios from "axios";
import { useState } from "react";

export function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    question: {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    },
    result: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  console.log(form);

  //   async function handleSubmit(event) {
  //     event.preventDefault();
  //     try {
  //       const sent = await axios.post(
  //         "https://ironrest.herokuapp.com/:tathy-collection",
  //         form
  //       );
  //       // console.log(sent);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  return (
    <>
      <div className="d-flex flex-column m-4">
        <form className="d-flex flex-column">
          <h2>Let's found your cat. Start here!</h2>
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
          />
          <div>
            <label htmlFor="input-question1">
              Question 1: Do you have kids?
            </label>
            <input
              id="input-question1"
              name="question1"
              onChange={handleChange}
              value="I don't have kids"
              type="radio"
            >
              I don't have kids
            </input>

            <input
              name="question1"
              onChange={handleChange}
              value="1"
              type="radio"
            >
              1
            </input>
          </div>
          {/* <button
            className="btn btn-primary d-grid gap-2"
            type="submit"
            onClick={handleSubmit}
          >
            Create List
          </button> */}
        </form>
      </div>
    </>
  );
}
