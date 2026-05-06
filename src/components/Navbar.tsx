"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/profile";

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolvedTheme =
      savedTheme === "dark" || (!savedTheme && prefersDark) ? "dark" : "light";

    window.requestAnimationFrame(() => {
      setTheme(resolvedTheme);
      document.documentElement.classList.toggle(
        "dark",
        resolvedTheme === "dark",
      );
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        className="border-b backdrop-blur-xl"
        animate={{
          backgroundColor: isScrolled
            ? theme === "dark"
              ? "rgba(8,17,31,0.92)"
              : "rgba(248,250,252,0.94)"
            : theme === "dark"
              ? "rgba(8,17,31,0.72)"
              : "rgba(246,248,255,0.84)",
          borderColor: isScrolled
            ? theme === "dark"
              ? "rgba(30,41,59,1)"
              : "rgba(191,219,254,1)"
            : theme === "dark"
              ? "rgba(51,65,85,0.45)"
              : "rgba(191,219,254,0.6)",
        }}
        transition={{ duration: 0.2 }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a
            href="#profile"
            onClick={(e) => handleNavClick(e, "#profile")}
            className="flex items-center gap-2 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:focus-visible:outline-sky-300"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950 text-xs font-black text-white shadow-lg shadow-sky-500/20 dark:bg-sky-300 dark:text-slate-950">
              {profile.initials}
            </div>
            <span className="font-semibold tracking-tight text-slate-950 dark:text-white">
              {profile.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {profile.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative rounded-lg px-1 py-1 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:text-slate-300 dark:hover:text-white dark:focus-visible:outline-sky-300"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-sky-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-slate-800 shadow-sm shadow-sky-900/5 transition hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-sky-100 dark:hover:border-sky-300 dark:hover:bg-slate-800 dark:focus-visible:outline-sky-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="rounded-xl bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sky-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200 dark:focus-visible:outline-sky-300"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white text-slate-800 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-sky-100 dark:focus-visible:outline-sky-300"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-200 bg-white text-slate-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus-visible:outline-sky-300"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-slate-900 dark:bg-white" />
                <span className="block h-0.5 w-5 bg-slate-900 dark:bg-white" />
                <span className="block h-0.5 w-5 bg-slate-900 dark:bg-white" />
              </div>
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-b border-sky-100 bg-[#f3f7ff] md:hidden dark:border-slate-800 dark:bg-slate-950"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="max-w-6xl mx-auto px-4 pb-4 space-y-2">
              {profile.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block rounded-lg px-2 py-2 text-sm font-semibold text-slate-700 hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white dark:focus-visible:outline-sky-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
