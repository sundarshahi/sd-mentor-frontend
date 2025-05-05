import Form from "./pages/form";
import GuessNum from "./pages/guessnum";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/guessnum" element={<GuessNum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
