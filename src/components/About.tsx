"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    label: "KJ架け橋とは",
    title1: "ふたつの国をつなぐ、",
    title2: "あたたかい場所",
    desc1: "KJ架け橋は、韓国が好きな日本人と、",
    desc2: "日本に関心のある韓国人が",
    desc3: "自然につながるための",
    descStrong: "日韓交流コミュニティ",
    descEnd: "です。",
    subDesc1: "観光だけでは出会えない、",
    subDesc2: "あたたかい交流の時間をお届けします。",
    stats: [
      { num: "200+", label: "累計参加者数" },
      { num: "98%", label: "満足度" },
      { num: "50+", label: "開催実績" },
    ]
  },
  ko: {
    label: "카케하시란?",
    title1: "두 나라를 연결하는,",
    title2: "따뜻한 공간",
    desc1: "KJ가케하시는 한국을 좋아하는 일본인과,",
    desc2: "일본에 관심 있는 한국인이",
    desc3: "자연스럽게 이어지는",
    descStrong: "한일 교류 커뮤니티",
    descEnd: "입니다.",
    subDesc1: "관광만으로는 만날 수 없는,",
    subDesc2: "따뜻한 교류의 시간을 전해드립니다.",
    stats: [
      { num: "200+", label: "누적 참가자 수" },
      { num: "98%", label: "만족도" },
      { num: "50+", label: "개최 실적" },
    ]
  }
};

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      style={{
        padding: "72px 20px",
        background: "linear-gradient(160deg, #FFF8F4 0%, #FFF0E8 100%)",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title1}
            <br />
            {t.title2}
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
            {t.desc1}
            <br />
            {t.desc2}
            <br />
            {t.desc3}
            <br />
            <strong style={{ color: "#F97B5A" }}>{t.descStrong}</strong>{t.descEnd}
          </p>
        </div>

        <p style={{ fontSize: 15, color: "#7A5C4A", lineHeight: 2, textAlign: "center" }}>
          {t.subDesc1}
          <br />
          {t.subDesc2}
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
          {t.stats.map((s, i) => (
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
