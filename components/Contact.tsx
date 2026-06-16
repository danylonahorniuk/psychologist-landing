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
        .contact-submit {
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .contact-submit:hover {
          background: #7a9870 !important;
          box-shadow: 0 8px 24px rgba(143,168,135,0.3);
          transform: translateY(-1px);
        }
      `}</style>

      {/* CTA card */}
      <section className="s-pad" style={{ background: "var(--bg)" }}>
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
                Почніть шлях до себе<br />вже сьогодні
              </h2>

              <p style={{
                fontSize: "15px",
                color: "var(--muted)",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "500px",
                margin: "0 auto 40px",
              }}>
                Перша розмова — це просто знайомство.<br />
                Без тиску, без зобов'язань. Тільки ви і ваш запит.
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0px" }}>
                <div style={{ position: "relative", width: "48px", height: "48px", flexShrink: 0, marginTop: "4px" }}>
                  <Image src="/cta-small.png" alt="" fill style={{ objectFit: "contain" }} sizes="48px" />
                </div>
                <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300 }}>
                  Відповім особисто та підберемо зручний час для першої зустрічі.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form section */}
      <section id="contact" className="s-pad" style={{ background: "var(--bg-warm)" }}>
        <div className="contact-grid" style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Left */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(40px, 4vw, 60px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "24px",
            }}>
              Зв&apos;язатися<br />зі мною
            </h2>
            <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: "40px" }}>
              Я з радістю відповім на ваші запитання, розповім більше про підходи та допоможу обрати формат роботи, який підійде саме вам.
            </p>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.5 3h3l1.5 3.5-1.75 1.05A9 9 0 0 0 9.45 10.75L10.5 9l3.5 1.5v3c0 .83-.67 1.5-1.5 1.5A12 12 0 0 1 2 3.5C2 2.67 2.67 2 3.5 2z" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                  text: "+380 (99) 123 45 67",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="2" stroke="var(--sage)" strokeWidth="1.3"/><path d="M2 6l7 5 7-5" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round"/></svg>,
                  text: "hello@psychologist.com",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 9L15.5 3.5 10 15.5 8.5 10 2 9Z" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.5 10L15.5 3.5" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round"/></svg>,
                  text: "@your_therapist",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="3" width="12" height="12" rx="3.5" stroke="var(--sage)" strokeWidth="1.3"/><circle cx="9" cy="9" r="3" stroke="var(--sage)" strokeWidth="1.3"/><circle cx="12.8" cy="5.2" r="0.8" fill="var(--sage)"/></svg>,
                  text: "@your_therapist",
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="6.5" stroke="var(--sage)" strokeWidth="1.3"/><path d="M9 5.5V9l2.5 2.5" stroke="var(--sage)" strokeWidth="1.3" strokeLinecap="round"/></svg>,
                  text: "Відповідаю протягом дня",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: "var(--bg)", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: "15px", color: "var(--text)", fontWeight: 400 }}>{item.text}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Form */}
          <div style={{ background: "var(--bg)", borderRadius: "24px", padding: "52px 48px" }}>
            <h3 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "28px",
              fontWeight: 500,
              color: "var(--sage)",
              marginBottom: "36px",
              textAlign: "center",
            }}>
              Напишіть мені
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <input
                type="text"
                placeholder="Ваше ім'я"
                style={{ width: "100%", padding: "15px 18px", border: "1.5px solid var(--border)", borderRadius: "10px", fontSize: "15px", color: "var(--text)", background: "var(--bg)", outline: "none", fontFamily: "inherit", boxSizing: "border-box" as const }}
              />
              <input
                type="text"
                placeholder="Телефон або email"
                style={{ width: "100%", padding: "15px 18px", border: "1.5px solid var(--border)", borderRadius: "10px", fontSize: "15px", color: "var(--text)", background: "var(--bg)", outline: "none", fontFamily: "inherit", boxSizing: "border-box" as const }}
              />
              <textarea
                placeholder="Ваш запит"
                rows={4}
                style={{ width: "100%", padding: "15px 18px", border: "1.5px solid var(--border)", borderRadius: "10px", fontSize: "15px", color: "var(--text)", background: "var(--bg)", outline: "none", fontFamily: "inherit", resize: "vertical" as const, boxSizing: "border-box" as const }}
              />

              {/* Checkbox */}
              <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
                <input type="checkbox" style={{ marginTop: "2px", flexShrink: 0, accentColor: "var(--sage)", width: "16px", height: "16px" }} />
                <span style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6, fontWeight: 300 }}>
                  Погоджуюсь на обробку моїх даних для зв&apos;язку зі мною
                </span>
              </label>

              <button className="contact-submit" style={{
                width: "100%",
                padding: "16px",
                background: "var(--sage)",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 400,
                letterSpacing: "0.02em",
                cursor: "pointer",
                fontFamily: "inherit",
                marginTop: "4px",
              }}>
                Записатися на консультацію
              </button>

              {/* Or / Telegram */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "4px 0" }}>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
                <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 300 }}>або</span>
                <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
              </div>

              <a href="https://t.me/your_therapist" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                textDecoration: "none", color: "var(--text)", fontSize: "14px", fontWeight: 400,
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10L17 4 11.5 17 10 11 2 10Z" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 11L17 4" stroke="var(--sage)" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
                Або напишіть у Telegram
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
