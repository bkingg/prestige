import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "inverse" | "outline-light";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}

const boxVariants: Record<string, string> = {
  primary: "bg-plum text-white hover:bg-plum-deep",
  secondary: "border border-ink/25 bg-white text-ink hover:border-ink",
  inverse: "bg-white text-ink hover:bg-butter-deep",
  "outline-light": "border border-white/70 text-white hover:bg-white hover:text-ink",
};

/**
 * Square, small-caps buttons with generous tracking — the restrained,
 * institutional register of an advisory firm. Color changes are quick
 * fades; the press scales to 0.97 so every click gets tactile feedback.
 * "ghost" is a tracked text link with an arrow that nudges on hover.
 */
export function Button({ href, children, variant = "primary", className, icon }: ButtonProps) {
  if (variant === "ghost") {
    const showIcon = icon ?? true;
    return (
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-caps text-ink transition-colors duration-200 hover:text-plum",
          className
        )}
      >
        {children}
        {showIcon && <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2.5 px-7 py-4 text-[12px] font-medium uppercase tracking-caps",
        "transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.97]",
        boxVariants[variant],
        className
      )}
    >
      {children}
      {icon && <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1" />}
    </Link>
  );
}
