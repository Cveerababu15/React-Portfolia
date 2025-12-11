import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ title, description, image, tech, github, live, new: isNew, featured }) {
  return (
    <div className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-200 dark:border-gray-700">

      {/* 🆕 NEW Badge */}
      {isNew && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          NEW
        </span>
      )}

      {/* ⭐ FEATURED Badge */}
      {featured && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          ⭐ FEATURED
        </span>
      )}

      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span 
              key={i} 
              className="text-sm bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-lg">
          <a href={github} target="_blank" className="dark:hover:text-indigo-400 hover:text-indigo-600">
            <FaGithub />
          </a>
          <a href={live} target="_blank" className="dark:hover:text-indigo-400 hover:text-indigo-600">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
}
