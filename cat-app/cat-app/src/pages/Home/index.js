import home from "../../assets/pictures/home.png";

export function Home() {
  return (
    <>
      <div className="container" style={{ background: "#53a24f" }}>
        <img
          style={{ width: 800, height: 500 }}
          className="home-logo"
          src={home}
          alt="question3-logo"
        />{" "}
      </div>
    </>
  );
}
