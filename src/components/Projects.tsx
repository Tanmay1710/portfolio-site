import React from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/profile";

export default function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#f8fbff] px-6 py-20 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-800 dark:text-sky-300">
              Projects
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
              Measurable automation outcomes.
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
              Representative case studies showing the link between business
              process analysis, technology choices, and measurable delivery.
            </p>
          </div>
          <p className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm shadow-sky-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            Swipe or shift-scroll
          </p>
        </Reveal>

        <div className="relative -mx-6 px-6">
          <div className="pointer-events-none absolute bottom-5 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#f8fbff] to-transparent dark:from-slate-950" />
          <div
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:focus-visible:outline-sky-300"
            tabIndex={0}
            aria-label="Scrollable project case studies"
          >
            {profile.projects.map((project, index) => (
              <Reveal
                as="article"
                delay={index * 0.08}
                key={project.title}
                className="group relative flex min-h-[28rem] w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-900/10 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-2xl md:w-[27rem] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accent}`}
                />
                <div className="absolute right-5 top-5 rounded-full border border-sky-100 bg-white/90 px-3 py-1 text-xs font-black text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mt-8 text-sm font-black uppercase tracking-[0.14em] text-sky-800 dark:text-sky-300">
                  {project.subtitle}
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                  {project.title}
                </h3>

                <div className="my-6 rounded-xl border border-sky-100 bg-sky-50 p-5 dark:border-sky-500/20 dark:bg-sky-400/10">
                  <p className="text-sm font-black text-sky-900 dark:text-sky-200">
                    Outcome
                  </p>
                  <p className="mt-2 leading-7 text-slate-800 dark:text-slate-200">
                    {project.outcome}
                  </p>
                  <p className="mt-4 text-2xl font-black text-slate-950 dark:text-white">
                    {project.metrics}
                  </p>
                </div>

                <div className="mt-auto">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                    Tech stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-bold text-slate-700 transition group-hover:border-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
