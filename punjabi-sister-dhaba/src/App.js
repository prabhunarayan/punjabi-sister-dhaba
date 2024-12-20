import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Dinner from "./components/Dinner";
import BreakFast from "./components/BreakFast";
import Lunch from "./components/Lunch";
import BreakfastMenu from "./components/BreakfastMenu";

function App() {
  return (
    <Router>
      <div>
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<BreakfastMenu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/dining-option" element={<Menu />} />
          <Route path="/breakfast-menu" element={<BreakfastMenu />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
