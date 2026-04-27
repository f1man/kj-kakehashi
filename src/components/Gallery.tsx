import React from "react";
import Image from "next/image";

export default function Gallery({ images }: { images: string[] }) {
  // 画像がない場合のフォールバック用ダミー画像
  const safeImages = images.length > 0 ? images : [
    "https://placehold.co/600x400/FDF1F0/FF8BA7?text=Meetup+1",
    "https://placehold.co/600x400/FFF4E5/FF8BA7?text=Cafe+Time",
    "https://placehold.co/600x400/FDFBF7/FF8BA7?text=Dinner",
    "https://placehold.co/600x400/F0E8FF/DCC8FF?text=Night",
    "https://placehold.co/600x400/E8F9EE/C8EDDA?text=Friends",
  ];

  // 画像を3行に分割する
  const row1: string[] = [];
  const row2: string[] = [];
  const row3: string[] = [];
  
  safeImages.forEach((img, i) => {
    if (i % 3 === 0) row1.push(img);
    else if (i % 3 === 1) row2.push(img);
    else row3.push(img);
  });

  // 無限スクロールのループアニメーションをスムーズにするため、
  // 画像数が少ない場合は同じ配列を連結して水増しする（マーキーに必要な幅を確保）
  const fillRow = (row: string[]) => {
    let filled = [...row];
    while (filled.length < 10) {
      filled = [...filled, ...row];
    }
    return filled;
  };

  const finalRow1 = fillRow(row1);
  const finalRow2 = fillRow(row2);
  const finalRow3 = fillRow(row3);

  // マップ用のヘルパー関数（マーキー内の1行分を描画）
  const renderMarqueeTrack = (rowImages: string[], direction: 'left' | 'right', speed: string) => (
    <div className="marquee-wrapper">
      <div 
        className="marquee-track" 
        style={{ 
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
          animationDuration: speed
        }}
      >
        {/* スムーズな無限ループのために2セット出力 */}
        {[...rowImages, ...rowImages].map((src, i) => (
          <div key={i} className="marquee-item">
            <Image
              src={src}
              alt="ギャラリー画像"
              fill
              sizes="(max-width: 640px) 30vw, 200px"
              className="object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      style={{
        padding: "72px 0 90px",
        background: "linear-gradient(160deg, #FFF8F4 0%, #FFF0E8 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 32, padding: "0 20px" }}>
        <span className="section-label">ギャラリー</span>
        <h2 className="section-title">
          交流会の
          <br />
          雰囲気をのぞいてみて
        </h2>
        <p className="section-sub">笑顔があふれる、あたたかい時間</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px" }}>
        {/* 1行目: 左へ (少し遅め) */}
        {renderMarqueeTrack(finalRow1, 'left', '150s')}
        
        {/* 2行目: 右へ (さらに遅め) */}
        {renderMarqueeTrack(finalRow2, 'right', '180s')}
        
        {/* 3行目: 左へ (少し速め) */}
        {renderMarqueeTrack(finalRow3, 'left', '120s')}
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: 12,
          color: "#B0907A",
          marginTop: 32,
        }}
      >
        ※ 実際の交流会の様子です
      </p>
    </section>
  );
}
