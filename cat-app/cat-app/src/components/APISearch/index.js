import axios from "axios";
import { useEffect, useState } from "react";

export function APISearch() {
  const [catsBreeds, setCatsBreeds] = useState([]);
  useEffect(() => {
    async function fetchAPIData() {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/breeds/"
        );
        setCatsBreeds(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPIData();
  }, []);

  let filteredCats = [...catsBreeds];

  function filterCats(category, attribute) {
    filteredCats = filteredCats.filter((elem) => {
      if (category === "A") {
        return elem[attribute] > 0;
      } else if (category === "B") {
        return elem[attribute] >= 3;
      } else if (category === "C") {
        console.log(elem[attribute]);
        return elem[attribute] >= 4;
      }
    });
  }
  let att = "child_friendly";
  filterCats("C", att);
  let att2 = "adaptability";
  filterCats("C", att2);
  let att3 = "social_needs";
  filterCats("C", att3);
  let att4 = "affection_level";
  filterCats("C", att4);
  let att5 = "energy_level";
  filterCats("C", att5);

  return (
    <>
      <h1>{filteredCats.length}</h1>
      <div>
        <h2>Child friendly Cats</h2>
        <ul>
          {filteredCats.map((currElem) => {
            return (
              <li>
                <p>{currElem.name}</p>
                <p>
                  {att.toUpperCase()}: {currElem[att]}
                </p>
                <p>
                  {att2.toUpperCase()}: {currElem[att2]}
                </p>
                <p>
                  {att3.toUpperCase()}: {currElem[att3]}
                </p>
                <p>
                  {att4.toUpperCase()}: {currElem[att4]}
                </p>
                <p>
                  {att5.toUpperCase()}: {currElem[att5]}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
