import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaLink,
  FaExternalLinkAlt,
  FaBookOpen,
} from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import { FiClock, FiGitCommit } from "react-icons/fi";
import { projects } from "../Data/projectsData.jsx";

export default function GithubPage() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = "Cveerababu15";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setLoading(true);
        // Fetch Profile
        const profileRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch Repos
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const reposData = await reposRes.json();

        if (Array.isArray(reposData)) {
          // Filter out Portfolio and Contribution from featured repositories
          const filteredRepos = reposData.filter((repo) => {
            const name = repo.name.toLowerCase();
            return !name.includes("portfolio") && !name.includes("contribution");
          });

          // Sort to prioritize stars, but also recent updates
          const sortedRepos = [...filteredRepos].sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at) - new Date(a.updated_at)
          );
          setRepos(sortedRepos.slice(0, 6)); // Top 6 as "Pinned/Top"
        }

        // Fetch Events for Commits
        const eventsRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100`
        );
        const eventsData = await eventsRes.json();
        
        if (Array.isArray(eventsData)) {
          const pushEvents = eventsData.filter(
            (event) => event.type === "PushEvent"
          );
          const recentCommits = [];
          pushEvents.forEach((event) => {
            event.payload.commits.forEach((commit) => {
              recentCommits.push({
                repoName: event.repo.name,
                message: commit.message,
                sha: commit.sha,
                url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                date: event.created_at,
              });
            });
          });
          setCommits(recentCommits.slice(0, 25)); 
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [GITHUB_USERNAME]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-[#050816] bg-gray-50">
        <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-indigo-500 font-medium">Loading GitHub Metrics...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 lg:px-12 xl:px-24 dark:bg-[#050816] bg-gray-50 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">GitHub</span> Details
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              A comprehensive overview of my open-source contributions, pinned projects, and recent coding activity.
            </p>
          </div>
          <a
            href={profile?.html_url || `https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:scale-105 transition-transform"
          >
            <FaGithub className="text-xl" />
            Follow on GitHub
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 z-0"></div>
                <img
                  src={profile?.avatar_url || "https://github.com/identicons/Cveerababu15.png"}
                  alt={profile?.name || GITHUB_USERNAME}
                  className="relative z-10 w-40 h-40 rounded-full border-4 border-white dark:border-[#050816] object-cover shadow-2xl"
                />
              </div>

              <h2 className="mt-6 text-2xl font-bold">{profile?.name || GITHUB_USERNAME}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">@{profile?.login || GITHUB_USERNAME}</p>

              {profile?.bio && (
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {profile.bio}
                </p>
              )}

              <div className="mt-8 flex items-center justify-center gap-6 w-full pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center">
                  <span className="block text-2xl font-extrabold text-indigo-500">{profile?.public_repos || 0}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Repos</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-extrabold text-purple-500">{profile?.followers || 0}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Followers</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-extrabold text-pink-500">{profile?.following || 0}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Following</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pinned Repos & Commits */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Contribution Graph (All-Time Commit History) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiGitCommit className="text-purple-500" />
                All-Time Contributions
              </h3>
              <div className="bg-white dark:bg-[#151030]/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 overflow-hidden hover:shadow-xl transition-shadow">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  A complete visual history of my coding consistency, spanning all historical and recent commits safely aggregated directly from my GitHub.
                </p>
                <div className="w-full overflow-x-auto pb-4 mix-blend-multiply dark:mix-blend-screen">
                  {/* GitHub Heatmap Calendar - using external chart service */}
                  <img 
                    src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`} 
                    alt="GitHub Contributions Calendar" 
                    className="w-full min-w-[700px] opacity-90 hover:opacity-100 transition-opacity drop-shadow-md" 
                  />
                </div>
              </div>
            </motion.div>

            {/* Top / Pinned Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaStar className="text-yellow-500" />
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo, idx) => {
                  const projectMatch = projects.find(p => p.github && p.github.toLowerCase() === repo.html_url.toLowerCase());
                  const displayDescription = projectMatch ? projectMatch.description : (repo.description || "No description provided.");

                  return (
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={repo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="block bg-white dark:bg-[#151030]/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-xl text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 group-hover:text-purple-500 transition-colors">
                        <FaBookOpen />
                        <span className="truncate max-w-[180px] sm:max-w-xs">{repo.name}</span>
                      </h4>
                      <FaExternalLinkAlt className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 h-10" title={displayDescription}>
                      {displayDescription}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                          {repo.language}
                        </div>
                      )}
                      <div className="flex items-center gap-1 hover:text-yellow-500 transition-colors">
                        <FaStar /> {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <BiGitRepoForked className="text-lg" /> {repo.forks_count}
                      </div>
                    </div>
                  </motion.a>
                  );
                })}
                {repos.length === 0 && (
                  <p className="text-gray-500 col-span-2">No active repositories found.</p>
                )}
              </div>
            </motion.div>

            {/* Recent Commits / Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FiClock className="text-green-500" />
                Recent Commit Timeline
              </h3>
              <div className="bg-white dark:bg-[#151030]/50 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8">
                {commits.length > 0 ? (
                  <div className="max-h-[600px] overflow-y-auto pr-2 md:pr-4">
                    <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
                    {commits.map((commit, idx) => (
                      <div key={commit.sha} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Timeline Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-[#050816] bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                          <FiGitCommit />
                        </div>
                        
                        {/* Commit Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold px-2 py-1 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg max-w-[150px] truncate">
                              {commit.repoName}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <FiClock />
                              {new Date(commit.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200 line-clamp-2">
                            {commit.message}
                          </p>
                          <div className="mt-3 text-right">
                            <a
                              href={commit.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline inline-flex items-center gap-1"
                            >
                              {commit.sha.substring(0, 7)} <FaExternalLinkAlt className="text-[10px]" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">No recent commit activity found.</p>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
