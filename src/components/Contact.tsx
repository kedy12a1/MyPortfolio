import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-48 bg-zinc-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-display uppercase tracking-[0.4em] font-bold text-zinc-500 mb-8">Contact</h2>
            <h3 className="text-6xl md:text-[8vw] font-display font-bold uppercase leading-[0.9] tracking-tighter">
              Ready <br />
              <span className="text-zinc-600 italic font-serif normal-case">to</span> <br />
              Build.
            </h3>
          </div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative group cursor-pointer">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-zinc-700 border-dashed"
              />
              <div className="h-48 w-48 md:h-64 md:w-64 rounded-full bg-white text-zinc-900 flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="font-display font-bold uppercase tracking-widest text-xs mb-2">Get in touch</span>
                <Mail className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">SMU MITB Applicant Portfolio</p>
            <p className="text-zinc-600 text-[10px]">© 2026 Developed with curiosity.</p>
          </div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-[0.02] pointer-events-none">
        <span className="text-[40vw] font-display font-black whitespace-nowrap">CONTACT</span>
      </div>
    </section>
  );
}
