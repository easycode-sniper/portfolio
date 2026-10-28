"use client";

import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLang();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.nav.themeLabel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
