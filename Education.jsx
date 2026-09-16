import { motion } from "framer-motion";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { achievements, certifications, education } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export const Education = () => (
  <section id="credentials" data-testid="education-section" className="relative py-24 sm:py-32 bg-[#0D0D13]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading chapter="05" accent="Education & Recognition" title="Credentials That Count" testid="education-heading" />
      <div className="grid lg:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 border border-white/8 bg-[#12121A]/60 backdrop-blur-md p-7 sm:p-9 card-glow"
        >
          <div className="flex items-center gap-2 mb-7">
            <GraduationCap size={18} className="text-[#00F0FF]" aria-hidden="true" />
            <h3 className="font-display font-semibold text-lg text-white">Education</h3>
          </div>
          <div className="space-y-7">
            {education.map((e, i) => (
              <div key={e.degree} data-testid={`education-card-${i}`} className="border-l-2 border-[#00F0FF]/40 pl-5">
                <h4 className="font-display font-semibold text-white leading-snug">{e.degree}</h4>
                <p className="mt-1.5 text-sm text-zinc-400">{e.institution}</p>
                <p className="mt-1 font-mono-code text-xs text-zinc-500">{e.period}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 pt-7 border-t border-white/8">
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck size={16} className="text-[#8B5CF6]" aria-hidden="true" />
              <h4 className="font-mono-code text-xs uppercase tracking-[0.25em] text-zinc-400">Certifications</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="text-xs text-zinc-300 border border-white/10 px-3 py-1.5">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="lg:col-span-7 border border-white/8 bg-[#12121A]/60 backdrop-blur-md p-7 sm:p-9 card-glow"
          data-testid="achievements-panel"
        >
          <div className="flex items-center gap-2 mb-7">
            <Award size={18} className="text-[#00F0FF]" aria-hidden="true" />
            <h3 className="font-display font-semibold text-lg text-white">Selected Achievements & Recognition</h3>
          </div>
          <ul className="space-y-5">
            {achievements.map((a, i) => (
              <li key={i} data-testid={`achievement-item-${i}`} className="flex gap-4 group">
                <span className="font-mono-code text-xs text-[#00F0FF]/70 pt-1 shrink-0 w-7">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-zinc-300 leading-relaxed border-b border-white/5 pb-5 group-last:border-0 group-last:pb-0 flex-1 group-hover:text-white transition-colors duration-200">
                  {a}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);
