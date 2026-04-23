const interests = [
  {
    icon: "🚗",
    title: "Cars",
    description:
      "Passionate about automotive engineering and design — from classic muscle to modern EVs. The intersection of performance engineering and technology is endlessly fascinating.",
  },
  {
    icon: "⌨️",
    title: "Mechanical Keyboards",
    description:
      "Collector and enthusiast. There's something satisfying about dialing in the perfect switch, keycap, and layout. The intersection of ergonomics, acoustics, and craft.",
  },
  {
    icon: "🏓",
    title: "Ping Pong",
    description:
      "Table tennis keeps the mind sharp and competitive. Fast reflexes, pattern recognition, and strategy — not unlike debugging a production incident at 2 AM.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="max-w-5xl mx-auto px-6 py-20 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
            Beyond Work
          </h2>
        </div>

        <div className="md:col-span-2">
          <div className="grid sm:grid-cols-3 gap-6">
            {interests.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
