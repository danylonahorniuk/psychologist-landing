import Image from "next/image";

const PHOTO_URL = "/about.png";

const creds = [
  "Диплом практичного психолога, Київський національний університет",
  "Сертифікація КПТ, Інститут когнітивно-поведінкової терапії",
  "Гештальт-терапія, 4-річна програма МІГТ",
  "Член Асоціації психологів України",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "120px 80px 100px", background: "var(--bg-warm)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label */}
        <div style={{ marginBottom: "72px" }}>
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              fontWeight: 400,
            }}
          >
            Про мене
          </span>
          <div
            style={{
              width: "44px",
              height: "2px",
              background: "var(--sage)",
              marginTop: "10px",
              borderRadius: "1px",
            }}
          />
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: "88px",
            alignItems: "flex-start",
          }}
        >
          {/* ── LEFT: Photo ── */}
          <div style={{ position: "relative" }}>
            {/* Rotated photo frame */}
            <div
              style={{
                transform: "rotate(-2.5deg)",
                transformOrigin: "center bottom",
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(44,44,44,0.14), 0 8px 20px rgba(44,44,44,0.06)",
              }}
            >
              <Image
                src={PHOTO_URL}
                alt="Ірина Коваленко"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="500px"
              />
            </div>

            {/* Experience badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-8px",
                right: "-24px",
                background: "var(--sage)",
                color: "#fff",
                borderRadius: "50%",
                width: "112px",
                height: "112px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 500,
                textAlign: "center",
                lineHeight: 1.3,
                boxShadow: "0 8px 24px rgba(143,168,135,0.35)",
              }}
            >
              <strong
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  display: "block",
                }}
              >
                7+
              </strong>
              років
              <br />
              досвіду
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div>
            {/* Greeting heading */}
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(36px, 3.8vw, 54px)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "28px",
                color: "var(--text)",
              }}
            >
              Привіт! Мене звуть{" "}
              <br />
              <span style={{ color: "var(--sage)" }}>Ірина Коваленко</span>
            </h2>

            {/* Bio */}
            <p
              style={{
                fontSize: "16px",
                color: "var(--muted)",
                lineHeight: 1.78,
                fontWeight: 300,
                marginBottom: "20px",
                maxWidth: "520px",
              }}
            >
              Я психолог і коуч із 7-річним досвідом роботи з дорослими. Допомагаю
              людям розібратись у собі, позбутися внутрішніх бар&apos;єрів і почати
              жити більш свідомо та наповнено.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--muted)",
                lineHeight: 1.78,
                fontWeight: 300,
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              Вірю, що кожна людина має в собі ресурс для змін. Моє завдання —
              допомогти тобі до нього дістатись. У роботі поєдную
              когнітивно-поведінкову терапію, гештальт і елементи коучингу.
            </p>

            {/* Credentials */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {creds.map((c) => (
                <div
                  key={c}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontSize: "13.5px",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "var(--sage)",
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission statement — full-width strip */}
        <div
          style={{
            marginTop: "100px",
            paddingTop: "56px",
            borderTop: "1px solid var(--border)",
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--sage)",
              fontWeight: 500,
            }}
          >
            Моя ціль
          </div>
          <p
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontStyle: "italic",
              fontSize: "clamp(22px, 2.4vw, 32px)",
              color: "var(--text)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            Допомогти тобі побачити себе ясніше, прийняти своє життя
            і знайти шлях, який відповідає саме тобі.
          </p>
        </div>

      </div>
    </section>
  );
}
