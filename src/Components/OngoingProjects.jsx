import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaHamburger, FaRocket, FaExternalLinkAlt } from "react-icons/fa";

export default function OngoingProjects() {
  const ongoingProjects = [
    {
      id: 1,
      title: "Ecommerce Fullstack Web-Application",
      description:
        "A premium, highly interactive e-commerce platform featuring complete user authentication, a scalable product catalog, seamless shopping cart experience, and a glassmorphic user dashboard.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      icon: <FaLaptopCode className="text-purple-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      color: "from-purple-500 to-indigo-600",
      status: "In Development",
    },
    {
      id: 2,
      title: "Food-Order-Website",
      description:
        "A robust food delivery application designed for speed and convenience. Features a dynamic menu, real-time cart updates, and a responsive interface tailored for both desktop and mobile foodies.",
      tech: ["React.js", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
      icon: <FaHamburger className="text-orange-500 text-5xl group-hover:scale-110 transition-transform duration-300" />,
      color: "from-orange-400 to-red-500",
      status: "Building UI",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[#050816] text-gray-900 dark:text-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Background Accents */}
        <div className="absolute top-0 left-[-10%] w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/20 blur-[100px] rounded-full point-events-none"></div>
        <div className="absolute bottom-0 right-[-10%] w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 blur-[100px] rounded-full point-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-4">
            <FaRocket className="animate-pulse" />
            Active Workshop
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ongoing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A sneak peek into what I'm currently building. I am fully dedicated to architecting these applications with best practices, premium design, and scalable code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {ongoingProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-2xl hover:border-indigo-500/50 dark:hover:border-indigo-400/50 transition-all duration-300 backdrop-blur-xl"
            >
              {/* Highlight bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} rounded-t-3xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-inner">
                  {project.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 h-20">
                {project.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-gray-100 dark:bg-[#151030] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative gradient orb on hover */}
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${project.color} blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
