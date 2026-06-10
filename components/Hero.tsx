import Image from "next/image";

const PHOTO_URL =
  "https://images.unsplash.com/photo-1557241596-cd595dff95b4?w=900&q=85&fit=crop";

const stats = [
  { num: "7+",    lbl: "років практики" },
  { num: "200+",  lbl: "клієнтів" },
  { num: "1500+", lbl: "сесій проведено" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        height: "100vh",
        minHeight: "620px",
        paddingTop: "88px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* ── MAIN SPLIT ── */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 0 }}>

        {/* ── LEFT ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 56px 60px 80px",
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          {/* Ghost letter — background texture */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-60px",
              right: "-10px",
              fontFamily: "var(--font-playfair), serif",
              fontSize: "340px",
              fontWeight: 700,
              color: "rgba(143,168,135,0.055)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.04em",
            }}
          >
            З
          </div>

          {/* Eyebrow */}
          <div
            className="animate-fade-up-1"
            style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "40px" }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--sage)",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--sage)",
                fontWeight: 500,
              }}
            >
              психолог · коуч
            </span>
          </div>

          {/* Cascading heading — key design element */}
          <h1 className="animate-fade-up-2" style={{ margin: "0 0 32px", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                display: "block",
                fontSize: "clamp(48px, 4.8vw, 68px)",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                marginBottom: "2px",
              }}
            >
              Знайди
            </span>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                display: "block",
                fontSize: "clamp(76px, 8vw, 110px)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "var(--slate)",
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
                paddingLeft: "18px",
              }}
            >
              себе.
            </span>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                display: "block",
                fontSize: "clamp(36px, 3.8vw, 54px)",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                marginTop: "10px",
              }}
            >
              Живи з сенсом.
            </span>
          </h1>

          {/* Sage divider */}
          <div
            className="animate-fade-up-3"
            style={{
              width: "44px",
              height: "2px",
              background: "var(--sage)",
              marginBottom: "28px",
              borderRadius: "1px",
            }}
          />

          {/* Subtext */}
          <p
            className="animate-fade-up-3"
            style={{
              fontSize: "15.5px",
              color: "var(--muted)",
              maxWidth: "360px",
              lineHeight: 1.78,
              fontWeight: 300,
              marginBottom: "48px",
            }}
          >
            Разом ми розберемося з тим, що тебе гальмує, відновимо внутрішній
            ресурс і знайдемо шлях до життя, яким ти хочеш жити.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up-4"
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
        </div>

        {/* ── RIGHT: Full-bleed photo ── */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={PHOTO_URL}
            alt="Ірина Коваленко — психолог і коуч"
            fill
            className="animate-scale-in"
            style={{ objectFit: "cover", objectPosition: "50% 18%" }}
            sizes="50vw"
            priority
          />

          {/* Left-edge gradient — blends photo into bg */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, var(--bg) 0%, transparent 24%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "200px",
              background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Editorial vertical label */}
          <div
            className="animate-fade-up-4"
            style={{
              position: "absolute",
              right: "20px",
              top: "50%",
              transform: "translateY(-50%) rotate(90deg)",
              transformOrigin: "center center",
              zIndex: 3,
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Ірина Коваленко · Київ
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div
        className="animate-fade-up-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--border)",
          background: "var(--bg-warm)",
          flexShrink: 0,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.lbl}
            style={{
              padding: "22px 80px",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
              display: "flex",
              alignItems: "baseline",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "40px",
                fontWeight: 500,
                lineHeight: 1,
                color: "var(--text)",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              {s.lbl}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
