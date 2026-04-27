import React from "react";

export default function About() {
  return (
    <section
      style={{
        padding: "72px 20px",
        background: "linear-gradient(160deg, #FFF8F4 0%, #FFF0E8 100%)",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="section-label">KJ架け橋とは</span>
          <h2 className="section-title">
            ふたつの国をつなぐ、
            <br />
            あたたかい場所
          </h2>
        </div>

        {/* Illustration card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: "32px 24px",
            boxShadow: "0 8px 40px rgba(180,120,80,0.1)",
            border: "1px solid #F5E8DC",
            marginBottom: 28,
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <img src="https://flagcdn.com/jp.svg" alt="Japan" style={{ width: 36, borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
            <span style={{ fontSize: 24, color: "#9A7A6A", fontWeight: 300 }}>✕</span>
            <img src="https://flagcdn.com/kr.svg" alt="South Korea" style={{ width: 36, borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
          </div>
          <p style={{ fontSize: 15, color: "#3D2B1F", lineHeight: 2, fontWeight: 400 }}>
            KJ架け橋は、韓国が好きな日本人と、
            <br />
            日本に関心のある韓国人が
            <br />
            自然につながるための
            <br />
            <strong style={{ color: "#F97B5A" }}>日韓交流コミュニティ</strong>です。
          </p>
        </div>

        <p style={{ fontSize: 15, color: "#7A5C4A", lineHeight: 2, textAlign: "center" }}>
          観光だけでは出会えない、
          <br />
          あたたかい交流の時間をお届けします。
        </p>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            marginTop: 36,
          }}
        >
          {[
            { num: "200+", label: "累計参加者数" },
            { num: "98%", label: "満足度" },
            { num: "50+", label: "開催実績" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                background: "#fff",
                borderRadius: 16,
                padding: "20px 12px",
                border: "1px solid #F5E8DC",
              }}
            >
              <div
                className="serif"
                style={{ fontSize: 26, fontWeight: 700, color: "#F97B5A", letterSpacing: "-0.02em" }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 11, color: "#7A5C4A", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
