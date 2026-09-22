"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { techStack, skillCategories } from "@/data/skills";
import { useLocale } from "next-intl";
import { useIntersection } from "@/hooks/use-intersection";
import { Download, GraduationCap } from "lucide-react";
import Image from "next/image";

export function About() {
  const t = useTranslations();
  const locale = useLocale();
  const { ref, isVisible } = useIntersection<HTMLDivElement>();
  const categories = skillCategories[locale] || skillCategories.id;

  return (
    <section id="about" className="border-b border-border py-24">
      <div ref={ref} className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-h1 font-display">{t("about.title")}</h2>
          <div className="mx-auto flex items-center justify-center gap-2 text-h3">
            <motion.span
              className="text-6xl inline-block origin-[70%_70%]"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            >
              👋
            </motion.span>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          {/* Left Column - Bio & Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="text-h2 font-display">{t("about.greeting")}{profile.name.split(" ")[0]}.</h3>
            <p className="text-body leading-relaxed text-foreground/80">{t("profile.bio")}</p>

            {/* Avatar Card */}
            <div className="mt-8 overflow-hidden rounded-2xl border-2 border-foreground bg-muted p-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h4 className="font-display text-h3">@{profile.name.split(" ")[0].toLowerCase()}</h4>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-caption font-medium text-green-600">{t("about.online")}</span>
                  </div>
                </div>
                <div className="rounded-lg bg-accent px-3 py-1 text-caption font-bold text-accent-foreground">
                  {t("about.hireMe")}
                </div>
              </div>
              
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-purple-500">
                <Image src="/images/me/me.png" alt={profile.name} fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Education Card */}
            <div className="rounded-2xl border-2 border-border bg-background p-6">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <GraduationCap size={20} />
                    <span className="text-caption font-semibold text-foreground/60">{t("about.studentGrade")}</span>
                  </div>
                  <h4 className="text-h3 font-display">SMK AK Nusa Bangsa</h4>
                  <p className="mt-1 font-medium text-foreground/80">{t("about.program")}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="mb-2 text-caption font-semibold text-foreground/60">{t("about.coursework")}</p>
                <div className="flex flex-wrap gap-2">
                  {[t("about.courses.web"), t("about.courses.db"), t("about.courses.se"), t("about.courses.oop")].map((course) => (
                    <span key={course} className="rounded-md bg-muted px-3 py-1 text-caption">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-display-sm font-display font-bold">3.8</p>
                    <p className="text-caption text-foreground/60">{t("about.gpa")}</p>
                  </div>
                  <p className="text-caption font-medium">{t("about.highlySatisfactory")}</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="mb-6 text-h2 font-display">{t("about.techStack")}</h3>
              <div className="space-y-6">
                {techStack.map((group, i) => (
                  <motion.div
                    key={group.categoryKey}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h4 className="mb-3 text-body font-semibold">{categories[group.categoryKey.replace("categories.", "")] || group.categoryKey}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item.name}
                          className="rounded-full border border-border bg-background px-4 py-2 text-caption font-medium transition-all hover:border-foreground"
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* My Focus */}
            <div className="rounded-2xl border-2 border-border bg-muted p-6">
              <h4 className="mb-3 text-h3 font-display">{t("about.myFocus")}</h4>
              <p className="text-body text-foreground/80">
                {t("profile.currentFocus")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
