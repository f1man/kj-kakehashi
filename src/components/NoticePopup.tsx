"use client";

import React, { useState, useEffect } from "react";

const content = {
  ja: {
    title: "重要なお知らせ",
    closeBtn: "閉じる",
    message1: <>ホームページから交流会をお申し込みいただいた、<br className="hidden sm:block"/><span className="text-kj-primary">ソン・シギョンファン</span>の<span className="text-kj-primary text-xl">イオ様</span>へ</>,
    message2: "LINE IDのご入力がなく、こちらからご連絡が取れない状態となっております。",
    boxLine1: "公式LINEに直接メッセージをお送りいただければ、交流会を開催する予定です！",
    boxLine2: "現在、5/4と5/6の両日とも参加希望の方が多くいらっしゃいます。",
    urgent: "お手数ですが、至急公式LINEまでご連絡をお願いいたします🙇‍♀️",
    btnLine: "公式LINEにメッセージを送る",
    btnHideToday: "今日はもう表示しない"
  },
  ko: {
    title: "중요한 안내",
    closeBtn: "닫기",
    message1: <>홈페이지를 통해 교류회를 신청하신<br className="hidden sm:block"/><span className="text-kj-primary">성시경 팬</span>이신 <span className="text-kj-primary text-xl">이오님</span>께</>,
    message2: "LINE ID를 입력하지 않아 연락 드릴 방법이 없습니다.",
    boxLine1: "공식 LINE으로 메시지를 보내주시면 교류회를 개최하려고 합니다!",
    boxLine2: "5/4, 5/6 양일 모두 참석하겠다는 분들이 많습니다.",
    urgent: "꼭 공식 LINE으로 연락 부탁드립니다🙇‍♀️",
    btnLine: "공식 LINE에 메시지 보내기",
    btnHideToday: "오늘 하루 보지 않기"
  }
};

export default function NoticePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);
  const [lang, setLang] = useState<'ja' | 'ko'>('ja');

  useEffect(() => {
    // Determine language based on browser setting
    if (typeof navigator !== 'undefined' && navigator.language.startsWith('ko')) {
      setLang('ko');
    }

    const hideDate = localStorage.getItem('hideNoticePopupDate');
    const today = new Date().toDateString();
    
    if (hideDate === today) {
      return;
    }

    // Show the popup shortly after the page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (hideToday) {
      localStorage.setItem('hideNoticePopupDate', new Date().toDateString());
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const t = content[lang];

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-[9999] bg-black bg-opacity-60 transition-opacity"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up">
        {/* Header */}
        <div className="bg-kj-primary p-4 flex justify-between items-center text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>⚠️</span> {t.title}
          </h2>
          <button 
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
            aria-label={t.closeBtn}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4 text-gray-800 leading-relaxed">
          <p className="font-bold text-lg border-b pb-2">
            {t.message1}
          </p>
          
          <p>
            {t.message2}
          </p>
          
          <div className="bg-kj-pink bg-opacity-20 p-4 rounded-lg border border-kj-pink">
            <p className="font-semibold mb-2">
              {t.boxLine1}
            </p>
            <p className="text-sm">
              {t.boxLine2}
            </p>
          </div>

          <p className="font-bold text-center text-red-500 pt-2">
            {t.urgent}
          </p>

          <div className="pt-4 flex flex-col gap-3">
            <a 
              href="https://line.me/R/ti/p/@797hrieh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 rounded-full transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              {t.btnLine}
            </a>
            <button
              onClick={handleClose}
              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-full transition-colors"
            >
              {t.closeBtn}
            </button>
            
            <label className="flex items-center justify-center mt-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={hideToday}
                onChange={(e) => setHideToday(e.target.checked)}
                className="w-4 h-4 text-kj-primary border-gray-300 rounded focus:ring-kj-primary cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                {t.btnHideToday}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
