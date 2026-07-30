import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { RevealText } from "@/components/RevealText";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RuleDivider } from "@/components/RuleDivider";
import { ArrowLink } from "@/components/ArrowLink";
import { essayCta, essays, essaysByDate, getEssay } from "@/content/insights";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return { title: "Insight not found" };
  return {
    title: essay.title,
    description: essay.dek,
    openGraph: { title: essay.title, description: essay.dek, type: "article" },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  // Suggest the next most-recent essay that isn't this one.
  const next = essaysByDate.find((e) => e.slug !== essay.slug);

  return (
    <article>
      {/* Masthead */}
      <header className="container pb-14 pt-36 md:pb-20 md:pt-48">
        <Link
          href="/insights"
          className="group mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-eyebrow text-fog transition-colors hover:text-warm-brown"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          All insights
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="font-mono text-xs uppercase tracking-eyebrow text-warm-brown">
            — {essay.topic}
          </span>
          <span className="font-mono text-xs uppercase tracking-eyebrow text-fog">
            {essay.readingTime}
          </span>
        </div>

        <RevealText
          as="h1"
          text={essay.title}
          className="mt-8 max-w-[20ch] text-editorial-sm font-medium tracking-tight text-deep-blue"
          stagger={0.04}
        />

        <p className="mt-8 font-mono text-xs uppercase tracking-eyebrow text-fog">
          — By {essay.author}
        </p>
      </header>

      <div className="container">
        <RuleDivider />
      </div>

      {/* Body */}
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-8 md:col-start-3">
            {essay.body.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="mt-6 font-display text-3xl font-medium leading-tight text-deep-blue md:text-4xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "pullquote") {
                return (
                  <ScrollReveal key={i} className="my-6 md:-mx-12 lg:-mx-24">
                    <blockquote className="border-l-2 border-warm-brown pl-6 md:pl-10">
                      <p className="font-display text-3xl font-light italic leading-snug text-deep-blue md:text-4xl">
                        “{block.text}”
                      </p>
                    </blockquote>
                  </ScrollReveal>
                );
              }
              return (
                <p
                  key={i}
                  className="font-body text-lg leading-relaxed text-ink/85"
                >
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Firm CTA — closes every essay */}
      <div className="container pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8 md:col-start-3">
            <div className="border-t border-warm-brown/25 pt-8">
              <p className="max-w-prose font-body italic leading-relaxed text-ink/60">
                {essayCta.body}{" "}
                <a
                  href={`mailto:${essayCta.email}`}
                  className="text-warm-brown underline-offset-4 transition-colors hover:text-soft-brown hover:underline"
                >
                  {essayCta.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next essay */}
      {next && (
        <section className="bg-deep-blue py-20 text-bone-white md:py-28">
          <div className="container">
            <p className="eyebrow mb-6 text-soft-brown">— Continue reading</p>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <Link href={`/insights/${next.slug}`} className="group max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-eyebrow text-bone-white/50">
                  {next.topic}
                </span>
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-bone-white transition-colors duration-500 group-hover:text-soft-brown md:text-4xl">
                  {next.title}
                </h2>
              </Link>
              <div className="shrink-0">
                <ArrowLink href={`/insights/${next.slug}`} tone="light">
                  Read next
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
