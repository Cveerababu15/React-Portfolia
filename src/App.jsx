import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectPage.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import GithubPage from "./Pages/GithubPage.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-bg text-ink">
        <Navbar />
        <ScrollToTop />
        <main id="main" tabIndex={-1} className="flex-grow focus:outline-none">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/github" element={<GithubPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
