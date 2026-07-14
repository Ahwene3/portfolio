import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const formspreeEndpoint =
  import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/your-form-id";

const contactDetails = [
  { label: "Email", value: "atakorahe57@gmail.com" },
  { label: "Timezone", value: "GMT / UTC+0" },
  { label: "Response", value: "Within 1 business day" },
];

export default function Contact() {
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!notification) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setNotification(null);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [notification]);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setNotification(null);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setNotification({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });
    } catch {
      setNotification({
        type: "error",
        message: "Message could not be sent right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
        <form className="glass rounded-3xl border border-[var(--line)] p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-4">
            {notification ? (
              <p
                className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                  notification.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-100"
                    : "border-rose-500/30 bg-rose-500/10 text-rose-100"
                }`}
                role="status"
                aria-live="polite"
              >
                {notification.message}
              </p>
            ) : null}

            <label className="sr-only" htmlFor="name">
              Your name
            </label>
            <input className="input" id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />

            <label className="sr-only" htmlFor="email">
              Work email
            </label>
            <input className="input" id="email" name="email" type="email" placeholder="Work email" autoComplete="email" required />

            <label className="sr-only" htmlFor="company">
              Project or company
            </label>
            <input className="input" id="company" name="company" type="text" placeholder="Project / company" autoComplete="organization" required />

            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              className="input min-h-32"
              id="message"
              name="message"
              placeholder="What are we building together?"
              required
            />

            <input className="hidden" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <button
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#1e1406] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send message"}
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
