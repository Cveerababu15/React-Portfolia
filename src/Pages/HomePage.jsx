import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Hero from "../Components/Hero.jsx";
import Figure from "../Components/Figure.jsx";
import FlowDiagram from "../Components/FlowDiagram.jsx";
import OngoingProjects from "../Components/OngoingProjects.jsx";
import usePageTitle from "../Components/usePageTitle.js";
import { projects, getProject } from "../Data/projectsData.jsx";
import { experience, profile } from "../Data/siteData.js";

function CaseLink({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="link inline-flex items-center gap-1.5 font-medium">
      Read the {project.name} case study <FiArrowRight aria-hidden="true" />
    </Link>
  );
}

function SelectedWork() {
  const agro = getProject(11);
  const jobs = getProject(13);
  const news = getProject(14);

  return (
    <section id="work" aria-labelledby="work-title" className="wrap py-14 md:py-20">
      <div className="flex flex-col gap-3 border-t border-rule-strong pt-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-title" className="display mt-2 text-4xl md:text-6xl">
            Three projects, three engineering questions
          </h2>
        </div>
        <Link to="/projects" className="link shrink-0 font-medium">
          All {projects.length} projects
        </Link>
      </div>

      {/* Lead story: AgroConnect */}
      <article className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <figure>
            <div className="border border-rule bg-surface p-5 sm:p-8">
              <p className="font-serif text-2xl sm:text-3xl">One order, three dashboards</p>
              <FlowDiagram steps={agro.caseStudy.flow.slice(0, 3)} className="mt-6" />
              <p className="mt-5 text-[0.9375rem] text-muted">
                {agro.caseStudy.flow[3].text}
              </p>
            </div>
            <figcaption className="mt-3 flex gap-3 text-[0.9375rem] leading-snug text-muted">
              <span aria-hidden="true" className="mt-[0.6em] h-[2px] w-6 shrink-0 bg-accent" />
              <span>
                <span className="font-medium text-ink">AgroConnect. </span>
                Each step happens in a different role&rsquo;s dashboard, behind role-based access checks.
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-5 lg:pt-4">
          <p className="eyebrow">{agro.caseStudy.kicker}</p>
          <h3 className="display mt-2 text-5xl md:text-6xl">{agro.name}</h3>
          <p className="mt-5 font-serif text-2xl italic leading-snug">{agro.caseStudy.question}</p>
          <p className="mt-4 text-muted">{agro.caseStudy.shortAnswer}</p>
          <p className="mt-4 text-sm text-muted">{agro.tech.filter((t) => t !== "MERN").join(" · ")}</p>
          <div className="mt-6">
            <CaseLink project={agro} />
          </div>
        </div>
      </article>

      {/* Two secondary stories */}
      <div className="mt-16 grid gap-14 border-t border-rule pt-10 md:grid-cols-2 md:gap-10 lg:gap-16">
        {[
          { p: jobs, crop: { aspect: "16 / 8", position: "50% 0%", scale: 1.3 } },
          { p: news, crop: { aspect: "16 / 8", position: "0% 100%", scale: 1.45 } },
        ].map(({ p, crop }) => (
          <article key={p.id} className="flex flex-col">
            <Figure
              src={p.image}
              alt={p.imageAlt}
              width={p.imageWidth}
              height={p.imageHeight}
              crop={crop}
              label={`${p.name}, detail`}
              caption={p.caseStudy.homeCaption}
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <p className="eyebrow mt-7">{p.caseStudy.kicker}</p>
            <h3 className="display mt-2 text-4xl md:text-5xl">{p.name}</h3>
            <p className="mt-4 font-serif text-xl italic leading-snug md:text-2xl">
              {p.caseStudy.question}
            </p>
            <p className="mt-3 text-muted">{p.caseStudy.shortAnswer}</p>
            <div className="mt-5">
              <CaseLink project={p} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperiencePreview() {
  return (
    <section aria-labelledby="exp-title" className="wrap py-14 md:py-20">
      <div className="grid gap-8 border-t border-rule-strong pt-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="exp-title" className="display text-4xl md:text-5xl">Experience</h2>
          <Link to="/about#experience" className="link mt-4 inline-flex items-center gap-1.5 font-medium">
            Full experience and skills <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <ol className="lg:col-span-8">
          {experience.map((e) => (
            <li
              key={`${e.employer}-${e.role}`}
              className="grid gap-1 border-b border-rule py-4 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-6"
            >
              <div>
                <p className="font-medium">
                  {e.role} <span className="text-muted">· {e.employer}</span>
                </p>
                <p className="text-sm text-muted">{e.location}</p>
              </div>
              <p className="text-sm tabular-nums text-muted sm:text-right">{e.dates}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section aria-labelledby="contact-title" className="wrap py-14 md:py-20">
      <div className="border-t border-rule-strong pt-6">
        <h2 id="contact-title" className="display text-4xl md:text-6xl">
          Hiring for a full-stack role?
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Email is the quickest way to reach me. I&rsquo;m also happy to connect on LinkedIn.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-quiet">
            LinkedIn <FiArrowUpRight aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
          <li>
            <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a className="link" href={profile.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          </li>
          <li>
            <a className="link" href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function HomePage() {
  usePageTitle(null);
  return (
    <>
      <Hero />
      <SelectedWork />
      <ExperiencePreview />
      <OngoingProjects />
      <Contact />
    </>
  );
}
