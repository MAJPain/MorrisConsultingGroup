import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/SectionLabel";
import { RuleDivider } from "@/components/RuleDivider";
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
      {/* Header — same top-of-page pattern as /about and /the-first-read */}
      <header className="container pb-10 pt-36 md:pb-14 md:pt-48">
        <SectionLabel as="p" className="mb-8">
          {wwuHeader.rail}
        </SectionLabel>
        <h1 className="max-w-[16ch] text-editorial font-medium tracking-[-0.02em] text-deep-blue">
          {wwuHeader.title}
        </h1>
        <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ink/75">
          {wwuHeader.subtitle}
        </p>
      </header>

      {wwuSections.map((section) => (
        <section key={section.n} className="container py-12 md:py-16">
          <h2 className="eyebrow flex items-center gap-2">
            <span aria-hidden="true">—</span>
            <span>{`SECTION ${section.n} · ${section.name}`}</span>
          </h2>
          <RuleDivider className="mt-5" />
          <div className="mt-8 max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink/80">
            {section.body.map((para, i) => (
              <p key={i}>
                <InlineNodes nodes={para} />
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <section className="container pb-28 pt-8 md:pb-40">
        <div className="border-t border-warm-brown/25 pt-14">
          <p className="max-w-prose font-display text-2xl font-light italic leading-snug text-deep-blue md:text-3xl">
            <InlineNodes nodes={wwuFooter.line} />
          </p>
          <div className="mt-8">
            <ArrowLink href={wwuFooter.cta.href}>
              <span className="uppercase tracking-wide">
                {wwuFooter.cta.label}
              </span>
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
