import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { CV_URL, profile } from "../data/profile";

const line = {
  hidden: { y: "115%" },
  visible: (i) => ({
    y: "0%",
    transition: { delay: 0.25 + i * 0.13, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.9 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const RevealLine = ({ children, i, className }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span custom={i} variants={line} initial="hidden" animate="visible" className={`block ${className}`}>
      {children}
    </motion.span>
  </span>
);

const TiltCard = () => {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  const onLeave = () => {
    ref.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      custom={2}
      variants={fade}
      initial="hidden"
      animate="visible"
      className="relative"
      data-testid="hero-portrait-card"
    >
      <div className="absolute -inset-6 bg-[#00F0FF]/10 blur-3xl rounded-full" aria-hidden="true" />
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative border border-white/10 bg-[#12121A]/80 backdrop-blur-md p-8 sm:p-10 will-change-transform transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between">
          <span className="font-display font-black text-7xl sm:text-8xl leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600" style={{ transform: "translateZ(40px)" }}>
            {profile.monogram}
          </span>
          <span className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-[#00F0FF]/80 border border-[#00F0FF]/30 px-3 py-1.5" style={{ transform: "translateZ(30px)" }}>
            Est. 2021
          </span>
        </div>
        <div className="mt-10 space-y-3" style={{ transform: "translateZ(25px)" }}>
          {profile.stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-3 border-b border-white/5 pb-3">
              <span className="font-display font-bold text-2xl text-[#00F0FF]">{s.value}</span>
              <span className="text-xs text-zinc-400">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">
          Bharti Airtel · J&K Circle
        </p>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} id="top" data-testid="hero-section" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#8B5CF6]/10 blur-[120px] rounded-full" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#00F0FF]/8 blur-[140px] rounded-full" aria-hidden="true" />

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-7">
          <motion.div custom={0} variants={fade} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 font-mono-code text-[11px] uppercase tracking-[0.2em] text-emerald-400 border border-emerald-400/30 px-3 py-1.5" data-testid="hero-availability-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-1.5 font-mono-code text-[11px] uppercase tracking-[0.2em] text-zinc-400 border border-white/10 px-3 py-1.5">
              <MapPin size={11} />
              {profile.location}
            </span>
          </motion.div>

          <h1 data-testid="hero-title" className="font-display font-black tracking-tight leading-[0.98] text-[13vw] sm:text-7xl lg:text-8xl">
            <RevealLine i={0}>HARMEET</RevealLine>
            <RevealLine i={1} className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">
              KOUR
            </RevealLine>
          </h1>

          <div data-testid="hero-subtitle" className="mt-7 font-mono-code text-xs sm:text-sm text-zinc-400 tracking-[0.12em] uppercase">
            <RevealLine i={2}>Marketing Communications</RevealLine>
            <RevealLine i={3}>
              <span className="text-[#00F0FF]/90">Business Analytics</span> — AI & Automation
            </RevealLine>
          </div>

          <motion.p custom={3} variants={fade} initial="hidden" animate="visible" className="mt-7 max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed">
            5+ years driving brand visibility, integrated campaigns and data-led decisions at Bharti Airtel — from the COO's office to on-ground market execution across J&K.
          </motion.p>

          <motion.div custom={4} variants={fade} initial="hidden" animate="visible" className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              data-testid="hero-experience-cta"
              className="group inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.18em] px-7 py-4 bg-[#00F0FF] text-[#0A0A0E] font-semibold hover:bg-white transition-colors duration-300"
            >
              Explore Experience
              <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              data-testid="hero-contact-cta"
              className="group inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.18em] px-7 py-4 border border-white/15 text-white hover:border-[#00F0FF]/60 hover:text-[#00F0FF] transition-colors duration-300"
            >
              Get in Touch
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-resume-cta"
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.18em] px-7 py-4 text-zinc-500 hover:text-white transition-colors duration-300"
            >
              View Résumé
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 animate-float-slow">
          <TiltCard />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-code text-[10px] uppercase tracking-[0.3em] text-zinc-600"
        aria-hidden="true"
      >
        Scroll
      </motion.div>
    </section>
  );
};
