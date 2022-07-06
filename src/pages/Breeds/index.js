import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Breeds() {
  const [search, setSearch] = useState("");
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(cats);
  useEffect(() => {
    async function fetchAPICats() {
      try {
        const response = await axios.get(
          "https://api.thecatapi.com/v1/breeds/"
        );
        setCats(response.data);
        setLoading(false);
        // console.log(cats);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPICats();
  }, []);

  // breed search bar

  return loading ? (
    <h1>loading...</h1>
  ) : (
    <>
      <label>Search</label>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      {cats

        .filter((currentBreed) =>
          currentBreed.name.toLowerCase().includes(search.toLowerCase())
        )

        .map((currentBreed) => {
          return {
            /* <Link to={`/breeds/${currentBreed.id}`}>
              <div style={{ display: "flex" }}>
                <div style={{ flexDirection: "column" }}>
                  <p>{currentBreed.name}</p>
                </div>
              </div>
            </Link> */
          };
        })}

      <>
        {cats.map((currentElement) => {
          console.log(currentElement.image);
          return (
            <>
              <div key="id" className="card" style={{ width: "18rem" }}>
                {currentElement.image === undefined ||
                currentElement.image === {} ? (
                  <span>No image available</span>
                ) : (
                  <img
                    src={currentElement.image.url}
                    className="breed-logo"
                    alt="breed-logo"
                  />
                )}

                {/* // breeds card */}
                <div className="card-body">
                  <h2 className="card-title">{currentElement.name}</h2>
                  <p className="card-text">{currentElement.description}</p>
                  {/* <a href="#" className="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
              </div>
            </>
          );
        })}
      </>
    </>
  );
}
