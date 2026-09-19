"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { journey } from "@/data/journey";
import { useIntersection } from "@/hooks/use-intersection";
import { ChevronDown, Briefcase, GraduationCap, Code } from "lucide-react";

const iconMap = {
  project: Code,
  work: Briefcase,
  education: GraduationCap,
};

export function Journey() {
  const t = useTranslations();
  const { ref, isVisible } = useIntersection<HTMLDivElement>();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="journey" className="border-b border-border py-24">
      <div ref={ref} className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-h1 font-display">{t("journey.title")}</h2>
          <p className="mt-4 text-body text-foreground/60">
            {t("journey.subtitle")}
          </p>
        </motion.div>

        <div className="relative space-y-4">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-border md:block"></div>

          {journey.map((item, i) => {
            const Icon = iconMap[item.type as keyof typeof iconMap] || Code;
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={`${item.year}-${item.titleKey}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <button
                  onClick={() => toggleExpand(i)}
                  className="w-full text-left transition-all hover:bg-muted/50"
                >
                  <div className="flex items-start gap-6 rounded-xl border-2 border-border bg-background p-6 transition-all hover:border-foreground/20">
                    {/* Icon */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background">
                      <Icon size={20} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="mb-1 flex items-center gap-2">
                            <span className="rounded-md bg-foreground px-2 py-0.5 text-metadata font-bold text-background">
                              {item.year}
                            </span>
                            <span className="text-caption text-foreground/60">{t(`journey.types.${item.type}`)}</span>
                          </div>
                          <h3 className="text-h3 font-display">{t(item.titleKey)}</h3>
                          <p className="mt-1 text-body font-medium text-foreground/60">{t(item.organizationKey)}</p>
                        </div>

                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-foreground/40"
                        >
                          <ChevronDown size={20} />
                        </motion.div>
                      </div>

                      {/* Collapsed Preview */}
                      {!isExpanded && (
                        <p className="mt-3 line-clamp-2 text-body text-foreground/70">
                          {t(item.descriptionKey)}
                        </p>
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-[72px] mt-4 space-y-4 rounded-xl border-2 border-border bg-muted p-6">
                        <p className="text-body leading-relaxed text-foreground/80">
                          {t(item.descriptionKey)}
                        </p>

                        {item.technologies && item.technologies.length > 0 && (
                          <div>
                            <p className="mb-2 text-caption font-semibold text-foreground/60">{t("journey.technologiesUsed")}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-border bg-background px-3 py-1 text-caption font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="border-t border-border pt-4">
                          <button
                            onClick={() => setExpandedIndex(null)}
                            className="text-caption font-medium text-foreground/60 hover:text-foreground"
                          >
                            {t("journey.clickToClose")}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
