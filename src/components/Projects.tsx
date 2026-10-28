"use client";

import { useLang } from "@/context/LangContext";
import { asset } from "@/lib/base";
import type { ProjectItem } from "@/types";
import { Section } from "./ui/Section";

function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectItem;
  featured?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card">
      <div className={featured ? "grid md:grid-cols-2" : ""}>
        <div className="aspect-[16/10] overflow-hidden border-b border-border bg-accent-soft md:border-b-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(project.image)}
            alt={project.imageAlt}
            width={1200}
            height={750}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className={featured ? "text-xl font-semibold" : "text-lg font-semibold"}>
              {project.name}
            </h3>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-accent">
              {project.tag}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">{project.description}</p>
          {project.tech.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLang();
  const [flagship, ...rest] = t.projects.items;

  return (
    <Section id="projects" title={t.projects.title} intro={t.projects.intro}>
      <div className="space-y-5">
        {flagship ? <ProjectCard project={flagship} featured /> : null}
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
