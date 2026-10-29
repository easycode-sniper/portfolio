"use client";

import { useLang } from "@/context/LangContext";
import { Section } from "./ui/Section";
import { ArrowIcon } from "./ui/icons";

export function Certifications() {
  const { t } = useLang();

  return (
    <Section id="certifications" title={t.certifications.title}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.certifications.items.map((item) => (
          <div
            key={item.name}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-semibold">{item.name}</h3>
            <p className="mt-1 text-sm text-muted">{item.authority}</p>
            <p className="mt-0.5 font-mono text-xs text-muted">{item.period}</p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {t.certifications.verifyLabel}
              <ArrowIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
