import { motion } from "framer-motion";

const aboutPortrait = new URL("../../picture/WhatsApp Image 2026-07-14 at 3.43.49 PM.jpeg", import.meta.url).href;

const principles = [
  {
    title: "Composed visuals",
    detail: "Measured gradients, editorial typography, and breathable spacing keep interfaces calm yet striking.",
  },
  {
    title: "Reliable delivery",
    detail: "I document systems, automate handoffs, and communicate early—so teams stay confident at every sprint.",
  },
  {
    title: "AI-assisted flow",
    detail: "Copilots accelerate the boring parts. I spend time on architecture, polish, and real collaboration.",
  },
];

const quickFacts = [
  { label: "Based in", value: "Accra, Ghana" },
  { label: "Discipline", value: "Full stack / Systems" },
  { label: "Currently", value: "Graduate · RMU" },
  { label: "Availability", value: "April 2026" },
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="glass rounded-[2rem] border border-[var(--line)] p-6 sm:p-10">
          <p className="section-subtitle">About</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Observant builder with a steady hand</h2>
          <p className="mt-6 text-lg text-[var(--text-muted)]">
            I&apos;m <span className="text-[var(--text)]">Emmanuel Nana Atakorah Dzimado</span>, a full stack engineer and final year
            IT student at Regional Maritime University. I blend thoughtful product strategy with tasteful visuals so
            every experience feels bespoke and effortless.
          </p>
          <p className="mt-4 text-lg text-[var(--text-muted)]">
            My process favours clarity over chaos: moodboard → prototype → engineered reality. Along the way, you get
            transparent updates, tidy repos, and documentation that actually helps.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-[var(--line)] px-4 py-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{fact.label}</dt>
                <dd className="mt-2 text-xl font-semibold text-[var(--text)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <div className="grid gap-4">
          <article className="glass overflow-hidden rounded-2xl border border-[var(--line)] p-3">
            <img
              src={aboutPortrait}
              alt="Portrait of Emmanuel Nana Atakorah Dzimado"
              className="h-72 w-full rounded-xl object-cover object-center"
            />
          </article>
          {principles.map((principle, index) => (
            <article key={principle.title} className="glass flex flex-col rounded-2xl border border-[var(--line)] p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-2xl font-semibold">{principle.title}</h3>
              <p className="mt-3 text-[var(--text-muted)]">{principle.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
