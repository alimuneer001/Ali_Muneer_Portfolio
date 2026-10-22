"use client";

import { useEffect, useState } from "react";

const storageKey = "ali-portfolio-theme";
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    const system = matchMedia("(prefers-color-scheme: dark)");
    let preference;
    const apply = (value) => {
      setTheme(value);
      document.documentElement.dataset.theme = value;
      document.documentElement.style.colorScheme = value;
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", value === "dark" ? "#101113" : "#FAFAFA");
    };
    const readPreference = () => {
      try {
        preference = localStorage.getItem(storageKey);
      } catch {
        preference = null;
      }
      if (!["light", "dark"].includes(preference)) preference = null;
      apply(preference || (system.matches ? "dark" : "light"));
    };
    const onSystem = () => {
      if (!preference) readPreference();
    };
    const onStorage = (event) => {
      if (event.key === storageKey || event.key === null) readPreference();
    };
    readPreference();
    system.addEventListener("change", onSystem);
    window.addEventListener("storage", onStorage);
    window.addEventListener("portfolio-theme-change", readPreference);
    return () => {
      system.removeEventListener("change", onSystem);
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("portfolio-theme-change", readPreference);
    };
  }, []);
  function toggle() {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#101113" : "#FAFAFA");
    setTheme(next);
    try {
      localStorage.setItem(storageKey, next);
      window.dispatchEvent(new Event("portfolio-theme-change"));
    } catch {}
  }
  const label = theme
    ? `Switch to ${theme === "dark" ? "light" : "dark"} mode`
    : "Toggle color theme";
  return (
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
  );
}
