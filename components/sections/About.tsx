import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timeline = [
  { year: "2024 →", event: "Technical Product Manager, AI Ecosystems · IBM" },
  { year: "2021", event: "Sr. Customer Success Architect · IBM" },
  { year: "2019", event: "Principal Architect · Hewlett Packard Enterprise" },
  { year: "2017", event: "Product Engineer III · Rackspace – VMware R&D" },
  { year: "2015", event: "Sr. System Engineer · VMware" },
  { year: "2014", event: "Presales Manager SAARC · VEEAM Software" },
  { year: "2003", event: "Career start in technical support & presales" },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-28">
      <div className="grid md:grid-cols-12 gap-16 items-start">
        {/* Left col */}
        <div className="md:col-span-5">
          <FadeIn direction="left">
            <p
              className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              About
            </p>
            <h2
              className="text-3xl font-bold tracking-tight mb-8"
              style={{ color: "var(--foreground)" }}
            >
              I don&apos;t just design architectures. I make them repeatable.
            </h2>

            {/* Compact timeline */}
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="text-xs font-mono shrink-0 w-12 pt-0.5"
                    style={{ color: "var(--accent)" }}
                  >
                    {t.year}
                  </span>
                  <span className="text-sm" style={{ color: "var(--muted)" }}>
                    {t.event}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/#experience"
              className="inline-flex items-center gap-1.5 text-sm font-medium mt-8 transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              Full experience
              <ArrowRight size={13} />
            </Link>
          </FadeIn>
        </div>

        {/* Right col — the human story */}
        <div className="md:col-span-7">
          <FadeIn direction="right" delay={0.12}>
            <div className="space-y-6">
              <p
                className="text-xl leading-relaxed font-medium"
                style={{ color: "var(--foreground)" }}
              >
                I&apos;m a technology architect who has spent 22 years building
                the infrastructure that runs things.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Not designing it on whiteboards — actually deploying it, validating it,
                documenting it, and making it repeatable for the teams that come after.
                From hyperconverged storage at VMware to AI ecosystems at IBM, the
                through-line has always been the same: someone has to make the
                abstraction work in production.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                At IBM, I lead AI Ecosystems strategy — architecting reference patterns
                for on-premises AI inference, building partner ecosystems across 19
                vendors, and creating the validated deployment blueprints that field
                teams actually use. I&apos;ve deployed RAG pipelines on IBM Storage Fusion,
                validated medical diagnosis AI and fraud detection models on-premises,
                and built the Quick Start framework benchmarked against NVIDIA BasePod.
              </p>

              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                Outside the architecture diagrams, I make technical videos on YouTube —
                breaking down AI inference concepts like tensor parallelism, KV cache
                mechanics, and deployment tradeoffs for engineers who want to understand
                the system, not just use it.
              </p>

              <p
                className="text-sm italic"
                style={{ color: "var(--muted-light)" }}
              >
                Houston-based. Certified in NVIDIA AI Operations, TOGAF 9, VMware VCP
                (3–6), AWS, and Nutanix. Strong opinions about mechanical keyboards.
                Faster at ping pong than you&apos;d expect.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
