import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { Play, ArrowRight } from "lucide-react";

const videos = [
  {
    id: "CoMvuL6mVZc",
    title: "Understanding AI Inferencing — Tensor Parallelism vs Replicas",
    description:
      "A technical breakdown of two fundamentally different strategies for scaling AI inference: tensor parallelism (splitting a single model across multiple GPUs) versus replica scaling (running independent copies). When to use each, and why the tradeoff matters more than most teams realize.",
    tag: "AI Inference",
  },
  {
    id: "i9fCFeeQYjk",
    title: "Unpacking the KV Cache",
    description:
      "The KV cache is one of the most important — and least understood — components of transformer inference. This video explains what it is, why it exists, what fills it up, and how it directly affects latency, memory footprint, and throughput in production LLM deployments.",
    tag: "LLM Internals",
  },
];

export default function Watch() {
  return (
    <section id="watch" className="max-w-5xl mx-auto px-6 py-28">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p
              className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Videos
            </p>
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              AI infrastructure, explained from the inside out.
            </h2>
          </div>
          <Link
            href="https://www.youtube.com/@adilsaif"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium shrink-0 transition-colors hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            All videos on YouTube
            <ArrowRight size={13} />
          </Link>
        </div>
      </FadeIn>

      {/* Channel description */}
      <FadeIn delay={0.05}>
        <p
          className="text-lg leading-relaxed mb-14 max-w-2xl"
          style={{ color: "var(--muted)" }}
        >
          No hype cycles. No product demos. Just the architectural concepts that
          engineers working with AI systems actually need to understand — inference
          mechanics, memory tradeoffs, deployment patterns, and the building blocks
          that production AI runs on.
        </p>
      </FadeIn>

      {/* Video cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((v, i) => (
          <FadeIn key={v.id} delay={0.1 + i * 0.1}>
            <Link
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className="card-lift rounded-2xl border overflow-hidden"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card)",
                }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`}
                    alt={v.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Play overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "rgba(0,0,0,0.35)",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.95)" }}
                    >
                      <Play
                        size={20}
                        fill="currentColor"
                        style={{ color: "var(--accent)", marginLeft: "2px" }}
                      />
                    </div>
                  </div>

                  {/* Tag badge */}
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--accent)",
                      color: "#fff",
                    }}
                  >
                    {v.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="font-semibold leading-snug mb-2 group-hover:text-[var(--accent)] transition-colors"
                    style={{ color: "var(--foreground)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {v.description}
                  </p>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>

      {/* Channel CTA */}
      <FadeIn delay={0.3}>
        <div
          className="mt-10 p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          style={{
            borderColor: "var(--border)",
            background: "var(--card)",
          }}
        >
          <div>
            <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
              More on YouTube →{" "}
              <span style={{ color: "var(--accent)" }}>@adilsaif</span>
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Deep-dives on AI inference, storage architecture, and enterprise infrastructure.
            </p>
          </div>
          <Link
            href="https://www.youtube.com/@adilsaif"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
            Subscribe
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
