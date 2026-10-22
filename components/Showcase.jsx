import { SHOWCASE_PROJECTS } from "../public/scripts/portfolio-data";

export default function Showcase() {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16"
      data-purpose="landing-pages-featured-projects"
      id="landing-pages"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
            {"\n          SHOWCASE\n        "}
          </h2>
        </div>
      </div>
      <div
        className="showcase-wheel w-full relative overflow-hidden"
        style={{ height: "640px", minHeight: "520px" }}
      >
        <div
          id="works-wheel-container"
          className="w-full h-full relative"
        ></div>
      </div>
      <div className="showcase-grid">
        {SHOWCASE_PROJECTS.map(project => {
          return <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="showcase-card">
            <img src={project.image} alt={project.alt} loading="lazy" decoding="async" width="1900" height="900" />
            <span>{project.title} <span aria-hidden="true">&#8599;</span></span>
            <small>{project.subtitle}</small>
          </a>;
        })}
      </div>
    </section>
  );
}
