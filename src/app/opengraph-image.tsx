import { ImageResponse } from "next/og";

export const alt = "Centro SER - Espaço NeuroAfetivo & IntegraVida";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #fbf8f1 0%, #edf5f3 56%, #f6efe2 100%)",
          color: "#263f3f",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ color: "#b28b3d", fontSize: 30, fontWeight: 700, letterSpacing: 6 }}>
          CENTRO SER
        </div>
        <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05, marginTop: 24, maxWidth: 920 }}>
          Psicologia, desenvolvimento humano e cuidado integral
        </div>
        <div style={{ color: "#5d584f", fontSize: 32, marginTop: 28 }}>
          Espaço NeuroAfetivo & IntegraVida em Piracicaba/SP
        </div>
      </div>
    ),
    size,
  );
}
