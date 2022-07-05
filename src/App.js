import { Routes, Route } from "react-router-dom";
import { APISearch } from "./components/APISearch";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Form } from "./components/Form";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-search" element={<APISearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
