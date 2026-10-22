"use client";

export default function Experience() {
  return (
    <section
      className="relative w-full bg-[#070709] text-white overflow-visible"
      data-purpose="experience-section"
      id="experience"
      style={{ height: "380vh" }}
      string="progress"
      string-id="experience-journey"
    >
      <div
        id="exp-sticky-viewport"
        className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#070709] flex flex-col justify-between select-none"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden opacity-[0.035]">
          <div
            id="exp-ticker-top"
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter will-change-transform leading-none"
          >
            {
              "\n          CREATIVE TECHNOLOGIST    FULL STACK ARCHITECTURE    CREATIVE TECHNOLOGIST    FULL STACK ARCHITECTURE   \n        "
            }
          </div>
          <div
            id="exp-ticker-bottom"
            className="whitespace-nowrap font-black uppercase text-[14vw] tracking-tighter will-change-transform leading-none"
          >
            {
              "\n          2025    CINNOVA TECHNOLOGIES    2026    SPADASOFT    MERN    FULL STACK DEVELOPMENT   \n        "
            }
          </div>
        </div>
        <header className="relative z-30 w-full px-6 md:px-14 pt-6 pb-4 flex items-center justify-between border-b border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-4">
            <span
              id="exp-hud-phase"
              className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400"
            >
              {"\n            CAREER JOURNEY\n          "}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                id="exp-hud-progress"
                className="h-full bg-white transition-all duration-75 w-0"
              ></div>
            </div>
          </div>
        </header>
        <div className="relative z-20 flex-1 w-full overflow-hidden flex items-center">
          <div
            id="exp-horizontal-stage"
            className="flex items-center h-full will-change-transform transition-none"
            style={{ width: "400vw" }}
          >
            <div className="exp-panel flex-shrink-0 w-screen px-8 md:px-16 lg:px-24">
              <p className="text-xs tracking-widest uppercase mb-6 text-neutral-400">
                {"FOUNDATION & JOURNEY"}
              </p>
              <h2 className="text-5xl md:text-8xl font-black uppercase leading-none mb-8">
                {"WHERE"}
                <br />
                {"I'VE BEEN"}
              </h2>
              <p className="text-neutral-300 max-w-xl">
                {
                  "From hands-on MERN development at Cinnova to building full-stack products at Spadasoft."
                }
              </p>
            </div>
            <article className="exp-panel relative flex-shrink-0 w-screen px-8 md:px-16 lg:px-24">
              <div
                className="exp-date-bg absolute right-12 -top-12 text-[15vw] font-black text-white/[0.04]"
                data-parallax-factor="0.12"
              >
                {"01"}
              </div>
              <div className="relative max-w-4xl">
                <p className="text-xs tracking-widest text-neutral-400 mb-4">
                  {"MAY — JUL 2025 / CINNOVA TECHNOLOGIES"}
                </p>
                <h3 className="text-4xl md:text-7xl font-black leading-none mb-6">
                  {"FULL STACK"}
                  <br />
                  {"INTERN"}
                </h3>
                <p className="text-sm md:text-lg text-neutral-300 max-w-2xl mb-8">
                  {
                    "Contributed to live client projects across frontend and backend development. Built and refined UI components to match design specifications while gaining hands-on MERN experience."
                  }
                </p>
                <div className="grid sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-neutral-300">
                  <p>{"Live client projects"}</p>
                  <p>{"Responsive UI components"}</p>
                  <p>{"MERN foundations"}</p>
                </div>
              </div>
            </article>
            <article className="exp-panel relative flex-shrink-0 w-screen px-8 md:px-16 lg:px-24">
              <div
                className="exp-date-bg absolute right-12 -top-12 text-[15vw] font-black text-white/[0.04]"
                data-parallax-factor="0.12"
              >
                {"02"}
              </div>
              <div className="relative max-w-4xl">
                <p className="text-xs tracking-widest text-neutral-400 mb-4">
                  {"AUG 2025 — MAY 2026 / CINNOVA TECHNOLOGIES"}
                </p>
                <h3 className="text-4xl md:text-7xl font-black leading-none mb-6">
                  {"FULL STACK"}
                  <br />
                  {"DEVELOPER"}
                </h3>
                <p className="text-sm md:text-lg text-neutral-300 max-w-2xl mb-8">
                  {
                    "Developed accessible React interfaces and backend functionality. Integrated APIs, optimized page performance and implemented automated testing workflows with the engineering team."
                  }
                </p>
                <div className="grid sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-neutral-300">
                  <p>{"React & API integration"}</p>
                  <p>{"Performance optimization"}</p>
                  <p>{"Automated testing"}</p>
                </div>
              </div>
            </article>
            <article className="exp-panel relative flex-shrink-0 w-screen px-8 md:px-16 lg:px-24">
              <div
                className="exp-date-bg absolute right-12 -top-12 text-[15vw] font-black text-white/[0.04]"
                data-parallax-factor="0.12"
              >
                {"03"}
              </div>
              <div className="relative max-w-4xl">
                <p className="text-xs tracking-widest text-neutral-400 mb-4">
                  {"JUN 2026 — PRESENT / SPADASOFT"}
                </p>
                <h3 className="text-4xl md:text-7xl font-black leading-none mb-6">
                  {"FULL STACK"}
                  <br />
                  {"DEVELOPER"}
                </h3>
                <p className="text-sm md:text-lg text-neutral-300 max-w-2xl mb-8">
                  {
                    "Developing and maintaining MERN applications. Building responsive interfaces, connecting backend services and collaborating across teams to deliver scalable, maintainable features."
                  }
                </p>
                <div className="grid sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-neutral-300">
                  <p>{"MERN applications"}</p>
                  <p>{"Backend services"}</p>
                  <p>{"Cross-functional delivery"}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <footer className="relative z-30 w-full px-6 md:px-14 py-4 flex items-center justify-between border-t border-white/[0.08] backdrop-blur-md bg-[#070709]/80">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="exp-jump-btn text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/20 text-white bg-white/10 transition-all hover:bg-white/20"
              data-target-progress="0.34"
            >
              {"\n            CINNOVA\n          "}
            </button>
            <button
              type="button"
              className="exp-jump-btn text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-md border border-white/5 text-neutral-500 hover:text-white transition-all hover:border-white/20"
              data-target-progress="1"
            >
              {"\n            SPADASOFT\n          "}
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
