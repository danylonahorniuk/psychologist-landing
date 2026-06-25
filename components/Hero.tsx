import Image from "next/image";

const PHOTO_URL = "/hiro2.png";
const PHOTO_MOBILE_URL = "/hero-mobile.png";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", position: "relative", background: "var(--bg-warm)", overflow: "hidden" }}
    >
      <style>{`
        @media (max-width: 900px) {
          .hero-bg-wrap { display: none !important; }
          .hero-secondary-cta { display: none !important; }
          .hero-mobile-photo { display: block !important; }
        }
      `}</style>
      {/* Desktop: full-bleed background photo */}
      <div className="hero-bg-wrap" style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src={PHOTO_URL}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "25% 15%" }}
          sizes="100vw"
          priority
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(240,235,227,0.82) 0%, rgba(240,235,227,0.72) 30%, rgba(240,235,227,0.45) 52%, transparent 72%)",
          pointerEvents: "none",
        }} />
      </div>

      <div className="hero-grid" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-text-col">
          <h1
            className="animate-fade-up-1"
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(44px, 5.2vw, 80px)",
              fontWeight: 500,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "24px",
            }}
          >
            Знайди себе.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--slate)" }}>
              Живи повніше.
            </em>
          </h1>

          <p
            className="animate-fade-up-3 hero-description"
            style={{
              fontSize: "16px",
              color: "var(--muted)",
              lineHeight: 1.72,
              fontWeight: 300,
              marginBottom: "48px",
              maxWidth: "400px",
            }}
          >
            Мене звуть Ірина Коваленко — я психолог та гештальт-терапевт
            з 7-річним досвідом. Допомагаю знайти внутрішню опору,
            розібратися в собі та побудувати стосунки, які наповнюють.
          </p>

          <div className="animate-fade-up-3 hero-cta-row">
            <a
              href="#contact"
              className="btn-sage"
              style={{
                display: "inline-block",
                padding: "15px 36px",
                borderRadius: "48px",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              Записатись на сесію
            </a>
            <a
              href="#about"
              className="btn-ghost-circle hero-secondary-cta"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "13px",
                color: "var(--muted)",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              <span
                className="circle-icon"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1.5px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  color: "var(--text)",
                  flexShrink: 0,
                }}
              >
                ▶
              </span>
              Дізнатись більше про підхід
            </a>
          </div>
        </div>
      </div>

      {/* Mobile-only photo below text */}
      <div className="hero-mobile-photo">
        <Image
          src={PHOTO_MOBILE_URL}
          alt="Ірина Коваленко"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          right: 0,
          zIndex: 2,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F0EBE3" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 L0,25 C360,5 720,90 1440,78 L1440,100 Z"
            fill="url(#waveGrad)"
          />
        </svg>
      </div>
    </section>
  );
}
