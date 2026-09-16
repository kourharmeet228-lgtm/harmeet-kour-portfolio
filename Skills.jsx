import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { skills, tools } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export const Skills = () => (
  <section id="skills" data-testid="skills-section" className="relative py-24 sm:py-32 bg-[#0D0D13]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading chapter="03" accent="Capability Matrix" title="Skills, Weaponised" testid="skills-heading" />
      <div className="grid md:grid-cols-12 gap-5">
        {skills.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            data-testid={`skill-category-${i}`}
            className={`${cat.span} border border-white/8 bg-[#12121A]/60 backdrop-blur-md p-7 sm:p-9 card-glow`}
          >
            <span className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              0{i + 1}
            </span>
            <h3 className="mt-2 font-display font-semibold text-lg sm:text-xl text-white">{cat.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-zinc-300 border border-white/10 px-3 py-1.5 hover:border-[#00F0FF]/50 hover:text-[#00F0FF] transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mt-5 border border-white/8 bg-[#12121A]/40 p-7 sm:p-9"
        data-testid="tools-strip"
      >
        <div className="flex items-center gap-2 mb-5">
          <Wrench size={16} className="text-[#00F0FF]" aria-hidden="true" />
          <h3 className="font-mono-code text-xs uppercase tracking-[0.25em] text-zinc-400">Daily Toolkit</h3>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {tools.map((t) => (
            <span key={t} className="font-mono-code text-sm text-zinc-400 hover:text-white transition-colors duration-200">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
