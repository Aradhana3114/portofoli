"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/types";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group grid gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Project Image */}
      <div className="relative order-2 overflow-hidden rounded-2xl border-2 border-border bg-muted lg:order-1">
        <div className="aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-border bg-background/90 px-4 py-2 text-caption font-medium backdrop-blur transition-all hover:bg-foreground hover:text-background"
          >
            Visit Site
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Project Info */}
      <div className="order-1 flex flex-col justify-center lg:order-2">
        <div className="mb-4">
          <span className="text-caption font-medium text-foreground/40">{project.category}</span>
        </div>

        <h3 className="mb-4 font-display text-h2 leading-tight">{project.title}</h3>
        
        <p className="mb-6 text-body leading-relaxed text-foreground/70">
          {project.description}
        </p>

        {/* Metrics */}
        {project.caseStudy && (
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-muted p-4">
              <p className="text-display-sm font-display font-bold text-accent-secondary">{project.year}</p>
              <p className="text-caption text-foreground/60">Year</p>
            </div>
            <div className="rounded-lg border border-border bg-muted p-4">
              <p className="text-display-sm font-display font-bold">{project.technologies.length}+</p>
              <p className="text-caption text-foreground/60">Technologies</p>
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-background px-3 py-1 text-caption font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-body font-medium transition-all hover:gap-3"
        >
          Read Case Study
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
