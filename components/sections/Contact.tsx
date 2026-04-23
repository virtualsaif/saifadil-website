import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Mail } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, var(--glow), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <p
              className="section-label text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              Let&apos;s talk
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-6"
              style={{ color: "var(--foreground)" }}
            >
              If you&apos;re building AI
              <br />
              infrastructure, I&apos;m interested.
            </h2>
            <p
              className="text-lg leading-relaxed mb-12 max-w-xl"
              style={{ color: "var(--muted)" }}
            >
              Whether you&apos;re evaluating enterprise storage for AI workloads,
              building an AI infrastructure strategy, exploring on-premises AI
              options, or just want to talk about what actually works in
              production — reach out.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:saif.adil@gmail.com"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <Mail size={16} />
                saif.adil@gmail.com
              </Link>
              <Link
                href="https://www.linkedin.com/in/storagesaif/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)] hover:scale-[1.02]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                  background: "var(--card)",
                }}
              >
                <LinkedInIcon size={16} />
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
