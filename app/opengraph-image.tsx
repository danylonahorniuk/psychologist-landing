import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const photoBuffer = readFileSync(join(process.cwd(), "public", "hiro2.png"));
  const photoBase64 = `data:image/png;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          position: "relative",
          fontFamily: "serif",
          overflow: "hidden",
        }}
      >
        {/* Background photo */}
        <img
          src={photoBase64}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "60% center",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.65) 50%, rgba(20,20,20,0.2) 100%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 96px",
            zIndex: 1,
          }}
        >
          {/* Tag */}
          <div style={{
            fontSize: 14,
            color: "#8FA887",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 32,
            display: "flex",
            fontWeight: 600,
          }}>
            Психолог · Гештальт-терапевт
          </div>

          {/* Name */}
          <div style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "-2px",
            marginBottom: 24,
            display: "flex",
          }}>
            Ірина Коваленко
          </div>

          {/* Accent line */}
          <div style={{ width: 56, height: 3, background: "#8FA887", marginBottom: 28, display: "flex" }} />

          {/* Tagline */}
          <div style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.8)",
            fontStyle: "italic",
            lineHeight: 1.4,
            marginBottom: 56,
            display: "flex",
          }}>
            Знайди себе. Живи повніше.
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48 }}>
            {[
              { value: "7+", label: "років практики" },
              { value: "200+", label: "клієнтів" },
              { value: "Київ", label: "та онлайн" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 36, fontWeight: 700, color: "#fff", lineHeight: 1, display: "flex" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 8, letterSpacing: "0.05em", display: "flex" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
