import Image from "next/image";

const features = [
  {
    title: "Індивідуальний підхід",
    text: "Немає двох однакових людей і двох однакових терапій. Темп, методи та формат роботи я завжди підбираю під вас.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M4 17C4 14.2 6.7 12 10 12C13.3 12 16 14.2 16 17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Конфіденційність та довіра",
    text: "Все, що відбувається між нами — залишається між нами. Це не просто правило, це основа нашої роботи.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L4 5V10C4 13.3 6.7 16.5 10 17.5C13.3 16.5 16 13.3 16 10V5L10 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Власна терапія та супервізія",
    text: "Регулярно проходжу супервізії та власну терапію — щоб бути для вас максимально присутньою і ресурсною.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3L12.5 8H18L13.5 11.5L15.5 17L10 13.5L4.5 17L6.5 11.5L2 8H7.5L10 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
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
          <div style={{
            borderRadius: "20px",
            overflow: "hidden",
            aspectRatio: "4/5",
            position: "relative",
          }}>
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
          <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.78, fontWeight: 300, marginBottom: "44px" }}>
            В основі моєї роботи — гештальт-підхід та елементи КПТ. Я не даю готових відповідей, але допомагаю почути себе, розібратися в тому, що відбувається, і знайти власне рішення.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "0", marginBottom: "36px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            {[
              { value: "7+", label: "років практики" },
              { value: "200+", label: "клієнтів" },
            ].map((s, i) => (
              <div key={s.label} style={{
                flex: 1,
                padding: "20px 0",
                paddingLeft: i === 0 ? 0 : "32px",
                borderLeft: i === 0 ? "none" : "1px solid var(--border)",
              }}>
                <div style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "36px",
                  fontWeight: 500,
                  color: "var(--sage)",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 300, letterSpacing: "0.04em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {features.map((f) => (
              <div key={f.title} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
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
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)", marginBottom: "5px", letterSpacing: "-0.01em" }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: "13.5px", color: "var(--muted)", lineHeight: 1.65, fontWeight: 300 }}>
                    {f.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
