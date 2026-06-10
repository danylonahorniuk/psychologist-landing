import Image from "next/image";

const PHOTO_URL =
  "https://images.unsplash.com/photo-1557241596-cd595dff95b4?w=900&q=85&fit=crop";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        alignItems: "center",
        paddingTop: "88px",
        overflow: "hidden",
        position: "relative",
        background: "var(--bg)",
      }}
    >
      {/* Ambient warm orb */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          background: "radial-gradient(ellipse at 70% 40%, #F0EBE3 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ── LEFT ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px 120px 96px 80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          className="animate-fade-up-1"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(52px, 5.2vw, 80px)",
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "28px",
          }}
        >
          Знайди
          <br />
          <em style={{ fontStyle: "italic", color: "var(--slate)" }}>себе.</em>
          <br />
          Живи з сенсом.
        </h1>

        <p
          className="animate-fade-up-2"
          style={{
            fontSize: "17px",
            color: "var(--muted)",
            maxWidth: "440px",
            lineHeight: 1.72,
            fontWeight: 300,
            marginBottom: "48px",
          }}
        >
          Разом ми розберемося з тим, що тебе гальмує, відновимо внутрішній
          ресурс і знайдемо шлях до життя, яким ти хочеш жити.
        </p>

        <div
          className="animate-fade-up-3"
          style={{ display: "flex", alignItems: "center", gap: "28px" }}
        >
          <a href="#contact" className="btn-hero">
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

        <div
          className="animate-fade-up-4"
          style={{
            display: "flex",
            gap: "56px",
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: "1px solid var(--border)",
          }}
        >
          {[
            { num: "7+",    lbl: "років практики" },
            { num: "200+",  lbl: "клієнтів" },
            { num: "1500+", lbl: "сесій проведено" },
          ].map((s) => (
            <div key={s.lbl}>
              <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "40px", fontWeight: 500, lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "5px" }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100%",
          minHeight: "700px",
          padding: "0 64px 0 0",
          zIndex: 1,
        }}
      >
        {/* Photo — large organic shape */}
        <div
          className="animate-scale-in"
          style={{
            position: "relative",
            width: "min(420px, 42vw)",
            height: "min(700px, calc(100vh - 88px))",
            borderRadius: "0 0 200px 200px",
            background: "linear-gradient(145deg, #F0EBE3 0%, #D4C5B0 100%)",
            overflow: "hidden",
            boxShadow: "0 40px 100px rgba(44,44,44,0.15), 0 8px 24px rgba(44,44,44,0.06)",
          }}
        >
          <Image
            src={PHOTO_URL}
            alt="Ірина Коваленко — психолог і коуч"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 1280px) 40vw, 420px"
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(212,197,176,0.2) 100%)", pointerEvents: "none" }} />
        </div>
      </div>
    </section>
  );
}
