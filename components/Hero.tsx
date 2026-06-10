import Image from "next/image";

const PHOTO_URL = "/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        minHeight: "640px",
        paddingTop: "88px",
        display: "grid",
        gridTemplateColumns: "42fr 58fr",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* ── LEFT: Photo ── */}
      <div
        style={{
          padding: "36px 20px 36px 48px",
          overflow: "hidden",
        }}
      >
        <div
          className="animate-scale-in"
          style={{
            position: "relative",
            height: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            background: "var(--sand)",
          }}
        >
          <Image
            src={PHOTO_URL}
            alt="Ірина Коваленко — психолог і коуч"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 15%" }}
            sizes="42vw"
            priority
          />
        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "52px 80px 40px 56px",
        }}
      >
        {/* Tiny label — no pill, no dot */}
        <p
          className="animate-fade-up-1"
          style={{
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: "20px",
            fontWeight: 400,
          }}
        >
          Психолог та коуч
        </p>

        {/* Name — the hero element */}
        <h1
          className="animate-fade-up-2"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(52px, 5.8vw, 82px)",
            fontWeight: 500,
            lineHeight: 1.04,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            marginBottom: "24px",
          }}
        >
          Ірина
          <br />
          Коваленко
        </h1>

        {/* Sage rule */}
        <div
          className="animate-fade-up-3"
          style={{
            width: "44px",
            height: "1.5px",
            background: "var(--sage)",
            marginBottom: "24px",
          }}
        />

        {/* Italic tagline — like handwritten feel in reference */}
        <p
          className="animate-fade-up-3"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2vw, 26px)",
            color: "var(--slate)",
            lineHeight: 1.45,
            marginBottom: "20px",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          Знайди себе.
          <br />
          Живи з сенсом.
        </p>

        {/* Body text */}
        <p
          className="animate-fade-up-3"
          style={{
            fontSize: "15px",
            color: "var(--muted)",
            lineHeight: 1.76,
            fontWeight: 300,
            marginBottom: "44px",
            maxWidth: "400px",
          }}
        >
          Разом ми розберемося з тим, що тебе гальмує, відновимо внутрішній
          ресурс і знайдемо шлях до життя, яким ти хочеш жити.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4">
          <a
            href="#contact"
            style={{
              display: "block",
              background: "var(--text)",
              color: "#fff",
              padding: "18px 32px",
              borderRadius: "8px",
              fontSize: "12.5px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Записатись на сесію
          </a>
          <a
            href="#about"
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Дізнатись більше
            <span className="animate-bob" style={{ display: "inline-block" }}>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
