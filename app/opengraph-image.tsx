import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          fontFamily: "serif",
        }}
      >
        {/* LEFT — dark panel */}
        <div
          style={{
            width: 400,
            height: 630,
            background: "#2C2C2C",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: 140, fontWeight: 700, color: "rgba(255,255,255,0.08)", lineHeight: 1, letterSpacing: "-4px", display: "flex" }}>
            ІК
          </div>
          <div style={{ width: 36, height: 3, background: "#8FA887", margin: "28px 0", display: "flex" }} />
          <div style={{ fontSize: 13, color: "#8FA887", letterSpacing: "0.22em", textTransform: "uppercase", display: "flex" }}>
            Психологія
          </div>
        </div>

        {/* RIGHT — content */}
        <div
          style={{
            flex: 1,
            background: "#FAF8F5",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 68px",
          }}
        >
          <div style={{ fontSize: 12, color: "#8FA887", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 28, display: "flex", fontWeight: 600 }}>
            Психолог · Гештальт-терапевт
          </div>

          <div style={{ fontSize: 58, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.05, letterSpacing: "-1.5px", marginBottom: 24, display: "flex" }}>
            Ірина Коваленко
          </div>

          <div style={{ width: 44, height: 3, background: "#8FA887", marginBottom: 24, display: "flex" }} />

          <div style={{ fontSize: 24, color: "#444", fontStyle: "italic", lineHeight: 1.5, marginBottom: 44, display: "flex" }}>
            Знайди себе. Живи повніше.
          </div>

          <div style={{ display: "flex", gap: 44 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 700, color: "#2C2C2C", lineHeight: 1, display: "flex" }}>7+</div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 6, letterSpacing: "0.06em", display: "flex" }}>років практики</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 700, color: "#2C2C2C", lineHeight: 1, display: "flex" }}>200+</div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 6, letterSpacing: "0.06em", display: "flex" }}>клієнтів</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 34, fontWeight: 700, color: "#2C2C2C", lineHeight: 1, display: "flex" }}>Київ</div>
              <div style={{ fontSize: 12, color: "#888", marginTop: 6, letterSpacing: "0.06em", display: "flex" }}>та онлайн</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
