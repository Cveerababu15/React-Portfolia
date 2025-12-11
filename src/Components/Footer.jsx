import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-gray-400 text-center py-6 border-t border-gray-800">
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Veera. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-5 mt-4 text-xl sm:text-2xl">
        <a
          href="https://github.com/Cveerababu15"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/c-veerababu-771a35284/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/vicky8337284/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 transition-transform hover:scale-110"
        >
          <SiLeetcode />
        </a>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollTop}
        className="absolute right-5 bottom-5 bg-indigo-600 hover:bg-indigo-700 
        text-white p-2 rounded-full shadow-lg shadow-indigo-500/40 
        text-xl sm:text-2xl transition-transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
