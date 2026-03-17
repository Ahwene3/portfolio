import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Gym Management System",
    description: "Member tracking, subscriptions, and admin dashboard for gym operations.",
    stack: ["React", "Node.js", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Equipment Tracking System",
    description: "Asset lifecycle and maintenance monitoring with role-based access.",
    stack: ["PHP", "MySQL", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Messaging & Booking System",
    description: "Real-time messaging integrated with appointment booking workflows.",
    stack: ["React", "Node.js", "Socket.io"],
    github: "#",
    demo: "#",
  },
  {
    title: "Digital Announcement Dashboard",
    description: "Smart bulletin display system for campuses and organizations.",
    stack: ["React", "PHP", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI-Assisted Tools",
    description: "Productivity tools that integrate AI assistants for coding and automation.",
    stack: ["React", "Node.js", "AI APIs"],
    github: "#",
    demo: "#",
  },
];

const filters = ["All", "React", "Node.js", "PHP", "MySQL", "Tailwind"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? projects : projects.filter((p) => p.stack.includes(activeFilter))),
    [activeFilter]
  );

  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="section-subtitle">Projects</p>
          <h2 className="section-title mt-2">Selected builds with restrained palettes</h2>
        </div>
        <p className="mt-4 max-w-sm text-sm text-[var(--text-muted)] sm:mt-0">
          Thoughtful systems for gyms, campuses, and creative teams. Each ship pairs calm UI with dependable code.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`panel-chip px-4 py-2 text-xs font-semibold transition ${
              activeFilter === filter
                ? "bg-[var(--accent)] text-[#1e1406]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.title}
            className="glass relative flex h-full flex-col rounded-3xl border border-[var(--line)] p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-[var(--accent-2)] via-[var(--accent)] to-[var(--accent-3)]" />
            <div className="mt-2 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">Case</span>
            </div>
            <p className="mt-3 text-sm text-[var(--text-muted)]">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--text)]">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-sm font-semibold">
              <a href={project.github} className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent-2)]">
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent)]">
                <FaExternalLinkAlt /> Live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
