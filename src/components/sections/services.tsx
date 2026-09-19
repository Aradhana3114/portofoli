"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { useIntersection } from "@/hooks/use-intersection";

export function Services() {
  const t = useTranslations();
  const { ref, isVisible } = useIntersection<HTMLDivElement>();

  return (
    <section id="services" className="border-b border-border py-24">
      <div ref={ref} className="container-editorial">
        <h2 className="mb-12 text-h2 font-display">{t("services.title")}</h2>
        <div className="flex flex-col">
          {services.map((service, i) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 border-t border-border py-8 first:border-t-0 md:grid-cols-[1fr_1.5fr]"
            >
              <h3 className="text-h3 font-display">{t(service.titleKey)}</h3>
              <div>
                <p className="mb-4 max-w-xl text-body text-foreground/80">{t(service.descriptionKey)}</p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-caption text-foreground/60">
                  {service.deliverablesKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
