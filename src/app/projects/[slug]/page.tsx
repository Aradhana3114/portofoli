import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/footer";
import { ProjectDetail } from "@/components/project/project-detail";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
