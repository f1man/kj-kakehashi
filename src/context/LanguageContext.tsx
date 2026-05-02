"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ja" | "ko";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ja"); // Default to Japanese to prevent hydration mismatch for JA users
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 1. Check localStorage first
    const savedLang = localStorage.getItem("kj_lang") as Language | null;
    if (savedLang === "ja" || savedLang === "ko") {
      setLangState(savedLang);
    } 
    // 2. Otherwise check browser language
    else if (typeof navigator !== "undefined") {
      if (navigator.language.startsWith("ko")) {
        setLangState("ko");
        localStorage.setItem("kj_lang", "ko");
      }
    }
    setIsInitialized(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("kj_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "ja" ? "ko" : "ja");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {/* Optional: Add a fade-in to prevent flash of wrong language on initial load if needed, but for SEO it's fine */}
      <div style={{ opacity: isInitialized ? 1 : 1, transition: 'opacity 0.2s' }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
