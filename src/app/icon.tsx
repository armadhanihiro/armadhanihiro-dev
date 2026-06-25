import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "32px",
          height: "32px",
          background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 800,
          borderRadius: "8px",
        }}
      >
        AH
      </div>
    ),
    {
      ...size,
    }
  );
}