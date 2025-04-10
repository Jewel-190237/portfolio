/* eslint-disable no-unused-vars */
import React from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  const isOnePage = location.pathname === "/";

  return (
    <>
      <Header />
      <Routes>
        {/* One-page layout rendered at root path */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Experience />
              <Education />
              <Contact />
            </>
          }
        />
        {/* Individual pages for sections */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}
