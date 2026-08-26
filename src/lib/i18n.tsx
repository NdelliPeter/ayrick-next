import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";
/** Bilingual value: every piece of copy holds an EN and FR variant. */
export type L<T = string> = { en: T; fr: T };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: <T>(v: L<T>) => T };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (v) => v.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("ayrick-lang");
    if (stored === "fr" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ayrick-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = <T,>(v: L<T>): T => v[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
