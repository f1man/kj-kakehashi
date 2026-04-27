import React from "react";

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
  const faqs = [
    { q: "韓国語が話せなくても大丈夫ですか？", a: "もちろんOKです！日本語が通じる環境を整えており、スタッフが常にサポートします。" },
    { q: "一人参加でも友達はできますか？", a: "ひとり参加の方が多く、自然と打ち解けられます。少人数なので全員と話せます。" },
    { q: "韓国旅行中でも参加できますか？", a: "旅行スケジュールに合わせて参加できます。ソウル市内のアクセスしやすい場所で開催しています。" },
    { q: "参加費はいくらですか？", a: "詳細はLINEでお気軽にお問い合わせください。ドリンク代込みのリーズナブルな価格設定です。" },
  ];

  return (
    <section style={{ padding: "72px 20px", background: "#fff" }}>
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="section-label">よくある質問</span>
          <h2 className="section-title">
            気になること、
            <br />
            なんでもお答えします
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} />
        ))}
      </div>
    </section>
  );
}
