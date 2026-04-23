import FadeIn from "@/components/FadeIn";

const beliefs = [
  {
    number: "01",
    title: "The storage layer is the bottleneck nobody talks about.",
    body: "AI teams spend 80% of their energy on model selection. The 20% that kills production readiness is always storage, data pipelines, and infrastructure architecture. The model is rarely the problem. The foundation usually is.",
  },
  {
    number: "02",
    title: "GPU-free AI is dramatically underrated.",
    body: "For most enterprise inference workloads — RAG, document Q&A, compliance AI, on-premises search — you don't need GPUs. You need the right architecture. The cost difference is an order of magnitude. Most organizations aren't even asking the question.",
  },
  {
    number: "03",
    title: "Blueprints beat advice.",
    body: "The best way to accelerate AI adoption isn't another consulting deck or whitepaper. It's a validated pattern that a field team can deploy in 30 minutes and trust in production. Repeatability is the real unlock.",
  },
];

export default function Thesis() {
  return (
    <section
      id="thesis"
      className="py-28"
      style={{ background: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p
                className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Point of View
              </p>
              <h2
                className="text-3xl font-bold tracking-tight max-w-sm"
                style={{ color: "var(--foreground)" }}
              >
                Three things I believe that most people aren&apos;t saying.
              </h2>
            </div>
            <p
              className="text-sm max-w-xs leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              Formed from 22 years of watching architectures succeed and fail at
              scale. These inform everything I build and write.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {beliefs.map((b, i) => (
            <FadeIn key={b.number} delay={i * 0.1}>
              <div
                className="card-lift h-full p-7 rounded-2xl border flex flex-col gap-5"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                {/* Number */}
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                >
                  {b.number}
                </span>

                {/* Title — the belief */}
                <h3
                  className="text-lg font-bold leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {b.title}
                </h3>

                {/* Divider */}
                <div
                  className="w-8 h-px"
                  style={{ background: "var(--accent)", opacity: 0.4 }}
                />

                {/* Body */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--muted)" }}
                >
                  {b.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
