import FadeIn from "@/components/FadeIn";

const interests = [
  {
    icon: "🚗",
    title: "Cars",
    description:
      "Passionate about automotive engineering — from classic muscle to modern EVs. The intersection of performance engineering and technology is endlessly fascinating.",
  },
  {
    icon: "⌨️",
    title: "Mechanical Keyboards",
    description:
      "Collector and enthusiast. Dialing in the perfect switch, keycap, and layout. Ergonomics, acoustics, and craft in a single object.",
  },
  {
    icon: "🏓",
    title: "Ping Pong",
    description:
      "Table tennis keeps the mind sharp. Fast reflexes, pattern recognition, strategy — not unlike debugging a production incident at 2 AM.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="max-w-5xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="mb-16">
          <p
            className="section-label text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)" }}
          >
            Beyond Work
          </p>
          <h2
            className="text-3xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            What keeps me sharp
          </h2>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-3 gap-8">
        {interests.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.1}>
            <div className="group">
              <div
                className="text-4xl mb-5 w-16 h-16 rounded-2xl flex items-center justify-center border transition-all group-hover:scale-110 group-hover:border-[var(--accent)]"
                style={{
                  background: "var(--card)",
                  borderColor: "var(--border)",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
