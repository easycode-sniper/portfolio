"use client";

import { useLang } from "@/context/LangContext";

export function SkipLink() {
  const { t } = useLang();

  return (
    <a href="#main" className="skip-link">
      {t.a11y.skipToContent}
    </a>
  );
}
