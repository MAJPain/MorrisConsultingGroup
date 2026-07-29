import { SectionLabel } from "@/components/SectionLabel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { engagements } from "@/content/site";

/** Section 04 — Selected engagements. Anonymized editorial list. */
export function Engagements() {
  return (
    <section className="bg-bone-white py-24 md:py-36">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number="04" as="p" className="mb-6">
              SELECTED ENGAGEMENTS
            </SectionLabel>
            <h2 className="text-editorial-sm font-medium tracking-tight text-deep-blue">
              A sense of the work.
            </h2>
            <p className="mt-6 max-w-xs font-body leading-relaxed text-ink/70">
              Our engagements are confidential. The following are anonymized in
              kind, offered only to convey the shape of what we do.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="border-t border-warm-brown/25">
              {engagements.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.04}>
                  <div className="group flex flex-col gap-2 border-b border-warm-brown/25 py-8 md:flex-row md:items-baseline md:gap-10">
                    <span className="shrink-0 font-mono text-xs uppercase tracking-eyebrow text-warm-brown md:w-40">
                      {item.label}
                    </span>
                    <p className="font-display text-xl leading-snug text-deep-blue md:text-2xl">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
