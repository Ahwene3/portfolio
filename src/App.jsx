import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GithubActivity from "./components/GithubActivity";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-hero-aurora" />
        <div className="absolute inset-y-0 left-1/2 w-[130vw] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(17,24,44,0.7),transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" aria-hidden="true" />
      </div>
      <div className="relative z-10">
        <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
        <main className="space-y-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <GithubActivity />
          <Social />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
