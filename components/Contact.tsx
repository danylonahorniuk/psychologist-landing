import Image from "next/image";

const contactDetails = [
  { label: "Email",            value: "iryna@psychology.ua" },
  { label: "Telegram / Viber", value: "+38 067 000 00 00"   },
  { label: "Графік прийому",   value: "Пн–Пт, 10:00–20:00" },
];

export default function Contact() {
  return (
    <>
      <style>{`
        .cta-btn-primary {
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .cta-btn-primary:hover {
          background: #7a9870 !important;
          box-shadow: 0 8px 28px rgba(143,168,135,0.35);
          transform: translateY(-2px);
        }
        .cta-btn-secondary {
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        .cta-btn-secondary:hover {
          background: var(--bg-warm) !important;
          border-color: var(--sage) !important;
          color: var(--sage) !important;
          transform: translateY(-2px);
        }
      `}</style>

      {/* CTA card */}
      <section style={{ padding: "100px 80px", background: "var(--bg)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            position: "relative",
            background: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 48px rgba(44,44,44,0.07)",
            padding: "72px 80px 56px",
            textAlign: "center",
          }}>
            {/* Left branch — overflows outside card */}
            <div style={{ position: "absolute", top: "-40px", left: "-30px", width: "180px", height: "100%", pointerEvents: "none", zIndex: 0 }}>
              <Image src="/cta-left.png" alt="" fill style={{ objectFit: "contain", objectPosition: "left center" }} sizes="180px" />
            </div>

            {/* Right branch */}
            <div style={{ position: "absolute", top: "80px", right: "-20px", width: "160px", height: "100%", pointerEvents: "none", zIndex: 0 }}>
              <Image src="/cta-right.png" alt="" fill style={{ objectFit: "contain", objectPosition: "right center" }} sizes="160px" />
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 500,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "20px",
              }}>
                Готові зробити перший<br />крок до змін?
              </h2>

              <p style={{
                fontSize: "15px",
                color: "var(--muted)",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "500px",
                margin: "0 auto 40px",
              }}>
                Психотерапія починається з довіри та безпеки.<br />
                Я створюю простір, де вас почують, зрозуміють і підтримають.
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" as const, marginBottom: "32px" }}>
                <a href="#contact" className="cta-btn-primary" style={{
                  display: "inline-block",
                  background: "var(--sage)",
                  color: "#fff",
                  padding: "16px 44px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 400,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                }}>
                  Записатися на консультацію
                </a>
                <a href="#faq" className="cta-btn-secondary" style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "var(--text)",
                  padding: "16px 44px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 400,
                  textDecoration: "none",
                  border: "1.5px solid var(--sand)",
                  letterSpacing: "0.01em",
                }}>
                  Поставити запитання
                </a>
              </div>

              {/* Bottom note */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <div style={{ position: "relative", width: "48px", height: "48px", flexShrink: 0 }}>
                  <Image src="/cta-small.png" alt="" fill style={{ objectFit: "contain" }} sizes="48px" />
                </div>
                <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300 }}>
                  Відповім особисто та допоможу обрати зручний формат роботи.
                </span>
              </div>
            </div>
          </div>
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
