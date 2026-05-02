"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    title1: "韓国旅行を、",
    title2: "もっと特別な思い出に。",
    desc1: "まずはLINEでお気軽にご相談ください。",
    desc2: "日本語で丁寧にご案内します。",
    btnLine: "LINEで相談する",
    btnJoin: "参加してみる",
    note: "※ 返信は日本語でお送りします"
  },
  ko: {
    title1: "한국 여행을,",
    title2: "더욱 특별한 추억으로.",
    desc1: "먼저 LINE으로 편하게 문의해 주세요.",
    desc2: "친절하게 안내해 드립니다.",
    btnLine: "LINE 문의",
    btnJoin: "참여해보기",
    note: "※ 답변은 한국어로 보내드립니다"
  }
};

export default function CTA() {
  const { lang } = useLanguage();
  const t = translations[lang];

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
          {t.title1}
          <br />
          {t.title2}
        </h2>

        <p
          style={{
            fontSize: 15,
            color: "#7A5C4A",
            lineHeight: 1.9,
            marginBottom: 36,
          }}
        >
          {t.desc1}
          <br />
          {t.desc2}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="btn-line" style={{ width: "100%", maxWidth: 300 }}>
            <span style={{ fontSize: 20 }}>💬</span>
            {t.btnLine}
          </a>
          <a href="#join" className="btn-outline" style={{ width: "100%", maxWidth: 300 }}>
            <span>🌟</span>
            {t.btnJoin}
          </a>
        </div>

        <p style={{ marginTop: 24, fontSize: 12, color: "#B0907A" }}>
          {t.note}
        </p>
      </div>
    </section>
  );
}
