import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Essay } from "@/content/insights";

/**
 * Horizontal editorial card for an essay — used on the home preview and the
 * insights index. The whole row is a link; the arrow nudges on hover.
 */
export function EssayCard({ essay }: { essay: Essay }) {
  return (
    <Link
      href={`/insights/${essay.slug}`}
      className="group block border-b border-warm-brown/25 py-8 transition-colors duration-500 first:border-t md:py-10"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-baseline md:gap-8">
        <div className="md:col-span-3">
          <span className="font-mono text-xs uppercase tracking-eyebrow text-warm-brown">
            {essay.topic}
          </span>
        </div>

        <div className="md:col-span-7">
          <h3 className="font-display text-2xl font-medium leading-tight text-deep-blue transition-colors duration-500 group-hover:text-warm-brown md:text-3xl">
            {essay.title}
          </h3>
          <p className="mt-2 max-w-prose font-body leading-relaxed text-ink/65">
            {essay.dek}
          </p>
        </div>

        <div className="flex items-center gap-2 md:col-span-2 md:justify-end">
          <span className="font-body text-sm font-medium text-ink">Read</span>
          <ArrowUpRight
            size={18}
            className="text-warm-brown transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
