import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function HappyMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cat-app-form-collection"
        );
        setMatches(response.data);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMatches();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Navbar />
      <ul>
        {matches.map((currElem) => {
          return (
            <li key={currElem._id}>
              <h2>{currElem.name}</h2>
              <p>{currElem.email}</p>
              <h3>{currElem.result.name}</h3>
              <span>{currElem.result.temperament}</span>
              <Link to={`/happy-matches/${currElem._id}`}>
                <button>Details</button>
              </Link>
            </li>
          );
        })}
      </ul>
      <Footer />
    </>
  );
}
