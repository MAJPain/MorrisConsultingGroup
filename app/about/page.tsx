import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionLabel } from "@/components/SectionLabel";
import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Marquee } from "@/components/Marquee";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { aboutHeader, story, philosophy, valuesSection, values } from "@/content/about";
import { marqueeItems } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Morris Consulting Group is a boutique advisory firm founded in 2017, built to bring the discipline of command to the counsel of chief executives and boards.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutHeader.eyebrow}
        title={aboutHeader.title}
        subtitle={aboutHeader.subtitle}
        lede={aboutHeader.lede}
      />

      {/* Story */}
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-8">
          <div className="md:col-span-4">
            <SectionLabel as="p" className="mb-6">
              {story.label}
            </SectionLabel>
            <h2 className="text-editorial-xs font-medium leading-tight tracking-tight text-deep-blue">
              {story.heading}
            </h2>
          </div>
          <ScrollReveal className="max-w-prose space-y-6 font-body text-lg leading-relaxed text-ink/80 md:col-span-7 md:col-start-6">
            {story.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy — anchor color */}
      <section className="bg-midnight-blue py-24 text-bone-white md:py-36">
        <div className="container">
          <SectionLabel as="p" className="mb-10 text-soft-brown">
            {philosophy.label}
          </SectionLabel>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-7">
              <RevealText
                as="p"
                text={philosophy.statement}
                className="text-editorial-sm font-light italic leading-tight tracking-tight text-bone-white"
                stagger={0.04}
              />
            </div>
            <ScrollReveal className="max-w-prose space-y-6 font-body leading-relaxed text-bone-white/75 md:col-span-4 md:col-start-9">
              {philosophy.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} tone="light" durationSeconds={42} />

      {/* Values */}
      <section className="bg-bone-white py-24 md:py-36">
        <div className="container">
          <div className="mb-14 md:mb-20">
            <SectionLabel as="p" className="mb-6">
              {valuesSection.label}
            </SectionLabel>
            <h2 className="text-editorial-sm font-medium tracking-tight text-deep-blue">
              {valuesSection.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-px md:grid-cols-2">
            {values.map((value) => (
              <ScrollReveal key={value.number}>
                <article className="flex h-full flex-col gap-4 border-t border-warm-brown/25 py-10">
                  <h3 className="font-display text-3xl font-medium text-deep-blue">
                    {value.title}
                  </h3>
                  <p className="max-w-prose font-body leading-relaxed text-ink/70">
                    {value.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
