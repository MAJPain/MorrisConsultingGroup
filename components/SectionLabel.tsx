import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

/**
 * Eyebrow label used above every major section, e.g. "— ADVISORY".
 * Monospace, uppercase, warm brown.
 */
export function SectionLabel({
  children,
  className,
  as: Tag = "span",
}: SectionLabelProps) {
  return (
    <Tag className={cn("eyebrow inline-flex items-center gap-2", className)}>
      <span aria-hidden="true">—</span>
      <span>{children}</span>
    </Tag>
  );
}
