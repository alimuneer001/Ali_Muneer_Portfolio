"use client";
import { PROFILE } from "../public/scripts/profile-data";

export default function Contact() {
  return (
    <footer id="contact" data-purpose="footer-section" className="w-full bg-[#0D0D0D] text-white">
      <div className="contact-screen max-w-[1400px] mx-auto px-6 md:px-14">
        <div className="contact-invitation">
          <h2 className="contact-heading font-black uppercase leading-none tracking-tight footer-metallic-title">LET'S TALK</h2>
          <div className="contact-actions">
            {[
              ['Upwork', 'https://www.upwork.com/freelancers/~0102b5f11d0fcda2ff'],
              ['LinkedIn', PROFILE.linkedin],
              ['GitHub', PROFILE.github],
            ].map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full border border-neutral-700 hover:border-neutral-400 text-xs font-medium tracking-wider uppercase text-neutral-300 hover:text-white transition">{label}</a>)}
            <button type="button" onClick={() => window.openContactModal?.()} className="px-8 py-3 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-bold tracking-wider uppercase transition">Contact me</button>
          </div>
          <a href={PROFILE.resume} download="Ali_Muneer_Resume.pdf" className="mt-8 text-xs uppercase tracking-widest text-neutral-300 hover:text-white underline underline-offset-4 py-3">Download my CV <span aria-hidden="true">&#8599;</span></a>
        </div>
        <div className="contact-bottom">
          <address className="contact-details not-italic text-xs text-neutral-400">
            <p className="font-medium text-neutral-300 mb-2">{PROFILE.name} <span className="text-neutral-600 mx-1" aria-hidden="true">/</span> {PROFILE.location}</p>
            <div className="contact-direct-links">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
            </div>
          </address>
          <p className="text-[10px] tracking-widest uppercase text-neutral-500">&copy; 2026 {PROFILE.name}</p>
        </div>
      </div>
    </footer>
  );
}
