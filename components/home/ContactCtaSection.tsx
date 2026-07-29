import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ArrowLink";
import { contactCta } from "@/content/site";

/** Section 06 — Contact CTA. Large serif line on the anchor color. */
export function ContactCtaSection() {
  return (
    <section className="bg-deep-blue py-28 text-bone-white md:py-40">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <RevealText
              as="h2"
              text={contactCta.headline}
              className="text-editorial font-medium tracking-[-0.02em] text-bone-white"
              stagger={0.08}
            />
          </div>
          <div className="md:col-span-4">
            <ScrollReveal className="space-y-8">
              <p className="max-w-sm font-body leading-relaxed text-bone-white/70">
                {contactCta.body}
              </p>
              <ArrowLink href={contactCta.cta.href} tone="light">
                {contactCta.cta.label}
              </ArrowLink>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
