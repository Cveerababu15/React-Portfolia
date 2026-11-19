import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects, getProject, isExternalUrl } from "../Data/projectsData.jsx";
import Figure from "../Components/Figure.jsx";
import FlowDiagram from "../Components/FlowDiagram.jsx";
import usePageTitle from "../Components/usePageTitle.js";

function AllProjectsLink() {
  return (
    <Link to="/projects" className="inline-flex items-center gap-1.5 text-[0.9375rem] text-muted hover:text-ink">
      <FiArrowLeft aria-hidden="true" /> All projects
    </Link>
  );
}

function Actions({ project }) {
  const hasCode = isExternalUrl(project.github);
  const hasLive = isExternalUrl(project.live);
  if (!hasCode && !hasLive) {
    return <p className="text-sm text-muted">Source code and a live demo aren&rsquo;t published for this project.</p>;
  }
  return (
    <div className="flex flex-wrap gap-3">
      {hasLive && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Live demo <FiArrowUpRight aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
      {hasCode && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-quiet">
          <FiGithub aria-hidden="true" /> Source on GitHub
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function TechList({ tech }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li key={t} className="chip">{t}</li>
      ))}
    </ul>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  usePageTitle(project ? project.name || project.title : "Project not found");

  if (!project) {
    return (
      <div className="wrap py-20 md:py-28">
        <AllProjectsLink />
        <h1 className="display mt-6 text-5xl md:text-6xl">Project not found</h1>
        <p className="mt-4 max-w-lg text-muted">
          There&rsquo;s no project with the ID &ldquo;{id}&rdquo;. It may have been renamed or the link may be
          incomplete.
        </p>
        <Link to="/projects" className="btn btn-primary mt-8">Browse all projects</Link>
      </div>
    );
  }

  const cs = project.caseStudy;
  const name = project.name || project.title;
  const alt =
    project.imageAlt ||
    (project.imageKind === "illustration"
      ? `Illustration for ${name}`
      : `Screenshot of the ${name} interface`);

  // Next project, in catalog order (newest first), wrapping around.
  const ordered = [...projects].reverse();
  const idx = ordered.findIndex((p) => p.id === project.id);
  const next = ordered[(idx + 1) % ordered.length];

  return (
    <article className="wrap pt-8 pb-8 md:pt-12">
      <AllProjectsLink />

      <header className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          <p className="eyebrow">{cs?.kicker || project.category}</p>
          <h1 className="display mt-2 text-5xl sm:text-6xl md:text-7xl">{name}</h1>
          <p className="mt-5 max-w-2xl text-lg md:text-xl">{cs?.purpose || project.summary}</p>
        </div>
        <div className="lg:col-span-4 lg:self-end">
          <Actions project={project} />
        </div>
      </header>

      <Figure
        className="mt-10 md:mt-14"
        src={project.image}
        alt={alt}
        width={project.imageWidth}
        height={project.imageHeight}
        label={project.imageKind === "illustration" ? "Illustration" : name}
        caption={project.caption || `Screenshot of ${name}.`}
        mobileCrop={project.mobileCrop}
        priority
        frameClassName={project.imageKind === "illustration" ? "mx-auto max-w-md" : ""}
        sizes="(min-width: 1216px) 1152px, 100vw"
      />

      {cs ? (
        <>
          <section aria-labelledby="question" className="mt-16 grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">The engineering question</p>
              <h2 id="question" className="display mt-3 text-4xl md:text-5xl">{cs.question}</h2>
            </div>
            <div className="prose-body max-w-2xl text-[1.0625rem] lg:col-span-7 lg:pt-8">
              {cs.answer.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </section>

          <section aria-label={cs.flowTitle} className="mt-14">
            <FlowDiagram title={cs.flowTitle} steps={cs.flow} horizontal />
          </section>

          <section aria-labelledby="built" className="mt-16 grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-12">
            <h2 id="built" className="display text-3xl md:text-4xl lg:col-span-5">What I built</h2>
            <ul className="max-w-2xl space-y-3 lg:col-span-7">
              {cs.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <section aria-labelledby="about-project" className="mt-14 grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-12">
          <h2 id="about-project" className="display text-3xl md:text-4xl lg:col-span-5">About the project</h2>
          <div className="prose-body max-w-2xl lg:col-span-7">
            <p>{project.description}</p>
            {project.note && (
              <div className="mt-8 border-l-2 border-accent pl-5">
                <h3 className="font-medium">{project.note.title}</h3>
                <p className="mt-2 text-muted">{project.note.body}</p>
              </div>
            )}
          </div>
        </section>
      )}

      <section aria-labelledby="stack" className="mt-14 grid gap-6 border-t border-rule pt-6 lg:grid-cols-12 lg:gap-12">
        <h2 id="stack" className="eyebrow lg:col-span-5">Technology</h2>
        <div className="lg:col-span-7">
          <TechList tech={project.tech} />
        </div>
      </section>

      <nav aria-label="More projects" className="mt-16 flex flex-col gap-4 border-t border-rule-strong pt-6 sm:flex-row sm:items-center sm:justify-between">
        <AllProjectsLink />
        <Link to={`/project/${next.id}`} className="group inline-flex items-baseline gap-2 text-right">
          <span className="text-sm text-muted">Next</span>
          <span className="font-serif text-2xl group-hover:text-accent">{next.name || next.title}</span>
          <FiArrowRight aria-hidden="true" className="self-center" />
        </Link>
      </nav>
    </article>
  );
}
