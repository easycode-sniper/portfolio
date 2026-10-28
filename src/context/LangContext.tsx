"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { content } from "@/content";
import type { Content, Lang } from "@/types";

const LANG_KEY = "lang";

function subscribe(callback: () => void) {
  window.addEventListener("langchange", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("langchange", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Lang {
  return document.documentElement.lang === "en" ? "en" : "fr";
}

function getServerSnapshot(): Lang {
  return "fr";
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    document.documentElement.lang = next;
    window.localStorage.setItem(LANG_KEY, next);
    window.dispatchEvent(new Event("langchange"));
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: content[lang] }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
