import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Playground() {
  const tools = [
    {
      title: "AI Voice Bot",
      desc: "Speak to your browser and get smart replies.",
      route: "/playground/voice"
    },
    {
      title: "API Playground",
      desc: "Try any public API and view real-time results.",
      route: "/playground/api"
    },
    {
      title: "CSS Art",
      desc: "Pure CSS animations and illustrations.",
      route: "/playground/css-art"
    },
    {
      title: "Mini Search Engine",
      desc: "Search instantly using keyword filters.",
      route: "/playground/search"
    },
    {
      title: "Pixel Animation",
      desc: "Hover and watch art come alive in pixels.",
      route: "/playground/pixels"
    },
    {
      title: "Code Visualizer",
      desc: "Type code & see it highlighted beautifully.",
      route: "/playground/code"
    }
  ];

  return (
    <section className="bg-gray-50 dark:bg-[#050816] min-h-screen pt-24 pb-16 px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-gray-50 mb-12">
        Tech Playground
      </h1>

      <p className="text-center text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-12 text-base sm:text-lg">
        A space where I experiment with ideas, tools, and tiny projects — exploring design, AI, animations, and everything fun.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-gray-300 dark:border-gray-700 shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">
              {tool.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {tool.desc}
            </p>
            <Link
              to={tool.route}
              className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            >
              Try it →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
