import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Party from "./components/Party";
import LandingPage from "./pages/LandingPage";
import RulesPage from "./pages/RulesPage";
import SuggestionsPage from "./pages/SuggestionPage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/anotador" element={<Party />} />
        <Route path="/reglas" element={<RulesPage />} />
        <Route path="/sugerencias" element={<SuggestionsPage />} />
        <Route path="/nosotros" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
