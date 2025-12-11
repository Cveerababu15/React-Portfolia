import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";
import IMG from "../Images/veera.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center md:text-left max-w-xl"
      >
        <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-3">
          Full-Stack • MERN • AI & ML
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 leading-tight">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] to-[#6366F1]">
            Chakali Veerababu
          </span>
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
          I’m a Full-Stack Developer interested in AI & Machine Learning.
          I enjoy building fast, scalable web apps and turning ideas into
          real projects using the MERN stack and modern tools.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
          <Link
            to="/projects"
            className="px-6 py-2.5 rounded-full text-sm sm:text-base font-semibold 
            bg-[#7C5CFF] hover:bg-[#6650E0] text-white shadow-md dark:shadow-[#7C5CFF]/30 
            transition-transform transform hover:-translate-y-0.5"
          >
            View My Projects
          </Link>

          <Link to="/about">
            <span
              className="px-6 py-2.5 rounded-full text-sm sm:text-base font-medium 
              border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 
              hover:border-[#7C5CFF] hover:text-[#7C5CFF] dark:hover:text-[#A78BFA]
              dark:hover:border-[#A78BFA] transition"
            >
              More About Me
            </span>
          </Link>
        </div>

        {/* Personality Micro-Statement */}
        <p className="text-center md:text-left text-gray-600 dark:text-gray-300 text-sm sm:text-base italic mb-10">
          I learn, build, break, and rebuild — until it’s perfect.
        </p>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-3xl sm:text-4xl text-gray-700 dark:text-gray-300">
          <FaHtml5 className="text-orange-400 hover:scale-110 transition-transform" title="HTML5" />
          <FaCss3Alt className="text-blue-400 hover:scale-110 transition-transform" title="CSS3" />
          <SiJavascript className="text-yellow-400 hover:scale-110 transition-transform" title="JavaScript" />
          <FaReact className="text-[#61DBFB] hover:scale-110 transition-transform" title="React.js" />
          <SiTailwindcss className="text-teal-400 hover:scale-110 transition-transform" title="Tailwind CSS" />
          <FaNodeJs className="text-green-500 hover:scale-110 transition-transform" title="Node.js" />
          <SiMongodb className="text-green-600 hover:scale-110 transition-transform" title="MongoDB" />
          <FaPython className="text-yellow-300 hover:scale-110 transition-transform" title="Python" />
          <FaGitAlt className="text-red-500 hover:scale-110 transition-transform" title="Git" />
        </div>
      </motion.div>

      {/* Image */}
      <motion.img
  src={IMG}
  alt="profile"
  className="
    w-56 h-56 sm:w-72 sm:h-72    
    mt-10 md:mt-0 
    rounded-full 
    shadow-xl 
    object-contain              
    border-4 border-[#7C5CFF]/60
    bg-white                   
    p-1                         
  "
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.9 }}
/>
    </section>
  );
}
