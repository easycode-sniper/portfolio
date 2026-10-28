"use client";

import { useLang } from "@/context/LangContext";
import { Section } from "./ui/Section";

export function About() {
  const { t } = useLang();

  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        {t.about.paragraphs.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 32)}
            className={index === 0 ? "text-lg text-foreground/90" : "text-muted"}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
