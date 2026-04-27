import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #FFF8F4 0%, #FFF2EA 50%, #FFF8F0 100%)",
      }}
    >
      {/* Blobs */}
      <div className="hero-blob" style={{ width: 320, height: 320, background: "#FFD6C0", top: "5%", right: "-8%" }} />
      <div className="hero-blob" style={{ width: 260, height: 260, background: "#FFB8D0", bottom: "10%", left: "-5%" }} />
      <div className="hero-blob" style={{ width: 200, height: 200, background: "#FFE4B8", top: "30%", left: "10%" }} />

      {/* Floating deco */}
      <div
        className="float"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          fontSize: 38,
          opacity: 0.7,
          animationDelay: "0s",
        }}
      >
        🌸
      </div>
      <div
        className="float"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "6%",
          fontSize: 30,
          opacity: 0.6,
          animationDelay: "1.5s",
        }}
      >
        ✨
      </div>
      <div
        className="float"
        style={{
          position: "absolute",
          top: "25%",
          left: "5%",
          fontSize: 24,
          opacity: 0.5,
          animationDelay: "0.8s",
        }}
      >
        🎋
      </div>

      {/* Badge */}
      <div
        className="fade-up"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "rgba(255,255,255,0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid #F5D8C8",
          borderRadius: 50,
          padding: "8px 18px",
          marginBottom: 28,
          fontSize: 13,
          color: "#C45C2E",
          fontWeight: 700,
          letterSpacing: "0.06em",
        }}
      >
        <img src="https://flagcdn.com/jp.svg" alt="Japan" style={{ width: 18, borderRadius: 2 }} />
        <span>日韓交流コミュニティ</span>
        <img src="https://flagcdn.com/kr.svg" alt="South Korea" style={{ width: 18, borderRadius: 2 }} />
      </div>

      {/* Main copy */}
      <h1
        className="serif fade-up"
        style={{
          fontSize: "clamp(30px, 8vw, 54px)",
          fontWeight: 700,
          color: "#2E1A0E",
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
          marginBottom: 20,
          animationDelay: "0.1s",
          position: "relative",
          zIndex: 1,
        }}
      >
        韓国で、
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, #F97B5A 0%, #E8699A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          忘れられない出会い
        </span>
        を。
      </h1>

      <p
        className="fade-up"
        style={{
          fontSize: "clamp(15px, 3.5vw, 18px)",
          color: "#7A5C4A",
          lineHeight: 1.8,
          marginBottom: 36,
          animationDelay: "0.2s",
          maxWidth: 360,
        }}
      >
        初めてでも安心。
        <br />
        ひとり参加OKの日韓交流会。
      </p>

      <div
        className="fade-up"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          width: "100%",
          maxWidth: 280,
          animationDelay: "0.3s",
        }}
      >
        <a href="#join" className="btn-primary">
          <span>🌟</span>
          参加してみる
        </a>
        <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="btn-line">
          <span style={{ fontSize: 18 }}>💬</span>
          LINEで相談する
        </a>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "#7A5C4A" }}>SCROLL</span>
        <div
          style={{
            width: 1.5,
            height: 36,
            background: "linear-gradient(to bottom, #C45C2E, transparent)",
            borderRadius: 2,
          }}
        />
      </div>
    </section>
  );
}
