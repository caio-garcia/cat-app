import { Routes, Route } from "react-router-dom";
import { APISearch } from "./components/APISearch";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Form } from "./components/Form";
import { Home } from "./pages/Home";
import { Breeds } from "./pages/Breeds";
import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-search" element={<APISearch />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<Form />} />
        <Route path="/breeds" element={<Breeds />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
