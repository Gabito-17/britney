import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.tsx";

import HomePage from "./pages/HomePage.tsx";
import SuggestionsPage from "./pages/SuggestionPage.tsx";

// Britney
import BritneyPage from "./components/Britney/pages/BritneyPage.tsx";
import RulesBritneyPage from "./components/Britney/pages/RulesBritneyPage.tsx";
import AnotattorBritneyPage from "./components/Britney/pages/AnotattorBritneyPage.tsx";

// Truco
import TrucoPage from "./components/Truco/pages/TrucoPage.tsx";
import RulesTrucoPage from "./components/Truco/pages/TrucoRulesPage.tsx";
import AnotadorTrucoPage from "./components/Truco/pages/AnotattorTrucoPage.tsx";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home and general */}
          <Route path="/" element={<HomePage />} />
          <Route path="/sugerencias" element={<SuggestionsPage />} />

          {/* Britney routes */}
          <Route path="/britney" element={<BritneyPage />} />
          <Route path="/britney/reglas" element={<RulesBritneyPage />} />
          <Route path="/britney/anotador" element={<AnotattorBritneyPage />} />

          {/* Truco routes */}
          <Route path="/truco" element={<TrucoPage />} />
          <Route path="/truco/reglas" element={<RulesTrucoPage />} />
          <Route path="/truco/anotador" element={<AnotadorTrucoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
