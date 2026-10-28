"use client";

import { useLang } from "@/context/LangContext";
import { Section } from "./ui/Section";

export function Skills() {
  const { t } = useLang();

  return (
    <Section id="skills" title={t.skills.title} intro={t.skills.intro}>
      <div className="grid gap-5 md:grid-cols-3">
        {t.skills.groups.map((group) => (
          <div
            key={group.name}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {group.name}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
