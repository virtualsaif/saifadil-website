import Link from "next/link";
import { Mail } from "lucide-react";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24 border-t"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: "var(--foreground)" }}>
          Let&apos;s connect.
        </h2>
        <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--muted)" }}>
          Whether you&apos;re thinking about AI adoption, enterprise storage architecture,
          cloud strategy, or just want to talk tech — I&apos;m always up for a good conversation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:saif.adil@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <Mail size={15} />
            saif.adil@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/storagesaif/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium border transition-colors hover:border-[var(--accent)]"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            <LinkedInIcon size={15} />
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
