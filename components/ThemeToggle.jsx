"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [transition, setTransition] = useState(null);
  const sequence = useRef(0);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#101113" : "#FAFAFA"
    );
  }, [theme]);
  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTransition(reducedMotion ? null : { theme: next, id: ++sequence.current });
  }
  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  return (
    <>
    <button
      id="theme-toggle"
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={theme === "dark"}
      title={label}
    >
      <svg
        className="theme-moon"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />
      </svg>
      <svg
        className="theme-sun"
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </svg>
    </button>
    {transition && createPortal(
      <div
        key={transition.id}
        className={`theme-rise theme-rise--${transition.theme}`}
        aria-hidden="true"
        onAnimationEnd={event => {
          if (event.target === event.currentTarget) {
            setTransition(current => current?.id === transition.id ? null : current);
          }
        }}
      >
        <div className="theme-rise-orb">
          {transition.theme === "dark" ? (
            <svg viewBox="0 0 100 100"><path d="M82 60A38 38 0 0 1 40 18 38 38 0 1 0 82 60Z" fill="currentColor" /></svg>
          ) : (
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <circle cx="50" cy="50" r="23" fill="currentColor" />
              <path d="M50 5v10m0 70v10M5 50h10m70 0h10M18 18l7 7m50 50 7 7M18 82l7-7m50-50 7-7" />
            </svg>
          )}
        </div>
        <span className="theme-rise-star theme-rise-star--one" />
        <span className="theme-rise-star theme-rise-star--two" />
        <span className="theme-rise-star theme-rise-star--three" />
      </div>, document.body
    )}
    </>
  );
}
