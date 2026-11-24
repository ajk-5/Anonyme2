import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import InscriptionPage from "./pages/InscriptionPage";

import "./App.css";

export default function App() {
  const { pathname, hash } = useLocation();

  // On se déplace vers la section demandée
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/inscription"
            element={<InscriptionPage />}
          />

          <Route
            path="*"
            element={<h1>Page introuvable</h1>}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}