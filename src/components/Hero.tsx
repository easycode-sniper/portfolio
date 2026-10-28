"use client";

import { useLang } from "@/context/LangContext";
import { Button } from "./ui/Button";
import { ArrowIcon, PinIcon } from "./ui/icons";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[78vh] w-full max-w-5xl flex-col justify-center px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {t.hero.role}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {t.hero.name}
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-foreground/90 md:text-2xl">
          {t.hero.headline}
        </p>
        <p className="mt-4 max-w-2xl text-muted">{t.hero.sub}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={t.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.hero.ctaPrimary}
            <ArrowIcon />
          </Button>
          <Button href={`mailto:${t.contact.email}`} variant="secondary">
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
          <PinIcon />
          {t.hero.location}
        </p>
      </div>
    </section>
  );
}
