import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Overview from "./pages/Overview.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-14">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Overview />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<Overview />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
