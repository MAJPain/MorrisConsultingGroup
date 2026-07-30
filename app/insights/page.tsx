import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EssayCard } from "@/components/EssayCard";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { essaysByDate } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Essays from Morris Consulting Group on resilience, succession, strategy, and the practice of leadership.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="INSIGHTS"
        title="Notes on the practice of leadership."
        subtitle="Written plainly, for those who lead."
        lede="Notes on resilience, succession, and the discipline of building organizations that thrive."
      />

      <section className="container pb-24 md:pb-36">
        <div>
          {essaysByDate.map((essay) => (
            <ScrollReveal key={essay.slug}>
              <EssayCard essay={essay} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
