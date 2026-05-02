import { motion } from 'motion/react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-40 w-full p-8 md:p-12 lg:p-16 pointer-events-none">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm font-display uppercase tracking-[0.2em] font-bold dark:text-white"
        >
          Portfolio / 2026
        </motion.div>
        
        <ul className="flex gap-8">
          {navItems.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <a 
                href={item.href}
                className="group relative text-xs uppercase tracking-widest font-medium dark:text-zinc-400 dark:hover:text-white transition-colors"
                id={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
