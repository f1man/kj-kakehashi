import Papa from 'papaparse';

export interface EventData {
  date: string;
  time: string;
  location: string;
  capacity: string;
  ratio: string;
  status: string;
}

export async function fetchEvents(): Promise<EventData[]> {
  // NOTE: Google Sheets "웹에 게시(CSV)" URL
  const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Ttms-bnJqOo5S9PoIrhk5wfnqRt6uNmfwsLWPO88YSQPZb39vUAJDHZvyI56d6SesoiLGUeziVkU/pub?gid=0&single=true&output=csv";

  try {
    const response = await fetch(sheetUrl, { 
      cache: 'no-store', // 常に最新データを取得する
      headers: {
        'Cache-Control': 'no-cache',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const csvText = await response.text();
    
    // GoogleログインページなどのHTMLが返ってきた場合のチェック
    if (csvText.includes('<!DOCTYPE html>')) {
      console.warn("CSV instead of HTML returned. Please check sheet permissions.");
      return getFallbackEvents();
    }

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim(), // ヘッダーの空白を削除
    }) as { data: EventData[] };

    if (parsed.data && parsed.data.length > 0 && parsed.data[0].date) {
      // statusが「終了」のイベントを除外
      return parsed.data.filter(event => event.status?.trim() !== "終了");
    }

    return getFallbackEvents();
  } catch (error) {
    console.error("Error fetching events:", error);
    return getFallbackEvents();
  }
}

function getFallbackEvents(): EventData[] {
  return [
    {
      date: "4月26日 金曜日",
      time: "19:30 〜 21:30",
      location: "ソウル・弘大（ホンデ）",
      capacity: "8〜12名",
      ratio: "女性5名 / 男性5名",
      status: "残りわずか",
    },
    {
      date: "4月27日 土曜日",
      time: "18:00 〜 20:00",
      location: "ソウル・蚕室（チャムシル）",
      capacity: "8〜12名",
      ratio: "女性6名 / 男性6名",
      status: "募集中",
    },
    {
      date: "5月3日 金曜日",
      time: "19:00 〜 21:00",
      location: "ソウル・江南（カンナム）",
      capacity: "10〜14名",
      ratio: "女性7名 / 男性7名",
      status: "募集中",
    },
  ];
}
