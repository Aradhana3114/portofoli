"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";
import { useIntersection } from "@/hooks/use-intersection";

export function TechStack() {
  const { ref, isVisible } = useIntersection<HTMLDivElement>();

  return (
    <section className="border-b border-border py-24">
      <div ref={ref} className="container-editorial">
        <h2 className="mb-12 text-h2 font-display">Tech Stack</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="mb-4 text-caption text-foreground/50">{group.category}</h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between border-b border-border/60 py-2 text-body">
                    <span>{item.name}</span>
                    <span className={`text-metadata ${
                      item.level === "proficient"
                        ? "text-green-600 dark:text-green-400"
                        : item.level === "intermediate"
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-foreground/40"
                    }`}>
                      {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
