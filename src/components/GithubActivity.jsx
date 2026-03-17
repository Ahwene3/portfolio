import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const activities = [
  {
    title: "Component kit refresh",
    detail: "Refined motion tokens and accessibility for the shared React system.",
    timeframe: "This week",
  },
  {
    title: "API reliability pass",
    detail: "Stabilised Node services with typed contracts + updated docs.",
    timeframe: "Last sprint",
  },
  {
    title: "Deployment polish",
    detail: "Simplified CI pipelines and shaved 28% off bundle sizes.",
    timeframe: "Jan 2026",
  },
];

const contributionStats = [
  { label: "Commits (90d)", value: "128" },
  { label: "Open source", value: "6 repos" },
  { label: "PR merge time", value: "< 6h" },
];

export default function GithubActivity() {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="glass rounded-[2rem] border border-[var(--line)] p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="pill inline-flex items-center gap-2 text-[var(--text)]">
            <FaGithub /> GitHub pulse
          </span>
          <p className="text-sm text-[var(--text-muted)]">Steady commits, tidy PRs, transparent docs.</p>
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-[var(--line)] p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Momentum</p>
            <ul className="mt-4 space-y-3">
              {contributionStats.map((stat) => (
                <li key={stat.label} className="flex items-center justify-between text-sm text-[var(--text)]">
                  <span>{stat.label}</span>
                  <span className="font-semibold text-[var(--accent)]">{stat.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ol className="relative border-l border-dashed border-[var(--line)] pl-6">
              {activities.map((activity) => (
                <li key={activity.title} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-3 mt-1 h-4 w-4 rounded-full border border-[var(--line)] bg-[var(--bg)]" />
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">{activity.timeframe}</p>
                  <h3 className="mt-2 text-xl font-semibold">{activity.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{activity.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
