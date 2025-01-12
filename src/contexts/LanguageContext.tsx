import React, { createContext, useContext, useState } from "react";

type Language = "en" | "ru";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    welcome: "Welcome to Puzzle World",
    description: "Challenge your mind with our unique puzzles",
    startPlaying: "Start Playing",
    selectLanguage: "Select Language",
  },
  ru: {
    welcome: "Добро пожаловать в Мир Головоломок",
    description: "Испытайте свой разум с нашими уникальными головоломками",
    startPlaying: "Начать Игру",
    selectLanguage: "Выберите Язык",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
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