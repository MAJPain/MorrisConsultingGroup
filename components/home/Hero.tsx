import { RevealText } from "@/components/RevealText";
import { ScrollCue } from "@/components/ScrollCue";
import { hero } from "@/content/site";

/**
 * Full-viewport editorial hero. Text-driven on the deep-blue anchor color,
 * with a large serif monogram watermark and a scroll cue.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-deep-blue text-bone-white">
      {/* Monogram watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[6vw] top-[8vh] select-none font-display text-[42vw] font-medium leading-none text-bone-white/[0.03] md:text-[30vw]"
      >
        M
      </span>

      {/* Subtle vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-deep-blue/0 via-deep-blue/0 to-midnight-blue/40"
      />

      <div className="container relative flex flex-1 flex-col justify-center pb-24 pt-32 md:pb-32">
        <p className="eyebrow mb-8 text-soft-brown md:mb-10">{hero.eyebrow}</p>

        <h1 className="max-w-[16ch]">
          <RevealText
            as="span"
            text={hero.statement}
            className="block text-editorial font-medium tracking-[-0.02em] text-bone-white"
            stagger={0.07}
          />
        </h1>
      </div>

      <div className="container relative flex items-end justify-between pb-10">
        <div className="hidden max-w-xs font-body text-sm leading-relaxed text-bone-white/60 md:block">
          A boutique advisory practice serving chief executives and boards of
          directors.
        </div>
        <ScrollCue label={hero.scrollCue} />
      </div>
    </section>
  );
}
