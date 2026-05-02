"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FixedLINEButton() {
  const { lang } = useLanguage();

  return (
    <div className="line-fab">
      <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="line-fab-btn" title={lang === 'ja' ? "LINEで相談する" : "LINE 문의하기"}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 4C9.373 4 4 8.92 4 15c0 3.78 2.038 7.158 5.2 9.348L8 28l4.47-2.352A13.7 13.7 0 0016 26c6.627 0 12-4.92 12-11S22.627 4 16 4z"
            fill="white"
          />
          <path
            d="M12 17.5l-2.5-4h1.8l1.7 2.7 1.7-2.7H16.5L14 17.5v2.5h-2v-2.5zM17.5 20V14h2v5h3v1h-5zM23.5 20L21 14h1.8l2.2 4.5V14h2v6h-2.5z"
            fill="#06C755"
          />
        </svg>
      </a>
      <span className="line-fab-label">{lang === 'ja' ? "LINE相談" : "LINE 문의"}</span>
    </div>
  );
}
