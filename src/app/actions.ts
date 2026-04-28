"use server";

import { redirect } from "next/navigation";

export async function submitApplication(formData: FormData) {
  const nickname = formData.get("nickname") as string;
  const age = formData.get("age");
  const gender = formData.get("gender");
  // Google Sheetsの自動日付変換（シリアル値）を防ぐため先頭にシングルクォートを付与
  const availableDate = formData.get("availableDate") ? `'${formData.get("availableDate")}` : "" as string;
  const meetupTypes = formData.getAll("meetupType");
  const introduction = formData.get("introduction") as string;
  const lineId = formData.get("lineId") as string;
  const stayDuration = formData.get("stayDuration") as string;

  // バリデーション（LINE IDも必須化）
  if (!nickname || !lineId || !age || !gender || !availableDate || meetupTypes.length === 0 || !introduction) {
    redirect("/?error=missing_fields#join");
  }

  const data = {
    nickname,
    lineId,
    age,
    gender,
    stayDuration,
    availableDate,
    meetupType: meetupTypes.join(", "),
    introduction,
    timestamp: new Intl.DateTimeFormat('ja-JP', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(new Date()).replace(/\//g, '-'),
  };

  try {
    const webhookUrl = "https://hook.us2.make.com/5c6a3ojci9tn691qfow2fsxb2y10v79k";
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    redirect("/?error=submit_failed#join");
  }

  // 成功時に専用のサンクスページへリダイレクト
  redirect("/success");
}
