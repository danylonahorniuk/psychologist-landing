import Image from "next/image";

const features = [
  {
    title: "7+ років практики, 200+ клієнтів",
    text: "Працюю з людьми різного віку та запитів — від тривоги й самооцінки до стосункових криз і пошуку себе.",
    stats: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 15V10M7 15V7M11 15V9M15 15V5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Індивідуальний підхід",
    text: "Немає двох однакових людей і двох однакових терапій. Темп, методи та формат роботи я завжди підбираю під вас.",
    stats: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="6.5" r="2.8" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M4.5 17C4.5 13.9 6.9 11.5 10 11.5C13.1 11.5 15.5 13.9 15.5 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M15 3.5V5.5M14 4.5H16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Конфіденційність та довіра",
    text: "Все, що відбувається між нами — залишається між нами. Це не просто правило, це основа нашої роботи.",
    stats: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="5.5" y="9" width="9" height="7.5" rx="1.8" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M7.5 9V6.5C7.5 4.8 8.6 3.5 10 3.5C11.4 3.5 12.5 4.8 12.5 6.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="10" cy="13" r="1.2" fill="currentColor"/>
        <path d="M10 14V15.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Власна терапія та супервізія",
    text: "Регулярно проходжу супервізії та власну терапію — щоб бути для вас максимально присутньою і ресурсною.",
    stats: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M16 5v4h-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 15v-4h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.8 9C15.2 7 13.8 5.4 11.9 4.5C8.7 2.9 4.9 4.3 3.6 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M4.2 11C4.8 13 6.2 14.6 8.1 15.5C11.3 17.1 15.1 15.7 16.4 12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "110px 80px", background: "var(--bg)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "80px", alignItems: "center" }}>

        {/* ── LEFT: Photo ── */}
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: "20px", overflow: "hidden", aspectRatio: "4/5", position: "relative" }}>
            <Image
              src="/about2.png"
              alt="Ірина Коваленко — психолог"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="560px"
            />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(32px, 3.2vw, 46px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            color: "var(--text)",
            marginBottom: "24px",
          }}>
            Про мене
          </h2>

          <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.78, fontWeight: 300, marginBottom: "16px" }}>
            Я обрала психологію, бо сама знаю, що таке — шукати відповіді всередині себе і не знаходити. Сьогодні я допомагаю іншим пройти цей шлях — не наодинці, а поруч із людиною, яка справді слухає.
          </p>
          <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.78, fontWeight: 300, marginBottom: "36px" }}>
            В основі моєї роботи — гештальт-підхід та елементи КПТ. Я не даю готових відповідей, але допомагаю почути себе, розібратися в тому, що відбувається, і знайти власне рішення.
          </p>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--border)",
                  background: "var(--bg-warm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--sage)",
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div style={{ flex: 1 }}>
                  {f.stats ? (
                    /* Stats item */
                    <div style={{ display: "flex", gap: "32px" }}>
                      {f.stats.map((s) => (
                        <div key={s.label}>
                          <div style={{
                            fontFamily: "var(--font-playfair), serif",
                            fontSize: "28px",
                            fontWeight: 500,
                            color: "var(--sage)",
                            lineHeight: 1,
                            letterSpacing: "-0.02em",
                            marginBottom: "4px",
                          }}>
                            {s.value}
                          </div>
                          <div style={{ fontSize: "12.5px", color: "var(--muted)", fontWeight: 300, letterSpacing: "0.02em" }}>
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Regular feature item */
                    <>
                      <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)", marginBottom: "5px", letterSpacing: "-0.01em" }}>
                        {f.title}
                      </div>
                      <div style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.65, fontWeight: 300 }}>
                        {f.text}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
