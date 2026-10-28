import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90 focus-visible:outline-accent",
  secondary:
    "border border-border bg-card text-foreground hover:border-accent focus-visible:outline-accent",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
