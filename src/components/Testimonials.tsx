"use client";

import React from "react";
import { TestimonialData } from "@/utils/fetchTestimonials";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    label: "参加者の声",
    title1: "みんなの",
    title2: "リアルな体験談",
  },
  ko: {
    label: "참가자 후기",
    title1: "참가자들의",
    title2: "생생한 체험담",
  }
};

export default function Testimonials({ testimonials }: { testimonials: TestimonialData[] }) {
  const { lang } = useLanguage();
  const t = translations[lang];

  // アバターと背景色のローテーション用
  const avatars = [
    { emoji: "🌸", bg: "#FFE0EE" },
    { emoji: "🍵", bg: "#E8F9EE" },
    { emoji: "🌿", bg: "#FFF5DC" },
    { emoji: "✨", bg: "#E8F0FF" },
  ];

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

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {testimonials.map((testi, i) => {
            const avatar = avatars[i % avatars.length];
            return (
              <div key={i} className="testimonial-card">
                {/* Stars (固定で5つ星) */}
                <div style={{ marginBottom: 10, paddingLeft: 4, paddingTop: 4 }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="star">
                      ★
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "#3D2B1F",
                    lineHeight: 1.9,
                    marginBottom: 16,
                    paddingTop: 4,
                  }}
                >
                  {testi.text}
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    className="avatar"
                    style={{ background: avatar.bg, fontSize: 20 }}
                  >
                    {avatar.emoji}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#2E1A0E" }}>
                      {testi.name}・{testi.age}
                    </div>
                    <div style={{ fontSize: 12, color: "#9A7A6A", marginTop: 2 }}>
                      {testi.gender}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
