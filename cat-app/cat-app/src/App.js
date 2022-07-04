import { Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
