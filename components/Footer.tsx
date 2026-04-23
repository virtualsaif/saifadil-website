import Link from "next/link";
import { Mail } from "lucide-react";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer
      className="border-t mt-24"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold" style={{ color: "var(--foreground)" }}>
            Saif Adil
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Sr. Technology Architect · Houston, TX
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/storagesaif/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </Link>
          <Link
            href="mailto:saif.adil@gmail.com"
            className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            <Mail size={16} />
            Email
          </Link>
        </div>

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Saif Adil
        </p>
      </div>
    </footer>
  );
}
