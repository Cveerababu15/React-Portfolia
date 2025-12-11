import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "../Data/projectsData";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project)
    return (
      <p className="text-center py-20 text-gray-800 dark:text-gray-100">
        Project not found!
      </p>
    );

  return (
    <div className="bg-gray-50 dark:bg-[#050816] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm mb-6 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 transition"
        >
          <FaArrowLeft /> Back
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 sm:h-64 object-cover rounded-xl mb-6 shadow-lg"
        />

        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-50">
          {project.title}
        </h2>

        <p className="text-gray-700 dark:text-gray-200 mb-6 text-base sm:text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs sm:text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
      {/* Links */}
<div className="flex flex-wrap gap-4 mt-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold 
    bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 
    hover:bg-gray-700 dark:hover:bg-gray-200 transition"
  >
    <FaGithub className="text-black dark:text-gray-900" /> View Code
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold 
    bg-indigo-500 text-white hover:bg-indigo-600 transition"
  >
    <FaExternalLinkAlt className="text-black" /> Live Demo
  </a>
</div>

      </div>
    </div>
  );
}
