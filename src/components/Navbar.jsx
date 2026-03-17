import { FaMoon, FaSun } from "react-icons/fa";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#social", label: "Social" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ isDark, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-40 pb-3 pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="glass flex items-center justify-between rounded-2xl border border-[var(--line)] px-4 py-3 shadow-glow sm:px-6">
          <a href="#hero" className="font-display text-lg font-semibold text-[var(--text)]">
            Emmanuel.studio
            <span className="block text-xs font-normal uppercase tracking-[0.35em] text-[var(--text-muted)]">
              Calm craft, bold code
            </span>
          </a>
          <div className="panel-chip hidden items-center gap-1 px-2 py-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)] transition hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] lg:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun className="text-[var(--accent)]" /> : <FaMoon className="text-[var(--accent-2)]" />}
              <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
