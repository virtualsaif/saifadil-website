import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    index: "01",
    title: "RAG Research Assistant on OpenShift",
    description:
      "Architected a production-grade Retrieval-Augmented Generation system for a major academic medical center. Built on IBM Storage Fusion, watsonx.ai embeddings, Qdrant vector DB, and Langflow orchestration. Fully on-premises — patient data never leaves the firewall.",
    tags: ["RAG", "IBM Fusion", "watsonx.ai", "Healthcare AI"],
    impact: "GPU-free, air-gapped AI inference",
  },
  {
    index: "02",
    title: "IBM Storage Fusion Quick Start",
    description:
      "Led the development of IBM's standardized AI deployment program. Established the framework, tooling, and documentation that field teams use to deploy Fusion for AI workloads — benchmarked against NVIDIA BasePod and Red Hat AI validated offerings.",
    tags: ["IBM Fusion", "NVIDIA BasePod", "Field Enablement"],
    impact: "Adopted across IBM field teams globally",
  },
  {
    index: "03",
    title: "Red Hat Validated AI Patterns",
    description:
      "Deployed and validated three Red Hat Validated Patterns on IBM Storage Fusion: RAG-LLM pipeline, Medical Diagnosis AI (chest X-ray analysis), and Credit Card Fraud Detection. Proved each workload runs production-ready without GPU dependency.",
    tags: ["Red Hat OpenShift", "Medical AI", "Fraud Detection", "On-Premises"],
    impact: "Three enterprise AI workloads validated",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="py-28"
      style={{ background: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between gap-6 mb-16">
            <div>
              <p
                className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Selected Work
              </p>
              <h2
                className="text-3xl font-bold tracking-tight"
                style={{ color: "var(--foreground)" }}
              >
                Projects that shipped.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-[var(--accent)] shrink-0"
              style={{ color: "var(--muted)" }}
            >
              All projects
              <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-5">
          {projects.map((p, i) => (
            <FadeIn key={p.index} delay={i * 0.08}>
              <div
                className="card-lift p-7 rounded-2xl border group"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Index + impact */}
                  <div className="md:col-span-2 flex md:flex-col gap-3 md:gap-0">
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: "var(--accent)", opacity: 0.5 }}
                    >
                      {p.index}
                    </span>
                    <span
                      className="hidden md:block text-xs font-semibold mt-3 leading-snug"
                      style={{ color: "var(--accent)" }}
                    >
                      {p.impact}
                    </span>
                  </div>

                  {/* Main content */}
                  <div className="md:col-span-10">
                    <h3
                      className="font-bold text-lg mb-3 group-hover:text-[var(--accent)] transition-colors"
                      style={{ color: "var(--foreground)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full border"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--muted)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
                background: "var(--background)",
              }}
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
