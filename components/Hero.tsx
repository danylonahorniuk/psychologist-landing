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
        {/* Eyebrow */}
        <p
          className="animate-fade-up-1"
          style={{
            fontSize: "14px",
            color: "var(--muted)",
            fontStyle: "italic",
            marginBottom: "20px",
            fontWeight: 300,
            letterSpacing: "0.01em",
          }}
        >
          Психологічна підтримка та глибокі зміни
        </p>

        {/* H1 */}
        <h1
          className="animate-fade-up-2"
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
            Живи з сенсом.
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
          Разом ми розберемося з тим, що тебе гальмує, відновимо внутрішній
          ресурс і знайдемо шлях до життя, яким ти хочеш жити.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up-4"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "var(--sage)",
              color: "#fff",
              padding: "15px 36px",
              borderRadius: "48px",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.02em",
              textDecoration: "none",
            }}
          >
            Записатись на сесію
          </a>
          <a
            href="#about"
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
          style={{ objectFit: "cover", objectPosition: "72% 22%" }}
          sizes="(min-width: 1280px) 720px, 50vw"
          priority
        />
        {/* Gradient: blends photo left edge into hero background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--bg-warm) 0%, transparent 32%)",
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
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "100px" }}
          aria-hidden="true"
        >
          <path
            d="M0,100 L0,25 C360,5 720,90 1440,78 L1440,100 Z"
            fill="var(--bg)"
          />
        </svg>
      </div>
    </section>
  );
}
