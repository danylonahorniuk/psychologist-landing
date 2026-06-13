const plans = [
  {
    name: "Разова сесія",
    price: "1 500 ₴",
    period: "50 хвилин · одноразово",
    features: [
      "Індивідуальна консультація",
      "Онлайн або офлайн",
      "Конфіденційність гарантована",
      "Домашнє завдання та матеріали",
    ],
    featured: false,
  },
  {
    name: "Пакет 5 сесій",
    price: "6 500 ₴",
    period: "50 хвилин · 5 зустрічей",
    badge: "Найпопулярніше",
    features: [
      "Економія 1 000 ₴",
      "Системна робота над запитом",
      "Підтримка в чаті між сесіями",
      "Матеріали та практичні вправи",
      "Гнучкий графік",
    ],
    featured: true,
  },
  {
    name: "Пакет 10 сесій",
    price: "11 500 ₴",
    period: "50 хвилин · 10 зустрічей",
    features: [
      "Економія 3 500 ₴",
      "Глибока трансформаційна робота",
      "Підтримка між сесіями",
      "Персональна програма роботи",
      "Підсумкова діагностика",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "100px 80px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
            Ціни
          </span>
          <div style={{ width: "32px", height: "2px", background: "var(--sage)", marginTop: "12px", marginBottom: "20px", borderRadius: "1px" }} />
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(36px, 3.5vw, 52px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--text)",
          }}>
            Оберіть свій<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>формат</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", alignItems: "start" }}>
          {plans.map((p) => (
            <div
              key={p.name}
              className="card-hover"
              style={{
                position: "relative",
                borderRadius: "24px",
                padding: "48px 44px",
                background: p.featured ? "var(--sage)" : "var(--bg-warm)",
                border: p.featured ? "none" : "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.badge && (
                <span style={{
                  position: "absolute",
                  top: "-14px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "var(--text)",
                  color: "#fff",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  padding: "6px 20px",
                  borderRadius: "20px",
                  whiteSpace: "nowrap" as const,
                }}>
                  {p.badge}
                </span>
              )}

              <div style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                fontWeight: 600,
                color: p.featured ? "rgba(255,255,255,0.55)" : "var(--muted)",
                marginBottom: "16px",
              }}>
                {p.name}
              </div>

              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "48px",
                fontWeight: 500,
                lineHeight: 1,
                color: p.featured ? "#fff" : "var(--text)",
                marginBottom: "6px",
              }}>
                {p.price}
              </div>

              <div style={{
                fontSize: "13px",
                color: p.featured ? "rgba(255,255,255,0.55)" : "var(--muted)",
                marginBottom: "32px",
              }}>
                {p.period}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", margin: "0 0 36px 0", padding: 0, flex: 1 }}>
                {p.features.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14px",
                    color: p.featured ? "rgba(255,255,255,0.78)" : "var(--muted)",
                    lineHeight: 1.5,
                  }}>
                    <span style={{ color: p.featured ? "rgba(255,255,255,0.55)" : "var(--sage)", fontSize: "12px", marginTop: "2px", flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact" style={{
                display: "block",
                textAlign: "center" as const,
                padding: "14px 32px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                background: p.featured ? "#fff" : "transparent",
                color: p.featured ? "var(--sage)" : "var(--text)",
                border: p.featured ? "none" : "1.5px solid var(--border)",
              }}>
                Записатись
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
