import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { RuleDivider } from "@/components/RuleDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
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
      <PageHeader
        eyebrow={hweHeader.eyebrow}
        title={hweHeader.title}
        subtitle={hweHeader.subtitle}
        lede={hweHeader.lede}
      />

      {/* Positioning — two-column: rail left, prose right (matches /about) */}
      <section className="container pb-8 md:pb-12">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-4">
            <SectionLabel as="p">{hwePositioning.rail}</SectionLabel>
          </div>
          <ScrollReveal className="max-w-prose space-y-6 font-body text-lg leading-relaxed text-ink/80 md:col-span-7 md:col-start-6">
            {hwePositioning.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Practice groups — three-column practice blocks (matches /advisory) */}
      {hweGroups.map((group) => (
        <section key={group.rail} className="container">
          <div className="pt-12 md:pt-16">
            <h2 className="eyebrow flex items-center gap-2">
              <span aria-hidden="true">—</span>
              <span>{group.rail}</span>
            </h2>
            <RuleDivider className="mt-5" />
            <p className="mt-6 max-w-prose font-display text-xl font-light italic text-warm-brown">
              {group.descriptor}
            </p>
          </div>

          {group.practices.map((practice) => (
            <article
              key={practice.name}
              className="grid grid-cols-1 gap-x-8 gap-y-8 border-b border-warm-brown/25 py-14 md:grid-cols-12 md:py-20"
            >
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl font-medium leading-tight text-deep-blue md:text-4xl">
                  {practice.name}
                </h3>
                <p className="mt-4 max-w-xs font-display text-xl font-light italic text-warm-brown">
                  {practice.descriptor}
                </p>
              </div>

              <ScrollReveal className="md:col-span-5">
                <div className="max-w-prose space-y-4 font-body text-lg leading-relaxed text-ink/80">
                  {practice.body.map((para, i) => (
                    <p key={i}>
                      <InlineNodes nodes={para} />
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              <div className="md:col-span-3">
                <p className="mb-5 font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
                  — Engagements
                </p>
                <ul className="space-y-3">
                  {practice.engagements.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 font-body text-sm leading-snug text-ink/75"
                    >
                      <span aria-hidden="true" className="text-warm-brown">
                        ·
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
      ))}

      {/* Closing bridge + CTA footer */}
      <section className="container pb-28 pt-16 md:pb-40 md:pt-24">
        <p className="max-w-3xl font-display text-2xl font-light italic leading-snug text-deep-blue md:text-3xl">
          <InlineNodes nodes={hweBridge} />
        </p>
        <div className="mt-8">
          <ArrowLink href={hweFooter.cta.href}>
            <span className="uppercase tracking-wide">{hweFooter.cta.label}</span>
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
