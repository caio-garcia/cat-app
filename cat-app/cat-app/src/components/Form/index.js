import axios from "axios";
import { useState } from "react";

export function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    result: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

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
          <p>Question 1: Do you have kids?</p> {" "}
          <input
            type="radio"
            id="A"
            name="question1"
            value="A"
            onChange={handleChange}
          />
            <label htmlFor="A">I don't have kids</label>
          <input
            type="radio"
            id="B"
            name="question1"
            value="B"
            onChange={handleChange}
          />
            <label htmlFor="B">1</label>
          <input
            type="radio"
            id="C"
            name="question1"
            value="C"
            onChange={handleChange}
          />
            <label htmlFor="C">2 ou mais</label>
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
