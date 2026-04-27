import React from "react";
import { ParsedEvent } from "@/utils/fetchEvents";

export default function Events({ events }: { events: ParsedEvent[] }) {
  // カラーパレットのローテーション用
  const palettes = [
    { color: "#FFE8D6", accent: "#F97B5A", emoji: "🍀" },
    { color: "#FFE0EE", accent: "#E8699A", emoji: "🌸" },
    { color: "#E8F0FF", accent: "#6A89E0", emoji: "✨" },
  ];

  return (
    <section
      style={{
        padding: "72px 20px",
        background: "linear-gradient(160deg, #FFF8F4 0%, #FFF0E8 100%)",
      }}
    >
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-label">開催予定</span>
          <h2 className="section-title">
            近日開催の
            <br />
            交流イベント
          </h2>
          <p className="section-sub">旅行スケジュールに合わせてご参加ください</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {events.map((ev, i) => {
            const p = palettes[i % palettes.length];
            // "女性5名 / 男性5名" などの文字列から数字を抽出
            const numbers = ev.ratio ? ev.ratio.match(/\d+/g) : null;
            let fFemale = 0;
            let fMale = 0;
            
            if (numbers && numbers.length >= 2) {
              // 「여성/女性」が先に来る前提、または数値をそのまま割り当て
              fFemale = parseInt(numbers[0]) || 0;
              fMale = parseInt(numbers[1]) || 0;
            } else if (numbers && numbers.length === 1) {
              fFemale = parseInt(numbers[0]) || 0;
            }

            const total = fFemale + fMale || 1; // ゼロ除算回避
            
            return (
              <div
                key={i}
                className="card"
                style={{ padding: 0, overflow: "hidden", border: `1px solid ${p.color}` }}
              >
                {/* Card header */}
                <div
                  style={{
                    background: p.color,
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 24 }}>{p.emoji}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#2E1A0E" }}>{ev.date}</div>
                      <div style={{ fontSize: 12, color: "#7A5C4A", marginTop: 2 }}>{ev.time}</div>
                    </div>
                  </div>
                  <span className="badge-green">{ev.status || "募集中"}</span>
                </div>

                {/* Card body */}
                <div style={{ padding: "16px 20px 20px" }}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 11, color: "#9A7A6A", fontWeight: 500, marginBottom: 4 }}>📍 場所</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#2E1A0E" }}>{ev.location}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#9A7A6A", fontWeight: 500, marginBottom: 4 }}>👥 募集人数</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#2E1A0E" }}>{ev.capacity}</div>
                    </div>
                  </div>

                  {/* Gender ratio bar */}
                  <div style={{ marginBottom: 16 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 11,
                        color: "#9A7A6A",
                        marginBottom: 6,
                      }}
                    >
                      <span>👩 女性 {fFemale}名</span>
                      <span>男性 {fMale}名 👨</span>
                    </div>
                    <div
                      style={{
                        height: 6,
                        borderRadius: 50,
                        background: "#F5E8DC",
                        overflow: "hidden",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          width: `${(fFemale / total) * 100}%`,
                          background: "linear-gradient(90deg, #FF9A9E, #FECFEF)",
                          borderRadius: "50px 0 0 50px",
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          background: "linear-gradient(90deg, #A1C4FD, #C2E9FB)",
                          borderRadius: "0 50px 50px 0",
                        }}
                      />
                    </div>
                  </div>

                  <a href={`?date=${encodeURIComponent(ev.date)}#join`} className="btn-primary" style={{ width: "100%", display: "flex" }}>
                    この回に参加する
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "#9A7A6A",
            marginTop: 20,
            lineHeight: 1.7,
          }}
        >
          ※ 日程が合わない場合はLINEでご相談ください
          <br />
          ご希望に合わせてご案内します
        </p>
      </div>
    </section>
  );
}
