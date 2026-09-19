"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin } from "lucide-react";

export function Hero() {
  const firstName = profile.name.split(" ")[0].toUpperCase();
  const lastName = profile.name.split(" ").slice(1).join(" ").toUpperCase();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
      <div className="container-editorial relative z-10 py-20 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-caption">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="font-medium">{profile.availability}</span>
          </div>
          <div className="flex items-center gap-1.5 text-caption text-foreground/60">
            <MapPin size={14} />
            <span>Based in {profile.location}</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-tight">
            {firstName}
          </h1>
          <h1 className="font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.9] tracking-tight">
            {lastName}
          </h1>
        </motion.div>

        {/* Role Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-wrap items-center justify-center gap-3 text-body"
        >
          <span className="rounded-full border border-border bg-foreground px-4 py-1.5 font-medium text-background">
            PPLG STUDENT
          </span>
          <span className="rounded-full border border-border bg-foreground px-4 py-1.5 font-medium text-background">
            WEB DEVELOPER
          </span>
          <span className="rounded-full border border-border bg-muted px-4 py-1.5 font-medium">
            FREELANCER
          </span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="mb-3 text-caption uppercase tracking-wider text-foreground/60">Scroll Down</p>
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-foreground/60 transition-colors hover:text-foreground"
          >
            <ArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-accent-secondary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
    </section>
  );
}
