import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Sales Pipeline Automation",
      subtitle: "CRM + Reporting Dashboard",
      outcome: "Reduced manual reporting from 20h/week → 2h/week (90% time savings)",
      tech: ["Power Automate", "Power BI", "Excel", "SharePoint"],
      image: "📊",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Invoice Processing Bot",
      subtitle: "Document → Database Pipeline",
      outcome: "Automated 2,500+ invoices/month, 98% accuracy, saved ₹8L/year",
      tech: ["Python", "Google Vision API", "PostgreSQL", "AWS Lambda"],
      image: "🤖",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Employee Onboarding Flow",
      subtitle: "HR Process Automation",
      outcome: "Cut onboarding time from 7 days → 2 days, zero errors",
      tech: ["Microsoft Power Platform", "Forms", "Teams", "Active Directory"],
      image: "👥",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section 
      id="projects"
      className="py-32 px-6 bg-gradient-to-t from-slate-950 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects & Case Studies
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real results from recent automation projects. Each includes the business challenge, technical solution, and measurable outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group relative overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-4 hover:bg-slate-800/70"
            >
              {/* Image/Emoji Badge */}
              <div className={`absolute top-6 right-6 w-20 h-20 ${project.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 z-10`}>
                <span className="text-3xl">{project.image}</span>
              </div>

              {/* Content */}
              <div className="p-10 pt-24 relative z-0 h-full">
                <p className="text-sm uppercase tracking-wider text-slate-400 font-medium mb-2">
                  {project.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text">
                  {project.title}
                </h3>
                
                {/* Outcome */}
                <div className="mb-8 p-4 bg-slate-800/50 rounded-2xl border border-slate-700">
                  <p className="text-emerald-400 font-semibold text-lg mb-1">
                    Outcome:
                  </p>
                  <p className="text-slate-200">{project.outcome}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <p className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a 
                  href="#contact"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 font-semibold text-lg uppercase tracking-wide group-hover:translate-x-2 transition-all duration-300"
                >
                  View Case Study
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
