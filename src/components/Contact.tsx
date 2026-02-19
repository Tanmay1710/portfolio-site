"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    // For now: email copy (replace with Formspree/EmailJS later)
    const subject = `New inquiry from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    
    window.location.href = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setStatus("Message sent! I'll reply within 24 hours.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section 
      id="contact"
      className="py-32 px-6 bg-gradient-to-b from-slate-950 via-black to-slate-950 border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Let's work together
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to automate your processes? Drop a message or book a 20‑minute discovery call.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Quick Actions */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="https://calendly.com/your-link/20min" // Replace with your Calendly
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-3xl hover:from-emerald-500/20 hover:border-emerald-400 transition-all duration-300 hover:shadow-emerald-500/25 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Book Discovery Call</p>
                    <p className="text-slate-400 text-sm">20 minutes, no commitment</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/tanmay-dixit-1710a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full flex items-center p-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-3xl hover:from-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Connect on LinkedIn</p>
                    <p className="text-slate-400 text-sm">Direct message works best</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-xl font-black mb-4 text-white">Direct</h4>
              <p className="text-slate-400 mb-4">
                hello@tanmaydixit.com
              </p>
              <p className="text-sm text-slate-500">
                Pune, India • Available globally
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tanmay Dixit"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Globant, Deloitte, etc."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  What can I help with?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-lg placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your process challenges, team size, current tools, and what success looks like..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 hover:from-rose-600 hover:via-pink-600 hover:to-orange-600 text-xl font-black py-6 px-8 rounded-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className={`text-center text-lg font-semibold p-4 rounded-2xl ${
                  status.includes("sent") 
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                    : "bg-slate-800/50 text-slate-300 border border-slate-700"
                }`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
