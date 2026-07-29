import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { RuleDivider } from "@/components/RuleDivider";
import { firm } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a private conversation with Morris Consulting Group. Based in Oxford, Mississippi.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="Begin a conversation."
        subtitle="Every engagement starts here."
        lede="If the questions before your enterprise warrant a considered outside read, we would be glad to hear from you. Every note is read personally and held in confidence."
      />

      <section className="container pb-28 md:pb-40">
        <RuleDivider className="mb-16 md:mb-24" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
          {/* Form */}
          <div className="md:col-span-7">
            <p className="mb-10 font-mono text-xs uppercase tracking-eyebrow text-warm-brown">
              — Write to the firm
            </p>
            <ContactForm />
          </div>

          {/* Firm info */}
          <aside className="md:col-span-4 md:col-start-9">
            <div className="space-y-12">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-eyebrow text-fog">
                  — Office
                </p>
                <p className="font-display text-2xl font-light leading-snug text-deep-blue">
                  {firm.location}
                </p>
              </div>

              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-eyebrow text-fog">
                  — Email
                </p>
                <a
                  href={`mailto:${firm.email}`}
                  className="link-drawn font-body text-lg text-ink"
                >
                  {firm.email}
                </a>
              </div>

              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-eyebrow text-fog">
                  — On discretion
                </p>
                <p className="max-w-xs font-body leading-relaxed text-ink/70">
                  Inquiries are confidential. We reply personally, and only ever
                  to you.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
