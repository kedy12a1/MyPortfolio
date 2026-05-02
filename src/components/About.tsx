import { motion } from 'motion/react';

const chapters = [
  {
    num: "01",
    title: "Marketing & Education",
    subtitle: "Understanding Human Systems",
    content: "My background in marketing and communication isn't just about selling—it's about understanding why people do what they do. I spent years dissecting brand systems and educational frameworks, learning how to connect complex ideas to human needs. This tenure shaped my 'bridge' thinking: how to translate business goals into meaningful experiences.",
    layout: "left"
  },
  {
    num: "02",
    title: "The Coding Odyssey",
    subtitle: "From Logic to Build",
    content: "What started as curiosity became a obsession with building. I dove into frontend development, exploring how code breathes life into design. Problem-solving became my primary drive—automating workflows, building small tools, and experimenting with AI to augment creativity. I don't just use tech; I build with it to solve practical, real-world puzzles.",
    layout: "right"
  },
  {
    num: "03",
    title: "The Future Vision",
    subtitle: "SMU / MITB",
    content: "The next chapter leads to SMU's Master of IT in Business. My goal is to synthesize my marketing intuition with advanced technological depth. I'm building a future where data-driven decisions and robust product thinking create digital solutions that are as intuitive as they are powerful. I am the bridge between the boardroom and the server room.",
    layout: "left"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <header className="mb-32">
          <h2 className="text-sm font-display uppercase tracking-[0.4em] font-bold text-zinc-400 mb-4">The Story</h2>
          <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800" />
        </header>

        <div className="space-y-48 md:space-y-64">
          {chapters.map((chapter) => (
            <div 
              key={chapter.num}
              className={`flex flex-col md:flex-row gap-12 items-start ${
                chapter.layout === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative aspect-square md:aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden group"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[200px] font-display font-black text-zinc-200 dark:text-zinc-800 transition-transform group-hover:scale-110 duration-700">
                      {chapter.num}
                    </span>
                  </div>
                </motion.div>
              </div>

              <div className="flex-1 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="font-serif italic text-2xl text-zinc-400 mb-4 block">{chapter.subtitle}</span>
                  <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 leading-tight dark:text-white">
                    {chapter.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
                    {chapter.content}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
