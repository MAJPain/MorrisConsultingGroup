import { Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/content/team";
import { SectionLabel } from "@/components/SectionLabel";
import { SplitSection } from "@/components/SplitSection";
import { Portrait } from "@/components/Portrait";
import { FramedPortrait } from "@/components/FramedPortrait";
import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";

type TeamMemberSectionProps = {
  member: TeamMember;
  index: number;
};

/**
 * A single team-page profile. Handles the three variants:
 *  - "full"        the founder — most editorial depth, pull quote
 *  - "standard"    other named members
 *  - "placeholder" reserved, "to be announced" slots
 * Image side alternates by index for editorial rhythm.
 */
export function TeamMemberSection({ member, index }: TeamMemberSectionProps) {
  const imageSide = index % 2 === 0 ? "left" : "right";
  const isPlaceholder = member.variant === "placeholder";

  // Reserved slots keep the designed, framed placeholder box; slots with a
  // real photo render frameless with softly feathered edges.
  const portrait = isPlaceholder ? (
    <FramedPortrait
      frameSide={imageSide === "left" ? "right" : "left"}
      placeholderMark="&"
      placeholderLabel="TO BE ANNOUNCED"
      alt={member.role}
      sizes="(max-width: 768px) 100vw, 42vw"
    />
  ) : (
    <Portrait
      feather
      src={member.imagePath}
      alt={member.imageAlt ?? member.role}
      initials={member.initials}
      priority={index === 0}
      sizes="(max-width: 768px) 100vw, 42vw"
    />
  );

  return (
    <article className="py-16 md:py-24">
      <SplitSection image={portrait} imageSide={imageSide} align="start">
        <div className="flex flex-col">
          <SectionLabel as="p" className="mb-6">
            {member.eyebrow}
          </SectionLabel>

          {member.name ? (
            <RevealText
              as="h2"
              text={member.name}
              className="text-editorial-sm font-medium tracking-tight text-deep-blue"
            />
          ) : (
            <h2 className="text-editorial-sm font-normal italic tracking-tight text-deep-blue/70">
              To be announced.
            </h2>
          )}

          {(member.email || member.linkedin) && (
            <div className="mt-5 flex flex-col gap-3">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-eyebrow text-warm-brown transition-colors hover:text-soft-brown focus-visible:text-soft-brown"
                >
                  <Mail size={15} aria-hidden="true" />
                  Email
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-eyebrow text-warm-brown transition-colors hover:text-soft-brown focus-visible:text-soft-brown"
                >
                  <Linkedin size={15} aria-hidden="true" />
                  LinkedIn
                </a>
              )}
            </div>
          )}

          {/* Bio */}
          <div
            className={cn(
              "mt-8 space-y-5 font-body leading-relaxed text-ink/80",
              isPlaceholder ? "max-w-md" : "max-w-prose"
            )}
          >
            {member.bio.map((para, i) => {
              const isNote =
                member.bioNote && para.trim().endsWith(member.bioNote);

              if (isPlaceholder) {
                return (
                  <p key={i} className="font-display text-xl italic text-ink/60">
                    {para}
                  </p>
                );
              }

              if (isNote && member.bioNote) {
                const lead = para.slice(0, para.length - member.bioNote.length);
                return (
                  <p key={i}>
                    {lead}
                    <span className="font-display italic text-warm-brown">
                      {member.bioNote}
                    </span>
                  </p>
                );
              }

              return <p key={i}>{para}</p>;
            })}
          </div>

          {/* Pull quote (full variant) */}
          {member.pullQuote && (
            <ScrollReveal className="mt-12 md:-ml-8 lg:-ml-16">
              <blockquote className="border-l-2 border-warm-brown pl-6">
                <p className="font-display text-2xl font-light italic leading-snug text-deep-blue md:text-3xl">
                  “{member.pullQuote}”
                </p>
              </blockquote>
            </ScrollReveal>
          )}

          {/* Credentials */}
          {member.credentials && member.credentials.length > 0 && (
            <ScrollReveal className="mt-12">
              <dl className="space-y-3 border-t border-warm-brown/20 pt-6">
                {member.credentials.map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span aria-hidden="true" className="font-mono text-xs text-warm-brown">
                      —
                    </span>
                    <dd className="font-mono text-xs uppercase tracking-eyebrow text-fog">
                      {line}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          )}
        </div>
      </SplitSection>
    </article>
  );
}
