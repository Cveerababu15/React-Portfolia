import { useState, useMemo } from "react";
import { projects } from "../Data/projectsData.jsx";
import ProjectCard from "../Components/ProjectCard.jsx";
import usePageTitle from "../Components/usePageTitle.js";

const filters = ["All", "MERN", "React", "JavaScript", "API", "AI / ML"];
const PAGE = 3;

export default function ProjectsPage() {
  usePageTitle("Projects");
  const [visible, setVisible] = useState(PAGE);
  const [activeFilter, setActiveFilter] = useState("All");

  // Newest first (reverse of data order), as before.
  const filteredProjects = useMemo(() => {
    const result =
      activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
    return [...result].reverse();
  }, [activeFilter]);

  const count = (f) => (f === "All" ? projects.length : projects.filter((p) => p.category === f).length);

  const handleShowLess = () => {
    setVisible(PAGE);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shown = filteredProjects.slice(0, visible);
  const [lead, ...rest] = shown;

  return (
    <div className="wrap pt-10 pb-8 md:pt-16">
      <header className="max-w-3xl">
        <h1 className="display text-5xl md:text-7xl">Projects</h1>
        <p className="mt-4 text-lg text-muted">
          Everything I&rsquo;ve built and published, newest first. Open any project for the
          details, source code, and live demo where one exists.
        </p>
      </header>

      <div role="group" aria-label="Filter projects by category" className="mt-8 -mx-1 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = activeFilter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setActiveFilter(f);
                setVisible(PAGE);
              }}
              className={`inline-flex min-h-10 items-center gap-1.5 border px-3.5 text-[0.9375rem] transition-colors ${
                active
                  ? "border-ink bg-ink text-bg"
                  : "border-rule text-ink hover:border-ink"
              }`}
            >
              {f}
              <span className={`text-xs tabular-nums ${active ? "opacity-75" : "text-muted"}`}>{count(f)}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} of {filteredProjects.length} projects
        {activeFilter !== "All" ? ` in ${activeFilter}` : ""}.
      </p>

      <div className="mt-10">
        {lead && <ProjectCard key={lead.id} project={lead} lead />}
        {rest.length > 0 && (
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 border-t border-rule pt-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted" aria-hidden="true">
          Showing {shown.length} of {filteredProjects.length}
        </p>
        <div className="flex gap-3">
          {visible < filteredProjects.length && (
            <button type="button" onClick={() => setVisible((v) => v + PAGE)} className="btn btn-primary">
              Load more
            </button>
          )}
          {visible >= filteredProjects.length && filteredProjects.length > PAGE && (
            <button type="button" onClick={handleShowLess} className="btn btn-quiet">
              Show less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
