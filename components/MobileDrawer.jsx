"use client";

export default function MobileDrawer() {
  return (
    <div
      id="mobile-drawer"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex justify-end"
    >
      <div
        id="mobile-drawer-content"
        className="w-4/5 max-w-sm bg-white h-full p-8 flex flex-col justify-between transform translate-x-full transition-transform duration-300 shadow-2xl"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
            <span className="font-extrabold text-lg tracking-tight">
              {"ALI."}
            </span>
            <button
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-black"
            >
              {"\n            ✕\n          "}
            </button>
          </div>
          <nav className="flex flex-col gap-4 mt-8 text-base font-bold tracking-wider">
            <a
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              href="#home"
              className="py-2 border-b border-neutral-100 hover:text-neutral-500"
            >
              {"HOME"}
            </a>
            <a
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              href="#about"
              className="py-2 border-b border-neutral-100 hover:text-neutral-500"
            >
              {"ABOUT ME"}
            </a>
            <a
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              href="#experience"
              className="py-2 border-b border-neutral-100 hover:text-neutral-500"
            >
              {"EXPERIENCE"}
            </a>
            <a
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              href="#projects"
              className="py-2 border-b border-neutral-100 hover:text-neutral-500"
            >
              {"PROJECTS"}
            </a>
            <a
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              href="#landing-pages"
              className="py-2 border-b border-neutral-100 hover:text-neutral-500"
            >
              {"SHOWCASE"}
            </a>
            <a
              onClick={(event) => {
                window.toggleMobileMenu?.();
              }}
              href="#services"
              className="py-2 border-b border-neutral-100 hover:text-neutral-500"
            >
              {"SERVICES"}
            </a>
            <a
              onClick={(event) => {
                event.preventDefault();
                window.toggleMobileMenu?.();
                window.openContactModal?.();
              }}
              href="#contact"
              className="py-2 text-black hover:underline"
            >
              {"CONTACT"}
            </a>
          </nav>
        </div>
        <div className="pt-6 border-t border-neutral-200">
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-3">
            {"ALI MUNEER"}
          </p>
          <p className="text-xs text-neutral-600">
            {"Full Stack Developer (MERN)"}
          </p>
        </div>
      </div>
    </div>
  );
}
