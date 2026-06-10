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
          padding: "96px 80px",
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
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          minHeight: "700px",
          padding: "40px 64px 40px 0",
          zIndex: 1,
        }}
      >
        {/* Photo — large organic shape */}
        <div
          className="animate-scale-in"
          style={{
            position: "relative",
            width: "min(420px, 42vw)",
            height: "min(680px, calc(100vh - 120px))",
            borderRadius: "240px 240px 200px 200px",
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
          {/* Soft warm overlay at bottom */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(212,197,176,0.2) 100%)", pointerEvents: "none" }} />
        </div>

        {/* Badge: years */}
        <div
          className="animate-badge-1"
          style={{
            position: "absolute",
            bottom: "18%",
            left: "0%",
            background: "var(--sage)",
            color: "#fff",
            borderRadius: "20px",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            boxShadow: "0 8px 32px rgba(143,168,135,0.4)",
          }}
        >
          <strong style={{ fontFamily: "var(--font-playfair), serif", fontSize: "28px", fontWeight: 500, lineHeight: 1 }}>7+</strong>
          <span style={{ fontSize: "11px", opacity: 0.9, letterSpacing: "0.03em" }}>років практики</span>
        </div>

        {/* Badge: clients */}
        <div
          className="animate-badge-2"
          style={{
            position: "absolute",
            top: "14%",
            right: "4%",
            background: "#fff",
            borderRadius: "16px",
            padding: "14px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            boxShadow: "0 8px 28px rgba(44,44,44,0.1)",
            border: "1px solid var(--border)",
          }}
        >
          <strong style={{ fontFamily: "var(--font-playfair), serif", fontSize: "24px", fontWeight: 500, lineHeight: 1 }}>200+</strong>
          <span style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.03em" }}>клієнтів</span>
        </div>

        {/* Pill: sessions */}
        <div
          className="animate-badge-3"
          style={{
            position: "absolute",
            top: "52%",
            right: "2%",
            background: "var(--bg-warm)",
            borderRadius: "50px",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--muted)",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 16px rgba(44,44,44,0.07)",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--sage)", flexShrink: 0, display: "inline-block" }} />
          1500+ сесій
        </div>
      </div>
    </section>
  );
}
