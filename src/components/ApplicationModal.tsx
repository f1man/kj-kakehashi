"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { submitApplication } from "@/app/actions";
import { useLanguage } from "@/context/LanguageContext";

const translations = {
  ja: {
    title: "参加申し込み",
    req: "必須",
    opt: "任意",
    nick: "ニックネーム",
    nickPh: "例: さくら",
    line: "LINE ID または 電話番号",
    linePh: "例: sakura123 または 010-1234-5678",
    lineNote1: "※ ご連絡のために必ずご入力ください。",
    lineNote2: "どうしてもIDを公開したくない場合は、このフォームを使わずに公式LINEへ直接メッセージをお送りいただき、日程をご相談ください。",
    age: "年代",
    ageOpts: ["20代", "30代", "40代", "その他"],
    gender: "性別",
    genderOpts: ["女性", "男性"],
    stay: "韓国滞在期間",
    stayPh: "例: 4/25〜4/28",
    date: "交流会参加可能日",
    datePh: "例: 4/26の夜、いつでもOK など",
    type: "希望する交流会の形態",
    typeNote: "※複数選択可",
    typeOpts: [
      { val: "全体交流会", desc: "みんなでワイワイ楽しむ" },
      { val: "女性会", desc: "女性だけで安心して話す" },
      { val: "グルメ探訪", desc: "美味しいお店を巡る" }
    ],
    intro: "自己紹介",
    introPh: "好きなK-POPアイドルや、韓国旅行の目的などを自由に教えてください！",
    submit: "申し込む"
  },
  ko: {
    title: "참가 신청",
    req: "필수",
    opt: "선택",
    nick: "닉네임",
    nickPh: "예: 사쿠라",
    line: "LINE ID 또는 전화번호",
    linePh: "예: sakura123 또는 010-1234-5678",
    lineNote1: "※ 연락을 위해 반드시 입력해 주세요.",
    lineNote2: "ID 공개를 원치 않으시면, 이 폼 대신 공식 LINE으로 직접 메시지를 보내 일정을 상담해 주세요.",
    age: "연령대",
    ageOpts: ["20대", "30대", "40대", "기타"],
    gender: "성별",
    genderOpts: ["여성", "남성"],
    stay: "한국 체류 기간",
    stayPh: "예: 4/25〜4/28",
    date: "교류회 참가 가능일",
    datePh: "예: 4/26 저녁, 아무때나 등",
    type: "희망하는 교류회 형태",
    typeNote: "※복수 선택 가능",
    typeOpts: [
      { val: "전체 교류회", desc: "다 같이 왁자지껄 즐기기" },
      { val: "여성 모임", desc: "여성들끼리 편안하게 이야기하기" },
      { val: "맛집 탐방", desc: "맛있는 식당 투어하기" }
    ],
    intro: "자기소개",
    introPh: "좋아하는 아이돌이나 한국 여행 목적 등을 자유롭게 적어주세요!",
    submit: "신청하기"
  }
};

export default function ApplicationModal({ 
  isServerSuccess,
  preselectedDate 
}: { 
  isServerSuccess?: boolean,
  preselectedDate?: string 
}) {
  const { isModalOpen, closeModal } = useModal();
  const { lang } = useLanguage();
  const t = translations[lang];
  
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
            {t.title} {preselectedDate ? `（${preselectedDate}）` : ""}
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
                <label className="block text-sm font-bold text-gray-700 mb-1">{t.nick} <span className="text-kj-primary text-xs ml-1">{t.req}</span></label>
                <input name="nickname" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" placeholder={t.nickPh} />
              </div>

              {/* LINE ID */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{t.line} <span className="text-kj-primary text-xs ml-1">{t.req}</span></label>
                <input required name="lineId" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" placeholder={t.linePh} />
                <p className="text-xs text-red-500 mt-2 font-bold leading-relaxed">
                  {t.lineNote1}<br />
                  {t.lineNote2}
                </p>
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.age} <span className="text-kj-primary text-xs ml-1">{t.req}</span></label>
                <div className="flex flex-wrap gap-4">
                  {t.ageOpts.map((age) => (
                    <label key={age} className="flex items-center cursor-pointer">
                      <input type="radio" name="age" value={age} className="w-4 h-4 text-kj-primary focus:ring-kj-primary border-gray-300" />
                      <span className="ml-2 text-gray-700">{age}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">{t.gender} <span className="text-kj-primary text-xs ml-1">{t.req}</span></label>
                <div className="flex flex-wrap gap-4">
                  {t.genderOpts.map((gender) => (
                    <label key={gender} className="flex items-center cursor-pointer">
                      <input type="radio" name="gender" value={gender} className="w-4 h-4 text-kj-primary focus:ring-kj-primary border-gray-300" />
                      <span className="ml-2 text-gray-700">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stay Duration */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{t.stay} <span className="text-gray-400 text-xs ml-1">{t.opt}</span></label>
                <input name="stayDuration" type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary" placeholder={t.stayPh} />
              </div>

              {/* Available Date */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">{t.date} <span className="text-kj-primary text-xs ml-1">{t.req}</span></label>
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
                    placeholder={t.datePh} 
                  />
                )}
              </div>

              {/* Meetup Type */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {t.type} <span className="text-kj-primary text-xs ml-1">{t.req}</span>
                  <span className="text-gray-500 font-normal text-xs ml-2">{t.typeNote}</span>
                </label>
                <div className="flex flex-col gap-3">
                  {t.typeOpts.map((type) => (
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
                <label className="block text-sm font-bold text-gray-700 mb-1">{t.intro} <span className="text-kj-primary text-xs ml-1">{t.req}</span></label>
                <textarea name="introduction" rows={4} className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-kj-primary focus:ring-1 focus:ring-kj-primary resize-none" placeholder={t.introPh}></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-bold py-4 px-8 rounded-full text-lg shadow-md transition-all duration-200 bg-kj-primary hover:bg-kj-primary-hover text-white hover:scale-105"
              >
                {t.submit}
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}
