import { Link } from "react-router-dom";
import { profile } from "../Data/siteData.js";
import { Wordmark } from "./Navbar.jsx";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="wrap flex flex-col gap-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline gap-3 text-ink">
          <Link to="/" aria-label="Veera.dev — home">
            <Wordmark />
          </Link>
          <span className="text-muted">© {new Date().getFullYear()} {profile.name}</span>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a className="hover:text-ink" href={`mailto:${profile.email}`}>Email</a>
          </li>
          <li>
            <a className="hover:text-ink" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a className="hover:text-ink" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a className="hover:text-ink" href={profile.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </li>
          <li>
            <a className="hover:text-ink" href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
