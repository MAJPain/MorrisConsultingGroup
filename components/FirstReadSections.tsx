"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/SectionLabel";
import type { AnswerNode, FirstReadSection } from "@/content/the-first-read";

function Answer({ nodes }: { nodes: AnswerNode[] }) {
  return (
    <p className="max-w-prose font-body text-lg leading-relaxed text-ink/80">
      {nodes.map((node, i) =>
        typeof node === "string" ? (
          <span key={i}>{node}</span>
        ) : (
          <Link
            key={i}
            href={node.href}
            className="text-deep-blue underline decoration-warm-brown/50 underline-offset-4 transition-colors hover:decoration-warm-brown focus-visible:decoration-warm-brown"
          >
            {node.text}
          </Link>
        )
      )}
    </p>
  );
}

/**
 * The five Q&A sections. A single `openId` is held for the whole page, so
 * opening one item closes any other. Collapsed panels are `inert`, keeping
 * their links out of the tab order until expanded.
 */
export function FirstReadSections({
  sections,
}: {
  sections: FirstReadSection[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      {sections.map((section, sIdx) => (
        <section
          key={section.n}
          className={cn(
            "container py-16 md:py-20",
            sIdx > 0 && "border-t border-warm-brown/25"
          )}
        >
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-8">
            <div className="md:col-span-4">
              <SectionLabel as="p" className="mb-5">
                {`SECTION ${section.n} · ${section.name}`}
              </SectionLabel>
              <p className="font-display text-2xl font-light italic leading-snug text-deep-blue/80">
                {section.descriptor}
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <div className="border-t border-warm-brown/25">
                {section.items.map((item, iIdx) => {
                  const id = `fr-${section.n}-${iIdx + 1}`;
                  const triggerId = `${id}-trigger`;
                  const panelId = `${id}-panel`;
                  const open = openId === id;

                  return (
                    <div
                      key={id}
                      className="border-b border-warm-brown/25"
                    >
                      <h3 className="m-0">
                        <button
                          type="button"
                          id={triggerId}
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => setOpenId(open ? null : id)}
                          className="flex w-full items-start justify-between gap-6 py-6 text-left"
                        >
                          <span className="font-display text-xl font-medium leading-snug text-deep-blue md:text-2xl">
                            {item.question}
                          </span>
                          <ChevronDown
                            aria-hidden="true"
                            size={22}
                            className={cn(
                              "mt-1 shrink-0 text-warm-brown transition-transform duration-200 ease-out",
                              open && "rotate-180"
                            )}
                          />
                        </button>
                      </h3>

                      <div
                        className="grid transition-[grid-template-rows] duration-200 ease-out"
                        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                      >
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={triggerId}
                          inert={open ? undefined : true}
                          className="overflow-hidden"
                        >
                          <div className="pb-8">
                            <Answer nodes={item.answer} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
