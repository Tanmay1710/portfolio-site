import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Tanmay
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            10+ years turning messy processes into scalable automation systems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              <Image
                src="/tanmay.jpg"          // <-- file in /public
                alt="Tanmay Dixit"
                fill
                className="rounded-3xl object-cover border-4 border-slate-700 shadow-2xl"
                sizes="(min-width: 1024px) 18rem, 14rem"
              />
            </div>
          </div>

          {/* Right: Story & Background */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black mb-6 text-white">
                Process transformation across 3 continents
              </h3>
              <p className="text-lg leading-relaxed text-slate-300 mb-8">
                I&apos;ve spent 10+ years as a Business Analyst and automation
                specialist working with{" "}
                <span className="font-semibold text-emerald-400">
                  HSBC, EY, Deloitte UK
                </span>
                , and now{" "}
                <span className="font-semibold text-blue-400">Globant</span>.
                From Pune to London, I&apos;ve helped enterprises re-engineer
                processes using RPA, intelligent automation, and emerging AI/ML
                capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                <h4 className="text-xl font-black text-white">Background</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• BE Computer Science</li>
                  <li>• PG AI/ML (UT Austin)</li>
                  <li>• UiPath, Automation Anywhere certified</li>
                  <li>• 10+ years consulting & delivery</li>
                </ul>
              </div>

              <div className="space-y-4 p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
                <h4 className="text-xl font-black text-white">Specialties</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Process discovery & assessment</li>
                  <li>• RPA + Intelligent Automation</li>
                  <li>• Business requirement engineering</li>
                  <li>• Global delivery (IN/UK/EU)</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <blockquote className="text-2xl font-black italic text-slate-200 mb-6">
                &quot;The best automation starts with understanding the human
                process it&apos;s replacing.&quot;
              </blockquote>
              <p className="text-slate-400 text-right">— Tanmay Dixit</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="https://www.linkedin.com/in/tanmay-dixit-1710a"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-lg font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex-1"
              >
                <span>LinkedIn</span>
                <svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-10a2 2 0 00-2-2h-4M14.5 4h0v0h0m0 0h0v0h0m0 0V4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v.5m4.5 0v.5"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-600 hover:border-slate-400 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-slate-800 flex-1 text-center"
              >
                Work with me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
