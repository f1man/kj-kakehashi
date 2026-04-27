import Papa from 'papaparse';

export interface TestimonialData {
  name: string;
  gender: string;
  age: string;
  text: string;
}

export async function fetchTestimonials(): Promise<TestimonialData[]> {
  // NOTE: Google Sheets "웹에 게시(CSV)" URL for Testimonials
  const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-Ttms-bnJqOo5S9PoIrhk5wfnqRt6uNmfwsLWPO88YSQPZb39vUAJDHZvyI56d6SesoiLGUeziVkU/pub?gid=531549271&single=true&output=csv";

  try {
    const response = await fetch(sheetUrl, { 
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }

    const csvText = await response.text();
    
    if (csvText.includes('<!DOCTYPE html>')) {
      console.warn("CSV instead of HTML returned. Please check sheet permissions.");
      return getFallbackTestimonials();
    }

    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header: string) => header.trim(),
    }) as { data: TestimonialData[] };

    if (parsed.data && parsed.data.length > 0 && parsed.data[0].name) {
      return parsed.data;
    }

    return getFallbackTestimonials();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return getFallbackTestimonials();
  }
}

function getFallbackTestimonials(): TestimonialData[] {
  return [
    {
      name: "さくら",
      gender: "女性",
      age: "20代",
      text: "初めての参加で緊張していましたが、スタッフの方が優しくフォローしてくれて、すぐに馴染めました！韓国の友達もできて、次回の旅行がもっと楽しみになりました。",
    },
    {
      name: "リナ",
      gender: "女性",
      age: "30代",
      text: "一人参加の女性が多くて安心しました。美味しい韓国料理を食べながら、K-POPの話で盛り上がれて最高の時間でした。また絶対に参加します！",
    },
    {
      name: "ユウキ",
      gender: "男性",
      age: "20代",
      text: "韓国語は全く話せませんが、日本語が話せる韓国人の方も多くてコミュニケーションに困りませんでした。現地のリアルな情報も聞けて、とても有意義な交流会でした。",
    },
  ];
}
