import { useNavigate } from "react-router-dom";

export default function ProjectCard({ id, title, description, image, tech, new: isNew, featured }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/project/${id}`)}
      className="relative bg-white dark:bg-[#111827] rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer group"
    >

      {/* 🆕 NEW Badge */}
      {isNew && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
          NEW
        </span>
      )}

      {/* ⭐ FEATURED Badge */}
      {featured && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
          ⭐ FEATURED
        </span>
      )}

      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-indigo-500 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t, i) => (
            <span 
              key={i} 
              className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
          {tech.length > 3 && (
            <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
              +{tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
