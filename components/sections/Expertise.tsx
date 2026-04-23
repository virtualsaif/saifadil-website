const areas = [
  {
    icon: "🤖",
    title: "AI Implementation",
    description:
      "On-premises AI inference, RAG pipelines, GPU and GPU-free workloads. Red Hat Validated Patterns on IBM Storage Fusion — medical diagnosis AI, fraud detection, RAG-LLM.",
  },
  {
    icon: "💾",
    title: "Enterprise Storage",
    description:
      "Software-defined storage, IBM Storage Fusion, Ceph, Data Foundation. Architecture, certification, and ISV partner ecosystem development across 19 compute/networking/software/cloud partners.",
  },
  {
    icon: "☁️",
    title: "Cloud & Virtualization",
    description:
      "VMware vSAN expert (VCP-DCV 3–6), HCI, hybrid cloud strategy. AWS CSA, IBM Cloud, Nutanix NPP. Private and hybrid cloud architecture for enterprise workloads.",
  },
  {
    icon: "🔒",
    title: "Data Protection",
    description:
      "Enterprise backup and disaster recovery design. Veeam architecture across on-premises and cloud (AWS/Azure). SAP HANA certification and production-ready enterprise deployments.",
  },
  {
    icon: "🏗️",
    title: "Solution Architecture",
    description:
      "Technical blueprints, quick-start guides, reference architectures. Led IBM Storage Fusion Quick Start program benchmarked against NVIDIA BasePod and Red Hat AI validated offerings.",
  },
  {
    icon: "🤝",
    title: "Partner Ecosystems",
    description:
      "ISV and OEM collaboration strategy. IBM–Lenovo AI COE, lakehouse vendor integrations (Cloudera), go-to-market alignment, and co-engineering across compute, networking, and software.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            Expertise
          </h2>
        </div>
        <div className="md:col-span-2">
          <div className="grid sm:grid-cols-2 gap-6">
            {areas.map((a) => (
              <div
                key={a.title}
                className="p-5 rounded-xl border transition-colors hover:border-[var(--accent)]"
                style={{ borderColor: "var(--border)", background: "var(--card, #f8fafc)" }}
              >
                <div className="text-2xl mb-3">{a.icon}</div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
