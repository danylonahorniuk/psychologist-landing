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
        {/* LEFT — sage green panel */}
        <div
          style={{
            width: 420,
            height: 630,
            background: "#8FA887",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Big decorative initials */}
          <div style={{ fontSize: 160, fontWeight: 600, color: "rgba(255,255,255,0.18)", lineHeight: 1, letterSpacing: "-8px", display: "flex" }}>
            ІК
          </div>
          {/* Thin line */}
          <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.5)", margin: "24px 0", display: "flex" }} />
          {/* Small label */}
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", letterSpacing: "0.18em", textTransform: "uppercase", display: "flex" }}>
            Психологія
          </div>
        </div>

        {/* RIGHT — content */}
        <div
          style={{
            flex: 1,
            background: "#F0EBE3",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
          }}
        >
          {/* Tag */}
          <div style={{ fontSize: 13, color: "#8FA887", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32, display: "flex" }}>
            Психолог · Гештальт-терапевт
          </div>

          {/* Name */}
          <div style={{ fontSize: 64, fontWeight: 500, color: "#2C2C2C", lineHeight: 1.05, letterSpacing: "-2px", marginBottom: 28, display: "flex" }}>
            Ірина Коваленко
          </div>

          {/* Divider */}
          <div style={{ width: 48, height: 2, background: "#D4C5B0", marginBottom: 28, display: "flex" }} />

          {/* Tagline */}
          <div style={{ fontSize: 26, color: "#6B6B6B", fontWeight: 300, fontStyle: "italic", lineHeight: 1.5, marginBottom: 40, display: "flex" }}>
            Знайди себе. Живи повніше.
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 32, fontWeight: 500, color: "#8FA887", lineHeight: 1, display: "flex" }}>7+</div>
              <div style={{ fontSize: 13, color: "#6B6B6B", marginTop: 6, letterSpacing: "0.05em", display: "flex" }}>років практики</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 32, fontWeight: 500, color: "#8FA887", lineHeight: 1, display: "flex" }}>200+</div>
              <div style={{ fontSize: 13, color: "#6B6B6B", marginTop: 6, letterSpacing: "0.05em", display: "flex" }}>клієнтів</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 32, fontWeight: 500, color: "#8FA887", lineHeight: 1, display: "flex" }}>Київ</div>
              <div style={{ fontSize: 13, color: "#6B6B6B", marginTop: 6, letterSpacing: "0.05em", display: "flex" }}>та онлайн</div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
