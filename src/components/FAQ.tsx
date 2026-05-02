"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    label: "よくある質問",
    title1: "気になること、",
    title2: "なんでもお答えします",
    faqs: [
      { q: "韓国語が話せなくても大丈夫ですか？", a: "もちろんOKです！日本語が通じる環境を整えており、スタッフが常にサポートします。" },
      { q: "一人参加でも友達はできますか？", a: "ひとり参加の方が多く、自然と打ち解けられます。少人数なので全員と話せます。" },
      { q: "韓国旅行中でも参加できますか？", a: "旅行スケジュールに合わせて参加できます。ソウル市内のアクセスしやすい場所で開催しています。" },
      { q: "参加費はいくらですか？", a: "詳細はLINEでお気軽にお問い合わせください。ドリンク代込みのリーズナブルな価格設定です。" },
    ]
  },
  ko: {
    label: "자주 묻는 질문",
    title1: "궁금한 점,",
    title2: "무엇이든 답해드립니다",
    faqs: [
      { q: "일본어를 못해도 괜찮나요?", a: "물론입니다! 한국어가 통하는 환경을 갖추고 있으며 스태프가 항상 서포트해 드립니다." },
      { q: "혼자 참가해도 친구를 사귈 수 있나요?", a: "혼자 오시는 분들이 많아 자연스럽게 친해질 수 있습니다. 소수 정예라 모두와 이야기할 수 있습니다." },
      { q: "여행 중에도 참가할 수 있나요?", a: "여행 일정에 맞춰 참가하실 수 있습니다. 서울 시내의 접근하기 좋은 장소에서 개최하고 있습니다." },
      { q: "참가비는 얼마인가요?", a: "자세한 사항은 LINE으로 부담 없이 문의해 주세요. 음료값이 포함된 합리적인 가격입니다." },
    ]
  }
};

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  return (
    <details
      className="faq-details"
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #F5E8DC",
        marginBottom: 10,
        overflow: "hidden",
      }}
    >
      <summary
        style={{
          width: "100%",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          cursor: "pointer",
          listStyle: "none",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14, color: "#2E1A0E", lineHeight: 1.5, flex: 1 }}>
          Q. {faq.q}
        </span>
        <span className="faq-icon" style={{ fontSize: 18, color: "#F97B5A", flexShrink: 0 }}>
          +
        </span>
      </summary>
      <div
        style={{
          padding: "0 20px 18px",
          fontSize: 13,
          color: "#7A5C4A",
          lineHeight: 1.8,
          borderTop: "1px solid #F5E8DC",
          paddingTop: 14,
          background: "#FFF8F4",
        }}
      >
        {faq.a}
      </div>
    </details>
  );
}

export default function FAQ() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section style={{ padding: "72px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">
            {t.title1}
            <br />
            {t.title2}
          </h2>
        </div>

        {t.faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
}
