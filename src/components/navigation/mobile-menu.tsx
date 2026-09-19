"use client";

import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#guestbook", label: "Guestbook" },
  { href: "#contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

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
