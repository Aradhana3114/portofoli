"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function MobileMenu() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#about", label: t("nav.about") },
    { href: "#work", label: t("nav.projects") },
    { href: "#journey", label: t("nav.journey") },
    { href: "#guestbook", label: t("nav.guestbook") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const switchLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="md:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full border-b border-border bg-background"
          >
            <ul className="container-editorial flex flex-col gap-1 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-body font-medium text-foreground/70 transition-all hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-border pt-2 mt-2">
                <button
                  onClick={switchLocale}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-body font-medium text-foreground/70 transition-all hover:bg-muted hover:text-foreground"
                >
                  <Globe size={16} />
                  {locale === "id" ? "English" : "Bahasa Indonesia"}
                </button>
              </li>
              <li>
                <button
                  onClick={toggle}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-body font-medium text-foreground/70 transition-all hover:bg-muted hover:text-foreground"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
