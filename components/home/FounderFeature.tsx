import { SectionLabel } from "@/components/SectionLabel";
import { SplitSection } from "@/components/SplitSection";
import { FramedPortrait } from "@/components/FramedPortrait";
import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ArrowLink";
import { founderFeature } from "@/content/site";
import { team } from "@/content/team";

/** Section 03 — Founder feature. Split screen, portrait + editorial column. */
export function FounderFeature() {
  const founder = team[0];

  return (
    <section className="bg-midnight-blue py-24 text-bone-white md:py-36">
      <div className="container">
        <SplitSection
          imageSide="left"
          align="center"
          image={
            <FramedPortrait
              frameSide="right"
              src={founder?.imagePath}
              alt={founder?.imageAlt ?? "Sheldon Morris"}
              initials={founder?.initials}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              wrapperClassName="mx-auto max-w-md md:mx-0"
            />
          }
        >
          <SectionLabel
            number={founderFeature.number}
            as="p"
            className="mb-8 text-soft-brown"
          >
            {founderFeature.label}
          </SectionLabel>

          <RevealText
            as="h2"
            text="Sheldon Morris"
            className="text-editorial-sm font-medium tracking-tight text-bone-white"
          />
          <p className="mt-2 font-mono text-xs uppercase tracking-eyebrow text-soft-brown">
            Founder & Principal
          </p>

          <ScrollReveal className="mt-8 max-w-prose space-y-6 font-body text-lg leading-relaxed text-bone-white/80">
            {founderFeature.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </ScrollReveal>

          <div className="mt-10">
            <ArrowLink href={founderFeature.cta.href} tone="light">
              {founderFeature.cta.label}
            </ArrowLink>
          </div>
        </SplitSection>
      </div>
    </section>
  );
}
