import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const contactDetails = [
  { label: "Email", value: "atakorahe57@gmail.com" },
  { label: "Timezone", value: "GMT / UTC+0" },
  { label: "Response", value: "Within 1 business day" },
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="section-subtitle">Contact</p>
          <h2 className="section-title mt-2">Tell me about your next build</h2>
        </div>
        <p className="mt-4 max-w-md text-sm text-[var(--text-muted)] sm:mt-0">
          Include context, timeline, and links if you can. I reply with a plan, scope, and ways we can collaborate.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <form className="glass rounded-3xl border border-[var(--line)] p-6 sm:p-8">
          <div className="grid gap-4">
            <input className="input" type="text" placeholder="Your name" />
            <input className="input" type="email" placeholder="Work email" />
            <input className="input" type="text" placeholder="Project / company" />
            <textarea className="input min-h-32" placeholder="What are we building together?" />
            <button className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#1e1406] transition hover:-translate-y-0.5">
              Send message
            </button>
          </div>
        </form>
        <div className="glass flex flex-col justify-between rounded-3xl border border-[var(--line)] p-6 sm:p-8">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)]">Direct line</p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">Let&apos;s align on clarity, budget, and cadence.</h3>
            <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
              {contactDetails.map((detail) => (
                <li key={detail.label} className="flex items-center justify-between rounded-2xl border border-[var(--line)] px-4 py-3">
                  <span>{detail.label}</span>
                  <span className="font-semibold text-[var(--text)]">{detail.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://wa.me/2332732224152"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--accent)]"
          >
            <FaWhatsapp /> WhatsApp me
          </a>
        </div>
      </div>
    </motion.section>
  );
}
