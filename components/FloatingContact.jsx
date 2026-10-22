"use client";
import { useEffect, useState } from "react";
import { PROFILE } from "../public/scripts/profile-data";

export default function FloatingContact() {
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
    const footer = document.getElementById('contact');
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  if (footerVisible) return null;
  return <nav className="floating-contact" aria-label="Quick contact">
    <a href={`mailto:${PROFILE.email}`} aria-label={`Email ${PROFILE.name}`} title={PROFILE.email}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 6 9 7 9-7"/></svg><span>Email</span>
    </a>
    <a href={PROFILE.phoneHref} aria-label={`Call ${PROFILE.phone}`} title={PROFILE.phone}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"/></svg><span>Call</span>
    </a>
    <a className="floating-whatsapp" href={PROFILE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Ali on WhatsApp" title="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5Z"/><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1-3-3 1-1-1-3-3 1Z" transform="translate(0 1) scale(.9)"/></svg><span>WhatsApp</span>
    </a>
  </nav>;
}
