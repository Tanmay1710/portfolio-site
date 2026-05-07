/**
 * Defines the structure for a navigation link or external profile link.
 */
export type ProfileLink = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Defines the structure for an experience item in the professional history.
 */
export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
};

/**
 * Defines the structure for a group of related skills.
 */
export type SkillGroup = {
  title: string;
  skills: string[];
};

/**
 * Defines the structure for a project or case study entry.
 */
export type ProjectCaseStudy = {
  title: string;
  subtitle: string;
  outcome: string;
  tech: string[];
  accent: string;
  metrics: string;
};

/**
 * The main profile data object containing all personal and professional information.
 * This object is the single source of truth for content displayed on the portfolio site.
 */
export const profile = {
  /**
   * The full name of the individual.
   */
  name: "Tanmay Dixit",
  /**
   * Initials for display in compact spaces.
   */
  initials: "TD",
  /**
   * Primary professional title or role.
   */
  title: "Business Analyst, Automation Engineer & AI/ML Specialist",
  /**
   * Current location.
   */
  location: "Pune District, Maharashtra, India",
  /**
   * Availability status for work opportunities.
   */
  availability: "Available globally",
  /**
   * Primary contact email address.
   */
  email: "tanmay17.dixit@gmail.com",
  /**
   * LinkedIn profile URL.
   */
  linkedin: "https://www.linkedin.com/in/tanmay-dixit-1710a",
  /**
   * A concise headline summarizing professional value proposition.
   */
  headline:
    "I help organizations fix broken, inefficient, and fragmented business processes.",
  /**
   * A brief professional summary.
   */
  summary:
    "Business analyst and automation specialist with 10+ years across enterprise delivery, RPA, process transformation, Power Platform, Python, and AI/ML. Currently associated with Globant, with prior experience across HSBC, EY, and Deloitte UK.",
  /**
   * Key achievements or statistics to highlight.
   */
  proofPoints: [
    "2K LinkedIn followers and 500+ connections",
    "10+ years consulting and delivery experience",
    "Enterprise background across India, UK, and EU teams",
    "UiPath and Automation Anywhere certified",
  ],
  /**
   * Navigation links for the portfolio site.
   * Uses `satisfies ProfileLink[]` to ensure type safety while allowing inference.
   */
  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] satisfies ProfileLink[],
  /**
   * Professional experience history.
   * Uses `satisfies ExperienceItem[]` for type safety.
   */
  experience: [
    {
      company: "Globant",
      role: "Automation and AI/ML Specialist",
      location: "Pune / Global delivery",
      period: "Current",
      summary:
        "Designs automation-led process improvements and supports enterprise delivery across distributed teams.",
    },
    {
      company: "Deloitte UK",
      role: "Business Analyst and Automation Consultant",
      location: "United Kingdom",
      period: "Consulting delivery",
      summary:
        "Translated business requirements into automation roadmaps, stakeholder workflows, and scalable delivery plans.",
    },
    {
      company: "HSBC and EY",
      role: "Business Analysis and Process Transformation",
      location: "India / Global teams",
      period: "Earlier experience",
      summary:
        "Built a foundation in enterprise process analysis, control-heavy environments, and cross-functional implementation.",
    },
  ] satisfies ExperienceItem[],
  /**
   * Categorized groups of skills.
   * Uses `satisfies SkillGroup[]` for type safety.
   */
  skillGroups: [
    {
      title: "Automation",
      skills: ["RPA", "UiPath", "Automation Anywhere", "Power Automate"],
    },
    {
      title: "Analysis",
      skills: [
        "Process discovery",
        "Requirement engineering",
        "Stakeholder management",
        "ROI analysis",
      ],
    },
    {
      title: "Technology",
      skills: ["Python", "Power BI", "APIs", "Cloud services", "AI/ML"],
    },
    {
      title: "Languages",
      skills: ["English", "Marathi", "Hindi", "Spanish"],
    },
  ] satisfies SkillGroup[],
  /**
   * List of professional certifications.
   */
  certifications: [
    "Automation Anywhere advanced RPA Professional V11",
    "Automation Anywhere Certified RPA Trainer",
    "UiPath RPA Developer Foundation Course",
    "Automation Essentials by WorkFusion",
  ],
  /**
   * List of awards and recognitions.
   */
  awards: [
    "I am Exceptional - Digitally transforming, Ernst & Young LLP",
    "Spot Award, Deloitte Touche Tohmatsu India LLP",
  ],
  /**
   * List of additional personal or smaller projects.
   */
  additionalProjects: [
    "Pre PG Android app for medical entrance exam preparation with 10K+ downloads",
    "Astute Transfer Android app for Wi-Fi data transfer",
  ],
  projects: [
    {
      title: "Sales Pipeline Automation",
      subtitle: "CRM + Reporting Dashboard",
      outcome: "Reduced manual reporting from 20h/week to 2h/week, a 90% time saving.",
      tech: ["Power Automate", "Power BI", "Excel", "SharePoint"],
      accent: "from-sky-500 to-blue-600",
      metrics: "90% time saved",
    },
    {
      title: "Invoice Processing Bot",
      subtitle: "Document to Database Pipeline",
      outcome: "Automated 2,500+ invoices/month with 98% accuracy and saved Rs. 8L/year.",
      tech: ["Python", "Google Vision API", "PostgreSQL", "AWS Lambda"],
      accent: "from-violet-500 to-fuchsia-500",
      metrics: "2,500+ invoices/month",
    },
    {
      title: "Employee Onboarding Flow",
      subtitle: "HR Process Automation",
      outcome: "Cut onboarding time from 7 days to 2 days with zero process errors.",
      tech: ["Microsoft Power Platform", "Forms", "Teams", "Active Directory"],
      accent: "from-rose-500 to-pink-500",
      metrics: "7 days to 2 days",
    },
  ] satisfies ProjectCaseStudy[],
};
