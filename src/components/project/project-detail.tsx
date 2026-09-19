import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Project } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectGallery } from "./project-gallery";
import { projects } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="pb-24 pt-32">
      <div className="container-editorial">
        <Link href="/#work" className="mb-10 inline-flex items-center gap-2 text-body text-foreground/60 hover:text-foreground">
          <ArrowLeft size={16} /> Back to Works
        </Link>

        <h1 className="text-display-sm font-display md:text-h1">{project.title}</h1>
        <p className="mt-3 text-body text-foreground/60">
          {project.category} · {project.year}
        </p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg border border-border bg-muted">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-12">
            <section>
              <h2 className="mb-3 text-h3 font-display">Overview</h2>
              <p className="text-body text-foreground/80">{project.caseStudy.overview}</p>
            </section>

            <section>
              <h2 className="mb-3 text-h3 font-display">The Challenge</h2>
              <p className="text-body text-foreground/80">{project.caseStudy.problem}</p>
            </section>

            <section>
              <h2 className="mb-3 text-h3 font-display">The Solution</h2>
              <p className="text-body text-foreground/80">{project.caseStudy.solution}</p>
            </section>

            <section>
              <h2 className="mb-3 text-h3 font-display">Key Features</h2>
              <ul className="flex flex-col gap-2 text-body text-foreground/80">
                {project.caseStudy.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>

            {project.gallery.length > 0 && (
              <section>
                <h2 className="mb-4 text-h3 font-display">Gallery</h2>
                <ProjectGallery images={project.gallery} title={project.title} />
              </section>
            )}

            <section>
              <h2 className="mb-3 text-h3 font-display">Results</h2>
              <p className="text-body text-foreground/80">{project.caseStudy.result}</p>
            </section>
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <h3 className="mb-3 text-caption text-foreground/50">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {project.demoUrl && (
                <Button href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  Source Code
                </Button>
              )}
            </div>
          </aside>
        </div>

        <div className="mt-20 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
          {prev && (
            <Link href={`/projects/${prev.slug}`} className="group">
              <p className="text-caption text-foreground/50">Previous Project</p>
              <p className="mt-1 text-h3 font-display group-hover:text-accent">{prev.title}</p>
            </Link>
          )}
          {next && (
            <Link href={`/projects/${next.slug}`} className="group text-right">
              <p className="text-caption text-foreground/50">Next Project</p>
              <p className="mt-1 text-h3 font-display group-hover:text-accent">{next.title}</p>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
