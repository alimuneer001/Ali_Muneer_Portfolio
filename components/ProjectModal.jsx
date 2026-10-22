"use client";

export default function ProjectModal() {
  return (
    <div
      id="project-modal"
      onClick={(event) => {
        if (event.target === event.currentTarget) window.closeProjectModal?.();
      }}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md opacity-0 pointer-events-none flex items-center justify-center p-4"
    >
      <div
        id="project-modal-card"
        className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar p-6 sm:p-8 md:p-9 shadow-2xl border border-neutral-100 opacity-0 scale-[0.94] translate-y-4 relative"
      >
        <div className="relative text-center pb-4 mb-5 border-b border-neutral-100">
          <span
            id="modal-project-category"
            className="block text-[11px] font-bold tracking-widest uppercase text-neutral-400 mb-1"
          >
            {"CATEGORY"}
          </span>
          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-black uppercase text-neutral-900 tracking-tight"
          >
            {"PROJECT TITLE"}
          </h3>
          <button
            onClick={(event) => {
              window.closeProjectModal?.();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-black hover:text-black hover:bg-neutral-50 transition-colors"
            aria-label="Close modal"
          >
            {"✕"}
          </button>
        </div>
        <div
          id="modal-project-body"
          className="space-y-5 text-sm text-neutral-700"
        ></div>
      </div>
    </div>
  );
}
