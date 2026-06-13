const contactDetails = [
  { label: "Email",            value: "iryna@psychology.ua" },
  { label: "Telegram / Viber", value: "+38 067 000 00 00"   },
  { label: "Графік прийому",   value: "Пн–Пт, 10:00–20:00" },
];

export default function Contact() {
  return (
    <>
      {/* Dark CTA band */}
      <section style={{ padding: "96px 80px", background: "var(--text)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          width: "500px", height: "500px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.05)",
          top: "50%", right: "5%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          width: "300px", height: "300px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          top: "50%", right: "14%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px", flexWrap: "wrap" as const }}>
          <div>
            <h2 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(32px, 3.8vw, 54px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#FAF8F5",
              maxWidth: "560px",
            }}>
              Готова зробити перший крок
              <br />
              <em style={{ fontStyle: "italic", color: "var(--sage)" }}>разом із тобою?</em>
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(250,248,245,0.5)", marginTop: "16px", fontWeight: 300 }}>
              Запишись на безкоштовну 15-хвилинну консультацію.
            </p>
          </div>
          <a href="#contact" style={{
            display: "inline-block",
            background: "var(--sage)",
            color: "#fff",
            padding: "18px 48px",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
            textDecoration: "none",
            flexShrink: 0,
          }}>
            Записатись на сесію
          </a>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contact" style={{ padding: "100px 80px", background: "var(--bg-warm)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: "80px", alignItems: "start" }}>

          {/* Left */}
          <div>
            <span style={{ fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "var(--sage)", fontWeight: 500 }}>
              Контакти
            </span>
            <div style={{ width: "32px", height: "2px", background: "var(--sage)", marginTop: "12px", marginBottom: "20px", borderRadius: "1px" }} />
            <h2 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(32px, 3vw, 46px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "var(--text)",
              marginBottom: "20px",
            }}>
              Зробимо<br />перший крок
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.72, fontWeight: 300, marginBottom: "48px" }}>
              Заповни форму або напиши напряму — я відповідаю протягом 24 годин
              і ми разом знайдемо зручний час для нашої першої зустрічі.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactDetails.map((d) => (
                <div key={d.label} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--muted)", fontWeight: 600 }}>
                    {d.label}
                  </span>
                  <span style={{ fontSize: "15px", color: "var(--text)", fontWeight: 400 }}>{d.value}</span>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: "40px",
              width: "100%",
              height: "180px",
              background: "var(--sand)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              color: "var(--muted)",
              opacity: 0.6,
            }}>
              📍 Карта розташування кабінету
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "var(--bg)", borderRadius: "24px", padding: "52px 48px" }}>
            <h3 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "26px",
              fontWeight: 500,
              marginBottom: "32px",
              color: "var(--text)",
            }}>
              Записатись на сесію
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Ваше ім'я", type: "text", placeholder: "Як до вас звертатись?" },
                { label: "Телефон або email", type: "text", placeholder: "+38 0__ ___ ____" },
              ].map((f) => (
                <div key={f.label}>
                  <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--muted)", marginBottom: "8px" }}>
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    style={{ width: "100%", padding: "14px 18px", border: "1.5px solid var(--border)", borderRadius: "10px", fontSize: "15px", color: "var(--text)", background: "var(--bg)", outline: "none", fontFamily: "inherit", boxSizing: "border-box" as const }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--muted)", marginBottom: "8px" }}>
                  Формат роботи
                </label>
                <select style={{ width: "100%", padding: "14px 18px", border: "1.5px solid var(--border)", borderRadius: "10px", fontSize: "15px", color: "var(--text)", background: "var(--bg)", outline: "none", fontFamily: "inherit" }}>
                  <option>Індивідуальна терапія</option>
                  <option>Робота з парою</option>
                  <option>Онлайн-коучинг</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "var(--muted)", marginBottom: "8px" }}>
                  Коротко про запит (необов&apos;язково)
                </label>
                <textarea
                  placeholder="З чим ви хочете попрацювати?"
                  rows={4}
                  style={{ width: "100%", padding: "14px 18px", border: "1.5px solid var(--border)", borderRadius: "10px", fontSize: "15px", color: "var(--text)", background: "var(--bg)", outline: "none", fontFamily: "inherit", resize: "vertical" as const, boxSizing: "border-box" as const }}
                />
              </div>

              <button style={{
                width: "100%",
                padding: "16px",
                background: "var(--text)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.02em",
                cursor: "pointer",
                fontFamily: "inherit",
                marginTop: "4px",
              }}>
                Надіслати заявку →
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
