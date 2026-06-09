const services = [
  {
    emoji: "🌱",
    tag: "Індивідуально",
    title: "Індивідуальна терапія",
    text: "Особистий простір для тебе. Ми працюємо з тривогою, травмою, самооцінкою — над тим, що важливо саме тобі. Очно або онлайн.",
    bg: "#E8EFE6",
  },
  {
    emoji: "🤝",
    tag: "Для пар",
    title: "Робота з парами",
    text: "Для пар, які хочуть покращити комунікацію, вийти з кризи або підготуватись до нового етапу спільного шляху.",
    bg: "#E6EBF0",
  },
  {
    emoji: "💻",
    tag: "Онлайн",
    title: "Коучинг",
    text: "Орієнтований на результат формат для змін у кар'єрі, стосунках або якості життя. Де б ти не знаходився/-лась.",
    bg: "#F0EBE3",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px 80px", background: "var(--bg-warm)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 3.5vw, 52px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.01em" }}>
            Чим я<br />можу допомогти
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="card-hover"
              style={{
                background: "#fff",
                borderRadius: "28px",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              {/* Photo area */}
              <div style={{ width: "100%", height: "200px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span style={{ fontSize: "56px", opacity: 0.55 }}>{s.emoji}</span>
                <span style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  background: "rgba(255,255,255,0.72)",
                  padding: "5px 12px",
                  borderRadius: "20px",
                }}>
                  {s.tag}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "32px 36px 40px" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "22px", fontWeight: 500, marginBottom: "12px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.68, fontWeight: 300, marginBottom: "24px" }}>
                  {s.text}
                </p>
                <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500, color: "var(--sage)", textDecoration: "none", letterSpacing: "0.03em" }}>
                  Записатись →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
