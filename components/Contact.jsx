"use client";

export default function Contact() {
  return (
    <footer
      className="w-full bg-[#0D0D0D] text-white pt-20 pb-12 mt-12"
      data-purpose="footer-section"
      id="contact"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-14 flex flex-col items-center">
        <div className="w-full text-center py-6 md:py-10">
          <h2
            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black uppercase leading-none tracking-tight footer-metallic-title select-none cursor-pointer"
            onClick={(event) => {
              window.openContactModal?.();
            }}
          >
            {"\n          LET'S TALK\n        "}
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8 mb-20">
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://wa.me/923120546646"
            target="_blank"
            rel="noopener"
          >
            {"\n          WHATSAPP\n        "}
          </a>
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://www.upwork.com/freelancers/~0102b5f11d0fcda2ff"
            target="_blank"
            rel="noopener"
          >
            {"\n          UPWORK\n        "}
          </a>
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://www.linkedin.com/in/ali-muneer-b4531231b/"
            target="_blank"
            rel="noopener"
          >
            {"\n          LINKEDIN\n        "}
          </a>
          <a
            className="px-6 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase transition text-neutral-300 hover:text-white"
            href="https://github.com/alimuneer001"
            target="_blank"
            rel="noopener"
          >
            {"\n          GITHUB\n        "}
          </a>
          <button
            onClick={(event) => {
              window.openContactModal?.();
            }}
            className="px-7 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition transform hover:scale-105"
          >
            {"\n          CONTACT ME\n        "}
          </button>
        </div>
        <a
          className="text-xs uppercase tracking-widest underline mb-8"
          href="/assets/Ali Resume Page.pdf"
          download="Ali_Muneer_Resume.pdf"
        >
          {"Download my CV ↗"}
        </a>
        <div className="w-full pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-widest uppercase text-neutral-600 font-semibold gap-4">
          <div>{"LAHORE, PAKISTAN · ALIMUNEER001@GMAIL.COM"}</div>
          <div>{"© 2026 ALI MUNEER"}</div>
        </div>
      </div>
    </footer>
  );
}
