"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { LangToggle } from "./ui/LangToggle";
import { ThemeToggle } from "./ui/ThemeToggle";
import { CloseIcon, MenuIcon } from "./ui/icons";

export function Header() {
  const { t } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          SF<span className="text-accent">.</span>
        </a>

        <nav aria-label="Navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-muted">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-nav" aria-label="Mobile navigation" className="border-t border-border md:hidden">
          <ul className="mx-auto w-full max-w-5xl px-6 py-3 text-sm text-muted">
            {t.nav.items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
