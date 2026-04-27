import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-kj-beige flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 md:p-10 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-kj-line text-white rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg">
          ✓
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">送信完了しました！</h1>
        <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
          ご入力いただいた内容を確認し、担当者よりLINEにてご連絡いたします。<br /><br />
          スムーズな連絡のため、以下のボタンから<br />
          <strong>当アカウントを友達追加</strong>しておいてください。
        </p>
        <a
          href="https://line.me/R/ti/p/@797hrieh"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-kj-line hover:bg-kj-line-hover text-white font-bold py-4 px-8 rounded-full transition-colors w-full mb-4 shadow-md text-lg"
        >
          LINEを友達追加する
        </a>
        <Link
          href="/"
          className="block text-center bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-4 px-8 rounded-full transition-colors w-full text-lg no-underline"
        >
          トップページに戻る
        </Link>
      </div>
    </div>
  );
}
