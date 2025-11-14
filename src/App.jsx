import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import MainLayout from "./layout/MainLayout";
import HomePage from "./page/Home/HomePage";
import PageNotFound from "./components/PageNotFound";
import About from "./page/about/About";
import Skill from "./page/skill/Skill";
import Services from "./page/services/Services";
import Portfolio from "./page/portfolio/Portfolio";
import Resume from "./page/resume/Resume";
import Contact from "./page/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
