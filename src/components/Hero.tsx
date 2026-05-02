import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
      {/* Video Placeholder Container */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-zinc-200 dark:bg-zinc-900 animate-pulse flex items-center justify-center">
          <p className="text-zinc-400 font-display uppercase tracking-widest text-sm">Background Video Placeholder</p>
        </div>
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 lg:p-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter text-zinc-900 dark:text-white uppercase">
            Business <br />
            <span className="italic font-serif normal-case ml-[10%] opacity-80">meets</span> <br />
            Technology
          </h1>
        </motion.div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium"
          >
            A personal journey of growth, combining marketing intuition with technical precision. 
            Future SMU Master of IT in Business candidate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-900 dark:border-white">
              <ArrowDown className="h-6 w-6 text-zinc-900 dark:text-white" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold dark:text-white">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
      
      {/* Editorial Decorative Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
        <span className="text-[20vw] font-display font-black text-white/5 dark:text-white/5 select-none rotate-90 leading-none">
          STORY
        </span>
      </div>
    </section>
  );
}
