import { cn } from "@/lib/utils";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-md border border-border bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground/40 outline-none transition-colors duration-200 focus:border-accent",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-md border border-border bg-background px-4 py-3 text-body text-foreground placeholder:text-foreground/40 outline-none transition-colors duration-200 focus:border-accent",
        className
      )}
      {...props}
    />
  );
}
