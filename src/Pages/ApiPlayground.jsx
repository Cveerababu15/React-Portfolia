import { useState } from "react";
import { motion } from "framer-motion";

export default function ApiPlayground() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [method, setMethod] = useState("GET");

  const handleRequest = async () => {
    if (!url.trim()) return setError("Enter a valid API URL");

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(url, { method });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
        console.log(err);
      setError(" Error fetching API or Invalid Response");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-50 dark:bg-[#050816] min-h-screen pt-24 pb-20 px-4 sm:px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-gray-50 mb-10"
      >
        API Playground
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-white dark:bg-[#111827] border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-6 sm:p-8">
        {/* Method + Input */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <select
            className="p-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#1e293b] text-gray-900 dark:text-gray-100"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>

          <input
            type="text"
            value={url}
            placeholder="Enter any public API URL (e.g. https://api.github.com/users)"
            onChange={(e) => setUrl(e.target.value)}
            className="flex-grow p-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#1e293b] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Send Request */}
        <button
          onClick={handleRequest}
          className="px-6 py-2.5 w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base transition shadow-md shadow-indigo-500/20"
        >
          Send Request
        </button>

        {/* Loading */}
        {loading && (
          <p className="text-center text-indigo-500 font-medium mt-6">Fetching data...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 font-medium mt-6">{error}</p>
        )}

        {/* Response Viewer */}
        {response && (
          <div className="mt-6 bg-gray-100 dark:bg-[#0b0f19] p-4 rounded-lg border border-gray-300 dark:border-gray-700 overflow-auto max-h-[400px]">
            <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
