import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const linkBase =
    "text-sm md:text-base font-medium transition-colors duration-200";
  const activeClass =
    "text-indigo-500 dark:text-indigo-400 border-b-2 border-indigo-500 pb-1";
  const inactiveClass =
    "text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#050816]/80 backdrop-blur-lg shadow-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight"
        >
          Veera.dev
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? activeClass : inactiveClass}`
            }
          >
            About
          </NavLink>

          {/* Theme Toggle */}
          <button
  onClick={toggleTheme}
  className="ml-4 text-xl p-2 rounded-full border border-gray-300 dark:border-gray-700 
  hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 
  transition"
  aria-label="Toggle theme"
>
  {theme === "dark" ? <FaSun /> : <FaMoon />}
</button>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center md:hidden gap-3">
          <button
            onClick={toggleTheme}
            className="text-xl p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="text-2xl text-gray-800 dark:text-gray-100"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#050816] border-t border-gray-200 dark:border-gray-800 flex flex-col items-center py-4 space-y-3">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? activeClass : inactiveClass
              }`
            }
          >
            About
          </NavLink>
          
        </div>
      )}
    </nav>
  );
}
