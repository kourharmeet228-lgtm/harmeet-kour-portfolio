import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { CV_URL, profile } from "../data/profile";

const links = [
  { label: "Profile", href: "#summary" },
  { label: "Experience", href: "#experience", testid: "nav-link-experience" },
  { label: "Skills", href: "#skills", testid: "nav-link-skills" },
  { label: "Projects", href: "#projects", testid: "nav-link-projects" },
  { label: "Credentials", href: "#credentials" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl border-white/10"
          : "bg-transparent border-transparent"
      }`}
      data-testid="nav-container"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-3 group">
          <span className="font-display font-extrabold text-lg w-10 h-10 grid place-items-center border border-white/15 text-[#00F0FF] group-hover:border-[#00F0FF]/60 transition-colors duration-300">
            {profile.monogram}
          </span>
          <span className="hidden sm:block font-display font-bold tracking-tight text-sm uppercase">
            {profile.name}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid || `nav-link-${l.label.toLowerCase()}`}
              className="relative font-mono-code text-xs uppercase tracking-[0.18em] text-zinc-400 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#00F0FF] after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="download-cv-button"
            className="hidden sm:inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.15em] px-5 py-2.5 border border-[#00F0FF]/40 text-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#0A0A0E] transition-colors duration-300"
          >
            <Download size={14} />
            CV
          </a>
          <button
            data-testid="nav-mobile-menu-button"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0A0A0E]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono-code text-sm uppercase tracking-[0.18em] text-zinc-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.15em] text-[#00F0FF]"
          >
            <Download size={14} /> Download CV
          </a>
        </div>
      )}
    </motion.header>
  );
};
