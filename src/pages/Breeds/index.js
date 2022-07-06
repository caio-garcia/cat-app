import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

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
      <div className={styles.breeds}>
        <div className={styles.searchBarParent}>
          <div className={styles.searchBar}>
            <label>Search</label>
            <input
              type="text"
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            justifyContent: "space-around",
            margin: "95px",
          }}
        >
          {cats
            .filter((currentBreed) =>
              currentBreed.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((currentBreed) => {
              return (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      width: "250px",
                      margin: "15px",
                    }}
                  >
                    <div key="id" className={styles.card}>
                      {currentBreed.image === undefined ||
                      currentBreed.image === {} ? (
                        <span>No image available</span>
                      ) : (
                        <img
                          src={currentBreed.image.url}
                          className="breed-logo"
                          alt="breed-logo"
                          style={{ width: "auto", height: "150px" }}
                        />
                      )}
                      <div className="card-body">
                        <h2 className="card-title">{currentBreed.name}</h2>
                        <h4>{currentBreed.origin}</h4>
                        <p className="card-text">{currentBreed.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
