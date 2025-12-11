import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaBrain } from "react-icons/fa";
import veera from "../Images/veera.jpg";

export default function ProfileBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between 
      bg-gray-100 dark:bg-[#0b0f19] rounded-3xl shadow-lg 
      border border-gray-200 dark:border-gray-800 p-8 sm:p-10 gap-8"
    >
      {/* Profile Image */}
      <motion.img
        src={veera}
        alt="Veera"
        className="
    w-56 h-56 sm:w-72 sm:h-72    
    mt-10 md:mt-0 
    rounded-full 
    shadow-xl 
    object-contain              
    border-4 border-[#7C5CFF]/60
    bg-white                   
    p-1  "
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.3 }}
      />

      {/* Text & Icons */}
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold 
        text-gray-900 dark:text-white mb-3 leading-tight">
          Hi, I’m <span className="text-indigo-500 dark:text-indigo-400">Veera</span> 👨‍💻
        </h2>

        <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed space-y-3 flex flex-col">
          <span>
            I’m a passionate 
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> Full-Stack Developer </span>
            who enjoys building fast, scalable, and clean web applications using the MERN stack.
          </span>

          <span>
            I learn by building real projects, breaking things, fixing them, 
            and improving step by step. I focus on writing clear code and creating 
            meaningful, user-friendly features that provide real value.
          </span>

          <span>
            I’m also exploring how 
            <span className="text-purple-500 dark:text-purple-400 font-semibold"> AI & Machine Learning </span>
            can be integrated into modern applications to build smarter and more helpful digital experiences.
          </span>
        </p>

        {/* Skills icons */}
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-3xl 
        text-indigo-600 dark:text-indigo-400">
          <FaReact title="React" />
          <FaJsSquare title="JavaScript" />
          <FaBrain title="AI/ML" />
        </div>
      </div>
    </motion.div>
  );
}
