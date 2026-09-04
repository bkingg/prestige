import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <p
      className={cn(
        "label-rule",
        light && "text-gold-light before:bg-gold-light",
        className
      )}
    >
      {children}
    </p>
  );
}
