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

        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "56px",
            gap: "40px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(32px, 3.2vw, 46px)",
              fontWeight: 500,
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              maxWidth: "420px",
            }}
          >
            З чим я можу
            <br />
            <em style={{ fontStyle: "italic", color: "var(--sage)" }}>
              допомогти
            </em>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "360px",
              textAlign: "right",
            }}
          >
            Кожна ситуація унікальна. Нижче — найпоширеніші запити,
            з якими приходять до мене клієнти.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {topics.map((t) => (
            <div
              key={t.num}
              className="card-hover"
              style={{
                background: t.accent ? "var(--sage)" : "var(--bg-warm)",
                borderRadius: "24px",
                padding: "40px 32px",
                border: t.accent ? "none" : "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "48px",
                  fontWeight: 400,
                  lineHeight: 1,
                  marginBottom: "24px",
                  color: t.accent ? "rgba(255,255,255,0.2)" : "var(--sand)",
                }}
              >
                {t.num}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  marginBottom: "12px",
                  color: t.accent ? "#fff" : "var(--text)",
                  lineHeight: 1.25,
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.68,
                  fontWeight: 300,
                  color: t.accent ? "rgba(255,255,255,0.78)" : "var(--muted)",
                  marginTop: "auto",
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
