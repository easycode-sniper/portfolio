"use client";

import { useLang } from "@/context/LangContext";
import { Section } from "./ui/Section";

export function Education() {
  const { t } = useLang();

  return (
    <Section id="education" title={t.education.title}>
      <div className="grid gap-10 md:grid-cols-2">
        <ol className="space-y-6">
          {t.education.items.map((item) => (
            <li key={item.degree}>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="mt-0.5 text-sm text-muted">{item.school}</p>
              <p className="font-mono text-xs text-muted">{item.period}</p>
            </li>
          ))}
        </ol>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
            {t.education.languagesTitle}
          </h3>
          <ul className="mt-4 space-y-3">
            {t.education.languages.map((language) => (
              <li
                key={language.name}
                className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-3 last:border-0"
              >
                <span className="font-medium">{language.name}</span>
                <span className="text-sm text-muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
