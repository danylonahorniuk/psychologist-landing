const cells = [
  { gradient: "linear-gradient(135deg, #E8EFE6 0%, #D4C5B0 100%)", label: "Кабінет" },
  { gradient: "linear-gradient(145deg, #F0EBE3 0%, #E8EFE6 100%)", label: "Простір" },
  { gradient: "linear-gradient(135deg, #C4B49E 0%, #D4C5B0 100%)", label: "Атмосфера" },
  { gradient: "linear-gradient(155deg, #E6EBF0 0%, #C4B49E 100%)", label: "Сесія" },
  { gradient: "linear-gradient(135deg, #E8EFE6 0%, #F0EBE3 100%)", label: "Деталі" },
  { gradient: "linear-gradient(145deg, #D4C5B0 0%, #E8EFE6 100%)", label: "Комфорт" },
];

export default function Gallery() {
  return (
    <section style={{ padding: "100px 80px", background: "var(--bg-warm)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
              Атмосфера
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
              Простір для<br /><em style={{ fontStyle: "italic", color: "var(--sage)" }}>змін</em>
            </h2>
          </div>
          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.72,
            fontWeight: 300,
            maxWidth: "360px",
            marginLeft: "auto",
          }}>
            Безпечна, тепла атмосфера — це основа терапевтичної роботи.
            Тут можна бути собою.
          </p>
        </div>

        {/* 3×2 photo grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 240px)",
          gap: "16px",
        }}>
          {cells.map((c, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                borderRadius: "20px",
                background: c.gradient,
                display: "flex",
                alignItems: "flex-end",
                padding: "20px 24px",
                overflow: "hidden",
              }}
            >
              <span style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                color: "rgba(44,44,44,0.5)",
                fontWeight: 600,
              }}>
                {c.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
