export default function Manifesto() {
  return (
    <section style={{ padding: "96px 80px", background: "var(--bg-warm)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "72px",
          color: "var(--sage)",
          lineHeight: 0.8,
          marginBottom: "24px",
          opacity: 0.45,
        }}>
          "
        </div>
        <blockquote style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "clamp(22px, 2.6vw, 34px)",
          fontWeight: 400,
          lineHeight: 1.45,
          fontStyle: "italic",
          color: "var(--text)",
          margin: 0,
          letterSpacing: "-0.01em",
        }}>
          Зміни починаються тоді, коли ти вирішуєш бути чесним із собою.
        </blockquote>
        <div style={{
          marginTop: "28px",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: "var(--muted)",
        }}>
          — Ірина Коваленко
        </div>
      </div>
    </section>
  );
}
