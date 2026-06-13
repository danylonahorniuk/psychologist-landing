const topics = [
  {
    num: "01",
    title: "Тривога і стрес",
    text: "Допоможу розібратися з причинами тривоги, навчитися регулювати стан і повернути відчуття спокою та контролю над своїм життям.",
    accent: true,
  },
  {
    num: "02",
    title: "Стосунки та комунікація",
    text: "Вихід із токсичних патернів, побудова здорових кордонів, покращення комунікації з партнером, родиною чи колегами.",
    accent: false,
  },
  {
    num: "03",
    title: "Самооцінка і впевненість",
    text: "Робота з внутрішнім критиком, синдромом самозванця, страхом оцінки — щоб ти міг/-ла спиратися на себе, а не шукати схвалення ззовні.",
    accent: false,
  },
  {
    num: "04",
    title: "Кризи і вигорання",
    text: "Підтримка в моменти втрати сенсу, змін, втоми та емоційного спустошення. Допоможу знайти ресурс і рухатись далі.",
    accent: true,
  },
];

export default function Topics() {
  return (
    <section style={{ padding: "100px 80px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "flex-end", marginBottom: "64px" }}>
          <div>
            <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
              Напрямки
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
              З чим я можу
              <br />
              <em style={{ fontStyle: "italic", color: "var(--sage)" }}>допомогти</em>
            </h2>
          </div>
          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.72,
            fontWeight: 300,
            maxWidth: "380px",
            marginLeft: "auto",
          }}>
            Кожна ситуація унікальна. Нижче — найпоширеніші запити,
            з якими приходять до мене клієнти.
          </p>
        </div>

        {/* 2×2 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {topics.map((t) => (
            <div
              key={t.num}
              className="card-hover"
              style={{
                background: t.accent ? "var(--sage)" : "var(--bg-warm)",
                borderRadius: "24px",
                padding: "52px 56px",
                border: t.accent ? "none" : "1px solid var(--border)",
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "32px",
                alignItems: "flex-start",
              }}
            >
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "56px",
                fontWeight: 400,
                lineHeight: 1,
                color: t.accent ? "rgba(255,255,255,0.22)" : "var(--sand)",
                paddingTop: "4px",
              }}>
                {t.num}
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  marginBottom: "14px",
                  color: t.accent ? "#fff" : "var(--text)",
                  lineHeight: 1.25,
                }}>
                  {t.title}
                </h3>
                <p style={{
                  fontSize: "14.5px",
                  lineHeight: 1.72,
                  fontWeight: 300,
                  color: t.accent ? "rgba(255,255,255,0.78)" : "var(--muted)",
                }}>
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
