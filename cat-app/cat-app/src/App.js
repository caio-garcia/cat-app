import { Routes, Route } from "react-router-dom";
import { APISearch } from "./components/APISearch";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Hello!</h1>} />
        <Route path="/api-search" element={<APISearch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
