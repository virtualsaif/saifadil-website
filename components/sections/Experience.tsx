import FadeIn from "@/components/FadeIn";

const jobs = [
  {
    period: "Feb 2024 – Present",
    title: "Technical Product Manager — AI Ecosystems",
    company: "IBM",
    tag: "Current",
    highlights: [
      "Led NVIDIA GPU integration into IBM storage reference architectures",
      "Deployed Red Hat Validated Patterns (RAG-LLM, Medical Diagnosis AI, Fraud Detection) on IBM Storage Fusion",
      "Architected RAG research assistant on OpenShift — IBM Fusion, watsonx.ai, Qdrant, Langflow",
      "Led IBM Storage Fusion Quick Start program, benchmarked against NVIDIA BasePod",
      "Developed AMD GPU validation strategy modeled on NVIDIA's CANDOR/BasePod framework",
      "Developed partner ecosystem mapping covering 19 partners across four categories",
    ],
  },
  {
    period: "Jul 2021 – Feb 2024",
    title: "Sr. Customer Success Architect",
    company: "IBM",
    tag: null,
    highlights: [
      "Led IBM Cloud technical strategy for sales and post-sale engagements",
      "Designed tailored IBM Cloud solutions producing measurable outcomes",
      "Executed SAP HANA certification for IBM storage",
      "Directed technology adoption from discovery through implementation",
    ],
  },
  {
    period: "Feb 2019 – Jan 2021",
    title: "Principal Architect",
    company: "Hewlett Packard Enterprise",
    tag: null,
    highlights: [
      "Led design and validation of workload-based storage solutions",
      "Enabled global presales and partner teams through targeted training",
      "Analyzed major HCI platforms — provided strategic competitive insights",
      "Directed technical collaborations with ISV partners",
    ],
  },
  {
    period: "Sep 2017 – Jan 2019",
    title: "Product Engineer III",
    company: "Rackspace – VMware R&D",
    tag: null,
    highlights: [
      "Designed VMware product features coordinating multiple stakeholders",
      "Built senior-stakeholder partnerships to guide product decisions",
    ],
  },
  {
    period: "Jul 2015 – Aug 2017",
    title: "Sr. System Engineer",
    company: "VMware",
    tag: null,
    highlights: [
      "Expert in VMware vSAN — storage virtualization, HCI, performance optimization",
      "Designed and implemented virtualization solutions for enterprise clients",
      "Consulted on Private Cloud deployments using VMware tooling",
    ],
  },
  {
    period: "Jan 2014 – Jun 2015",
    title: "Presales Manager SAARC",
    company: "VEEAM Software",
    tag: null,
    highlights: [
      "Architected Veeam backup solutions across enterprise customers",
      "Expanded cloud backup adoption integrating AWS and Azure",
      "Drove regional market expansion across SAARC",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="mb-16">
          <p
            className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)" }}
          >
            Experience
          </p>
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Career timeline
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-0">
        {jobs.map((job, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 border-b" style={{ borderColor: "var(--border)" }}>
              {/* Left: meta */}
              <div className="md:col-span-3">
                <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>
                  {job.period}
                </p>
                {job.tag && (
                  <span
                    className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: "var(--glow)",
                      color: "var(--accent)",
                    }}
                  >
                    {job.tag}
                  </span>
                )}
              </div>

              {/* Right: content */}
              <div className="md:col-span-9">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="font-semibold text-lg leading-snug"
                      style={{ color: "var(--foreground)" }}
                    >
                      {job.title}
                    </h3>
                    <p
                      className="text-sm font-medium mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {job.company}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-sm flex gap-3 items-start"
                      style={{ color: "var(--muted)" }}
                    >
                      <span
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)", opacity: 0.6 }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <p className="text-sm mt-8 italic" style={{ color: "var(--muted-light)" }}>
          Earlier roles: HCL (Sr. Specialist), Convergys/Microsoft (Sr. Technical Support Engineer), vCustomer — 2003–2012.
        </p>
      </FadeIn>
    </section>
  );
}
