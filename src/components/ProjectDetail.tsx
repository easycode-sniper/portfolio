"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { asset } from "@/lib/base";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const items = t.projects.items;
  const index = items.findIndex((item) => item.slug === slug);
  const project = items[index];

  if (!project) {
    return (
      <div className="flex min-h-full flex-col bg-background">
        <Header />
        <main id="main" className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-2xl font-semibold tracking-tight">{t.projects.title}</p>
          <Link
            href="/"
            className="text-sm text-muted underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {t.projects.backLabel}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const next = items[(index + 1) % items.length];

  return (
    <div className="flex min-h-full flex-col" style={{ backgroundColor: project.accent }}>
      <Header accent />
      <main id="main" className="flex-1 px-6 pb-10 pt-6 text-white sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          &larr; {t.projects.backLabel}
        </Link>

        <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-7xl">
          {project.name}
          <sup className="ml-3 align-super font-mono text-sm font-normal text-white/70 sm:text-base">
            [{project.tag}]
          </sup>
        </h1>

        <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
          <p className="text-sm text-white/80">{project.context}</p>
          <div className="max-w-2xl space-y-5 text-[17px] leading-relaxed">
            {project.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <figure className="mt-16">
          <div className="overflow-hidden rounded-md bg-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(project.image)}
              alt={project.imageAlt}
              width={1200}
              height={750}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
          </div>
        </figure>

        <div className="mt-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wide text-white/60">
            {t.projects.techLabel}
          </p>
          <p className="mt-2 text-sm text-white/90">{project.tech.join(" · ")}</p>
        </div>

        <div className="mt-24">
          <p className="font-mono text-xs uppercase tracking-wide text-white/60">
            {t.projects.nextLabel}
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="group mt-3 inline-block text-4xl font-semibold tracking-tight text-white/90 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-6xl"
          >
            {next.name}
            <sup className="ml-2 align-super font-mono text-xs font-normal text-white/60 sm:text-sm">
              [{next.tag}]
            </sup>
            <span
              aria-hidden="true"
              className="ml-3 inline-block transition group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </main>
      <Footer accent />
    </div>
  );
}
