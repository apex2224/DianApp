import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/HireDevelopersLandingPages/LandingPage";
import MainLandingPage from "./Components/MainLandingPage/MainLandingPage";
import About from "./Components/HeaderAndFooter/FooterLinks/About";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLandingPage />} />
          <Route path="/hire-developers" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
