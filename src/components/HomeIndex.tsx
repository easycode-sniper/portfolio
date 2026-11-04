"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

export function HomeIndex() {
  const { t } = useLang();

  return (
    <main id="main" className="flex-1 px-6 pb-16 pt-8 sm:px-10 sm:pt-14">
      <nav aria-label={t.projects.title} className="max-w-4xl">
        <ol className="space-y-3 sm:space-y-4">
          {t.projects.items.map((project, index) => (
            <li key={project.slug} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="font-mono text-xs text-muted sm:mt-3"
              >
                [{String(index + 1).padStart(2, "0")}]
              </span>
              <Link
                href={`/projects/${project.slug}`}
                className="group text-[2.5rem] font-semibold leading-tight tracking-tight transition hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-6xl"
              >
                {project.name}
                <sup className="ml-2 align-super font-mono text-[10px] font-normal text-muted sm:text-xs">
                  [{project.tag}]
                </sup>
                <span
                  aria-hidden="true"
                  className="inline-block transition group-hover:translate-x-1"
                >
                  &nbsp;→
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <section aria-label={t.experience.title} className="mt-16 max-w-4xl sm:mt-24">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {t.experience.title}
        </p>
        <ol className="mt-5 space-y-6">
          {t.experience.items.map((item) => (
            <li key={`${item.org}-${item.period}`}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-lg font-semibold tracking-tight sm:text-2xl">
                  {item.org}
                </span>
                {item.context ? (
                  <sup className="align-super font-mono text-[10px] text-muted sm:text-xs">
                    [{item.role}]
                  </sup>
                ) : null}
                <span className="font-mono text-[10px] text-muted sm:text-xs">
                  [{item.period}]
                </span>
              </div>
              <ul className="mt-2 max-w-2xl space-y-1 text-sm text-muted">
                {item.bullets.length > 0
                  ? item.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 24)}>- {bullet}</li>
                    ))
                  : null}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section aria-label={t.skills.title} className="mt-16 max-w-4xl sm:mt-24">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {t.skills.title}
        </p>
        <div className="mt-5 grid gap-8 sm:grid-cols-3">
          {t.skills.groups.map((group) => (
            <div key={group.name}>
              <p className="text-sm font-semibold">{group.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section aria-label={t.education.title} className="mt-16 max-w-4xl sm:mt-24">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          {t.education.title}
        </p>
        <ul className="mt-5 space-y-3 text-sm">
          {t.education.items.map((item) => (
            <li key={item.degree}>
              <span className="font-semibold">{item.degree}</span>
              <span className="text-muted"> — {item.school}</span>
              <span className="font-mono text-xs text-muted"> [{item.period}]</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
