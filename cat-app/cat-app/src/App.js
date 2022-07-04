import { Routes, Route } from "react-router-dom";
import { APISearch } from "./components/APISearch";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Hello!</h1>} />
        <Route path="/api-search" element={<APISearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
