import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TeamMemberSection } from "@/components/TeamMemberSection";
import { RuleDivider } from "@/components/RuleDivider";
import { SectionLabel } from "@/components/SectionLabel";
import { ArrowLink } from "@/components/ArrowLink";
import { team, teamHeader, teamCta } from "@/content/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind Morris Consulting Group — a small, deliberate roster led by founder Sheldon Morris and Managing Partner Dr. Kenya Dugger.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow={teamHeader.eyebrow}
        title={teamHeader.title}
        subtitle={teamHeader.subtitle}
      />

      <div className="container">
        <RuleDivider className="mt-4" />
        {team.map((member, index) => (
          <div key={member.slot}>
            <TeamMemberSection member={member} index={index} />
            <RuleDivider />
          </div>
        ))}
      </div>

      {/* Closing CTA */}
      <section className="bg-deep-blue py-28 text-bone-white md:py-40">
        <div className="container">
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <SectionLabel as="p" className="mb-8 text-soft-brown">
                {teamCta.eyebrow}
              </SectionLabel>
              <h2 className="text-editorial-sm font-medium tracking-tight text-bone-white">
                {teamCta.headline}
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="mb-8 max-w-sm font-body leading-relaxed text-bone-white/70">
                {teamCta.body}
              </p>
              <ArrowLink href={teamCta.cta.href} tone="light">
                {teamCta.cta.label}
              </ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
