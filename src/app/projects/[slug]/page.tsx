import { ProjectDetail } from "@/components/ProjectDetail";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const { content } = await import("@/content");
  return content.fr.projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { content } = await import("@/content");
  const project = content.fr.projects.items.find((item) => item.slug === slug);
  return {
    title: project ? `${project.name} — Souhaib Ferdjallah` : "Souhaib Ferdjallah",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetail slug={slug} />;
}
