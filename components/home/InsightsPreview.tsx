import { SectionLabel } from "@/components/SectionLabel";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLink } from "@/components/ArrowLink";
import { EssayCard } from "@/components/EssayCard";
import { essaysByDate } from "@/content/insights";

/** Section 05 — Insights preview. Three most recent essays. */
export function InsightsPreview() {
  const recent = essaysByDate.slice(0, 3);

  return (
    <section className="bg-bone-white py-24 md:py-36">
      <div className="container">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel as="p" className="mb-6">
              INSIGHTS
            </SectionLabel>
            <h2 className="max-w-xl text-editorial-sm font-medium tracking-tight text-deep-blue">
              Notes on leadership and the enterprise.
            </h2>
          </div>
          <div className="shrink-0">
            <ArrowLink href="/insights">All insights</ArrowLink>
          </div>
        </div>

        <div>
          {recent.map((essay) => (
            <ScrollReveal key={essay.slug}>
              <EssayCard essay={essay} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
