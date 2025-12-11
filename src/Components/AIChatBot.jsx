import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

// 🔐 Initialize Gemini with your .env key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      // 🚀 Use correct model name (fixed!)
     const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });


      const prompt = `
        You are a friendly developer buddy chatbot for portfolio website of "Veera (Chakali Veerababu)".
        Answer short, friendly, like a helpful developer friend. Use emojis sometimes.

        Info about Veera:
        - Full-Stack Developer (MERN) interested in AI & ML
        - Loves building fast scalable web apps
        - Skills: HTML, CSS, JavaScript, React.js, Tailwind, Bootstrap, Node.js, Express.js, MongoDB, Python, Git, APIs, AI basics
        - Resume Link: https://drive.google.com/file/d/1PP1LvsZDrK-h9hDJGAenfnIrxBb3XF4M/export?format=pdf

        Portfolio Projects:
        1) Leet.AI (React + Gemini API) — solves DSA problems step-by-step
        2) AI Resume Builder (React + Gemini API)
        3) Movie App (React + API + LocalStorage)
        4) Weather App (API)
        5) Virtual Assistant (JS + DOM)
        6) Text-to-Image Generator (Unsplash API)

        If unknown or unrelated say:
        "Hmm, Veera didn't share that yet 🤔"

        Now reply to: "${input}"
      `;

      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
      const aiText = result.response.text();
      

      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Oops! I'm facing some issue 🛠️ Try again later!" },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-[#7C5CFF] hover:bg-[#6650E0] text-white p-4 rounded-full shadow-lg shadow-purple-500/30 text-2xl z-50"
      >
        {open ? <FaTimes /> : <FaRobot />}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-72 sm:w-80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl z-50">
          <div className="p-3 border-b border-gray-300 dark:border-gray-700 text-sm font-semibold text-gray-900 dark:text-gray-100">
            Veera Assistant 🤖
          </div>

          <div className="h-64 p-3 overflow-y-auto space-y-2 text-sm text-gray-800 dark:text-gray-200">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-indigo-500 text-white ml-auto"
                    : "bg-gray-200 dark:bg-gray-800"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center p-2 border-t border-gray-300 dark:border-gray-700">
            <input
              type="text"
              placeholder="Ask me..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 text-sm bg-transparent outline-none text-gray-800 dark:text-gray-200"
            />
            <button
              onClick={sendMessage}
              className="text-indigo-500 dark:text-purple-300 text-lg px-2"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
