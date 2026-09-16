import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { projects } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export const Projects = () => (
  <section id="projects" data-testid="projects-section" className="relative py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading chapter="04" accent="Signature Initiatives" title="Work That Moved Numbers" testid="projects-heading" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.1 }}
            data-testid={`project-card-${i}`}
            className={`group relative border border-white/8 bg-[#12121A]/60 backdrop-blur-md p-7 sm:p-8 card-glow flex flex-col ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-[#00F0FF]">
                {p.category}
              </span>
              <span className="font-display font-black text-stroke text-4xl select-none" aria-hidden="true">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-5 font-display font-bold text-xl sm:text-2xl text-white leading-snug group-hover:text-[#00F0FF] transition-colors duration-300">
              {p.title}
            </h3>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">{p.description}</p>
            <div className="mt-6 flex items-center gap-2 border-t border-white/8 pt-5">
              <Zap size={13} className="text-[#8B5CF6] shrink-0" aria-hidden="true" />
              <span className="font-mono-code text-xs text-zinc-300 uppercase tracking-[0.1em]">{p.impact}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono-code text-[10px] uppercase tracking-[0.12em] text-zinc-500 border border-white/10 px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
