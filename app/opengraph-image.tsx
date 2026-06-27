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
          background: "#F0EBE3",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div style={{ width: 48, height: 2, background: "#8FA887", marginBottom: 48, display: "flex" }} />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#2C2C2C",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: 20,
            display: "flex",
          }}
        >
          Ірина Коваленко
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 26,
            color: "#8FA887",
            fontWeight: 400,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 48,
            display: "flex",
          }}
        >
          Психолог · Гештальт-терапевт
        </div>

        {/* Divider */}
        <div style={{ width: 64, height: 1, background: "#D4C5B0", marginBottom: 48, display: "flex" }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#6B6B6B",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "-0.5px",
            display: "flex",
          }}
        >
          Знайди себе. Живи повніше.
        </div>
      </div>
    ),
    { ...size }
  );
}
