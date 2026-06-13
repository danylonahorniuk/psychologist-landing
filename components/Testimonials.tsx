import Image from "next/image";

const testimonials = [
  {
    quote: "З першої зустрічі відчула безпеку й прийняття. Тут можна говорити про все без страху осуду. З часом стало легше розуміти себе і свої почуття.",
    name: "Олена",
    age: 32,
    avatar: null,
  },
  {
    quote: "Довго не наважувався звернутися по допомогу. Радий, що зробив цей крок. Поступово знайшов опору всередині себе і навчився справлятися з тривогою.",
    name: "Андрій",
    age: 28,
    avatar: null,
  },
  {
    quote: "Терапія допомогла мені відновити впевненість у собі та встановити здорові межі. Це було не просто, але результат вартий кожної зустрічі.",
    name: "Марія",
    age: 37,
    avatar: null,
  },
  {
    quote: "Особливо ціную підтримку між сесіями та увагу до деталей. Відчуваю, що мене дійсно чують і допомагають глибше розібратися у собі.",
    name: "Юлія",
    age: 24,
    avatar: null,
  },
  {
    quote: "Завдяки нашій роботі я навчилася справлятися з емоціями, відпускати минуле і жити в гармонії із собою. Дуже вдячна за цей шлях.",
    name: "Ірина",
    age: 41,
    avatar: null,
  },
  {
    quote: "Сподобалася глибина і делікатність підходу. На сесіях завжди спокійно, структуровано і по суті. Відчуваю реальні зміни у своєму житті.",
    name: "Тарас",
    age: 35,
    avatar: null,
  },
];

const Stars = () => (
  <div style={{ display: "flex", gap: "3px" }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 1.5L9.545 5.915H14.18L10.318 8.67L11.863 13.085L8 10.33L4.137 13.085L5.682 8.67L1.82 5.915H6.455L8 1.5Z" fill="#C8A96E" />
      </svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg width="32" height="28" viewBox="0 0 32 28" fill="none" aria-hidden="true" style={{ opacity: 0.35 }}>
    <path d="M0 28V17.2C0 13.067 0.933 9.6 2.8 6.8C4.667 4 7.333 1.867 10.8 0.4L13.2 4C11.067 5.067 9.4 6.467 8.2 8.2C7.067 9.933 6.5 12 6.5 14.4H13V28H0ZM19 28V17.2C19 13.067 19.933 9.6 21.8 6.8C23.667 4 26.333 1.867 29.8 0.4L32.2 4C30.067 5.067 28.4 6.467 27.2 8.2C26.067 9.933 25.5 12 25.5 14.4H32V28H19Z" fill="var(--sage)" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="reviews" style={{ position: "relative", padding: "100px 80px 80px", background: "var(--bg-warm)" }}>
      <style>{`
        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(44, 44, 44, 0.08);
          border-color: var(--sage) !important;
        }
      `}</style>

      {/* Herb — top-right, overlapping above the top card row */}
      <div style={{ position: "absolute", top: "80px", right: "0", width: "340px", height: "310px", pointerEvents: "none", zIndex: 10 }}>
        <Image src="/herb.png" alt="" fill style={{ objectFit: "contain", objectPosition: "top right" }} sizes="340px" />
      </div>

      {/* Candle — bottom-right, sits below cards via lower zIndex */}
      <div style={{ position: "absolute", bottom: "0", right: "0", width: "240px", height: "240px", pointerEvents: "none", zIndex: 1 }}>
        <Image src="/candle.png" alt="" fill style={{ objectFit: "contain", objectPosition: "bottom right" }} sizes="220px" />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(44px, 5vw, 68px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "16px",
          }}>
            Відгуки
          </h2>

          <p style={{
            fontSize: "16px",
            color: "var(--muted)",
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: "500px",
            margin: "16px auto 0",
          }}>
            Реальні слова від людей, які вже пройшли свій шлях і знайшли підтримку та зміни.
          </p>
        </div>

        {/* 3×2 cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}>
          {testimonials.map((t) => (
            <div
              key={t.name + t.age}
              className="testimonial-card"
              style={{
                background: "var(--bg)",
                borderRadius: "20px",
                padding: "28px 28px 24px",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Top row: stars + quote icon */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Stars />
                <QuoteIcon />
              </div>

              {/* Review text */}
              <p style={{
                fontSize: "14px",
                color: "var(--text)",
                lineHeight: 1.72,
                fontWeight: 300,
                flex: 1,
              }}>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "4px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--bg-warm)",
                  border: "1px solid var(--border)",
                  flexShrink: 0,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="11" cy="8" r="3.5" stroke="var(--muted)" strokeWidth="1.2"/>
                    <path d="M4 19C4 15.7 7.1 13 11 13C14.9 13 18 15.7 18 19" stroke="var(--muted)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <span style={{ fontSize: "13.5px", fontWeight: 500, color: "var(--text)", letterSpacing: "-0.01em" }}>
                  {t.name}, {t.age}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
