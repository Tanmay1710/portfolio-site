"use client";

import React, { useState } from "react";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/profile";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${formData.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company: ${formData.company || "Not provided"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("Your email app should open with a prepared message.");
  };

  return (
    <section
      id="contact"
      className="bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.14),transparent_24rem),linear-gradient(180deg,#f8fbff_0%,#eef6ff_100%)] px-6 py-20 text-slate-950 dark:bg-[radial-gradient(circle_at_10%_10%,rgba(96,165,250,0.1),transparent_24rem),linear-gradient(180deg,#0f172a_0%,#08111f_100%)]"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-800 dark:text-sky-300">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl dark:text-white">
            Let&apos;s talk about the next role or opportunity.
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            For recruiter conversations, automation leadership roles, or
            business analysis opportunities, email or LinkedIn are the fastest
            ways to reach Tanmay.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="group block rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-900/5 transition hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-400 dark:focus-visible:outline-sky-300"
            >
              <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-800 dark:text-sky-300">
                Email
              </p>
              <p className="mt-2 font-bold dark:text-white">
                {profile.email} →
              </p>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-900/5 transition hover:-translate-y-1 hover:border-sky-500 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-400 dark:focus-visible:outline-sky-300"
            >
              <p className="text-sm font-black uppercase tracking-[0.14em] text-sky-800 dark:text-sky-300">
                LinkedIn
              </p>
              <p className="mt-2 font-bold dark:text-white">
                Connect with {profile.name} →
              </p>
            </a>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {profile.location} · {profile.availability}
            </p>
          </div>
        </Reveal>

        <Reveal className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-900/5 md:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-sky-200 bg-[#f8fbff] px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-sky-200 bg-[#f8fbff] px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Company or context
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-sky-200 bg-[#f8fbff] px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                placeholder="Company, role, or opportunity"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-y rounded-xl border border-sky-200 bg-[#f8fbff] px-4 py-3 text-slate-950 placeholder:text-slate-500 focus:border-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-600/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                placeholder="Share the role, team, or process problem you would like to discuss."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-950 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sky-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-600 dark:bg-sky-300 dark:text-slate-950 dark:hover:bg-sky-200 dark:focus-visible:outline-sky-300"
            >
              Prepare Email
            </button>

            {status && (
              <p className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-center text-sm font-semibold text-sky-900 dark:border-sky-500/20 dark:bg-sky-400/10 dark:text-sky-100">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
