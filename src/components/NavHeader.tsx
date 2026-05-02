"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(255,248,244,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #F5E8DC" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <span
        className="serif"
        style={{ fontSize: 20, fontWeight: 700, color: "#2E1A0E", letterSpacing: "0.02em" }}
      >
        {lang === 'ja' ? 'KJ架け橋' : 'KJ가케하시'}
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          display: "flex",
          border: "1px solid #F5E8DC",
          borderRadius: "6px",
          overflow: "hidden",
          background: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0 1px 3px rgba(0,0,0,0.02)"
        }}>
          <button 
            onClick={() => { if(lang !== 'ko') toggleLang(); }}
            style={{
              padding: "5px 12px",
              fontSize: "12px",
              fontWeight: 600,
              background: lang === 'ko' ? "#F97B5A" : "transparent",
              color: lang === 'ko' ? "white" : "#9A7A6A",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            KR
          </button>
          <button 
            onClick={() => { if(lang !== 'ja') toggleLang(); }}
            style={{
              padding: "5px 12px",
              fontSize: "12px",
              fontWeight: 600,
              background: lang === 'ja' ? "#F97B5A" : "transparent",
              color: lang === 'ja' ? "white" : "#9A7A6A",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            JP
          </button>
        </div>
        <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="btn-line" style={{ padding: "8px 14px", fontSize: 13 }}>
          <span>{lang === 'ja' ? 'LINE相談' : 'LINE 문의'}</span>
        </a>
      </div>
    </nav>
  );
}
