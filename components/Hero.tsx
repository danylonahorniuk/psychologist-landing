import Image from "next/image";

const PHOTO_URL = "/hiro2.png";
const PHOTO_MOBILE_URL = "/hero-mobile.png";

export default function Hero() {
  return (
    <section id="hero" style={{ position: "relative", background: "var(--bg-warm)" }}>

      {/* ── DESKTOP ─────────────────────────────── */}
      <div className="hero-bg-desktop" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
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

      <div className="hero-grid hero-desktop-content" style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>
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
            <em style={{ fontStyle: "italic", color: "var(--slate)" }}>Живи повніше.</em>
          </h1>
          <p
            className="animate-fade-up-3"
            style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.72, fontWeight: 300, marginBottom: "48px", maxWidth: "400px" }}
          >
            Мене звуть Ірина Коваленко — я психолог та гештальт-терапевт
            з 7-річним досвідом. Допомагаю знайти внутрішню опору,
            розібратися в собі та побудувати стосунки, які наповнюють.
          </p>
          <div className="animate-fade-up-3 hero-cta-row">
            <a href="#contact" className="btn-sage" style={{ display: "inline-block", padding: "15px 36px", borderRadius: "48px", fontSize: "14px", fontWeight: 500, letterSpacing: "0.02em" }}>
              Записатись на сесію
            </a>
            <a href="#about" className="btn-ghost-circle" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "13px", color: "var(--muted)", textDecoration: "none", fontWeight: 400 }}>
              <span className="circle-icon" style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text)", flexShrink: 0 }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2.5 1.5L8 5L2.5 8.5V1.5Z" fill="currentColor"/>
                </svg>
              </span>
              Дізнатись більше про підхід
            </a>
          </div>
        </div>
      </div>

      {/* Desktop bottom wave */}
      <div className="hero-wave-desktop" style={{ position: "absolute", bottom: -1, left: 0, right: 0, zIndex: 2, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "100px" }} aria-hidden="true">
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#F0EBE3" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path d="M0,100 L0,25 C360,5 720,90 1440,78 L1440,100 Z" fill="url(#waveGrad)" />
        </svg>
      </div>

      {/* ── MOBILE ──────────────────────────────── */}

      {/* Sticky photo */}
      <div className="hero-mobile-photo-top" aria-hidden="true">
        <Image
          src={PHOTO_MOBILE_URL}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 65%" }}
          sizes="100vw"
          priority
        />
      </div>

      {/* Content card slides over photo on scroll */}
      <div className="hero-mobile-card">
        <h1
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "14px",
          }}
        >
          Знайди себе.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--slate)" }}>Живи повніше.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, fontWeight: 300, marginBottom: "28px" }}>
          Допомагаю знайти внутрішню опору, зрозуміти себе та будувати
          гармонійні стосунки з собою й навколишнім світом.
        </p>
        <a href="#contact" className="btn-sage" style={{ display: "block", padding: "16px 24px", borderRadius: "48px", fontSize: "14px", fontWeight: 500, letterSpacing: "0.02em", textAlign: "center", textDecoration: "none", marginBottom: "16px" }}>
          Записатись на сесію
        </a>
        <a href="#about" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", fontSize: "13px", color: "var(--muted)", textDecoration: "none", fontWeight: 400 }}>
          <span style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1.5px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text)", flexShrink: 0 }}>
            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2.5 1.5L8 5L2.5 8.5V1.5Z" fill="currentColor"/>
            </svg>
          </span>
          Дізнатись більше про підхід
        </a>
      </div>

    </section>
  );
}
