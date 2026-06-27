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
        }}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 17C10 17 3 13 3 8C3 5.2 5.2 3 8 3C9.2 3 10.3 3.5 11 4.3C11.7 3.5 12.8 3 14 3C16.8 3 19 5.2 19 8"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path d="M10 17V9" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
