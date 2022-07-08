import axios from "axios";
import { useEffect, useState } from "react";

export function APISearch(q1, q2, q3, q4, q5) {
  //fetching the API data
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

  //filtering out the cats

  let filteredCats = [...catsBreeds];

  function filterCats(category, attribute) {
    filteredCats = filteredCats.filter((elem) => {
      if (category === "A") {
        return elem[attribute] >= 0;
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
  filterCats("C", att);
  let att2 = "adaptability";
  filterCats("C", att2);

  //logica ao contrario Q3-Q4
  let att3 = "social_needs";
  filterCats("C", att3);
  let att4 = "affection_level";
  filterCats("C", att4);

  ///podemos resolver depois
  let att5 = "energy_level";
  filterCats("C", att5);

  let att6 = "dog_friendly";
  filterCats("C", att6);

  let att7 = "grooming";
  filterCats("B", att7);

  // const result = filteredCats[Math.floor(Math.random() * filteredCats.length)];
  // console.log(result.image);

  // return result;

  // return loading ? (
  //   <h1>Loading...</h1>
  // ) : (
  //   <>
  //     <h1>{result.name}</h1>
  //     <img
  //       src={result.image.url}
  //       alt={result.name}
  //       style={{ width: "200px", "border-radius": "22px" }}
  //     />
  //     <h2>{result.temperament}</h2>
  //     <p>{result.description}</p>
  //   </>
  // );
  // console.log(filteredCats[0].child_friendly);
  return (
    <>
      <h1>{filteredCats.length}</h1>
      <div>
        <h2>Child friendly Cats</h2>
        {/* <ul>
          <li>
            <p>{filteredCats.name}</p>
            <p>
              {att.toUpperCase()}: {filteredCats[att]}
            </p>
            <p>
              {att2.toUpperCase()}: {filteredCats[att2]}
            </p>
            <p>
              {att3.toUpperCase()}: {filteredCats[att3]}
            </p>
            <p>
              {att4.toUpperCase()}: {filteredCats[att4]}
            </p>
            <p>
              {att5.toUpperCase()}: {filteredCats[att5]}
            </p>
          </li>
        </ul> */}
      </div>
    </>
  );
}
