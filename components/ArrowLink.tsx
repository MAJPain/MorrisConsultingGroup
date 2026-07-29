import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/Magnetic";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** "drawn" keeps the brown underline visible; "hover" draws it on hover. */
  underline?: "drawn" | "hover";
  tone?: "ink" | "light";
};

/**
 * An editorial text link with a warm-brown underline and a nudging arrow.
 * Wrapped in a subtle magnetic pull.
 */
export function ArrowLink({
  href,
  children,
  className,
  underline = "drawn",
  tone = "ink",
}: ArrowLinkProps) {
  return (
    <Magnetic strength={3} className={className}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 font-body text-sm font-medium",
          tone === "light" ? "text-bone-white" : "text-ink"
        )}
      >
        <span className={underline === "drawn" ? "link-drawn" : "link-underline"}>
          {children}
        </span>
        <ArrowRight
          size={16}
          className="text-warm-brown transition-transform duration-300 ease-editorial group-hover:translate-x-1"
        />
      </Link>
    </Magnetic>
  );
}
