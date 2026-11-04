"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { asset } from "@/lib/base";
import { SlideOver } from "./ui/SlideOver";
import { MailIcon, PinIcon, LinkedInIcon } from "./ui/icons";

type PanelState = "about" | "contact" | null;

function AboutPanelContent() {
  const { t } = useLang();
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-5xl font-semibold tracking-tight">{t.about.title}</h2>
        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {t.skills.title}
        </p>
        <ul className="mt-4 space-y-3">
          {t.skills.groups.map((group) => (
            <li key={group.name}>
              <span className="text-sm font-semibold">{group.name}</span>
              <span className="mt-1 block text-sm text-muted">
                {group.items.join(" · ")}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {t.education.title}
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          {t.education.items.map((item) => (
            <li key={item.degree}>
              <span className="font-semibold">{item.degree}</span>
              <span className="mt-0.5 block text-muted">
                {item.school} — {item.period}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {t.education.languagesTitle}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-muted">
          {t.education.languages.map((item) => (
            <li key={item.name}>
              {item.name} — {item.level}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ContactPanelContent() {
  const { t } = useLang();
  const rows = [
    { icon: MailIcon, label: t.contact.email, href: `mailto:${t.contact.email}` },
    { icon: LinkedInIcon, label: "LinkedIn", href: t.contact.linkedin },
    { icon: PinIcon, label: t.contact.location, href: null },
  ];
  return (
    <div>
      <h2 className="text-5xl font-semibold tracking-tight">{t.contact.title}</h2>
      <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
        {t.contact.text}
      </p>
      <ul className="mt-10 space-y-4">
        {rows.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-3 text-lg font-medium transition hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Icon className="h-5 w-5 text-muted" />
                <span className="break-all">{label}</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-3 text-lg font-medium">
                <Icon className="h-5 w-5 text-muted" />
                {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header({ accent = false }: { accent?: boolean }) {
  const { t } = useLang();
  const [panel, setPanel] = useState<PanelState>(null);

  const textClass = accent
    ? "text-white"
    : "text-foreground";
  const mutedClass = accent
    ? "text-white/60"
    : "text-muted";

  return (
    <>
      <header className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <a
          href={asset("/")}
          className={`group flex items-baseline gap-3 text-sm tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${textClass}`}
        >
          <span className="font-bold uppercase">{t.header.name}</span>
          <span className={`font-medium uppercase ${mutedClass}`}>
            {t.header.role}
          </span>
        </a>
        <nav
          aria-label="Secondary"
          className={`flex items-center gap-5 text-sm ${textClass}`}
        >
          <button
            type="button"
            onClick={() => setPanel("about")}
            className="font-medium transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t.panels.aboutBtn}
          </button>
          <button
            type="button"
            onClick={() => setPanel("contact")}
            className="font-medium uppercase transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t.panels.contactBtn}
          </button>
          <LangSwitch accent={accent} />
        </nav>
      </header>

      <SlideOver
        open={panel !== null}
        onClose={() => setPanel(null)}
        label={panel === "about" ? t.panels.aboutBtn : t.panels.contactBtn}
        closeLabel={t.panels.close}
      >
        {panel === "about" ? <AboutPanelContent /> : <ContactPanelContent />}
      </SlideOver>
    </>
  );
}

function LangSwitch({ accent = false }: { accent?: boolean }) {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.nav.langLabel} className="flex items-center gap-1">
      {(["fr", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`px-1.5 py-0.5 font-mono text-xs uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            lang === option
              ? `underline underline-offset-4 ${accent ? "text-white" : "text-foreground"}`
              : `${accent ? "text-white/50" : "text-muted"} hover:opacity-80`
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
