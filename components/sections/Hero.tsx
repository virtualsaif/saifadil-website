import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
        <div className="flex-1">
          {/* Eyebrow */}
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--accent)" }}
          >
            Technology Architect · Houston, TX
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6" style={{ color: "var(--foreground)" }}>
            Building the infrastructure that runs{" "}
            <span style={{ color: "var(--accent)" }}>AI</span>.
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-xl" style={{ color: "var(--muted)" }}>
            22+ years driving innovation across virtualization, cloud, enterprise
            storage, and AI-enabled architectures. Currently Technical Product
            Manager — AI Ecosystems at IBM.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: "22+", label: "Years in Tech" },
              { value: "19", label: "Ecosystem Partners" },
              { value: "10+", label: "Certifications" },
              { value: "3+", label: "Fortune 500 Employers" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>
                  {s.value}
                </p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Read my writing
              <ArrowRight size={15} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/storagesaif/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </Link>
            <Link
              href="mailto:saif.adil@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              <Mail size={15} />
              Email me
            </Link>
          </div>
        </div>

        {/* Avatar placeholder */}
        <div className="shrink-0">
          <div
            className="w-36 h-36 md:w-44 md:h-44 rounded-2xl flex items-center justify-center text-4xl font-bold border-2"
            style={{
              background: "var(--card, #f8fafc)",
              borderColor: "var(--border)",
              color: "var(--accent)",
            }}
          >
            SA
          </div>
          <p className="text-xs text-center mt-2" style={{ color: "var(--muted)" }}>
            Photo coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
