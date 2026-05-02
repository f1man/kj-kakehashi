"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    title: "KJ架け橋",
    desc: "韓国が好きな日本人と韓国人をつなぐ日韓交流コミュニティ",
    links: ["利用規約", "プライバシーポリシー", "お問い合わせ"],
    copy: "© 2026 KJ架け橋 All rights reserved."
  },
  ko: {
    title: "KJ가케하시",
    desc: "한국을 좋아하는 일본인과 한국인을 연결하는 한일 교류 커뮤니티",
    links: ["이용약관", "개인정보처리방침", "문의하기"],
    copy: "© 2026 KJ가케하시 All rights reserved."
  }
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer
      style={{
        background: "#2E1A0E",
        color: "#C8A898",
        padding: "32px 20px",
        textAlign: "center",
      }}
    >
      <div
        className="serif"
        style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 8 }}
      >
        {t.title}
      </div>
      <p style={{ fontSize: 13, marginBottom: 20, lineHeight: 1.7 }}>
        {t.desc}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        {t.links.map((link) => (
          <a
            key={link}
            href="#"
            style={{ fontSize: 12, color: "#C8A898", textDecoration: "none" }}
          >
            {link}
          </a>
        ))}
      </div>
      <p style={{ fontSize: 11, color: "#7A5C4A" }}>
        {t.copy}
      </p>
    </footer>
  );
}
