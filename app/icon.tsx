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
        {/* Leaf shape via border-radius CSS trick */}
        <div
          style={{
            width: 14,
            height: 14,
            background: "white",
            borderRadius: "0% 50% 0% 50%",
            transform: "rotate(45deg)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
