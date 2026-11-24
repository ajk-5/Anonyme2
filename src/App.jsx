import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InscriptionPage from "./pages/InscriptionPage";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/inscription" element={<InscriptionPage />} />
      <Route path="*" element={<h1>Page introuvable</h1>} />
    </Routes>
  );
}