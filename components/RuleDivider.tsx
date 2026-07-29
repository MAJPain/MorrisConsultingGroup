import { cn } from "@/lib/utils";

type RuleDividerProps = {
  /** Optional monospace label centered on the rule. */
  label?: string;
  className?: string;
};

/**
 * A thin warm-brown horizontal rule, optionally interrupted by a small
 * centered monospace label. Very restrained.
 */
export function RuleDivider({ label, className }: RuleDividerProps) {
  if (!label) {
    return (
      <hr className={cn("h-px border-0 bg-warm-brown/25", className)} aria-hidden="true" />
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)} role="separator">
      <span className="h-px flex-1 bg-warm-brown/25" />
      <span className="font-mono text-xs uppercase tracking-eyebrow text-fog">
        {label}
      </span>
      <span className="h-px flex-1 bg-warm-brown/25" />
    </div>
  );
}
