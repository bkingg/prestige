import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: boolean;
}

const pillVariants: Record<string, string> = {
  primary: "bg-burgundy text-cream hover:bg-burgundy-deep active:bg-burgundy-deep",
  secondary: "border border-charcoal/25 text-charcoal hover:border-charcoal/50",
  inverse: "bg-cream text-burgundy hover:bg-white",
};

/**
 * Apple-style button system: pill shapes, sentence case, quiet color
 * transitions only — no uppercase tracking, no arrow-flies-off-on-hover,
 * no animated underline sweep. "ghost" is a plain text link with a static
 * chevron, matching the "Learn more ›" pattern rather than a button.
 */
export function Button({ href, children, variant = "primary", className, icon }: ButtonProps) {
  if (variant === "ghost") {
    const showIcon = icon ?? true;
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-1 text-[15px] font-medium text-burgundy transition-colors duration-200 hover:text-burgundy-deep",
          className
        )}
      >
        {children}
        {showIcon && <ChevronRight className="h-4 w-4" />}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-[15px] font-medium transition-colors duration-200",
        pillVariants[variant],
        className
      )}
    >
      {children}
      {icon && <ChevronRight className="h-4 w-4" />}
    </Link>
  );
}
