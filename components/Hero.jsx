"use client";

export default function Hero() {
  return (
    <main
      className="relative max-w-[1400px] mx-auto px-6 md:px-14 pt-6 md:pt-12 pb-20 overflow-hidden"
      data-purpose="hero-section"
      id="home"
    >
      <div className="text-center w-full mb-6 md:mb-10 relative z-0 select-none">
        <h1
          id="hero-title"
          className="text-[9.5vw] md:text-[8rem] lg:text-[9.5rem] font-extrabold uppercase leading-[0.85] tracking-tight"
        >
          <span className="block">
            <span className="text-[#121212]">{"ALI MUNEER"}</span>
          </span>
          <span className="block">
            <span className="metallic-title">{"PORTFOLIO"}</span>
          </span>
        </h1>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-12 items-center mt-2 md:-mt-6">
        <div className="md:col-span-3 flex flex-col items-start md:items-start pl-2 md:pl-6 order-2 md:order-1 pt-6 md:pt-0">
          <span className="text-xs font-bold tracking-wider uppercase text-neutral-800 mb-6">
            {"FULL STACK DEVELOPER"}
            <br />
            {"LAHORE, PAKISTAN"}
          </span>
          <a
            className="circle-btn w-14 h-14 md:w-16 md:h-16 border-neutral-300"
            href="#about"
            aria-label="Scroll to About Section"
          >
            <svg
              className="w-5 h-5 text-neutral-800 transform rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
        <div className="md:col-span-6 flex justify-center order-1 md:order-2 relative z-10 -mt-16 md:-mt-36">
          <div className="relative w-[320px] h-[400px] md:w-[480px] md:h-[580px] flex items-end justify-center hero-portrait-mask">
            <img
              src="/assets/ali-portrait.png"
              alt="Ali Muneer — Full Stack Developer"
              className="w-full h-full object-contain object-bottom pointer-events-none select-none transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col items-start md:items-end text-left order-3 pt-6 md:pt-0 pr-2 md:pr-6 space-y-10">
          <p className="text-[11px] md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-700 max-w-[220px] text-left">
            {
              "\n          I BUILD RESPONSIVE INTERFACES AND RELIABLE BACKENDS. REACT.JS, NODE.JS, AND EVERYTHING IN BETWEEN.\n        "
            }
          </p>
          <div className="flex flex-col space-y-3 text-[11px] md:text-xs font-semibold tracking-widest text-neutral-600 uppercase">
            <a
              href="#services"
              onClick={(event) => {
                window.selectService?.(0);
              }}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"
            >
              <span>{"FRONTEND"}</span>
            </a>
            <a
              href="#services"
              onClick={(event) => {
                window.selectService?.(1);
              }}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5"
            >
              <span>{"BACKEND & APIs"}</span>
            </a>
            <a
              href="#services"
              onClick={(event) => {
                window.selectService?.(2);
              }}
              className="hover:text-black hover:translate-x-1 md:hover:-translate-x-1 transition-all inline-flex items-center gap-1.5 font-bold text-black"
            >
              <span>{"FULL STACK"}</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
