import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps & {
  href: string;
  target?: string;
  rel?: string;
};

type Props = ButtonAsButton | ButtonAsLink;

export function Button({ variant = "primary", children, className, ...props }: Props) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-body font-medium transition-all duration-300 ease-editorial",
    variant === "primary"
      ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
      : "border border-border text-foreground hover:border-accent hover:text-accent",
    className
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} rel={rel} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
