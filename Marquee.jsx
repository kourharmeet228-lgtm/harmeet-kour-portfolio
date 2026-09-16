import { marqueeItems } from "../data/profile";

export const Marquee = () => {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div data-testid="tech-marquee" className="relative border-y border-white/8 py-5 overflow-hidden bg-[#0D0D13]" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-mono-code text-xs sm:text-sm uppercase tracking-[0.3em] text-zinc-500 px-6">
              {item}
            </span>
            <span className="text-[#00F0FF]/60 text-xs">◆</span>
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0E] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0E] to-transparent pointer-events-none" />
    </div>
  );
};
