import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, anchors: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain min-h-screen bg-[#0A0A0E] text-white" data-testid="app-root">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
