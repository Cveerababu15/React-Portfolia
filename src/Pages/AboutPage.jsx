import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import portrait from "../Images/veera.jpg";
import usePageTitle from "../Components/usePageTitle.js";
import { getProject } from "../Data/projectsData.jsx";
import {
  profile,
  experience,
  education,
  certifications,
  skillGroups,
  skillEvidence,
} from "../Data/siteData.js";

function SectionHead({ id, children, aside }) {
  return (
    <div className="lg:col-span-4">
      <h2 id={id} className="display text-4xl md:text-5xl">{children}</h2>
      {aside && <p className="mt-3 max-w-xs text-muted">{aside}</p>}
    </div>
  );
}

export default function AboutPage() {
  usePageTitle("About");

  return (
    <div className="wrap pt-10 pb-8 md:pt-16">
      {/* Intro */}
      <section aria-labelledby="about-title" className="grid gap-10 md:grid-cols-12 md:gap-12">
        <figure className="md:col-span-4">
          <div className="overflow-hidden border border-rule bg-sunken" style={{ aspectRatio: "4 / 5" }}>
            <img
              src={portrait}
              alt="Portrait of Veerababu Chakali"
              width={764}
              height={1168}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </figure>
        <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
          <p className="eyebrow">About</p>
          <h1 id="about-title" className="display mt-2 text-5xl md:text-7xl">{profile.name}</h1>
          <p className="mt-3 text-lg font-medium">
            {profile.role} · {profile.location}
          </p>
          <div className="prose-body mt-6 max-w-2xl text-[1.0625rem]">
            <p>
              I build responsive interfaces, modular REST APIs, authentication, and role-based
              workflows with the MERN stack. I like the parts of a product where people with
              different jobs share the same data — a farmer and a driver looking at one order, or a
              writer and a reader looking at one article.
            </p>
            <p>
              I graduated in Computer Science and Engineering in 2025. Today I work on full-stack
              applications at Arpvo Tech and fix issues in an existing codebase as an intern at
              UptoSkills.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              View résumé <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-quiet">Email me</a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience" className="mt-20 grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-12">
        <SectionHead id="experience">Experience</SectionHead>
        <ol className="lg:col-span-8">
          {experience.map((e) => (
            <li key={`${e.employer}-${e.role}`} className="border-b border-rule py-6 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-xl font-medium">{e.role}</h3>
                <p className="shrink-0 text-sm tabular-nums text-muted">
                  {e.dates}
                  {e.current && (
                    <span className="ml-2 border border-accent px-1.5 py-px text-xs text-accent">Current</span>
                  )}
                </p>
              </div>
              <p className="mt-0.5 text-muted">
                <span className="text-ink">{e.employer}</span> · {e.location}
              </p>
              <p className="mt-3">{e.summary}</p>
              <ul className="mt-2 space-y-1.5 text-muted">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Education + certifications */}
      <section aria-labelledby="education" className="mt-16 grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-12">
        <SectionHead id="education">Education</SectionHead>
        <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
          <div>
            <h3 className="font-medium">{education.degree}</h3>
            <p className="mt-1 text-muted">{education.school}</p>
            <p className="mt-1 text-sm tabular-nums text-muted">
              {education.dates} · {education.grade}
            </p>
          </div>
          <div>
            <h3 className="eyebrow">Certifications</h3>
            <ul className="mt-2 space-y-3">
              {certifications.map((c) => (
                <li key={c.name}>
                  <p>{c.name}</p>
                  <p className="text-sm text-muted">{c.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills" className="mt-16 grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12 lg:gap-12">
        <SectionHead id="skills" aside="The tools I use, grouped by where they sit in an application.">
          Skills
        </SectionHead>
        <div className="lg:col-span-8">
          <dl>
            {skillGroups.map((g) => (
              <div key={g.title} className="grid gap-1 border-b border-rule py-4 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-medium">{g.title}</dt>
                <dd className="text-muted">{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>

          <h3 className="eyebrow mt-10">Where you can see them</h3>
          <ul className="mt-3">
            {skillEvidence.map((s) => {
              const p = getProject(s.projectId);
              return (
                <li key={s.skill} className="border-b border-rule py-3">
                  <span className="font-medium">{s.skill}</span>
                  <span className="text-muted"> — {s.text} in </span>
                  <Link to={`/project/${p.id}`} className="link">{p.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
