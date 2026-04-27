import React from "react";

export default function Features() {
  return (
    <section
      style={{
        padding: "72px 20px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">安心ポイント</span>
          <h2 className="section-title">
            はじめての方でも
            <br />
            安心して参加できます
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {[
            { icon: "👩‍💼", title: "ひとり参加OK", desc: "一人での参加者が多数。すぐに打ち解けられます" },
            { icon: "🗣️", title: "日本語対応", desc: "スタッフが日本語でサポートします" },
            { icon: "👥", title: "少人数制", desc: "8〜12名の少人数で自然に会話できます" },
            { icon: "✈️", title: "旅行中でもOK", desc: "観光の合間にも気軽に参加できます" },
          ].map((item, i) => (
            <div
              key={i}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: 10, animationDelay: `${i * 0.1}s` }}
            >
              <div style={{ fontSize: 30 }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "#2E1A0E", lineHeight: 1.3 }}>{item.title}</div>
              <div style={{ fontSize: 12, color: "#7A5C4A", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
