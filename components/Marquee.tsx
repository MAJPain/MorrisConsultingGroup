import Link from "next/link";
import { cn } from "@/lib/utils";

/** A plain label, or a label that links to a page. */
export type MarqueeItem = string | { label: string; href: string };

type MarqueeProps = {
  items: MarqueeItem[];
  /** Seconds for one full loop. Larger = slower. */
  durationSeconds?: number;
  className?: string;
  /** Tailwind bg + text color classes for the strip. */
  tone?: "light" | "dark";
};

/**
 * Infinite horizontal scrolling text strip, monospace, with monogram-dot
 * separators. Pauses on hover; frozen under prefers-reduced-motion (CSS).
 * Items may be plain strings or `{ label, href }` — a linked item renders the
 * same label wrapped in a hyperlink with a warm-brown hover.
 */
export function Marquee({
  items,
  durationSeconds = 40,
  className,
  tone = "dark",
}: MarqueeProps) {
  // Two identical sequences sit side by side; translating the track -50%
  // lands the second exactly where the first began — a seamless loop.
  const sequence = (keyPrefix: string) => {
    // The second copy is aria-hidden; its links stay out of the tab order.
    const duplicate = keyPrefix === "b";
    return (
      <div className="flex shrink-0 items-center" aria-hidden={duplicate}>
        {items.map((item, i) => {
          const label = typeof item === "string" ? item : item.label;
          const text = (
            <span className="whitespace-nowrap px-6 font-mono text-xs uppercase tracking-eyebrow md:px-9">
              {label}
            </span>
          );
          return (
            <span key={`${keyPrefix}-${i}`} className="flex items-center">
              {typeof item === "string" ? (
                text
              ) : (
                <Link
                  href={item.href}
                  tabIndex={duplicate ? -1 : undefined}
                  className="transition-colors duration-300 hover:text-warm-brown focus-visible:text-warm-brown"
                >
                  {text}
                </Link>
              )}
              <Separator tone={tone} />
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "pause-on-hover group relative overflow-hidden border-y py-5",
        tone === "dark"
          ? "border-warm-brown/25 bg-deep-blue text-bone-white"
          : "border-warm-brown/25 bg-bone-white text-ink",
        className
      )}
    >
      <div
        className="marquee-track flex w-max animate-marquee"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {sequence("a")}
        {sequence("b")}
      </div>

      {/* Edge fades */}
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28",
          tone === "dark"
            ? "bg-gradient-to-r from-deep-blue to-transparent"
            : "bg-gradient-to-r from-bone-white to-transparent"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28",
          tone === "dark"
            ? "bg-gradient-to-l from-deep-blue to-transparent"
            : "bg-gradient-to-l from-bone-white to-transparent"
        )}
      />
    </div>
  );
}

function Separator({ tone }: { tone: "light" | "dark" }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-display text-lg leading-none",
        tone === "dark" ? "text-soft-brown" : "text-warm-brown"
      )}
    >
      ·
    </span>
  );
}
