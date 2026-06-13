import Image from "next/image";

const items = [
  {
    title: "Онлайн або офлайн",
    text: "Працюємо онлайн у зручному для вас форматі або офлайн у затишному кабінеті в Києві.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="14" height="9.5" rx="1.5" stroke="white" strokeWidth="1.3"/>
        <path d="M6 15.5H12M9 12.5V15.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Тривалість сесії",
    text: "Одна консультація триває 50–60 хвилин.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9.5" r="6.5" stroke="white" strokeWidth="1.3"/>
        <path d="M9 6.5V9.5L11 11.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Регулярність зустрічей",
    text: "Оптимально — 1 раз на тиждень. Ми разом визначаємо комфортний ритм роботи.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="14" height="12" rx="2" stroke="white" strokeWidth="1.3"/>
        <path d="M2 8H16" stroke="white" strokeWidth="1.3"/>
        <path d="M6 2V5M12 2V5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M5.5 11H6.5M8.5 11H9.5M11.5 11H12.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Конфіденційність",
    text: "Все, що відбувається на консультації, залишається між нами. Це безпечний простір для вас.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="4.5" y="8.5" width="9" height="7" rx="1.5" stroke="white" strokeWidth="1.3"/>
        <path d="M6.5 8.5V6C6.5 4.6 7.6 3.5 9 3.5C10.4 3.5 11.5 4.6 11.5 6V8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="9" cy="12" r="1" fill="white"/>
      </svg>
    ),
  },
  {
    title: "Підтримка між сесіями",
    text: "За потреби я на зв'язку для короткої підтримки та відповіді на важливі питання.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 15C9 15 3 11 3 6.5C3 4.6 4.6 3 6.5 3C7.7 3 8.8 3.6 9 4.5C9.2 3.6 10.3 3 11.5 3C13.4 3 15 4.6 15 6.5C15 11 9 15 9 15Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Перша зустріч",
    text: "Знайомство, обговорення вашого запиту та планування подальшої роботи.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="7" r="2.8" stroke="white" strokeWidth="1.3"/>
        <path d="M3.5 15.5C3.5 12.7 6 10.5 9 10.5C12 10.5 14.5 12.7 14.5 15.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <>
      <section
        id="how"
        style={{ position: "relative", overflow: "hidden", minHeight: "640px" }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/how-bg.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            sizes="100vw"
          />
          {/* subtle warm overlay so left text is readable */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(250,245,238,0.55) 0%, rgba(250,245,238,0.15) 50%, transparent 100%)" }} />
        </div>

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 80px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: "80px",
          alignItems: "center",
        }}>

          {/* LEFT: heading */}
          <div style={{ paddingBottom: "40px" }}>

            <h2 style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 500,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "24px",
            }}>
              Зручний формат<br />для глибоких змін
            </h2>

            <p style={{
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: "380px",
            }}>
              Я підлаштовуюсь під ваші темп і потреби, тому ви можете обрати той формат роботи, який підходить саме вам.
            </p>
          </div>

          {/* RIGHT: card with items */}
          <div style={{
            background: "rgba(250,248,245,0.90)",
            backdropFilter: "blur(12px)",
            borderRadius: "20px",
            padding: "36px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}>
            {items.map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "var(--sage)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "14.5px", fontWeight: 600, color: "var(--text)", marginBottom: "3px", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, fontWeight: 300 }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Top wave */}
        <div style={{ position: "absolute", top: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "90px" }} aria-hidden="true">
            <path d="M0,0 L0,55 C360,90 900,10 1440,60 L1440,0 Z" fill="var(--bg)" />
          </svg>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100px" }} aria-hidden="true">
            <path d="M0,100 L0,45 C300,100 700,10 1440,55 L1440,100 Z" fill="var(--bg-warm)" />
          </svg>
        </div>
      </section>

      {/* CTA card */}
      <section style={{ background: "var(--bg-warm)", padding: "0 80px 64px" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          background: "var(--bg)",
          borderRadius: "24px",
          padding: "36px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          border: "1px solid var(--border)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {/* Decorative botanical illustration */}
            <svg width="72" height="88" viewBox="0 0 72 88" fill="none" aria-hidden="true" style={{ flexShrink: 0, opacity: 0.85 }}>
              <path d="M36 82V30" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M36 55C36 55 22 46 18 32C28 30 38 38 36 55Z" fill="var(--sage)" fillOpacity="0.18" stroke="var(--sage)" strokeWidth="1.3"/>
              <path d="M36 45C36 45 50 36 54 22C44 20 34 28 36 45Z" fill="var(--sage)" fillOpacity="0.25" stroke="var(--sage)" strokeWidth="1.3"/>
              <path d="M36 68C36 68 24 60 20 48C30 46 40 54 36 68Z" fill="var(--sage)" fillOpacity="0.13" stroke="var(--sage)" strokeWidth="1.3"/>
              <path d="M36 72C36 72 46 64 50 52C40 50 30 58 36 72Z" fill="var(--sage)" fillOpacity="0.1" stroke="var(--sage)" strokeWidth="1.3"/>
            </svg>
            <div>
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "22px",
                fontWeight: 500,
                color: "var(--text)",
                marginBottom: "8px",
                letterSpacing: "-0.01em",
              }}>
                Не знаєте, з чого почати?
              </div>
              <div style={{ fontSize: "14px", color: "var(--muted)", fontWeight: 300, lineHeight: 1.65, maxWidth: "480px" }}>
                Запишіться на першу консультацію — разом ми визначимо ваш запит і знайдемо найкращий шлях до змін.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-sage"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "15px 32px",
              borderRadius: "48px",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.01em",
              whiteSpace: "nowrap" as const,
            }}
          >
            Записатися на консультацію
            <span style={{ fontSize: "16px" }}>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
