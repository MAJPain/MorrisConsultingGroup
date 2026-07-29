import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RuleDivider } from "@/components/RuleDivider";
import { Marquee } from "@/components/Marquee";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { advisoryHeader, practiceDetails, approach } from "@/content/advisory";
import { marqueeItems } from "@/content/site";

export const metadata: Metadata = {
  title: "Advisory",
  description:
    "Morris Consulting Group advises chief executives and boards on operating effectiveness, enterprise performance, executive succession, organizational leadership, and resilience.",
};

export default function AdvisoryPage() {
  return (
    <>
      <PageHeader
        eyebrow={advisoryHeader.eyebrow}
        title={advisoryHeader.title}
        subtitle={advisoryHeader.subtitle}
        lede={advisoryHeader.lede}
      />

      {/* Practices */}
      <section className="container">
        <RuleDivider className="mt-4" />
        {practiceDetails.map((practice) => (
          <article
            key={practice.number}
            className="grid grid-cols-1 gap-x-8 gap-y-8 border-b border-warm-brown/25 py-16 md:grid-cols-12 md:py-24"
          >
            <div className="md:col-span-4">
              <h2 className="font-display text-3xl font-medium leading-tight text-deep-blue md:text-4xl">
                {practice.title}
              </h2>
              <p className="mt-4 max-w-xs font-display text-xl font-light italic text-warm-brown">
                {practice.summary}
              </p>
            </div>

            <ScrollReveal className="md:col-span-5">
              <div className="max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink/80">
                {practice.body.map((para, i) => (
                  <p key={i}>{para}</p>
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

      <Marquee items={marqueeItems} tone="dark" durationSeconds={44} className="mt-24" />

      {/* Approach */}
      <section className="bg-bone-white py-24 md:py-36">
        <div className="container">
          <div className="mb-16 md:mb-24">
            <SectionLabel as="p" className="mb-6">
              {approach.label}
            </SectionLabel>
            <h2 className="text-editorial-sm font-medium tracking-tight text-deep-blue">
              {approach.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-4">
            {approach.steps.map((step) => (
              <ScrollReveal key={step.number}>
                <div className="flex h-full flex-col gap-4 border-t border-warm-brown/25 pt-6">
                  <h3 className="font-display text-2xl font-medium text-deep-blue">
                    {step.title}
                  </h3>
                  <p className="font-body leading-relaxed text-ink/70">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
