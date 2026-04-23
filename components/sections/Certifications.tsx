import FadeIn from "@/components/FadeIn";

const certs = [
  { name: "NVIDIA-Certified Associate: AI Operations", issuer: "NVIDIA", year: "2026", icon: "🟢" },
  { name: "TOGAF 9", issuer: "The Open Group", year: "", icon: "🔷" },
  { name: "VCP-DCV 3/4/5/6 · Desktop · Cloud", issuer: "VMware", year: "", icon: "⬡" },
  { name: "AWS Certified Solution Architect", issuer: "Amazon Web Services", year: "", icon: "☁️" },
  { name: "VEEAM Certified", issuer: "VEEAM", year: "", icon: "🔵" },
  { name: "Nutanix Platform Professional (NPP)", issuer: "Nutanix", year: "", icon: "🟣" },
  { name: "IBM Cloud Certification", issuer: "IBM", year: "", icon: "🔵" },
];

const edu = [
  {
    degree: "M.B.A.",
    school: "U.P. Technical University, India",
    period: "2005 – 2007",
  },
  {
    degree: "Bachelor's in Computer Application",
    school: "CCS University, India",
    period: "2000 – 2003",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24"
      style={{ background: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p
              className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Credentials
            </p>
            <h2
              className="text-3xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Certifications & education
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certs */}
          <FadeIn direction="left">
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: "var(--muted)" }}
            >
              Certifications
            </h3>
            <div className="space-y-3">
              {certs.map((c) => (
                <div
                  key={c.name}
                  className="card-lift flex items-center gap-4 p-4 rounded-xl border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--background)",
                  }}
                >
                  <span className="text-xl shrink-0">{c.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--foreground)" }}
                    >
                      {c.name}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                      {c.issuer}{c.year ? ` · ${c.year}` : ""}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn direction="right" delay={0.1}>
            <h3
              className="text-sm font-semibold uppercase tracking-wider mb-6"
              style={{ color: "var(--muted)" }}
            >
              Education
            </h3>
            <div className="space-y-4">
              {edu.map((e) => (
                <div
                  key={e.degree}
                  className="card-lift p-5 rounded-xl border"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--background)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: "var(--foreground)" }}
                      >
                        {e.degree}
                      </p>
                      <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                        {e.school}
                      </p>
                    </div>
                    <span
                      className="text-xs shrink-0 font-medium"
                      style={{ color: "var(--muted-light)" }}
                    >
                      {e.period}
                    </span>
                  </div>
                </div>
              ))}

              {/* IBM Community writing */}
              <div
                className="card-lift p-5 rounded-xl border mt-8"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--background)",
                }}
              >
                <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                  Published Technical Writing
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  IBM Community platform — GPU-free RAG-LLM deployment, AI-driven fraud
                  detection, medical diagnosis AI on IBM Fusion with Red Hat Validated Patterns.
                </p>
                <a
                  href="/blog"
                  className="inline-block mt-3 text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  Read on this site →
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
