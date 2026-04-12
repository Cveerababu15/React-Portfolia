import { motion } from "framer-motion";
import ProfileBlock from "../Components/ProfileBlock.jsx";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-[#050816] text-gray-900 dark:text-gray-100 pt-24 pb-20"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-center mb-16 tracking-wide"
      >
        About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
      </motion.h1>

      {/* Profile Block */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <ProfileBlock />
      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-20"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-50 tracking-wide">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Tailwind CSS",
            "Bootstrap",
            "Python",
            "Git & GitHub",
            "REST APIs",
            "Framer Motion",
          ].map((skill) => (
            <div
              key={skill}
              className="text-sm sm:text-base px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#111827] 
              border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 text-center 
              font-medium hover:border-indigo-500 dark:hover:border-indigo-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-20"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-50 tracking-wide">
          My Journey
        </h2>

        <div className="space-y-8 border-l-4 border-indigo-500 dark:border-indigo-400 pl-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              B.Tech in Computer Science (2021 – 2025)
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Built strong fundamentals in software engineering, data structures,
              algorithms, and web development.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              MERN Stack Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Created full-stack applications, REST APIs, authentication systems, 
              dashboards, and real-time features using React, Node.js, and MongoDB.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              AI & ML Exploration
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Worked with AI models like Gemini to build smart tools such as AI 
              resume builders, DSA assistants, and intelligent web utilities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Self Introduction Video Component */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 mt-20"
      >
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-4">
                Self Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Get to know me better! In this short video, I talk about my background, my passion for software engineering, and the journey that led me to build scalable MERN applications.
              </p>
            </div>
            
            <div className="w-full md:w-[60%] aspect-video bg-gray-900/10 dark:bg-black/40 rounded-2xl overflow-hidden relative shadow-inner border border-white/20 dark:border-white/10 flex items-center justify-center">
              {/* VIDEO TAG HOLDER: The user can replace the src with their local video or add an iframe */}
              <video 
                className="w-full h-full object-cover z-10"
                controls
                poster="/path-to-your-poster-image.jpg"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Optional Placeholder Text if video is missing */}
              <span className="absolute text-gray-500 dark:text-gray-400 font-medium z-0">
                Put your video here!
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 flex justify-center sm:justify-start"
      >
        <a
          href="https://drive.google.com/file/d/1s03ZDS6LAQOPTikJzoEPQui6u-LyPbYR/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-7 py-3 rounded-full text-sm sm:text-base
          font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-lg shadow-indigo-500/30"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
