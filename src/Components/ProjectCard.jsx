import { Link } from "react-router-dom";

/**
 * Catalog entry. The title link is stretched over the whole entry, so the
 * entire card is clickable while keyboard users get a single tab stop.
 */
export default function ProjectCard({ project, lead = false }) {
  const { id, name, title, summary, image, imageWidth, imageHeight, imageAlt, imageKind, tech, category } =
    project;
  const displayName = name || title;
  const alt =
    imageAlt ||
    (imageKind === "illustration"
      ? `Illustration for ${displayName}`
      : `Screenshot of the ${displayName} interface`);

  return (
    <article
      className={`group relative border-t border-rule pt-4 ${
        lead ? "grid gap-6 md:grid-cols-12 md:gap-10" : "flex flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden border border-rule bg-sunken ${lead ? "md:col-span-7" : ""}`}
        style={{ aspectRatio: "16 / 10" }}
      >
        <img
          src={image}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          loading={lead ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {imageKind === "illustration" && (
          <span className="absolute left-2 top-2 bg-bg/90 px-2 py-0.5 text-xs text-muted">
            Illustration
          </span>
        )}
      </div>

      <div className={lead ? "md:col-span-5 md:self-center" : "mt-4"}>
        <p className="eyebrow">{category}</p>
        <h3 className={`mt-1 ${lead ? "display text-4xl md:text-5xl" : "text-xl font-medium leading-snug"}`}>
          <Link
            to={`/project/${id}`}
            className="after:absolute after:inset-0 group-hover:text-accent focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent"
          >
            {displayName}
          </Link>
        </h3>
        <p className={`mt-2 text-muted ${lead ? "text-lg" : ""}`}>{summary}</p>
        <p className="mt-3 text-sm text-muted">
          {tech.filter((t) => t !== "MERN").slice(0, lead ? 6 : 4).join(" · ")}
        </p>
      </div>
    </article>
  );
}
