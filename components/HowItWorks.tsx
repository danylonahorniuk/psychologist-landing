const steps = [
  {
    num: "01",
    title: "Перший контакт",
    text: "Ти пишеш або телефонуєш. Ми коротко знайомимось і домовляємось про зручний час для першої сесії.",
  },
  {
    num: "02",
    title: "Діагностична сесія",
    text: "На першій зустрічі я слухаю твою ситуацію і разом ми визначаємо запит та цілі подальшої роботи.",
  },
  {
    num: "03",
    title: "Регулярна робота",
    text: "Ми зустрічаємось 1–2 рази на тиждень. Кожна сесія будується на твоїх потребах тут і зараз.",
  },
  {
    num: "04",
    title: "Результат",
    text: "Відчутні зміни, нові стратегії поведінки і підтримка на шляху до стабільного внутрішнього добробуту.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: "100px 80px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
            Процес
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
            Як відбувається
            <br />
            <em style={{ fontStyle: "italic", color: "var(--sage)" }}>терапія</em>
          </h2>
        </div>

        {/* Steps: 4-column grid with border separators */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--border)" }}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              style={{
                padding: "40px 40px 48px",
                borderRight: i < steps.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "52px",
                fontWeight: 400,
                color: "var(--sand)",
                lineHeight: 1,
                marginBottom: "28px",
              }}>
                {s.num}
              </div>
              <h3 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "19px",
                fontWeight: 500,
                marginBottom: "12px",
                color: "var(--text)",
                lineHeight: 1.3,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontSize: "14px",
                color: "var(--muted)",
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
