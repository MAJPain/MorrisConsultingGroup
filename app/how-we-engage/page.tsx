import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RuleDivider } from "@/components/RuleDivider";
import { ArrowLink } from "@/components/ArrowLink";
import {
  hweHeader,
  hwePositioning,
  hweGroups,
  hweBridge,
  hweFooter,
  type HweInline,
} from "@/content/how-we-engage";

export const metadata: Metadata = {
  title: "How We Engage",
  description:
    "The practice architecture that guides every Morris Consulting Group engagement — two core practices for chief executives and boards, and two signature practices where regulatory or sector-specific requirements reward depth.",
};

function InlineNodes({ nodes }: { nodes: HweInline[] }) {
  return (
    <>
      {nodes.map((node, i) => {
        if (typeof node === "string") return <span key={i}>{node}</span>;
        if ("strong" in node) {
          return (
            <strong
              key={i}
              className="font-display font-medium not-italic text-deep-blue"
            >
              {node.strong}
            </strong>
          );
        }
        return (
          <Link
            key={i}
            href={node.href}
            className="text-deep-blue underline decoration-warm-brown/50 underline-offset-4 transition-colors hover:decoration-warm-brown focus-visible:decoration-warm-brown"
          >
            {node.text}
          </Link>
        );
      })}
    </>
  );
}

export default function HowWeEngagePage() {
  return (
    <>
      {/* Header — same top-of-page pattern as /about and /how-we-engage/working-with-us */}
      <header className="container pb-10 pt-36 md:pb-14 md:pt-48">
        <SectionLabel as="p" className="mb-8">
          {hweHeader.rail}
        </SectionLabel>
        <h1 className="max-w-[16ch] text-editorial font-medium tracking-[-0.02em] text-deep-blue">
          {hweHeader.title}
        </h1>
        <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ink/75">
          {hweHeader.subtitle}
        </p>
      </header>

      {/* Opening positioning statement */}
      <section className="container pb-4 pt-4">
        <div className="max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink/80">
          {hwePositioning.map((para, i) => (
            <p key={i}>
              <InlineNodes nodes={para} />
            </p>
          ))}
        </div>
      </section>

      {/* Practice groups */}
      {hweGroups.map((group) => (
        <section key={group.rail} className="container py-12 md:py-16">
          <h2 className="eyebrow flex items-center gap-2">
            <span aria-hidden="true">—</span>
            <span>{group.rail}</span>
          </h2>
          <RuleDivider className="mt-5" />
          <p className="mt-6 max-w-prose font-display text-xl font-light italic leading-snug text-deep-blue">
            {group.descriptor}
          </p>

          <div className="mt-12 space-y-12 md:space-y-16">
            {group.practices.map((practice) => (
              <article key={practice.name}>
                <h3 className="font-display text-2xl font-medium tracking-[-0.01em] text-deep-blue md:text-3xl">
                  {practice.name}
                </h3>
                <div className="mt-5 max-w-prose space-y-4 font-body text-lg leading-relaxed text-ink/80">
                  {practice.body.map((para, i) => (
                    <p key={i}>
                      <InlineNodes nodes={para} />
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Closing bridge + CTA footer */}
      <section className="container pb-28 pt-8 md:pb-40">
        <div className="border-t border-warm-brown/25 pt-14">
          <p className="max-w-prose font-display text-2xl font-light italic leading-snug text-deep-blue md:text-3xl">
            <InlineNodes nodes={hweBridge} />
          </p>
          <div className="mt-8">
            <ArrowLink href={hweFooter.cta.href}>
              <span className="uppercase tracking-wide">
                {hweFooter.cta.label}
              </span>
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
