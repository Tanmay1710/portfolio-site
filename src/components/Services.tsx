import React from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/profile";

export default function Services() {
  return (
    <section
      id="experience"
      className="border-y border-sky-100 bg-[#f3f7ff] px-6 py-20 dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="mb-12 max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-800 dark:text-sky-300">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Enterprise delivery with a process-first lens.
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            Tanmay brings a business analyst&apos;s clarity to automation
            delivery: discover the process, define the right requirement, and
            ship systems that teams can actually adopt.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {profile.experience.map((item, index) => (
            <Reveal
              as="article"
              delay={index * 0.08}
              key={`${item.company}-${item.role}`}
              className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20 dark:hover:border-sky-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">
                    {item.company}
                  </h3>
                  <p className="mt-2 text-sm font-black text-sky-800 dark:text-sky-300">
                    {item.role}
                  </p>
                </div>
                <p className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  {item.period}
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                {item.location}
              </p>
              <p className="mt-5 leading-7 text-slate-700 dark:text-slate-300">
                {item.summary}
              </p>
            </Reveal>
          ))}
        </div>

        <div
          id="skills"
          className="mt-16 grid scroll-mt-20 gap-5 md:grid-cols-4"
        >
          {profile.skillGroups.map((group, index) => (
            <Reveal
              as="section"
              delay={index * 0.06}
              key={group.title}
              className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5 transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:shadow-black/20 dark:hover:border-sky-500"
            >
              <h3 className="text-lg font-black text-slate-950 dark:text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
