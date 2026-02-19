import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Tanmay Dixit. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>Pune, India • Available globally</span>
          <span className="hidden sm:inline">•</span>
          <a
            href="mailto:tanmay17.dixit@gmail.com"
            className="hover:text-slate-200"
          >
            tanmay17.dixit@gmail.com
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://www.linkedin.com/in/tanmay-dixit-1710a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
