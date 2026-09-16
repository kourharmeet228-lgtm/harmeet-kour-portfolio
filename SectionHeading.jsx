import { motion } from "framer-motion";

export const SectionHeading = ({ chapter, title, accent, testid }) => (
  <div className="mb-14 sm:mb-20" data-testid={testid}>
    <motion.p
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="font-mono-code text-xs uppercase tracking-[0.3em] text-[#00F0FF] mb-4"
    >
      Chapter {chapter} <span className="text-zinc-600">//</span> {accent}
    </motion.p>
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl leading-tight"
      >
        {title}
      </motion.h2>
    </div>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="mt-6 h-px w-24 origin-left bg-gradient-to-r from-[#00F0FF] to-transparent"
    />
  </div>
);
