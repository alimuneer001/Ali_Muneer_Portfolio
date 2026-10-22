"use client";
import { useRef, useState } from "react";

export default function ContactModal() {
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const pending = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    pending.current = true;
    setStatus({ type: 'sending', message: 'Sending your message...' });
    try {
      const result = await fetch('/api/contact/', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values),
      });
      const data = await result.json();
      if (!result.ok) throw new Error(data.message || 'Unable to send your message.');
      setStatus({ type: 'success', message: data.message });
      form.reset();
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Unable to connect. Please try again.' });
    } finally { pending.current = false; }
  }
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
            aria-label="Close contact form"
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
            "Tell me about your project. Your message goes directly to my inbox."
          }
        </p>
        <form
          id="contact-form"
          onSubmit={submit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Your Name"}
            </label>
            <input
              type="text"
              id="contact-name" name="name" autoComplete="name" maxLength={100}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Email Address"}
            </label>
            <input
              type="email"
              id="contact-email" name="email" autoComplete="email" maxLength={254}
              required
              placeholder="john@company.com"
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Service Required"}
            </label>
            <select
              id="contact-service" name="service"
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
            <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
              {"Message"}
            </label>
            <textarea
              id="contact-message" name="message"
              rows="3" minLength={10} maxLength={5000}
              required
              placeholder="Tell me about your project, goals, and timeline..."
              className="w-full px-4 py-2 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-sm"
            ></textarea>
          </div>
          <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <p role="status" aria-live="polite" className="text-sm text-neutral-600">{status.message}</p>
          {status.type === 'error' && <a className="block text-sm underline" href="mailto:alimuneer001@gmail.com">Email alimuneer001@gmail.com</a>}
          <button
            disabled={status.type === 'sending'}
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition disabled:opacity-50 disabled:cursor-wait"
          >
            {status.type === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </form>
      </div>
    </div>
  );
}
