"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/project-card";
import { useIntersection } from "@/hooks/use-intersection";

export function Works() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className="border-b border-border py-24">
      <div ref={ref} className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="mb-2 text-h1 font-display">Selected</h2>
          <h2 className="text-h1 font-display">Works</h2>
          <p className="mt-4 text-body text-foreground/60">
            A showcase of functional web solutions focused on real-world problems and user experience.
          </p>
        </motion.div>

        <div className="space-y-20">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
