import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { Mail } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--card)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--glow), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="section-label text-xs font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2 justify-center"
              style={{ color: "var(--accent)" }}
            >
              Contact
            </p>
            <h2
              className="text-4xl font-bold tracking-tight mb-5"
              style={{ color: "var(--foreground)" }}
            >
              Ready to build something great?
            </h2>
            <p
              className="text-lg leading-relaxed mb-10"
              style={{ color: "var(--muted)" }}
            >
              Whether you&apos;re thinking about AI adoption, enterprise storage
              architecture, cloud strategy, or want to talk tech — I&apos;m always
              up for a good conversation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
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
                  background: "var(--background)",
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
