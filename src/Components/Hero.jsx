import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import Figure from "./Figure.jsx";
import { profile } from "../Data/siteData.js";
import { getProject } from "../Data/projectsData.jsx";

export default function Hero() {
  const news = getProject(14);

  return (
    <section aria-labelledby="hero-title" className="wrap pt-10 pb-14 md:pt-16 lg:pt-20 lg:pb-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="rise lg:col-span-5 lg:pt-6">
          <h1 id="hero-title" className="display text-[3.25rem] sm:text-7xl lg:text-[5.5rem]">
            Veerababu
            <br />
            Chakali
          </h1>
          <p className="mt-5 text-lg font-medium sm:text-xl">
            {profile.role} based in Bengaluru.
          </p>
          <p className="mt-4 max-w-[34rem] text-muted">
            I build React interfaces and Node.js APIs for applications that connect people and
            workflows. My projects include a farm-to-table ordering platform, a résumé analysis
            tool, and an AI-assisted news platform.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">
              Explore my work <FiArrowDown aria-hidden="true" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-quiet"
            >
              View résumé <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Figure
            src={news.image}
            alt={news.imageAlt}
            width={news.imageWidth}
            height={news.imageHeight}
            label="NewsHub, reader home"
            caption={news.caption}
            mobileCrop={news.mobileCrop}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
