import { motion } from 'motion/react';
import { memo } from 'react';

// When you have images, uncomment these lines and place files in src/assets/images/
// import tdtuImg from '../assets/images/tdtu-logo.png';
// import dxcImg from '../assets/images/dxc-logo.png';
// import fwdImg from '../assets/images/fwd-logo.png';

interface Chapter {
  num: string;
  title: string;
  subtitle: string;
  period: string;
  content: string;
  layout: 'left' | 'right';
  brandColor: string;
  logoText: string;
  imageSrc?: string;
}

const chapters: Chapter[] = [
  {
    num: "01",
    title: "Ton Duc Thang University",
    subtitle: "The Foundation",
    period: "Student Years",
    content: "My journey began at Ton Duc Thang University, where I pursued my Bachelor's degree in Information Systems. Those university years were more than just an academic chapter; they were a meaningful period of growth, discipline, and self-discovery. During that time, I was introduced to the world of technology, systems thinking, and problem-solving. Looking back, those student years remain one of the most valuable stages of my life, where I built the foundation for both my technical path and professional character.",
    layout: "left",
    brandColor: "#003366",
    logoText: "TDTU"
  },
  {
    num: "02",
    title: "DXC Technology Vietnam",
    subtitle: "The Beginning of My ServiceNow Career",
    period: "First Professional Chapter",
    content: "After graduation, I joined DXC Technology Vietnam and began working with the ServiceNow platform. At that time, ServiceNow was still a relatively niche market in Vietnam. DXC became the place where my professional journey truly started. I began my career as a ServiceNow Developer, gaining hands-on experience in ITSM, CMDB, Integration, and various custom applications. Through real projects and enterprise-level processes, I learned how large organizations operate and how ServiceNow can be used to optimize service delivery.",
    layout: "right",
    brandColor: "#111111",
    logoText: "DXC"
  },
  {
    num: "03",
    title: "FWD Vietnam Technology Company",
    subtitle: "Five Years of Growth",
    period: "Current Chapter",
    content: "After nearly five years at DXC, I had the opportunity to work on projects with prestigious companies such as Fast Retailing, Woodside, and GrainCorp. Each project gave me new lessons and valuable experience. Those years shaped me into more than just a developer. With this foundation, I moved forward to FWD Vietnam Technology Company as a Senior Officer, ServiceNow Integration. At this stage, I see myself as a more mature professional, ready to take greater ownership, contribute more strategically, and continue expanding my ServiceNow expertise.",
    layout: "left",
    brandColor: "#E87722",
    logoText: "FWD"
  }
];

const ChapterCard = memo(function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-12 items-start ${
        chapter.layout === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="flex-1 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden group"
          style={{ backgroundColor: chapter.brandColor }}
        >
          {/* If image is provided, show it; otherwise show brand placeholder */}
          {chapter.imageSrc ? (
            <img
              src={chapter.imageSrc}
              alt={chapter.title}
              className="absolute inset-0 w-full h-full object-contain p-8 md:p-12 bg-white dark:bg-zinc-950"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <span
                className="text-[120px] md:text-[180px] font-display font-black text-white/20 select-none transition-transform group-hover:scale-110 duration-700 leading-none"
                aria-hidden="true"
              >
                {chapter.logoText}
              </span>
              <span className="absolute bottom-8 left-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
                {chapter.period}
              </span>
            </div>
          )}
        </motion.div>
      </div>

      <div className="flex-1 pt-4 md:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-block px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Chapter {chapter.num}
            </span>
            <span className="font-serif italic text-lg text-zinc-400">
              {chapter.subtitle}
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8 leading-tight dark:text-white">
            {chapter.title}
          </h3>
          <p className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-lg">
            {chapter.content}
          </p>
        </motion.div>
      </div>
    </div>
  );
});

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
            <ChapterCard key={chapter.num} chapter={chapter} />
          ))}
        </div>
      </div>
    </section>
  );
}
