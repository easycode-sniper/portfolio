"use client";

import { useLang } from "@/context/LangContext";
import type { Lang } from "@/types";

const options: Lang[] = ["fr", "en"];

export function LangToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className="flex items-center rounded-lg border border-border p-0.5"
    >
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-md px-2.5 py-1 font-mono text-xs uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            lang === option
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:text-foreground"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
