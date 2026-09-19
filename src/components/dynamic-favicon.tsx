"use client";

import { useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

export function DynamicFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = theme === "dark" ? "/images/putih.png" : "/images/hitam.png";
    }
  }, [theme]);

  return null;
}
