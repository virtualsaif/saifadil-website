import FadeIn from "@/components/FadeIn";

const areas = [
  {
    icon: "🤖",
    title: "AI Implementation",
    description:
      "On-premises AI inference, RAG pipelines, GPU and GPU-free workloads. Red Hat Validated Patterns on IBM Storage Fusion — medical diagnosis AI, fraud detection, RAG-LLM.",
    stat: "3 validated patterns",
  },
  {
    icon: "💾",
    title: "Enterprise Storage",
    description:
      "Software-defined storage, IBM Storage Fusion, Ceph, Data Foundation. Architecture, certification, and ISV partner ecosystem development.",
    stat: "19 ecosystem partners",
  },
  {
    icon: "☁️",
    title: "Cloud & Virtualization",
    description:
      "VMware vSAN expert (VCP-DCV 3–6), HCI, hybrid cloud strategy. AWS CSA, IBM Cloud, Nutanix NPP. Private and hybrid cloud architecture.",
    stat: "VCP 3/4/5/6 certified",
  },
  {
    icon: "🔒",
    title: "Data Protection",
    description:
      "Enterprise backup and disaster recovery. Veeam architecture across on-premises and cloud (AWS/Azure). SAP HANA certification.",
    stat: "VEEAM certified",
  },
  {
    icon: "🏗️",
    title: "Solution Architecture",
    description:
      "Technical blueprints, quick-start guides, reference architectures. IBM Storage Fusion Quick Start benchmarked against NVIDIA BasePod.",
    stat: "TOGAF 9 certified",
  },
  {
    icon: "🤝",
    title: "Partner Ecosystems",
    description:
      "ISV and OEM collaboration strategy. IBM–Lenovo AI COE, lakehouse vendor integrations, go-to-market alignment.",
    stat: "IBM · HPE · VMware",
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="py-24"
      style={{ background: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <p
                className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Expertise
              </p>
              <h2
                className="text-3xl font-bold tracking-tight"
                style={{ color: "var(--foreground)" }}
              >
                What I bring to the table
              </h2>
            </div>
            <p
              className="text-sm max-w-xs"
              style={{ color: "var(--muted)" }}
            >
              22+ years across the full infrastructure stack — from bare-metal storage to AI workloads.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a, i) => (
            <FadeIn key={a.title} delay={i * 0.07}>
              <div
                className="card-lift p-6 rounded-2xl border h-full flex flex-col gap-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                <div className="text-3xl">{a.icon}</div>
                <div className="flex-1">
                  <h3
                    className="font-semibold mb-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {a.description}
                  </p>
                </div>
                <div
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg w-fit"
                  style={{
                    background: "var(--glow)",
                    color: "var(--accent)",
                  }}
                >
                  {a.stat}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
