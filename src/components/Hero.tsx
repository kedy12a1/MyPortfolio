import { motion } from 'motion/react';
import { ArrowDown, Globe } from 'lucide-react';
import heroImage from '../assets/images/Gemini_Generated_Image_zd8eh7zd8eh7zd8e.png';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Business meets Technology" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      </div>

      {/* Center Location Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-4 md:left-8 z-20 -translate-y-1/2"
      >
        <div className="flex items-center gap-3 md:gap-4 bg-black/90 backdrop-blur-md text-white pl-5 pr-2.5 py-2.5 md:pl-7 md:pr-3 md:py-3 rounded-full border border-white/10 shadow-2xl shadow-black/50">
          <span className="text-xs md:text-sm font-medium leading-snug tracking-wide">
            Located<br />
            in<br />
            Vietnam
          </span>
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-500 shrink-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 lg:p-24">
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-xs text-sm leading-relaxed text-zinc-300 font-medium"
          >
            A personal journey of growth, combining marketing intuition with technical precision.
            Future SMU Master of IT in Business candidate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-4 cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white group-hover:bg-white transition-colors">
              <ArrowDown className="h-6 w-6 text-white group-hover:text-black transition-colors" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
      
      
    </section>
  );
}
