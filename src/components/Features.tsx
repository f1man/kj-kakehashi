"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    label: "安心ポイント",
    title1: "はじめての方でも",
    title2: "安心して参加できます",
    features: [
      { icon: "👩‍💼", title: "ひとり参加OK", desc: "一人での参加者が多数。すぐに打ち解けられます" },
      { icon: "🗣️", title: "日本語対応", desc: "スタッフが日本語でサポートします" },
      { icon: "👥", title: "少人数制", desc: "8〜12名の少人数で自然に会話できます" },
      { icon: "✈️", title: "旅行中でもOK", desc: "観光の合間にも気軽に参加できます" },
    ]
  },
  ko: {
    label: "안심 포인트",
    title1: "처음이신 분들도",
    title2: "안심하고 참여할 수 있습니다",
    features: [
      { icon: "👩‍💼", title: "혼자서도 OK", desc: "혼자 오시는 분들이 많아 금방 친해질 수 있습니다" },
      { icon: "🗣️", title: "언어 지원", desc: "스태프가 원활한 소통을 도와드립니다" },
      { icon: "👥", title: "소수 정예", desc: "8~12명의 소규모로 자연스럽게 대화할 수 있습니다" },
      { icon: "✈️", title: "여행 중에도 OK", desc: "관광하는 틈틈이 부담 없이 참여할 수 있습니다" },
    ]
  }
};

export default function Features() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      style={{
        padding: "72px 20px",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title1}
            <br />
            {t.title2}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {t.features.map((item, i) => (
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
