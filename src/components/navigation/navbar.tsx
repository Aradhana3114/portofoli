"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { useTheme } from "@/components/theme-provider";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#work", label: t("nav.projects") },
    { href: "#journey", label: t("nav.journey") },
    { href: "#guestbook", label: t("nav.guestbook") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
    setScrolled(latest > 20);
  });

  const switchLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 " +
        (scrolled ? "border-border bg-background/95 backdrop-blur-md shadow-sm" : "border-transparent bg-transparent")
      }
    >
      <div className="container-editorial flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-foreground bg-foreground text-background transition-all group-hover:bg-background group-hover:text-foreground">
            <span className="font-display text-h3 font-bold">{profile.name.charAt(0)}</span>
          </div>
          <span className="hidden font-display text-h3 font-bold sm:block">{profile.name.split(" ")[0]}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-body font-medium text-foreground/70 transition-all hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={switchLocale}
            aria-label="Switch language"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            <Globe size={16} />
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-all hover:border-foreground hover:bg-foreground hover:text-background"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.header>
  );
}
