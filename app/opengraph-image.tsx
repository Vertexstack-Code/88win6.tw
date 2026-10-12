import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "88WIN Official Info Center";

/**
 * Site-wide share image. Text is Latin-only on purpose: next/og ships no CJK
 * font, so Chinese characters would render as empty boxes.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #071229 0%, #0d1a38 55%, #1c63d6 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 92, fontWeight: 800 }}>88WIN</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 48, fontWeight: 700, color: "#7cb2fb" }}>
          Official Links &amp; Verification Center
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            padding: "14px 28px",
            borderRadius: 999,
            background: "rgba(16,185,129,0.18)",
            color: "#6ee7b7",
            fontSize: 32,
            fontWeight: 700,
            alignSelf: "flex-start",
          }}
        >
          www.88win6.tw
        </div>
      </div>
    ),
    size,
  );
}
