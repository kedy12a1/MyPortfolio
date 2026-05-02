import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "MarketSync",
    category: "AI Automation",
    year: "2025",
    description: "An automated data pipeline bridging marketing metrics with predictive sales modeling."
  },
  {
    title: "EduNodes",
    category: "Learning Platform",
    year: "2024",
    description: "A node-based visualization tool for mapping complex educational curricula."
  },
  {
    title: "FlowState",
    category: "Product Design",
    year: "2024",
    description: "A minimalist dashboard for high-intensity focused work environments."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-48 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-sm font-display uppercase tracking-[0.4em] font-bold text-zinc-400 mb-4">Works</h2>
            <h3 className="text-5xl md:text-8xl font-display font-bold uppercase dark:text-white leading-none">Selected<br />Projects</h3>
          </div>
          <p className="max-w-xs text-zinc-500 text-sm">A collection of experiments at the intersection of business intelligence and technical execution.</p>
        </header>

        <div className="border-t border-zinc-200 dark:border-zinc-800">
          {projects.map((project, i) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group py-12 md:py-16 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 cursor-pointer overflow-hidden relative"
            >
              <div className="z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-2 block">{project.year} / {project.category}</span>
                <h4 className="text-4xl md:text-7xl font-display font-bold uppercase dark:text-white group-hover:italic transition-all duration-300">
                  {project.title}
                </h4>
              </div>
              
              <div className="z-10 flex items-center gap-12 max-w-sm">
                <p className="hidden md:block text-zinc-500 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <div className="h-12 w-12 rounded-full border border-zinc-900 dark:border-white flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              {/* Hover background effect */}
              <div className="absolute inset-x-0 bottom-0 top-full bg-zinc-100 dark:bg-zinc-800 transition-all duration-500 ease-in-out group-hover:top-0 -z-0" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 rounded-full border border-zinc-900 dark:border-white font-display uppercase tracking-widest text-xs font-bold dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            All Experiments
          </motion.button>
        </div>
      </div>
    </section>
  );
}
