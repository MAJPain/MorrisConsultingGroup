import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { RuleDivider } from "@/components/RuleDivider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ArrowLink";
import {
  wwuHeader,
  wwuSections,
  wwuFooter,
  type WwuInline,
} from "@/content/working-with-us";

export const metadata: Metadata = {
  title: "Working With Us",
  description:
    "How Morris Consulting Group engagements are structured, priced, and governed — intake, engagement structure, fees, compensation, travel, and confidentiality.",
};

function InlineNodes({ nodes }: { nodes: WwuInline[] }) {
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

export default function WorkingWithUsPage() {
  return (
    <>
      <PageHeader
        eyebrow={wwuHeader.eyebrow}
        title={wwuHeader.title}
        subtitle={wwuHeader.subtitle}
        lede={wwuHeader.lede}
      />

      {/* Sections — two-column: rail + descriptor left, body right (matches /about) */}
      {wwuSections.map((section) => (
        <section key={section.n} className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-4">
              <h2 className="eyebrow flex items-center gap-2">
                <span aria-hidden="true">—</span>
                <span>{`SECTION ${section.n} · ${section.name}`}</span>
              </h2>
              <RuleDivider className="mt-5" />
              <p className="mt-6 max-w-xs font-display text-xl font-light italic text-warm-brown">
                {section.descriptor}
              </p>
            </div>

            <ScrollReveal className="max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink/80 md:col-span-7 md:col-start-6">
              {section.body.map((para, i) => (
                <p key={i}>
                  <InlineNodes nodes={para} />
                </p>
              ))}
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Closing bridge + CTA footer */}
      <section className="container pb-28 pt-8 md:pb-40">
        <p className="max-w-3xl font-display text-2xl font-light italic leading-snug text-deep-blue md:text-3xl">
          <InlineNodes nodes={wwuFooter.line} />
        </p>
        <div className="mt-8">
          <ArrowLink href={wwuFooter.cta.href}>
            <span className="uppercase tracking-wide">
              {wwuFooter.cta.label}
            </span>
          </ArrowLink>
        </div>
      </section>
    </>
  );
}
