import { useState, useMemo } from "react";
import { projects } from "../Data/projectsData.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";

// 🔥 Added MERN Filter
const filters = ["All", "MERN", "React", "JavaScript", "API", "AI / ML"];

export default function ProjectsPage() {
  const [visible, setVisible] = useState(3);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisible(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 dark:bg-[#050816] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-50">
          All Projects
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8">
          Filter projects by technology and explore what I’ve been building.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActiveFilter(f);
                setVisible(3);
              }}
              className={`px-4 py-2 rounded-full text-sm sm:text-base border transition ${
                activeFilter === f
                  ? "bg-indigo-500 text-white border-indigo-500"
                  : "bg-transparent text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:border-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.slice(0, visible).map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-10 flex justify-center gap-4">
          {visible < filteredProjects.length && (
            <button
              onClick={handleLoadMore}
              className="bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm sm:text-base hover:bg-indigo-600 transition"
            >
              Load More
            </button>
          )}

          {visible >= filteredProjects.length &&
            filteredProjects.length > 3 && (
              <button
                onClick={handleShowLess}
                className="bg-gray-600 text-white px-6 py-2.5 rounded-full text-sm sm:text-base hover:bg-gray-700 transition"
              >
                Show Less
              </button>
            )}
        </div>
      </div>
    </div>
  );
}
