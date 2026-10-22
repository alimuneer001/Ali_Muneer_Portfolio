"use client";
import { PROFILE } from "../public/scripts/profile-data";

export default function About() {
  return (
    <section
      className="relative w-full bg-[#0D0D0D] text-white"
      id="about"
      style={{ minHeight: "200vh" }}
    >
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start z-10">
        <div
          id="sem-bg-img"
          className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-150 ease-out"
          style={{ willChange: "opacity", transform: "translateZ(0)" }}
        >
          <img loading="lazy" decoding="async"
            src="/assets/about_starry_castle_hq.jpg?v=10"
            alt="Monochrome Starry Night Castle Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-start relative z-10 w-full h-full">
          <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
            <div
              id="sem-media-container"
              className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl transition-none bg-[#07090E]"
              style={{
                width: "300px",
                height: "400px",
                maxWidth: "95vw",
                maxHeight: "85vh",
                boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9)",
                border: "1px solid rgba(255,255,255,0.35)",
                willChange: "width, height",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl flex items-center justify-center bg-[#07090E]">
                <img loading="lazy" decoding="async"
                  id="sem-media-img"
                  src="/assets/about_floating_light_hq.png?v=14"
                  alt="Ali Muneer - Ascendance & Digital Craft"
                  className="w-full h-full object-cover rounded-xl transition-none"
                  style={{
                    transform: "scale(1.02) translateZ(0)",
                    transformOrigin: "center",
                    backfaceVisibility: "hidden",
                  }}
                />
                <img loading="lazy" decoding="async"
                  id="sem-media-blur"
                  src="/assets/about_floating_light_hq.png?v=14"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl transition-none pointer-events-none"
                  style={{
                    filter: "blur(18px)",
                    transform: "scale(1.08) translateZ(0)",
                    transformOrigin: "center",
                    opacity: "1",
                    willChange: "opacity",
                    backfaceVisibility: "hidden",
                  }}
                />
                <div
                  id="sem-media-overlay"
                  className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/85 rounded-xl transition-opacity duration-150 pointer-events-none"
                ></div>
                <div
                  id="sem-media-content"
                  className="absolute inset-0 z-20 flex flex-col justify-between p-5 sm:p-7 md:p-9 pointer-events-none opacity-0 transition-all duration-300 select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-3">
                    <h3 className="text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-tight text-white max-w-xl">
                      {
                        "\n                    TURNING VISIONARY IDEAS INTO FAST, DISTINCTIVE DIGITAL EXPERIENCES\n                  "
                      }
                    </h3>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400 shrink-0">
                      {
                        "\n                    LAHORE, PAKISTAN • WORLDWIDE\n                  "
                      }
                    </span>
                  </div>
                  <div className="flex-1 pointer-events-none min-h-[140px] md:min-h-[200px]"></div>
                  <div className="pt-3 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-xl space-y-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-300">
                          {"DISCIPLINE & CRAFT"}
                        </span>
                        <div className="h-px bg-white/15 w-6"></div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">
                          {"REACT • NEXT.JS • NODE.JS • MONGODB"}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[12px] font-medium leading-relaxed tracking-wider uppercase text-neutral-300">
                        {
                          PROFILE.summary
                        }
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 pt-1 md:pt-0">
                      <a
                        href="#contact"
                        onClick={(event) => {
                          event.preventDefault();
                          window.openContactModal?.();
                        }}
                        className="pointer-events-auto px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2"
                      >
                        <span>{"GET IN TOUCH"}</span>
                        <svg
                          className="w-3.5 h-3.5 text-black"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="#services"
                        className="pointer-events-auto px-5 py-2.5 rounded-full border border-neutral-500 hover:border-white text-white text-xs font-bold tracking-wider uppercase transition-all duration-200"
                      >
                        {
                          "\n                      SERVICES\n                    "
                        }
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center text-center relative z-10 mt-4 pointer-events-none">
                <p
                  id="sem-date"
                  className="text-xl md:text-2xl text-neutral-300 font-semibold tracking-wider uppercase transition-none drop-shadow"
                >
                  {"\n                BACKGROUND & VISION\n              "}
                </p>
                <p
                  id="sem-scroll-prompt"
                  className="text-neutral-400 font-medium text-xs tracking-widest uppercase transition-none mt-1 drop-shadow"
                >
                  {"\n                SCROLL TO EXPAND\n              "}
                </p>
              </div>
            </div>
            <div
              className="flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 pointer-events-none flex-col"
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
            >
              <h2
                id="sem-title-first"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight transition-none drop-shadow-2xl"
                style={{ willChange: "transform, opacity" }}
              >
                {"\n              ABOUT\n            "}
              </h2>
              <h2
                id="sem-title-rest"
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight transition-none drop-shadow-2xl"
                style={{ willChange: "transform, opacity" }}
              >
                {"\n              ME\n            "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
