const jobs = [
  {
    period: "Feb 2024 – Present",
    title: "Technical Product Manager — AI Ecosystems",
    company: "IBM",
    location: "Houston, TX",
    highlights: [
      "Led NVIDIA GPU integration into IBM storage reference architectures",
      "Deployed Red Hat Validated Patterns (RAG-LLM, Medical Diagnosis AI, Credit Card Fraud Detection) on IBM Storage Fusion",
      "Architected RAG-based AI research assistant on OpenShift using IBM Fusion, watsonx.ai, Qdrant vector DB, and Langflow",
      "Led IBM Storage Fusion Quick Start program, benchmarked against NVIDIA BasePod",
      "Developed AMD GPU validation strategy modeled on NVIDIA's CANDOR/BasePod framework",
      "Developed partner ecosystem mapping covering 19 partners across four categories",
    ],
  },
  {
    period: "Jul 2021 – Feb 2024",
    title: "Sr. Customer Success Architect",
    company: "IBM",
    location: "Houston, TX",
    highlights: [
      "Led IBM Cloud technical strategy for sales and post-sale engagements",
      "Designed tailored IBM Cloud solutions producing measurable outcomes for assigned market segments",
      "Directed technology adoption initiatives from discovery through implementation",
      "Executed SAP HANA certification for IBM storage",
    ],
  },
  {
    period: "Feb 2019 – Jan 2021",
    title: "Principal Architect",
    company: "Hewlett Packard Enterprise",
    location: "",
    highlights: [
      "Led design and validation of workload-based storage solutions",
      "Managed SWAT engagement customer experience",
      "Directed technical collaborations with ISV partners",
      "Enabled global presales and partner teams through targeted training",
      "Analyzed major HCI platforms and provided strategic competitive insights",
    ],
  },
  {
    period: "Sep 2017 – Jan 2019",
    title: "Product Engineer III",
    company: "Rackspace – VMware R&D",
    location: "",
    highlights: [
      "Designed VMware product features by coordinating stakeholders",
      "Built and influenced senior-stakeholder partnerships to guide product decisions",
    ],
  },
  {
    period: "Jul 2015 – Aug 2017",
    title: "Sr. System Engineer",
    company: "VMware",
    location: "",
    highlights: [
      "Expert in VMware vSAN — storage virtualization, HCI, performance optimization",
      "Designed and implemented virtualization solutions for enterprise customers",
      "Consulted on Private Cloud deployments using VMware tooling",
    ],
  },
  {
    period: "Jan 2014 – Jun 2015",
    title: "Presales Manager SAARC",
    company: "VEEAM Software",
    location: "",
    highlights: [
      "Architected and deployed Veeam backup solutions across enterprise customers",
      "Expanded cloud backup adoption by integrating AWS and Azure",
      "Drove regional market expansion across SAARC",
    ],
  },
  {
    period: "Feb 2012 – Jan 2014",
    title: "Presales Solutions Architect",
    company: "Quest Software (Dell)",
    location: "",
    highlights: [
      "Cultivated key client relationships and advised through full sales cycles",
      "Designed quarterly pan-India channel training sessions",
      "Led POC testing and presented technical findings to CIOs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            Experience
          </h2>
        </div>

        <div className="md:col-span-2 space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="relative pl-5 border-l-2" style={{ borderColor: "var(--border)" }}>
              <div
                className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
                {job.period}
              </p>
              <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                {job.title}
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>
                {job.company}{job.location ? ` · ${job.location}` : ""}
              </p>
              <ul className="space-y-1.5">
                {job.highlights.map((h, j) => (
                  <li key={j} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                    <span style={{ color: "var(--accent)" }}>→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-sm pl-5 italic" style={{ color: "var(--muted)" }}>
            Earlier roles: HCL (Sr. Specialist), Convergys/Microsoft (Sr. Technical Support Engineer), vCustomer — 2003–2012.
          </p>
        </div>
      </div>
    </section>
  );
}
