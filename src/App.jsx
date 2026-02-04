import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ProjectsPage from "./Pages/ProjectPage.jsx";
import ProjectDetail from "./Pages/ProjectDetail.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Playground from './Pages/Playground.jsx';


export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#050816] text-gray-900 dark:text-gray-100">
      <Navbar />
      <ScrollToTop />

      {/* Main content takes only required height */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
