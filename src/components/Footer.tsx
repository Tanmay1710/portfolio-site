import React from "react";
import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-[#f8fbff] dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 sm:justify-end dark:text-slate-400">
          <span>
            {profile.location} · {profile.availability}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:hover:text-white dark:focus-visible:outline-sky-300"
          >
            {profile.email}
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:hover:text-white dark:focus-visible:outline-sky-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
