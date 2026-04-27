import React from "react";

export default function CTA() {
  return (
    <section
      style={{
        padding: "80px 20px 100px",
        background: "linear-gradient(160deg, #FFF0E8 0%, #FFF8F4 100%)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="hero-blob" style={{ width: 280, height: 280, background: "#FFD6C0", top: "-10%", right: "-5%" }} />
      <div className="hero-blob" style={{ width: 220, height: 220, background: "#FFB8D0", bottom: "-5%", left: "-5%" }} />

      <div style={{ maxWidth: 400, margin: "0 auto", position: "relative" }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🌸✨🌸</div>

        <h2
          className="serif"
          style={{
            fontSize: "clamp(24px, 6vw, 36px)",
            fontWeight: 700,
            color: "#2E1A0E",
            lineHeight: 1.5,
            marginBottom: 16,
          }}
        >
          韓国旅行を、
          <br />
          もっと特別な思い出に。
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "#7A5C4A",
            lineHeight: 1.9,
            marginBottom: 36,
          }}
        >
          まずはLINEでお気軽にご相談ください。
          <br />
          日本語で丁寧にご案内します。
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="btn-line" style={{ width: "100%", maxWidth: 300 }}>
            <span style={{ fontSize: 20 }}>💬</span>
            LINEで相談する
          </a>
          <a href="#join" className="btn-outline" style={{ width: "100%", maxWidth: 300 }}>
            <span>🌟</span>
            参加してみる
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: "#B0907A" }}>
          ※ 返信は日本語でお送りします
        </p>
      </div>
    </section>
  );
}
