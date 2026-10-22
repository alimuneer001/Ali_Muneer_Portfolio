export default function Projects() {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-16"
      data-purpose="featured-projects"
      id="projects"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900">
          {"\n        FEATURED PROJECT\n      "}
        </h2>
      </div>
      <div id="projects-content" className="w-full">
        <div
          id="flex-carousel-container"
          className="rounded-3xl border border-neutral-200 bg-[#EFEFEF] overflow-hidden shadow-inner"
          style={{ width: "100%", height: "560px", position: "relative" }}
        ></div>
      </div>
    </section>
  );
}
