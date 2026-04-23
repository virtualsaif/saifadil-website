const certs = [
  { name: "NVIDIA-Certified Associate: AI Operations", issuer: "NVIDIA", year: "2026" },
  { name: "TOGAF 9", issuer: "The Open Group", year: "" },
  { name: "VCP-DCV 3/4/5/6 · Desktop · Cloud", issuer: "VMware", year: "" },
  { name: "AWS Certified Solution Architect", issuer: "Amazon Web Services", year: "" },
  { name: "VEEAM Certified", issuer: "VEEAM", year: "" },
  { name: "Nutanix Platform Professional (NPP)", issuer: "Nutanix", year: "" },
  { name: "IBM Cloud Certification", issuer: "IBM", year: "" },
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
    <section id="certifications" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            Credentials
          </h2>
        </div>

        <div className="md:col-span-2 space-y-10">
          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--foreground)" }}>
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certs.map((c) => (
                <div
                  key={c.name}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: "var(--border)", background: "var(--card, #f8fafc)" }}
                >
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {c.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                    {c.issuer}{c.year ? ` · ${c.year}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--foreground)" }}>
              Education
            </h3>
            <div className="space-y-3">
              {edu.map((e) => (
                <div key={e.degree} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                      {e.degree}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {e.school}
                    </p>
                  </div>
                  <p className="text-xs shrink-0 ml-4" style={{ color: "var(--muted)" }}>
                    {e.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
