import { motion } from 'motion/react';
import { memo } from 'react';

interface Project {
  client: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    client: "DXCi",
    role: "ServiceNow Developer",
    period: "06/2023 — Present",
    location: "United States",
    description: "Enterprise platform maintenance, CMDB governance, third-party discovery integrations, and continuous instance optimization.",
    highlights: ["CMDB & Event Management", "REST API (Inbound/Outbound)", "Meraki / Dynatrace / Intune", "Quality Cloud", "Upgrade Support", "Mid-Server Management"]
  },
  {
    client: "Fast Retailing",
    role: "ServiceNow Developer",
    period: "07/2021 — 05/2023",
    location: "Japan",
    description: "End-to-end ServiceNow development covering catalog items, scripting layers, workflow automation, mobile experiences and multi-language support.",
    highlights: ["Catalog & Record Producers", "UI Policies / Client Scripts / ACL", "Workflow Optimization", "Now Mobile / Mobile Agent", "Dynamic Translation", "ITAM Automation Testing"]
  },
  {
    client: "GrainCorp",
    role: "ServiceNow Developer",
    period: "05/2021 — 07/2021",
    location: "Australia & New Zealand",
    description: "Focused delivery of catalog enhancements, portal pages, notification templates, and technical support within ITSM landscape.",
    highlights: ["Flow Designer", "Catalog Building", "Portal Development", "Notification Templates", "Widget Customization", "Training Docs"]
  },
  {
    client: "Woodside",
    role: "ServiceNow Developer",
    period: "01/2021 — 04/2021",
    location: "Australia & New Zealand",
    description: "Built ITSM catalog solutions and provided technical support including widget customization and test case creation.",
    highlights: ["Flow Designer", "Catalog Building", "Portal Development", "Email Scripts", "Test Cases", "Training Docs"]
  }
];

const ProjectRow = memo(function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 cursor-pointer overflow-hidden relative"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
        {/* Left column */}
        <div className="md:w-1/2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-400 mb-3 block">
            {project.period} / {project.location}
          </span>
          <h4 className="text-4xl md:text-6xl font-display font-bold uppercase dark:text-white group-hover:italic transition-all duration-300 leading-[0.95]">
            {project.client}
          </h4>
          <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            {project.role}
          </span>
        </div>

        {/* Right column */}
        <div className="md:w-1/2 flex flex-col gap-6">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-md">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.highlights.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full border border-zinc-300 dark:border-zinc-700 text-[11px] font-medium uppercase tracking-wide text-zinc-600 dark:text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 dark:group-hover:border-white dark:group-hover:text-white transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover background effect */}
      <div className="absolute inset-x-0 bottom-0 top-full bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 ease-in-out group-hover:top-0 -z-0" />
    </motion.div>
  );
});

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-48 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-display uppercase tracking-[0.4em] font-bold text-zinc-400 mb-4">
              Experience
            </h2>
            <h3 className="text-5xl md:text-8xl font-display font-bold uppercase dark:text-white leading-none">
              Client<br />Projects
            </h3>
          </div>
          <p className="max-w-sm text-zinc-500 text-sm leading-relaxed">
            A curated timeline of enterprise ServiceNow implementations, integrations, and platform enhancements delivered across APAC, Japan, and the United States.
          </p>
        </header>

        <div className="border-t border-zinc-200 dark:border-zinc-800">
          {projects.map((project, i) => (
            <ProjectRow key={project.client} project={project} index={i} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-6 rounded-full border border-zinc-900 dark:border-white font-display uppercase tracking-widest text-xs font-bold dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
