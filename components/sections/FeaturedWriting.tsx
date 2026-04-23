import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "medical-diagnosis-ai-ibm-fusion",
    title: "Deploying Medical Diagnosis AI on IBM Fusion with Red Hat Validated Patterns",
    excerpt:
      "Healthcare AI demands both diagnostic capability and ironclad data privacy. A production-ready architecture for on-premises chest X-ray analysis — patient data stays in your datacenter, full stop.",
    date: "Feb 2026",
    readTime: "8 min",
    tag: "On-Premises AI",
  },
  {
    slug: "credit-card-fraud-detection-ibm-fusion",
    title: "Deploying AI-Driven Credit Card Fraud Detection on IBM Fusion",
    excerpt:
      "Real-time fraud detection using Red Hat Validated Patterns on IBM Fusion. GitOps-managed, GPU-capable, and operational in under 30 minutes.",
    date: "Jan 2026",
    readTime: "6 min",
    tag: "MLOps",
  },
  {
    slug: "gpu-free-rag-ibm-fusion",
    title: "GPU-Free RAG on IBM Storage Fusion: What It Is and Why It Matters",
    excerpt:
      "Most AI conversations start with GPUs. This one doesn't. How we deployed a production-grade RAG pipeline on IBM Storage Fusion — and what that means for enterprises that care about data sovereignty.",
    date: "Sep 2024",
    readTime: "7 min",
    tag: "RAG",
  },
];

export default function FeaturedWriting() {
  return (
    <section
      id="writing"
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
                Writing
              </p>
              <h2
                className="text-3xl font-bold tracking-tight"
                style={{ color: "var(--foreground)" }}
              >
                What I&apos;ve built, and what I learned.
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium shrink-0 transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--muted)" }}
            >
              All posts
              <ArrowRight size={13} />
            </Link>
          </div>
        </FadeIn>

        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07}>
              <Link href={`/blog/${post.slug}`} className="group block py-8">
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  {/* Meta */}
                  <div className="md:col-span-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "var(--glow)",
                        color: "var(--accent)",
                      }}
                    >
                      {post.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9">
                    <h3
                      className="font-semibold text-lg leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors"
                      style={{ color: "var(--foreground)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Date + read time */}
                  <div className="md:col-span-1 flex md:flex-col gap-3 items-center md:items-end">
                    <span className="text-xs" style={{ color: "var(--muted-light)" }}>
                      {post.date}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--muted-light)" }}
                    >
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="flex justify-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted)",
                background: "var(--background)",
              }}
            >
              Read all posts
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
