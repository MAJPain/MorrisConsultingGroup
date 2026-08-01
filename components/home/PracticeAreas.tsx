import { SectionLabel } from "@/components/SectionLabel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ArrowLink";
import { practiceAreas } from "@/content/site";

/** Section 02 — Practice areas. The firm's service lines. */
export function PracticeAreas() {
  return (
    <section className="bg-bone-white py-24 md:py-36">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6">
            <SectionLabel as="p" className="mb-6">
              ADVISORY
            </SectionLabel>
            <h2 className="text-editorial-sm font-medium tracking-tight text-deep-blue">
              Six practices, <span className="italic text-warm-brown">one discipline.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="max-w-sm font-body leading-relaxed text-ink/70">
              We work across six related practices, each grounded in the same
              belief: performance and leadership are inseparable.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-warm-brown/20 md:mt-24">
          {practiceAreas.map((area) => (
            <ScrollReveal key={area.number}>
              <article className="group grid grid-cols-1 gap-x-8 gap-y-4 border-b border-warm-brown/20 py-10 md:grid-cols-12 md:py-12">
                <h3 className="font-display text-3xl font-medium leading-tight text-deep-blue transition-colors duration-500 group-hover:text-warm-brown md:col-span-6 md:text-4xl">
                  {area.title}
                </h3>
                <p className="max-w-prose font-body leading-relaxed text-ink/70 md:col-span-5 md:col-start-8">
                  {area.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12">
          <ArrowLink href="/advisory">Explore the practice</ArrowLink>
        </div>
      </div>
    </section>
  );
}
