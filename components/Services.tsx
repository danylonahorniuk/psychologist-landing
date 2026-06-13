const services = [
  {
    num: "01",
    tag: "Індивідуально",
    title: "Індивідуальна терапія",
    text: "Особистий простір для тебе. Ми працюємо з тривогою, травмою, самооцінкою — над тим, що важливо саме тобі. Очно або онлайн.",
    featured: false,
  },
  {
    num: "02",
    tag: "Для пар",
    title: "Робота з парами",
    text: "Для пар, які хочуть покращити комунікацію, вийти з кризи або підготуватись до нового етапу спільного шляху.",
    featured: true,
  },
  {
    num: "03",
    tag: "Онлайн",
    title: "Коучинг",
    text: "Орієнтований на результат формат для змін у кар'єрі, стосунках або якості життя. Де б ти не знаходився/-лась.",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 80px", background: "var(--bg-warm)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
            Послуги
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
            Формати<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>роботи</em>
          </h2>
        </div>

        {/* 3-column cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="card-hover"
              style={{
                background: s.featured ? "var(--sage)" : "var(--bg)",
                borderRadius: "24px",
                padding: "48px 44px",
                border: s.featured ? "none" : "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                minHeight: "340px",
              }}
            >
              {/* Top row: tag + number */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "auto" }}>
                <span style={{
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  fontWeight: 600,
                  color: s.featured ? "rgba(255,255,255,0.65)" : "var(--muted)",
                  background: s.featured ? "rgba(255,255,255,0.14)" : "var(--bg-warm)",
                  padding: "5px 14px",
                  borderRadius: "20px",
                }}>
                  {s.tag}
                </span>
                <span style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  color: s.featured ? "rgba(255,255,255,0.2)" : "var(--sand)",
                  lineHeight: 1,
                }}>
                  {s.num}
                </span>
              </div>

              {/* Bottom: content */}
              <div style={{ marginTop: "48px" }}>
                <h3 style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  marginBottom: "12px",
                  color: s.featured ? "#fff" : "var(--text)",
                  lineHeight: 1.25,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: "14.5px",
                  lineHeight: 1.72,
                  fontWeight: 300,
                  color: s.featured ? "rgba(255,255,255,0.78)" : "var(--muted)",
                  marginBottom: "28px",
                }}>
                  {s.text}
                </p>
                <a href="#contact" style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: s.featured ? "#fff" : "var(--sage)",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  borderBottom: s.featured ? "1px solid rgba(255,255,255,0.4)" : "1px solid var(--sage)",
                  paddingBottom: "2px",
                }}>
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
