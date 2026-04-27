import React from "react";

export default function Footer() {
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
        KJ架け橋
      </div>
      <p style={{ fontSize: 13, marginBottom: 20, lineHeight: 1.7 }}>
        韓国が好きな日本人と韓国人をつなぐ日韓交流コミュニティ
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
        {["利用規約", "プライバシーポリシー", "お問い合わせ"].map((link) => (
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
        © 2026 KJ架け橋 All rights reserved.
      </p>
    </footer>
  );
}
