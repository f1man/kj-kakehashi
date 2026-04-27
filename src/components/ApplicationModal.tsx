"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { submitApplication } from "@/app/actions";

export default function ApplicationModal({ 
  isServerSuccess,
  preselectedDate 
}: { 
  isServerSuccess?: boolean,
  preselectedDate?: string 
}) {
  const { isModalOpen, closeModal } = useModal();
  
  // NOTE: ハイドレーション不整合を防ぐため、常にDOMにレンダリングし、表示状態はCSSで制御する
  const visibilityClass = isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";

  const handleClose = () => {
    closeModal();
  };

  return (
    <div 
      id="join"
      className={`fixed inset-0 flex items-center justify-center p-4 overflow-y-auto transition-all duration-300 css-modal ${visibilityClass}`} 
      style={{ zIndex: 100, backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden relative my-8">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800">
            参加申し込み {preselectedDate ? `（${preselectedDate}）` : ""}
          </h2>
          <a 
            href="#"
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-800 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 no-underline"
          >
            ✕
          </a>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          <form id="application-form" className="space-y-6" action={submitApplication} method="POST">
              
              {/* Nickname */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">ニックネーム <span className="text-kj-primary text-xs ml-1">必須</span></label>
                <input name="nickname" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" placeholder="例: さくら" />
              </div>

              {/* LINE ID */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">LINE ID または 電話番号 <span className="text-gray-400 text-xs ml-1">任意</span></label>
                <input name="lineId" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" placeholder="例: sakura123 または 010-1234-5678" />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">年代 <span className="text-kj-primary text-xs ml-1">必須</span></label>
                <div className="flex flex-wrap gap-4">
                  {["20代", "30代", "40代", "その他"].map((age) => (
                    <label key={age} className="flex items-center cursor-pointer">
                      <input type="radio" name="age" value={age} className="w-4 h-4 text-kj-primary focus:ring-kj-primary border-gray-300" />
                      <span className="ml-2 text-gray-700">{age}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">性別 <span className="text-kj-primary text-xs ml-1">必須</span></label>
                <div className="flex flex-wrap gap-4">
                  {["女性", "男性"].map((gender) => (
                    <label key={gender} className="flex items-center cursor-pointer">
                      <input type="radio" name="gender" value={gender} className="w-4 h-4 text-kj-primary focus:ring-kj-primary border-gray-300" />
                      <span className="ml-2 text-gray-700">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stay Duration */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">韓国滞在期間 <span className="text-gray-400 text-xs ml-1">任意</span></label>
                <input name="stayDuration" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" placeholder="例: 4/25〜4/28" />
              </div>

              {/* Available Date */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">交流会参加可能日 <span className="text-kj-primary text-xs ml-1">必須</span></label>
                {preselectedDate ? (
                  <>
                    <input 
                      type="hidden" 
                      name="availableDate" 
                      value={preselectedDate} 
                    />
                    <input 
                      type="text" 
                      defaultValue={preselectedDate}
                      disabled
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none bg-gray-100 text-gray-500 cursor-not-allowed" 
                    />
                  </>
                ) : (
                  <input 
                    name="availableDate" 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" 
                    placeholder="例: 4/26の夜、いつでもOK など" 
                  />
                )}
              </div>

              {/* Meetup Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  希望する交流会の形態 <span className="text-kj-primary text-xs ml-1">必須</span>
                  <span className="text-gray-500 font-normal text-xs ml-2">※複数選択可</span>
                </label>
                <div className="flex flex-col gap-3">
                  {[
                    { val: "全体交流会", desc: "みんなでワイワイ楽しむ" },
                    { val: "女性会", desc: "女性だけで安心して話す" },
                    { val: "グルメ探訪", desc: "美味しいお店を巡る" }
                  ].map((type) => (
                    <label key={type.val} className="flex items-start cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-kj-pink hover:bg-opacity-30 transition-colors">
                      <input type="checkbox" name="meetupType" value={type.val} className="mt-1 w-4 h-4 rounded text-kj-primary focus:ring-kj-primary border-gray-300" />
                      <div className="ml-3">
                        <span className="block font-medium text-gray-800">{type.val}</span>
                        <span className="block text-sm text-gray-500">{type.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Self Introduction */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">自己紹介 <span className="text-kj-primary text-xs ml-1">必須</span></label>
                <textarea name="introduction" rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary resize-none" placeholder="好きなK-POPアイドルや、韓国旅行の目的などを自由に教えてください！"></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-bold py-4 px-8 rounded-full text-lg shadow-md transition-all duration-200 bg-kj-primary hover:bg-kj-primary-hover text-white hover:scale-105"
              >
                申し込む
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}
