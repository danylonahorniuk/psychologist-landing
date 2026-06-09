const problems = [
  {
    num: "01",
    title: "Тривога і стрес",
    text: "Постійне відчуття, що щось піде не так. Серце б'ється частіше без причини, ти не можеш розслабитись і насолоджуватись тим, що є.",
    dark: true,
  },
  {
    num: "02",
    title: "Емоційне вигорання",
    text: "Ти робиш все правильно, але відчуваєш порожнечу. Немає сил, немає радості, немає бажання рухатись далі.",
    dark: false,
  },
  {
    num: "03",
    title: "Складнощі у стосунках",
    text: "Одні й ті ж конфлікти по колу. Відчуття, що тебе не розуміють. Страх близькості або залежність від думки партнера.",
    dark: false,
  },
  {
    num: "04",
    title: "Втрата сенсу та напрямку",
    text: "«Хто я? Чого я справді хочу?» Відчуття, що живеш чужим сценарієм і не знаєш, як повернутись до себе.",
    dark: true,
  },
];

export default function Problems() {
  return (
    <section style={{ padding: "120px 80px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(36px, 3.5vw, 52px)", fontWeight: 500, lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "56px" }}>
          Ти не самотній/а<br />у своїх труднощах
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {problems.map((p) => (
            <div
              key={p.num}
              className="card-hover"
              style={{
                background: p.dark ? "var(--sage)" : "var(--bg-warm)",
                borderRadius: "28px",
                padding: "52px 48px",
                border: p.dark ? "none" : "1px solid var(--border)",
              }}
            >
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "56px",
                fontWeight: 400,
                lineHeight: 1,
                marginBottom: "20px",
                color: p.dark ? "rgba(255,255,255,0.25)" : "var(--sand)",
              }}>
                {p.num}
              </div>
              <h3 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "22px",
                fontWeight: 500,
                marginBottom: "12px",
                color: p.dark ? "#fff" : "var(--text)",
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: "15px",
                lineHeight: 1.68,
                fontWeight: 300,
                color: p.dark ? "rgba(255,255,255,0.78)" : "var(--muted)",
              }}>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
