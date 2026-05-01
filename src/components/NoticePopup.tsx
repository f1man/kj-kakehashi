"use client";

import React, { useState, useEffect } from "react";

export default function NoticePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
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

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-[9999] bg-black bg-opacity-60 transition-opacity"
    >
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up">
        {/* Header */}
        <div className="bg-kj-primary p-4 flex justify-between items-center text-white">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span>⚠️</span> 重要なお知らせ
          </h2>
          <button 
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
            aria-label="閉じる"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4 text-gray-800 leading-relaxed">
          <p className="font-bold text-lg border-b pb-2">
            ホームページから交流会をお申し込みいただいた、<br className="hidden sm:block"/>
            <span className="text-kj-primary">ソン・シギョンファン</span>の<span className="text-kj-primary text-xl">イオ様</span>へ
          </p>
          
          <p>
            LINE IDのご入力がなく、こちらからご連絡が取れない状態となっております。
          </p>
          
          <div className="bg-kj-pink bg-opacity-20 p-4 rounded-lg border border-kj-pink">
            <p className="font-semibold mb-2">
              公式LINEに直接メッセージをお送りいただければ、交流会を開催する予定です！
            </p>
            <p className="text-sm">
              現在、5/4と5/6の両日とも参加希望の方が多くいらっしゃいます。
            </p>
          </div>

          <p className="font-bold text-center text-red-500 pt-2">
            お手数ですが、至急公式LINEまでご連絡をお願いいたします🙇‍♀️
          </p>

          <div className="pt-4 flex flex-col gap-3">
            <a 
              href="https://line.me/R/ti/p/@797hrieh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#06C755] hover:bg-[#05b34c] text-white font-bold py-3 rounded-full transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              公式LINEにメッセージを送る
            </a>
            <button
              onClick={handleClose}
              className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-full transition-colors"
            >
              閉じる
            </button>
            
            <label className="flex items-center justify-center mt-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={hideToday}
                onChange={(e) => setHideToday(e.target.checked)}
                className="w-4 h-4 text-kj-primary border-gray-300 rounded focus:ring-kj-primary cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                今日はもう表示しない (오늘 하루 보지 않기)
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
