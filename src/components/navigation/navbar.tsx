"use client";

import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Sun, Moon, Globe, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { useTheme } from "@/components/theme-provider";
import { MobileMenu } from "./mobile-menu";

const languages = [
  { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "en", label: "English", flag: "🇺🇸" },
];

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setLangOpen(false);
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
          {/* Language Dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Switch language"
              className="flex h-9 items-center gap-1.5 rounded-lg border border-border bg-background px-3 text-caption font-medium transition-all hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <Globe size={14} />
              <span>{locale.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-border bg-background shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-body text-foreground/80 transition-all hover:bg-muted hover:text-foreground"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="flex-1 text-left">{lang.label}</span>
                    {locale === lang.code && <Check size={14} className="text-accent" />}
                  </button>
                ))}
              </div>
            )}
          </div>

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
