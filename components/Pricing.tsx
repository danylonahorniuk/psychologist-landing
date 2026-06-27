import Image from "next/image";

const plans = [
  {
    name: "Разова сесія",
    price: "1 500",
    period: "50 хвилин · одноразово",
    features: [
      "Індивідуальна консультація",
      "Онлайн або офлайн",
      "Конфіденційність гарантована",
      "Домашнє завдання та матеріали",
    ],
    featured: false,
    branchTop: "/branch-single-top.png",
    branchBottom: "/branch-single-bottom.png",
    branchTopCorner: { top: 0, left: 0 },
    branchBottomCorner: { bottom: 0, right: 0 },
    branchTopSize: 120,
    branchBottomSize: 110,
    branchTopObjPos: "top left",
    branchBottomObjPos: "bottom right",
  },
  {
    name: "Пакет 5 сесій",
    price: "6 500",
    period: "50 хвилин · 5 зустрічей",
    badge: "НАЙПОПУЛЯРНІШЕ",
    features: [
      "Економія 1 000 ₴",
      "Системна робота над запитом",
      "Підтримка в чаті між сесіями",
      "Матеріали та практичні вправи",
      "Гнучкий графік",
    ],
    featured: true,
    branchTop: "/branch-popular-top.png",
    branchBottom: "/branch-popular-bottom.png",
    branchTopCorner: { top: 0, right: 0 },
    branchBottomCorner: { bottom: 0, left: 0 },
    branchTopSize: 130,
    branchBottomSize: 150,
    branchTopObjPos: "top right",
    branchBottomObjPos: "bottom left",
  },
  {
    name: "Пакет 10 сесій",
    price: "11 500",
    period: "50 хвилин · 10 зустрічей",
    features: [
      "Економія 3 500 ₴",
      "Глибока трансформаційна робота",
      "Підтримка між сесіями",
      "Персональна програма роботи",
      "Підсумкова діагностика",
    ],
    featured: false,
    branchTop: "/branch-ten-top.png",
    branchBottom: "/branch-ten-bottom.png",
    branchTopCorner: { top: 0, right: 0 },
    branchBottomCorner: { bottom: "20px", right: "-16px" },
    branchTopSize: 120,
    branchBottomSize: 130,
    branchTopObjPos: "top right",
    branchBottomObjPos: "bottom right",
  },
];

const CheckIcon = ({ featured }: { featured: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="9" cy="9" r="8" stroke={featured ? "rgba(255,255,255,0.45)" : "var(--sand)"} strokeWidth="1.2" />
    <path d="M5.5 9L7.8 11.3L12.5 6.7" stroke={featured ? "rgba(255,255,255,0.8)" : "var(--sage)"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="s-pad" style={{ background: "var(--bg-warm)" }}>
      <style>{`
        .pricing-btn {
          transition: background 0.25s ease, color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pricing-btn-default:hover {
          background: var(--bg-warm) !important;
          border-color: var(--sage) !important;
          color: var(--sage) !important;
        }
        .pricing-btn-featured:hover {
          background: var(--bg-warm) !important;
          color: var(--sage) !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
      `}</style>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div data-animate style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "16px",
          }}>
            Оберіть формат підтримки
          </h2>
          <p style={{
            fontSize: "15px",
            color: "var(--muted)",
            fontWeight: 300,
            lineHeight: 1.6,
          }}>
            Професійна підтримка, що допомагає знайти опору, ясність і внутрішній баланс.
          </p>
        </div>

        {/* Cards */}
        <div data-animate data-delay="200" className="pricing-grid" style={{ alignItems: "center" }}>
          {plans.map((p) => (
            <div
              key={p.name}
              className="pricing-card"
              style={{
                position: "relative",
                borderRadius: "20px",
                padding: p.featured ? "52px 40px 44px" : "44px 40px 40px",
                background: p.featured ? "var(--sage)" : "#fff",
                border: p.featured ? "none" : "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                boxShadow: p.featured ? "0 20px 60px rgba(143,168,135,0.25)" : "none",
              }}
            >
              {/* Branch top */}
              <div style={{
                position: "absolute",
                ...p.branchTopCorner,
                width: `${p.branchTopSize}px`,
                height: `${p.branchTopSize}px`,
                pointerEvents: "none",
                zIndex: 0,
              }}>
                <Image src={p.branchTop} alt="" fill style={{ objectFit: "contain", objectPosition: p.branchTopObjPos }} sizes="130px" />
              </div>

              {/* Branch bottom */}
              <div style={{
                position: "absolute",
                ...p.branchBottomCorner,
                width: `${p.branchBottomSize}px`,
                height: `${p.branchBottomSize}px`,
                pointerEvents: "none",
                zIndex: 2,
              }}>
                <Image src={p.branchBottom} alt="" fill style={{ objectFit: "contain", objectPosition: p.branchBottomObjPos }} sizes="120px" />
              </div>

              {/* Badge */}
              {p.badge && (
                <div style={{ marginBottom: "20px", textAlign: "center", position: "relative", zIndex: 1 }}>
                  <span style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    padding: "6px 20px",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }}>
                    {p.badge}
                  </span>
                </div>
              )}

              {/* Name */}
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "22px",
                fontWeight: 500,
                color: p.featured ? "#fff" : "var(--text)",
                marginBottom: "12px",
                lineHeight: 1.2,
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}>
                {p.name}
              </div>

              {/* Divider */}
              <div style={{
                width: "36px",
                height: "1.5px",
                background: p.featured ? "rgba(255,255,255,0.35)" : "var(--sand)",
                borderRadius: "1px",
                marginBottom: "20px",
                alignSelf: "center",
              }} />

              {/* Price */}
              <div style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(40px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1,
                color: p.featured ? "#fff" : "var(--text)",
                marginBottom: "6px",
                letterSpacing: "-0.01em",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}>
                {p.price} <span style={{ fontSize: "28px" }}>₴</span>
              </div>

              {/* Period */}
              <div style={{
                fontSize: "13px",
                color: p.featured ? "rgba(255,255,255,0.6)" : "var(--muted)",
                fontWeight: 300,
                marginBottom: "28px",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}>
                {p.period}
              </div>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px 0", display: "flex", flexDirection: "column", gap: "12px", flex: 1, position: "relative", zIndex: 1 }}>
                {p.features.map((f) => (
                  <li key={f} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    fontSize: "14px",
                    color: p.featured ? "rgba(255,255,255,0.82)" : "var(--muted)",
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}>
                    <CheckIcon featured={p.featured} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact" className={`pricing-btn ${p.featured ? "pricing-btn-featured" : "pricing-btn-default"}`} style={{
                display: "block",
                textAlign: "center",
                padding: "14px 32px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 400,
                textDecoration: "none",
                background: p.featured ? "#fff" : "transparent",
                color: p.featured ? "var(--sage)" : "var(--text)",
                border: p.featured ? "none" : "1px solid var(--border)",
                letterSpacing: "0.01em",
                position: "relative",
                zIndex: 1,
              }}>
                Записатись
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
