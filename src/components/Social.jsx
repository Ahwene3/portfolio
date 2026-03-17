import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/Ahwene3" },
  { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/emmanuel-dzimado-5a40a335b/" },
  { label: "Twitter", icon: FaTwitter, href: "#" },
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Facebook", icon: FaFacebook, href: "#" },
  { label: "YouTube", icon: FaYoutube, href: "#" },
  { label: "Email", icon: FaEnvelope, href: "mailto:atakorahe57@gmail.com" },
];

export default function Social() {
  return (
    <motion.section
      id="social"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="section-subtitle">Social</p>
          <h2 className="section-title mt-2">Let&apos;s trade notes</h2>
        </div>
        <p className="mt-4 max-w-md text-sm text-[var(--text-muted)] sm:mt-0">
          I share process shots, ship notes, and occasional behind-the-scenes builds. Pick your favorite channel.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {socialLinks.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            className="glass flex items-center justify-between rounded-2xl border border-[var(--line)] p-5 transition hover:-translate-y-0.5"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">{label}</p>
              <p className="mt-1 text-lg font-semibold text-[var(--text)]">Reach out</p>
            </div>
            <span className="rounded-full bg-[var(--accent-soft)] p-3 text-[var(--accent-2)]">
              <Icon />
            </span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
