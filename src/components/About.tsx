import React from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/profile";

/**
 * The About section component of the portfolio.
 * Displays a professional summary, a quote, and categorized details like background,
 * specialties, certifications, awards, and additional projects, all sourced from `profile.ts`.
 */
export default function About() {
  return (
    <section
      id="about"
      className="border-y border-sky-100 bg-[#f3f7ff] px-6 py-20 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          {/* Section title */}
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-800 dark:text-sky-300">
            About
          </p>
          {/* Main heading for the section */}
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Process transformation across global teams.
          </h2>
          {/* Introductory paragraph */}
          <p className="mt-5 text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            The through-line is practical: understand how people work today,
            find the bottleneck worth fixing, then build automation that can
            survive real enterprise constraints.
          </p>
        </Reveal>
        {/*
         * Right-hand content block containing a quote and various categorized lists.
         * The `Reveal` component likely provides an animation effect on scroll.
         */}
        <Reveal className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5 md:p-8 dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20">
          {/* Inspirational quote */}
          <blockquote className="text-2xl font-black leading-snug tracking-tight text-slate-950 dark:text-white">
            &quot;The best automation starts with understanding the human
            process it&apos;s replacing.&quot;
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
            {profile.name}
          </p>
          {/*
           * Grid layout for displaying background and specialties.
           */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-sky-50/80 p-5 transition hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900">
              <h3 className="font-black text-slate-950 dark:text-white">
                Background
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                <li>BE Computer Science</li>
                <li>PG AI/ML from UT Austin</li>
                <li>UiPath and Automation Anywhere certified</li>
                <li>10+ years consulting and delivery</li>
              </ul>
            </div>
            <div className="rounded-xl bg-sky-50/80 p-5 transition hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900">
              <h3 className="font-black text-slate-950 dark:text-white">
                Specialties
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                <li>Process discovery and assessment</li>
                <li>RPA and intelligent automation</li>
                <li>Business requirement engineering</li>
                <li>Global delivery across IN, UK, and EU teams</li>
              </ul>
            </div>
          </div>
          {/*
           * Grid layout for displaying certifications, awards, and additional projects.
           */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-sky-50/80 p-5 transition hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900">
              <h3 className="font-black text-slate-950 dark:text-white">
                Certifications
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {profile.certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-sky-50/80 p-5 transition hover:-translate-y-1 hover:bg-sky-50 dark:bg-slate-900">
              <h3 className="font-black text-slate-950 dark:text-white">
                Awards & Projects
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {profile.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
                {profile.additionalProjects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
