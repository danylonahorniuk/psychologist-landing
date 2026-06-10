import Image from "next/image";

const PHOTO_URL = "/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        paddingTop: "88px",
        display: "grid",
        gridTemplateColumns: "55fr 45fr",
        alignItems: "center",
        background: "var(--bg)",
        overflow: "hidden",
      }}
    >
      {/* ── LEFT: Text ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 64px 80px 80px",
        }}
      >
        {/* Eyebrow */}
        <p
          className="animate-fade-up-1"
          style={{
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--sage)",
            marginBottom: "24px",
            fontWeight: 500,
          }}
        >
          Ірина Коваленко · Психолог та коуч
        </p>

        {/* Main heading — tagline as h1 */}
        <h1
          className="animate-fade-up-2"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(44px, 5vw, 72px)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            marginBottom: "28px",
          }}
        >
          Знайди себе.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--slate)" }}>
            Живи з сенсом.
          </em>
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

        {/* Body text */}
        <p
          className="animate-fade-up-3"
          style={{
            fontSize: "15.5px",
            color: "var(--muted)",
            lineHeight: 1.76,
            fontWeight: 300,
            marginBottom: "44px",
            maxWidth: "420px",
          }}
        >
          Разом ми розберемося з тим, що тебе гальмує, відновимо внутрішній
          ресурс і знайдемо шлях до життя, яким ти хочеш жити.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              background: "var(--sage)",
              color: "#fff",
              padding: "16px 40px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
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

      {/* ── RIGHT: Photo in container ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "40px 64px 40px 24px",
          background: "var(--bg)",
        }}
      >
        <div
          className="animate-scale-in"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "400px",
            aspectRatio: "3/4",
            borderRadius: "20px",
            overflow: "hidden",
            background: "var(--sand)",
            boxShadow: "0 32px 80px rgba(44,44,44,0.12)",
          }}
        >
          <Image
            src={PHOTO_URL}
            alt="Ірина Коваленко — психолог і коуч"
            fill
            style={{ objectFit: "cover", objectPosition: "50% 10%" }}
            sizes="40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
