import "./App.css";
import { Routes, Route } from "react-router-dom";
import HerPage from "./components/HerPage";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/her-page" element={<HerPage />} />
    </Routes>
  );
}

export default App;
