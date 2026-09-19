import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border border-border p-6", className)}>{children}</div>
  );
}
