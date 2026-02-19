"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Workflow Audit",
    description:
      "Map your current processes, identify bottlenecks, and prioritize high‑impact automation opportunities.",
    icon: "⚡",
    gradient: "from-emerald-500 to-teal-500",
    features: ["Process discovery", "ROI analysis", "Roadmap creation"],
  },
  {
    title: "Build & Deploy",
    description:
      "Custom automation solutions using Python, Power Platform, APIs, and cloud services.",
    icon: "🔧",
    gradient: "from-blue-500 to-purple-500",
    features: ["Python scripting", "Power Automate flows", "API integrations"],
  },
  {
    title: "Optimize & Scale",
    description:
      "Monitor performance, refine logic, and scale solutions as your business grows.",
    icon: "📈",
    gradient: "from-orange-500 to-red-500",
    features: ["Performance monitoring", "Error handling", "Scale‑up support"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            What I do
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            End‑to‑end automation for growing teams. From strategy to
            deployment and beyond.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="rounded-3xl bg-slate-900/50 border border-slate-800 p-10 h-full transition-all duration-300 group-hover:bg-slate-800/70 group-hover:border-slate-600 group-hover:-translate-y-2 group-hover:shadow-2xl">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 flex items-center justify-center`}
                >
                  <span className="text-2xl font-bold text-white">
                    {service.icon}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-2xl font-black mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="text-sm text-slate-400 space-y-1 mb-6">
                  {service.features.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="text-sm font-semibold uppercase tracking-wide flex items-center text-emerald-400 hover:text-emerald-300"
                >
                  Learn more
                  <span className="ml-2">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
