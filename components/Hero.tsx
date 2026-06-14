import Image from "next/image";

const PHOTO_URL = "/hiro2.png";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        background: "var(--bg-warm)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "55fr 45fr",
        alignItems: "center",
      }}
    >
      {/* ── LEFT: Text — paddingTop accounts for transparent nav ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "160px 64px 140px 140px",
        }}
      >
        {/* H1 */}
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

        {/* Body text */}
        <p
          className="animate-fade-up-3"
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

        {/* CTAs */}
        <div
          className="animate-fade-up-3"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
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
            className="btn-ghost-circle"
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

      {/* ── RIGHT: Photo — fills full viewport height to touch nav ── */}
      <div
        className="animate-scale-in"
        style={{
          position: "relative",
          height: "100vh",
          alignSelf: "stretch",
        }}
      >
        <Image
          src={PHOTO_URL}
          alt="Ірина Коваленко — психолог і коуч"
          fill
          style={{ objectFit: "cover", objectPosition: "60% 12%" }}
          sizes="(min-width: 1280px) 720px, 50vw"
          priority
        />
        {/* Gradient: blends photo left edge into hero background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--bg-warm) 0%, var(--bg-warm) 5%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── Bottom wave curve ── */}
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
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "80px" }}
          aria-hidden="true"
        >
          <path
            d="M0,40 C360,10 720,70 1440,30"
            fill="none"
            stroke="rgba(180,165,145,0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
