import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export const Summary = () => (
  <section id="summary" data-testid="summary-section" className="relative py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading chapter="01" accent="Executive Profile" title="The Manifesto" testid="summary-heading" />
      <div className="grid lg:grid-cols-12 gap-12">
        <motion.blockquote
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
          data-testid="manifesto-content"
        >
          <Quote className="text-[#00F0FF] mb-6" size={28} aria-hidden="true" />
          <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug text-zinc-200 font-medium">
            {profile.summary}
          </p>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="lg:col-span-4 space-y-6"
        >
          {[
            ["Brand-side", "Integrated campaigns, OOH and retail branding executed at circle scale."],
            ["Data-led", "KPI dashboards and MIS that helped push the Circle past 50% revenue market share."],
            ["Automation-first", "AI-enabled workflows with Power Automate, Apps Script and Looker Studio."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-[#00F0FF]/40 pl-5">
              <h3 className="font-display font-semibold text-white">{t}</h3>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
