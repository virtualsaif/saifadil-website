import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <FadeIn direction="left" className="md:col-span-4">
          <p
            className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            22 years. Still building.
          </h2>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="md:col-span-8 space-y-5">
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            I&apos;m a Sr. Technology Architect who has spent two decades at the
            intersection of infrastructure, cloud, and now artificial intelligence.
            My career spans IBM, Hewlett Packard Enterprise, VMware, Rackspace,
            VEEAM, Quest Software (Dell), and HCL.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Today I focus on AI ecosystem strategy — architecting reference patterns
            for on-premises AI inference, building partner ecosystems, and helping
            field teams deploy GPU and GPU-free AI workloads on enterprise storage
            platforms. I published multiple technical guides on IBM Community covering
            RAG-LLM deployment, AI-driven fraud detection, and medical diagnosis AI.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Before AI was the headline, I spent years deep in VMware vSAN, HCI,
            software-defined storage, and data protection — which gives me a grounded,
            pragmatic view of what it actually takes to run production workloads at scale.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Outside the office: cars, mechanical keyboards, and ping pong.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "AI Infrastructure",
              "IBM Storage Fusion",
              "Red Hat OpenShift",
              "VMware vSAN",
              "NVIDIA AI",
              "Data Sovereignty",
              "RAG / LLM",
              "Enterprise Storage",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full border font-medium"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                  background: "var(--card)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
