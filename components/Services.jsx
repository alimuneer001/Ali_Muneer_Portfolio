"use client";

export default function Services() {
  return (
    <section
      className="max-w-[1400px] mx-auto px-6 md:px-14 py-20"
      data-purpose="services-section"
      id="services"
    >
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-4">
          {"\n        WHAT I BUILD\n      "}
        </h2>
        <p className="text-xs md:text-xs uppercase font-medium leading-relaxed tracking-wider text-neutral-500">
          {
            "\n        CREATING VISUALLY APPEALING AND FUNCTIONAL WEBSITES TAILORED TO THE CLIENT'S NEEDS AND GOALS. PROVIDING A CONSISTENT USER EXPERIENCE ACROSS PLATFORMS.\n      "
          }
        </p>
      </div>
      <div className="max-w-4xl mx-auto flex flex-col space-y-3.5">
        <div
          id="service-0"
          onClick={(event) => {
            window.toggleService?.(0);
          }}
          className="accordion-item w-full flex flex-col px-6 py-4 rounded-3xl border border-neutral-300 bg-white hover:border-black transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="item-badge w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-xs font-medium text-neutral-700">
              {"1"}
            </span>
            <span className="item-title text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-800">
              {"FRONTEND"}
            </span>
            <div className="item-icon w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center transition-transform">
              <svg
                className="w-3.5 h-3.5 text-neutral-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="accordion-content">
            <p className="text-xs text-neutral-500 leading-relaxed max-w-2xl mb-4">
              {
                "\n            Responsive, accessible interfaces built with React.js, Next.js and Tailwind CSS. Clean component architecture and thoughtful interactions across devices.\n          "
              }
            </p>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-3">
              <span className="text-[11px] font-mono text-neutral-400">
                {"REACT.JS · NEXT.JS · TAILWIND CSS"}
              </span>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  window.bookSpecificService?.("Frontend Engineering");
                }}
                className="text-xs font-bold underline hover:text-neutral-600"
              >
                {"INQUIRE ↗"}
              </button>
            </div>
          </div>
        </div>
        <div
          id="service-1"
          onClick={(event) => {
            window.toggleService?.(1);
          }}
          className="accordion-item w-full flex flex-col px-6 py-4 rounded-3xl border border-neutral-300 bg-white hover:border-black transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <span className="item-badge w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-xs font-medium text-neutral-700">
              {"2"}
            </span>
            <span className="item-title text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-800">
              {"BACKEND & APIs"}
            </span>
            <div className="item-icon w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center transition-transform">
              <svg
                className="w-3.5 h-3.5 text-neutral-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="accordion-content">
            <p className="text-xs text-neutral-500 leading-relaxed max-w-2xl mb-4">
              {
                "\n            Backend services with Node.js, Express.js and Python. REST APIs, GraphQL and WebSockets connected to MongoDB, PostgreSQL and MySQL.\n          "
              }
            </p>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-3">
              <span className="text-[11px] font-mono text-neutral-400">
                {"NODE.JS · EXPRESS · DATABASES · REST APIs"}
              </span>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  window.bookSpecificService?.("Backend & APIs");
                }}
                className="text-xs font-bold underline hover:text-neutral-600"
              >
                {"INQUIRE ↗"}
              </button>
            </div>
          </div>
        </div>
        <div
          id="service-2"
          onClick={(event) => {
            window.toggleService?.(2);
          }}
          className="accordion-item active w-full flex flex-col px-6 py-4 rounded-3xl bg-black text-white shadow-xl cursor-pointer transition-all transform scale-[1.01]"
        >
          <div className="flex items-center justify-between">
            <span className="item-badge w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">
              {"3"}
            </span>
            <span className="item-title text-xs md:text-sm font-bold tracking-widest uppercase text-white">
              {"FULL STACK APPLICATIONS"}
            </span>
            <div className="item-icon w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center transition-transform rotate-90">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="accordion-content">
            <p className="text-xs text-neutral-300 leading-relaxed max-w-2xl mb-4">
              {
                "\n            End-to-end MERN applications with reliable data flow, authentication, API integration and automated testing. From the first interface to the production product.\n          "
              }
            </p>
            <div className="flex items-center justify-between border-t border-neutral-800 pt-3">
              <span className="text-[11px] font-mono text-neutral-400">
                {"MERN APPLICATIONS · INTEGRATION · TESTING"}
              </span>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  window.bookSpecificService?.("Full Stack Applications");
                }}
                className="text-xs font-bold underline text-white hover:text-neutral-300"
              >
                {"INQUIRE ↗"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
