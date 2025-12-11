import { Link } from "react-router-dom";
import Hero from "../Components/Hero.jsx";
import { projects } from "../Data/projectsData.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";

export default function HomePage() {
  return (
    <div className="bg-gray-50 dark:bg-[#050816]">
      <Hero />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-gray-900 dark:text-gray-50">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            className="px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold bg-transparent border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition"
          >
            See All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
