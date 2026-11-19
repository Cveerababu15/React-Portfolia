import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/github", label: "GitHub" },
];

function readTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function Wordmark({ className = "" }) {
  return (
    <span className={`whitespace-nowrap ${className}`}>
      <span className="font-serif text-[1.6rem] leading-none tracking-tight">Veera</span>
      <span className="font-sans text-[0.95rem] font-semibold text-accent">.dev</span>
    </span>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(readTheme);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
  }, [theme]);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const next = theme === "dark" ? "light" : "dark";
  const linkClass = ({ isActive }) =>
    `relative py-1 text-[0.9375rem] transition-colors ${
      isActive
        ? "text-ink font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:bg-accent"
        : "text-muted hover:text-ink"
    }`;

  const themeButton = (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="inline-flex h-10 w-10 items-center justify-center border border-rule text-ink hover:border-ink"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
    </button>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/95 backdrop-blur-sm">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label="Veera.dev — home" className="text-ink">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          {themeButton}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          {themeButton}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-rule text-ink"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-rule bg-bg md:hidden">
          <ul className="wrap py-2">
            {links.map((l) => (
              <li key={l.to} className="border-b border-rule last:border-0">
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `flex min-h-12 items-center text-lg ${isActive ? "text-accent font-medium" : "text-ink"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
