"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_80%_15%,rgba(59,130,246,0.18),transparent_28rem),linear-gradient(180deg,#f6f8ff_0%,#eef6ff_100%)] px-6 py-20 sm:py-24 dark:bg-[radial-gradient(circle_at_80%_15%,rgba(96,165,250,0.12),transparent_28rem),linear-gradient(180deg,#08111f_0%,#0f172a_100%)]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute right-[-10rem] top-20 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-400/10"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-800 dark:text-sky-300">
              {profile.title}
            </p>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl dark:text-white">
              {profile.headline}
            </h1>
            <p className="max-w-3xl text-lg font-medium leading-8 text-slate-700 md:text-xl dark:text-slate-300">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-black text-white shadow-xl shadow-slate-900/15 transition-colors hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200 dark:focus-visible:outline-sky-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View LinkedIn →
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white/85 px-6 py-3 text-sm font-black text-slate-900 shadow-lg shadow-sky-900/5 backdrop-blur transition-colors hover:border-sky-500 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:hover:border-sky-300 dark:focus-visible:outline-sky-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Projects
            </motion.a>
          </div>

          <dl className="grid gap-3 sm:grid-cols-2">
            {profile.proofPoints.map((point, index) => (
              <motion.div
                key={point}
                className="rounded-xl border border-sky-100 bg-white/90 p-4 shadow-sm shadow-sky-900/5 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-sky-500"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
              >
                <dt className="sr-only">Profile highlight</dt>
                <dd className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
                  {point}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-2xl shadow-sky-900/10 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40"
            whileHover={{ rotate: -1.5, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          >
            <Image
              src="/tanmay.jpg"
              alt={profile.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 24rem, 90vw"
            />
          </motion.div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-sky-100 bg-white/92 p-4 shadow-xl shadow-sky-900/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90">
            <p className="text-sm font-bold text-slate-950 dark:text-white">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {profile.location} · {profile.availability}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
