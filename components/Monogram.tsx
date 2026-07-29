import Link from "next/link";
import { cn } from "@/lib/utils";

type MonogramProps = {
  /** "mark" renders M·C·G; "wordmark" renders the full firm name. */
  variant?: "mark" | "wordmark";
  href?: string | null;
  className?: string;
  markClassName?: string;
};

/**
 * The MCG monogram, set in Cormorant Garamond letterforms with warm-brown
 * dot separators. Used in the navbar, footer, and as a hero watermark.
 */
export function Monogram({
  variant = "mark",
  href = "/",
  className,
  markClassName,
}: MonogramProps) {
  const content =
    variant === "wordmark" ? (
      <span
        className={cn(
          "font-display text-lg font-medium leading-none tracking-tight",
          markClassName
        )}
      >
        Morris Consulting Group
      </span>
    ) : (
      <span
        aria-hidden="true"
        className={cn(
          "flex items-baseline font-display text-2xl font-medium leading-none tracking-tight",
          markClassName
        )}
      >
        M<Dot />C<Dot />G
      </span>
    );

  const label = "Morris Consulting Group — home";

  if (href) {
    return (
      <Link
        href={href}
        aria-label={label}
        className={cn(
          "inline-flex items-center transition-opacity duration-300 hover:opacity-70",
          className
        )}
      >
        {content}
        {variant === "mark" && <span className="sr-only">{label}</span>}
      </Link>
    );
  }

  return (
    <span aria-label={label} className={cn("inline-flex items-center", className)}>
      {content}
    </span>
  );
}

function Dot() {
  return (
    <span className="mx-[0.12em] inline-block h-[0.18em] w-[0.18em] translate-y-[-0.28em] rounded-full bg-warm-brown" />
  );
}
