import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#8FA887",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "-0.5px",
          fontFamily: "serif",
        }}
      >
        ІК
      </div>
    ),
    { ...size }
  );
}
