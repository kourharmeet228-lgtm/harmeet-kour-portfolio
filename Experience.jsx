import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

const Role = ({ job, index }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      data-testid={`experience-card-${index}`}
      className="relative pl-10 sm:pl-16 pb-14 last:pb-0"
    >
      <span className="absolute left-0 top-1.5 sm:left-4 font-display font-black text-stroke text-5xl sm:text-6xl select-none" aria-hidden="true">
        0{index + 1}
      </span>
      <span className={`absolute left-[3px] sm:left-[19px] top-3 w-2.5 h-2.5 rounded-full ${job.current ? "bg-[#00F0FF] animate-pulse-dot" : "bg-zinc-600"}`} aria-hidden="true" />
      <span className="absolute left-[7px] sm:left-[23px] top-8 bottom-0 w-px bg-white/8" aria-hidden="true" />

      <div className="border border-white/8 bg-[#12121A]/60 backdrop-blur-md card-glow">
        <button
          onClick={() => setOpen(!open)}
          data-testid={`experience-toggle-${index}`}
          aria-expanded={open}
          className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-6"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">{job.role}</h3>
              {job.current && (
                <span className="font-mono-code text-[10px] uppercase tracking-[0.2em] text-[#00F0FF] border border-[#00F0FF]/40 px-2.5 py-1">
                  Current
                </span>
              )}
            </div>
            <p className="mt-2 text-sm text-zinc-400">{job.company}</p>
            <p className="mt-1 font-mono-code text-xs text-zinc-500 tracking-[0.1em]">{job.period}</p>
          </div>
          <ChevronDown
            size={20}
            className={`shrink-0 mt-2 text-zinc-500 transition-transform duration-300 ${open ? "rotate-180 text-[#00F0FF]" : ""}`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-8 pt-0">
                <ul className="space-y-3 border-t border-white/8 pt-6">
                  {job.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-300 leading-relaxed">
                      <span className="text-[#00F0FF] mt-0.5 shrink-0" aria-hidden="true">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-zinc-400 border border-white/10 px-3 py-1.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

export const Experience = () => (
  <section id="experience" data-testid="experience-section" className="relative py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading chapter="02" accent="Career Timeline" title="Five Years, Three Functions" testid="experience-heading" />
      <div>
        {experience.map((job, i) => (
          <Role key={job.role} job={job} index={i} />
        ))}
      </div>
    </div>
  </section>
);
