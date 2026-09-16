import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { CV_URL, profile } from "../data/profile";
import { SectionHeading } from "./SectionHeading";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — email is shown below");
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#00F0FF]/8 blur-[130px] rounded-full" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading chapter="06" accent="Recruiter Gateway" title="Let's Talk" testid="contact-heading" />

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[1.02] max-w-4xl"
        >
          BUILDING BRANDS,
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6]">
            BACKED BY DATA.
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-8 max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed"
        >
          Hiring for marketing, communications, analytics or automation roles? I'd love to hear about it — reach me directly on any channel below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            data-testid="contact-email-btn"
            className="group border border-white/10 bg-[#12121A]/60 p-6 card-glow flex flex-col gap-4"
          >
            <Mail size={20} className="text-[#00F0FF]" aria-hidden="true" />
            <div>
              <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">Email</p>
              <p className="mt-1 text-sm text-white break-all group-hover:text-[#00F0FF] transition-colors duration-200">
                {profile.email}
              </p>
            </div>
          </a>
          <button
            onClick={copyEmail}
            data-testid="contact-copy-email-btn"
            className="group border border-white/10 bg-[#12121A]/60 p-6 card-glow flex flex-col gap-4 text-left"
          >
            {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} className="text-[#00F0FF]" />}
            <div>
              <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">Quick action</p>
              <p className="mt-1 text-sm text-white">{copied ? "Copied!" : "Copy email address"}</p>
            </div>
          </button>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            data-testid="contact-phone-link"
            className="group border border-white/10 bg-[#12121A]/60 p-6 card-glow flex flex-col gap-4"
          >
            <Phone size={20} className="text-[#00F0FF]" aria-hidden="true" />
            <div>
              <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">Phone</p>
              <p className="mt-1 text-sm text-white group-hover:text-[#00F0FF] transition-colors duration-200">{profile.phone}</p>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-linkedin-link"
            className="group border border-white/10 bg-[#12121A]/60 p-6 card-glow flex flex-col gap-4"
          >
            <Linkedin size={20} className="text-[#00F0FF]" aria-hidden="true" />
            <div>
              <p className="font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">LinkedIn</p>
              <p className="mt-1 text-sm text-white inline-flex items-center gap-1 group-hover:text-[#00F0FF] transition-colors duration-200">
                Connect <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </p>
            </div>
          </a>
        </motion.div>
      </div>

      <footer className="mt-24 border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-white">{profile.name}</p>
            <p className="mt-1 font-mono-code text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              {profile.tagline}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-cv-link"
              className="font-mono-code text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[#00F0FF] transition-colors duration-200"
            >
              Download CV
            </a>
            <a
              href="#top"
              data-testid="footer-back-to-top"
              className="font-mono-code text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-[#00F0FF] transition-colors duration-200"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
