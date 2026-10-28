"use client";

import { useLang } from "@/context/LangContext";
import { Section } from "./ui/Section";

export function Experience() {
  const { t } = useLang();

  return (
    <Section id="experience" title={t.experience.title}>
      <ol className="relative space-y-12 border-l border-border pl-7">
        {t.experience.items.map((item) => (
          <li key={`${item.role}-${item.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="font-mono text-xs text-muted">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-foreground/80">
              {item.org}
              {item.context ? (
                <span className="text-muted"> — {item.context}</span>
              ) : null}
            </p>
            <p className="text-xs text-muted">{item.location}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
