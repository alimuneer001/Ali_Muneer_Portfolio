"use client";

export default function ContactModal() {
  return (
    <div
      id="contact-modal"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4"
    >
      <div
        id="contact-modal-card"
        className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl transform scale-95 transition-transform duration-300"
      >
        <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
              {"START A CONVERSATION"}
            </span>
            <h3 className="text-xl font-black uppercase text-neutral-900">
              {"LET'S BUILD SOMETHING"}
            </h3>
          </div>
          <button
            onClick={(event) => {
              window.closeContactModal?.();
            }}
            className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-black hover:text-black"
          >
            {"✕"}
          </button>
        </div>
        <p className="text-xs text-neutral-500 mb-5">
          {
            "Opens an email draft to alimuneer001@gmail.com. You send it from your email app."
          }
        </p>
        <form
          id="contact-form"
          onSubmit={(event) => {
            window.submitContactForm?.(event);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Your Name"}
            </label>
            <input
              type="text"
              id="contact-name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Email Address"}
            </label>
            <input
              type="email"
              id="contact-email"
              required
              placeholder="john@company.com"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Service Required"}
            </label>
            <select
              id="contact-service"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm bg-white"
            >
              <option value="Full Stack Applications">
                {"Full Stack Applications"}
              </option>
              <option value="Frontend Engineering">
                {"Frontend Engineering"}
              </option>
              <option value="Backend & APIs">{"Backend & APIs"}</option>
              <option value="Other">{"Other / Full Project"}</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Message"}
            </label>
            <textarea
              id="contact-message"
              rows="3"
              required
              placeholder="Tell me about your project, goals, and timeline..."
              className="w-full px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition"
          >
            {"\n          OPEN EMAIL DRAFT\n        "}
          </button>
        </form>
      </div>
    </div>
  );
}
