import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { useTypingText } from "../hooks/useTypingText";

const heroPortrait = new URL("../../picture/WhatsApp Image 2026-07-14 at 3.43.48 PM.jpeg", import.meta.url).href;

const heroStats = [
  { label: "Projects shipped", value: "14" },
  { label: "Years crafting", value: "3+" },
  { label: "Avg. response", value: "<24h" },
];

const highlightCards = [
  {
    title: "Currently shipping",
    body: "An automation console that blends AI copilots with human ops for maritime teams.",
    footer: "React · Node · AI APIs",
  },
  {
    title: "Signature stack",
    chips: ["React", "Node.js", "Tailwind", "AI tooling"],
  },
];

export default function Hero() {
  const typed = useTypingText([
    "I weave calm UI with intelligent backends.",
    "Graduate · Regional Maritime University.",
    "Building humane automation for the web.",
  ]);

  return (
    <section className="px-4 pt-8 sm:px-6" id="hero">
      <motion.div
        className="glass relative mx-auto overflow-hidden rounded-[2.25rem] border border-[var(--line)] px-6 py-12 shadow-float sm:px-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-hero-aurora opacity-70" />
        <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="pill">Portfolio · 2026</span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              Calm, classy engineering for ambitious teams
              <span className="mt-3 block text-base font-normal text-[var(--text-muted)] sm:text-lg">
                <span className="bg-gradient-to-r from-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent">
                  {typed}
                </span>
                <span className="ml-1 animate-pulse text-[var(--accent)]">|</span>
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--text-muted)] sm:text-lg">
              I design and build expressive products where every detail feels intentional—from the first pixel to the
              last API call. Expect balanced color, measured motion, and reliable delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#1e1406] transition hover:-translate-y-0.5"
              >
                View featured work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
              >
                <FaEnvelope /> Request an intro
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent-2)]"
              >
                <FaDownload /> Download CV
              </a>
            </div>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[var(--line)] px-4 py-5 text-center">
                  <dt className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-display font-semibold text-[var(--accent)]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-4 lg:pl-6">
              <article className="group glass overflow-hidden rounded-2xl border border-[var(--line)] p-3 transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
              <img
                src={heroPortrait}
                alt="Portrait of Emmanuel Nana Atakorah Dzimado"
                  className="h-72 w-full rounded-xl object-cover object-center transition duration-500 group-hover:scale-105"
              />
            </article>
            {highlightCards.map((card) => (
              <article key={card.title} className="glass relative overflow-hidden rounded-2xl border border-[var(--line)] p-5">
                <span className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">{card.title}</span>
                {card.body && <p className="mt-3 text-base text-[var(--text)]">{card.body}</p>}
                {card.footer && <p className="mt-4 text-sm text-[var(--accent-2)]">{card.footer}</p>}
                {card.chips && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.chips.map((chip) => (
                      <span key={chip} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--text)]">
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
            <div className="rounded-2xl border border-dashed border-[var(--line)] p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">Focus areas</p>
              <p className="mt-3 text-lg font-semibold text-[var(--text)]">Design systems · AI workflows · Developer tooling</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Calm visuals, performant code, future-ready infrastructure.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
