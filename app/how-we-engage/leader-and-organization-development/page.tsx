import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RuleDivider } from "@/components/RuleDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ArrowLink";
import {
  lodHeader,
  lodSections,
  type LodInline,
} from "@/content/leader-and-organization-development";

export const metadata: Metadata = {
  title: "Leader & Organization Development",
  description:
    "A core practice for individuals, teams, and organizations building leader depth on the human side of performance — executive coaching, senior leader and team development, cohort programs, and talent and culture programs.",
};

function InlineNodes({ nodes }: { nodes: LodInline[] }) {
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

export default function LeaderAndOrganizationDevelopmentPage() {
  return (
    <>
      <PageHeader
        eyebrow={lodHeader.eyebrow}
        title={lodHeader.title}
        subtitle={lodHeader.subtitle}
        lede={lodHeader.lede}
      />

      {lodSections.map((section) => (
        <section key={section.rail} className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-8">
            {/* Left column — rail + hairline divider + italic descriptor */}
            <div className="md:col-span-4">
              <h2 className="eyebrow flex items-center gap-2">
                <span aria-hidden="true">—</span>
                <span>{section.rail}</span>
              </h2>
              <RuleDivider className="mt-5" />
              <p className="mt-6 max-w-xs font-display text-xl font-light italic text-warm-brown">
                {section.descriptor}
              </p>
            </div>

            {/* Right column — body / engagements / CTA */}
            <ScrollReveal className="md:col-span-7 md:col-start-6">
              {section.body && (
                <div className="max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink/80">
                  {section.body.map((para, i) => (
                    <p key={i}>
                      <InlineNodes nodes={para} />
                    </p>
                  ))}
                </div>
              )}

              {section.engagements && (
                <div className="max-w-prose space-y-10">
                  {section.engagements.map((engagement) => (
                    <article key={engagement.name}>
                      <h3 className="font-display text-2xl font-medium tracking-tight text-deep-blue">
                        {engagement.name}
                      </h3>
                      <p className="mt-4 font-body text-lg leading-relaxed text-ink/80">
                        <InlineNodes nodes={engagement.body} />
                      </p>
                    </article>
                  ))}
                </div>
              )}

              {section.cta && (
                <div className="mt-8">
                  <ArrowLink href={section.cta.href}>
                    <span className="uppercase tracking-wide">
                      {section.cta.label}
                    </span>
                  </ArrowLink>
                </div>
              )}
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
}
