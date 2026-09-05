import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import AdditionalExperience from "./pages/EditionalExperience/AdditionalExperience";
import { Route, Routes } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-blue-400">404</h1>
      <p className="text-xl text-gray-300">Page not found.</p>
      <a href="/" className="text-blue-400 underline underline-offset-4 hover:text-blue-300 transition-colors">
        Go back home
      </a>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <AdditionalExperience />
              <Contact />
            </>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/additionalExperience" element={<AdditionalExperience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
