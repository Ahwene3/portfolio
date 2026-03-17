export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-14 sm:px-6">
      <div className="glass mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl border border-[var(--line)] px-6 py-6 text-sm text-[var(--text-muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} Emmanuel Nana Atakorah Dzimado · Crafted with React & calm energy.
        </p>
        <a href="#hero" className="rounded-full border border-[var(--line)] px-4 py-2 text-[var(--text)] transition hover:border-[var(--accent)]">
          Back to top
        </a>
      </div>
    </footer>
  );
}
