export default function Manifesto() {
  return (
    <section
      style={{
        padding: "140px 80px",
        background: "var(--text)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative large circle */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.06)",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          top: "50%",
          right: "60px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left: quote */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "80px",
              color: "var(--sage)",
              lineHeight: 0.8,
              marginBottom: "20px",
              opacity: 0.7,
            }}
          >
            "
          </div>
          <blockquote
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(24px, 2.4vw, 34px)",
              fontWeight: 400,
              lineHeight: 1.4,
              fontStyle: "italic",
              color: "rgba(250,248,245,0.88)",
              margin: 0,
            }}
          >
            Зміни починаються тоді, коли ти вирішуєш бути чесним із собою.
          </blockquote>
          <div
            style={{
              marginTop: "32px",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "var(--sand)",
              opacity: 0.7,
            }}
          >
            — Ірина Коваленко
          </div>
        </div>

        {/* Right: manifesto text */}
        <div>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(250,248,245,0.65)",
              lineHeight: 1.78,
              fontWeight: 300,
              marginBottom: "24px",
            }}
          >
            Я не вірю в «швидкі рішення» і «методики за 5 кроків». Я вірю в
            людину — в її здатність зустрітися з собою, прийняти себе і знайти
            власний шлях.
          </p>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(250,248,245,0.65)",
              lineHeight: 1.78,
              fontWeight: 300,
            }}
          >
            Моє завдання — створити для тебе безпечний простір, де можна бути
            справжнім. Все інше — твоя робота, і я поруч.
          </p>

          <a
            href="#about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "40px",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--sand)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(212,197,176,0.4)",
              paddingBottom: "4px",
              transition: "border-color .2s",
            }}
          >
            Дізнатись більше про мене →
          </a>
        </div>
      </div>
    </section>
  );
}
