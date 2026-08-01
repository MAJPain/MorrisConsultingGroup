import type { Metadata } from "next";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowLink } from "@/components/ArrowLink";
import { FirstReadSections } from "@/components/FirstReadSections";
import {
  firstReadHeader,
  firstReadSections,
  firstReadFooter,
} from "@/content/the-first-read";

export const metadata: Metadata = {
  title: "The First Read",
  description:
    "Common questions about Morris Consulting Group's advisory and coaching practice: who we serve, how engagements run, our signature practices, fees, and terms.",
};

export default function TheFirstReadPage() {
  return (
    <>
      {/* Header — same top-of-page pattern as /about */}
      <header className="container pb-10 pt-36 md:pb-14 md:pt-48">
        <SectionLabel as="p" className="mb-8">
          {firstReadHeader.rail}
        </SectionLabel>
        <h1 className="max-w-[16ch] text-editorial font-medium tracking-[-0.02em] text-deep-blue">
          {firstReadHeader.title}
        </h1>
        <p className="mt-8 max-w-prose font-body text-lg leading-relaxed text-ink/75">
          {firstReadHeader.subtitle}
        </p>
      </header>

      <FirstReadSections sections={firstReadSections} />

      {/* Footer */}
      <section className="container pb-28 pt-14 md:pb-40">
        <div className="border-t border-warm-brown/25 pt-14">
          <p className="max-w-prose font-display text-2xl font-light italic leading-snug text-deep-blue md:text-3xl">
            {firstReadFooter.line}
          </p>
          <div className="mt-8">
            <ArrowLink href={firstReadFooter.cta.href}>
              <span className="uppercase tracking-wide">
                {firstReadFooter.cta.label}
              </span>
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
