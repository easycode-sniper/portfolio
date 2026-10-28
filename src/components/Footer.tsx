"use client";

import { useLang } from "@/context/LangContext";
import { LinkedInIcon } from "./ui/icons";

export function Footer({ year }: { year: number }) {
  const { t } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted sm:flex-row">
        <p>
          © {year} {t.hero.name}. {t.footer.rights}
        </p>        <a
          href={t.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
