import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "./kj-styles.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

import { ModalProvider } from "@/context/ModalContext";
import { LanguageProvider } from "@/context/LanguageContext";
import NavHeader from "@/components/NavHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KJ架け橋 | 韓国で、忘れられない出会いを。",
  description: "初めてでも安心。ひとり参加OKの日韓交流会「KJ架け橋」",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${notoSansJP.variable} font-sans scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <ModalProvider>
            <NavHeader />
            {children}
            <Footer />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
