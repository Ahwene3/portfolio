import { motion } from "framer-motion";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaLaptopCode, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { MdSmartToy } from "react-icons/md";

const skillGroups = [
  {
    title: "Frontend",
    copy: "Responsive layouts, tasteful motion, and reusable systems in React + Tailwind.",
    skills: [
      ["React", FaReact],
      ["HTML", FaHtml5],
      ["CSS", FaCss3Alt],
      ["JavaScript", FaJsSquare],
      ["Tailwind", SiTailwindcss],
    ],
  },
  {
    title: "Backend",
    copy: "API design, auth flows, and data orchestration built with clean contracts.",
    skills: [
      ["PHP", FaPhp],
      ["Node.js", FaNodeJs],
      ["MySQL", SiMysql],
    ],
  },
  {
    title: "Tools",
    copy: "Versioning, CI, and AI copilots that keep the work steady and traceable.",
    skills: [
      ["Git", FaGitAlt],
      ["GitHub", FaGithub],
      ["AI coding assistants", MdSmartToy],
      ["VS Code", FaLaptopCode],
    ],
  },
];

const rituals = [
  "Design tokens + component libraries",
  "Accessibility-first reviews",
  "Automated deployments",
  "Intentional code comments & docs",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="section-subtitle">Capabilities</p>
          <h2 className="section-title mt-2">Tasteful stacks, dependable rhythm</h2>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-[var(--text-muted)] sm:mt-0">
          {rituals.map((item) => (
            <span key={item} className="panel-chip px-3 py-1">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass flex flex-col rounded-2xl border border-[var(--line)] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{group.title}</h3>
              <span className="text-xs uppercase tracking-[0.35em] text-[var(--text-muted)]">Stack</span>
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)]">{group.copy}</p>
            <ul className="mt-6 space-y-3">
              {group.skills.map(([name, Icon]) => (
                <li key={name} className="flex items-center gap-3 rounded-xl border border-[var(--line)] px-3 py-2 text-sm text-[var(--text)]">
                  <span className="rounded-full bg-[var(--accent-soft)] p-2 text-[var(--accent-2)]">
                    <Icon />
                  </span>
                  {name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
