import { ongoingProjects } from "../Data/siteData.js";

export default function OngoingProjects() {
  return (
    <section aria-labelledby="building-title" className="wrap py-14 md:py-20">
      <div className="border-t border-rule-strong pt-6">
        <h2 id="building-title" className="display text-4xl md:text-5xl">
          Currently building
        </h2>
        <ul className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          {ongoingProjects.map((p) => (
            <li key={p.title}>
              <p className="eyebrow">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" aria-hidden="true" />
                Status: {p.status}
              </p>
              <h3 className="mt-2 text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-muted">{p.description}</p>
              <p className="mt-3 text-sm text-muted">{p.tech.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
