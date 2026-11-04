"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LangContext";

export function Footer({ accent = false }: { accent?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLang();
  const year = new Date().getFullYear();
  const label = theme === "dark" ? t.footer.themeDark : t.footer.themeLight;

  return (
    <footer
      className={`flex items-center justify-between px-6 py-6 text-sm sm:px-10 sm:py-8 ${
        accent ? "text-white" : "text-foreground"
      }`}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t.nav.themeLabel}
        className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span
          aria-hidden="true"
          className={`inline-block h-2.5 w-2.5 rounded-full ${
            theme === "dark" ? "bg-white" : "bg-foreground"
          }`}
        />
        <span className="font-medium">{label}</span>
      </button>
      <span className={accent ? "text-white/80" : "text-muted"}>©{year}</span>
    </footer>
  );
}
