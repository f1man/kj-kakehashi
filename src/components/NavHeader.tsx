"use client";

import React, { useState, useEffect } from "react";

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false);

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
        KJ架け橋
      </span>
      <a href="https://line.me/R/ti/p/@797hrieh" target="_blank" rel="noopener noreferrer" className="btn-line" style={{ padding: "8px 18px", fontSize: 13 }}>
        <span>LINE相談</span>
      </a>
    </nav>
  );
}
