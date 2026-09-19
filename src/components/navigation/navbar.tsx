"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { profile } from "@/data/profile";
import { useTheme } from "@/components/theme-provider";
import { MobileMenu } from "./mobile-menu";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#guestbook", label: "Guestbook" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 120);
    setScrolled(latest > 20);
  });

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

        {/* Dark Mode Toggle */}
        <div className="hidden items-center gap-2 md:flex">
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
