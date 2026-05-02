"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    label: "参加方法",
    title1: "3ステップで",
    title2: "かんたんに参加できます",
    steps: [
      {
        step: "01",
        title: "LINEを追加",
        desc: "まずはLINEの友だちに追加してください。スタッフが日本語でご案内します。",
        icon: "💬",
      },
      {
        step: "02",
        title: "日程を確認",
        desc: "開催予定の交流会から、ご都合に合う日程を選んでください。旅行スケジュールに合わせてOK！",
        icon: "📅",
      },
      {
        step: "03",
        title: "交流会に参加",
        desc: "当日は会場にお越しください。初めての方でもスタッフがしっかりサポートします。",
        icon: "🌟",
      },
    ],
    btnLine: "LINEで友だちを追加する"
  },
  ko: {
    label: "참여 방법",
    title1: "3단계로",
    title2: "간단하게 참여할 수 있습니다",
    steps: [
      {
        step: "01",
        title: "LINE 추가",
        desc: "먼저 LINE 친구를 추가해주세요. 스태프가 친절하게 안내해 드립니다.",
        icon: "💬",
      },
      {
        step: "02",
        title: "일정 확인",
        desc: "개최 예정인 교류회 중 원하시는 일정을 선택해주세요. 여행 일정에 맞춰 편하게 고르시면 됩니다!",
        icon: "📅",
      },
      {
        step: "03",
        title: "교류회 참여",
        desc: "당일 행사장에 방문해주세요. 처음 오시는 분들도 스태프가 확실히 서포트해 드립니다.",
        icon: "🌟",
      },
    ],
    btnLine: "LINE에서 친구 추가하기"
  }
};

export default function Steps() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section style={{ padding: "72px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title1}
            <br />
            {t.title2}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {t.steps.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 20, position: "relative", paddingBottom: 32 }}>
              {/* vertical line */}
              {i < 2 && (
                <div
                  style={{
                    position: "absolute",
                    left: 24,
                    top: 52,
                    bottom: 0,
                    width: 2,
                    background: "linear-gradient(to bottom, #F97B5A40, #F97B5A10)",
                  }}
                />
              )}
              <div className="step-circle" style={{ flexShrink: 0 }}>
                {item.step}
              </div>
              <div
                style={{
                  background: "#FFF8F4",
                  borderRadius: 18,
                  padding: "20px",
                  flex: 1,
                  border: "1px solid #F5E8DC",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#2E1A0E" }}>{item.title}</span>
                </div>
                <p style={{ fontSize: 13, color: "#7A5C4A", lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 8 }}>
          <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="btn-line">
            <span style={{ fontSize: 18 }}>💬</span>
            {t.btnLine}
          </a>
        </div>
      </div>
    </section>
  );
}
