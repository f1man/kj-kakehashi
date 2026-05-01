import Hero from "@/components/Hero";
import PromoVideo from "@/components/PromoVideo";
import Features from "@/components/Features";
import About from "@/components/About";
import Steps from "@/components/Steps";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import { fetchEvents } from "@/utils/fetchEvents";
import { fetchTestimonials } from "@/utils/fetchTestimonials";
import ApplicationModal from "@/components/ApplicationModal";
import FAQ from "@/components/FAQ";
import fs from "fs";
import path from "path";

export default async function Home({ searchParams }: { searchParams: Promise<{ success?: string, error?: string, date?: string }> }) {
  const params = await searchParams;
  const eventsData = await fetchEvents();
  const testimonialsData = await fetchTestimonials();

  // ギャラリーフォルダの画像をスキャン
  let galleryImages: string[] = [];
  try {
    const galleryDir = path.join(process.cwd(), "public", "gallery_optimized");
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      galleryImages = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        // カカオトーク等のファイル名（日付順）を考慮し、新しい順にソートして最新10枚だけを取得
        .sort((a, b) => b.localeCompare(a))
        .slice(0, 100)
        .map(file => `/gallery_optimized/${file}`);
    }
  } catch (error) {
    console.error("Error reading gallery directory:", error);
  }

  // ギャラリーが空の場合のフォールバック
  if (galleryImages.length === 0) {
    galleryImages = [
      "https://placehold.co/600x400/FDF1F0/FF8BA7?text=Meetup+1",
      "https://placehold.co/600x400/FFF4E5/FF8BA7?text=Cafe+Time",
      "https://placehold.co/600x400/FDFBF7/FF8BA7?text=Dinner"
    ];
  }

  return (
    <main className="relative min-h-screen pb-24">
      <Hero />
      <PromoVideo />
      <Features />
      <About />
      <Steps />
      <Events events={eventsData} />
      <Testimonials testimonials={testimonialsData} />
      <Gallery images={galleryImages} />
      <FAQ />
      <CTA />
      <ApplicationModal 
        isServerSuccess={params?.success === 'true'} 
        preselectedDate={params?.date} 
      />
    </main>
  );
}
