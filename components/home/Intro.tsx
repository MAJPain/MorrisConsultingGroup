import { SectionLabel } from "@/components/SectionLabel";
import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { intro } from "@/content/site";

/** Section 01 — The Firm. Two-column, asymmetric. */
export function Intro() {
  return (
    <section className="container py-24 md:py-36">
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-8">
        <div className="md:col-span-3">
          <SectionLabel number={intro.number} as="p">
            {intro.label}
          </SectionLabel>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <RevealText
            as="p"
            text="We advise a small number of leaders on the questions that decide the direction of an enterprise."
            className="text-editorial-xs font-normal leading-tight tracking-tight text-deep-blue"
            stagger={0.035}
          />

          <ScrollReveal className="mt-10 max-w-prose space-y-6 font-body text-lg leading-relaxed text-ink/80">
            {intro.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
