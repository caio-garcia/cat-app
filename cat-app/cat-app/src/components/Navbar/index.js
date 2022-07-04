import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Cat or Catch?</h1>
      </Link>
      <Link to="/quiz" style={{ textDecoration: "none" }}>
        Take the quiz!
      </Link>
      <Link to="/about" style={{ textDecoration: "none" }}>
        About
      </Link>
    </>
  );
}
