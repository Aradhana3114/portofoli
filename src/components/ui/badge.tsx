import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 text-caption text-foreground/70",
        className
      )}
    >
      {children}
    </span>
  );
}
