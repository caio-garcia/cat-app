import { Routes, Route } from "react-router-dom";
import { APISearch } from "./components/APISearch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello!</h1>} />
        <Route path="/api-search" element={<APISearch />} />
      </Routes>
    </div>
  );
}

export default App;
