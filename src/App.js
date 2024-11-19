import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Anotador from "./pages/Anotador";
import LandingPage from "./pages/LandingPage";
import RulesPage from "./pages/RulesPage";
import SuggestionsPage from "./pages/SuggestionPage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/anotador" element={<Anotador />} />
        <Route path="/reglas" element={<RulesPage />} />
        <Route path="/sugerencias" element={<SuggestionsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
