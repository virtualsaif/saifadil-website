export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            About
          </h2>
        </div>
        <div className="md:col-span-2 space-y-5">
          <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)" }}>
            I&apos;m a Sr. Technology Architect with over two decades of experience at the intersection
            of infrastructure, cloud, and artificial intelligence. My career spans roles at IBM,
            Hewlett Packard Enterprise, VMware, Rackspace, VEEAM, Quest Software (Dell), and HCL.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Today I focus on AI ecosystem strategy — architecting reference patterns for on-premises
            AI inference, building partner ecosystems, and helping field teams deploy GPU and GPU-free
            AI workloads on enterprise storage platforms.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Before AI was the headline, I spent years deep in VMware vSAN, HCI, software-defined
            storage, and data protection — giving me a grounded, pragmatic view of what it actually
            takes to run production workloads at scale.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
            Outside the office: cars, mechanical keyboards, and ping pong. Houston-based,
            globally minded.
          </p>
        </div>
      </div>
    </section>
  );
}
