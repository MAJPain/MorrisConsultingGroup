import { SectionLabel } from "@/components/SectionLabel";
import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  /** Italic serif subtitle line. */
  subtitle?: string;
  /** Longer body lede. */
  lede?: string;
  className?: string;
};

/**
 * Interior page masthead. Clears the fixed navbar and sets the large serif
 * title with an eyebrow label.
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  lede,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("container pb-16 pt-36 md:pb-24 md:pt-48", className)}>
      <SectionLabel as="p" className="mb-8">
        {eyebrow}
      </SectionLabel>

      <RevealText
        as="h1"
        text={title}
        className="max-w-[18ch] text-editorial font-medium tracking-[-0.02em] text-deep-blue"
        stagger={0.05}
      />

      {(subtitle || lede) && (
        <ScrollReveal className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
          {subtitle && (
            <p className="font-display text-2xl font-light italic text-warm-brown md:col-span-6">
              {subtitle}
            </p>
          )}
          {lede && (
            <p className="max-w-prose font-body text-lg leading-relaxed text-ink/75 md:col-span-6 md:col-start-7">
              {lede}
            </p>
          )}
        </ScrollReveal>
      )}
    </header>
  );
}
