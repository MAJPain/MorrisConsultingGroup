import { cn } from "@/lib/utils";

type SectionLabelProps = {
  /** Two-digit section number, e.g. "01". Optional. */
  number?: string;
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
};

/**
 * Numbered eyebrow used above every major section, e.g. "— 01 / ADVISORY".
 * Monospace, uppercase, warm brown.
 */
export function SectionLabel({
  number,
  children,
  className,
  as: Tag = "span",
}: SectionLabelProps) {
  return (
    <Tag className={cn("eyebrow inline-flex items-center gap-2", className)}>
      <span aria-hidden="true">—</span>
      {number ? <span>{number}</span> : null}
      {number ? <span aria-hidden="true">/</span> : null}
      <span>{children}</span>
    </Tag>
  );
}
