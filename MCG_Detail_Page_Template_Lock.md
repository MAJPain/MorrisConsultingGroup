# MCG Practice Detail Page — Template Lock

The locked pattern for the four practice detail pages under
`/how-we-engage/*`. Community & Regional Banking Support is the working
example; the remaining three (Athletic Advising, Executive & Board Advisory,
Leader & Organization Development) inherit this structure exactly.

Reference implementation:
- Content: `content/community-and-regional-banking-support.ts`
- Page: `app/how-we-engage/community-and-regional-banking-support/page.tsx`

## Layout

- Header via the shared `PageHeader` (same as `/about`, `/how-we-engage`,
  `/team`): small-caps rail → dominant editorial-serif H1 → two-column
  subtitle area (italic warm-brown tagline left, body lede right).
- Every section uses the two-column editorial grid, identical to
  `/how-we-engage/working-with-us`:
  - `grid grid-cols-1 gap-y-8 md:grid-cols-12 md:gap-x-8`
  - Left (`md:col-span-4`): `<h2>` eyebrow rail (`— NAME`) + `RuleDivider`
    (`mt-5`) + italic warm-brown descriptor
    (`mt-6 max-w-xs font-display text-xl font-light italic text-warm-brown`).
  - Right (`md:col-span-7 md:col-start-6`), wrapped in `ScrollReveal`: body
    prose (`max-w-prose space-y-5 font-body text-lg leading-relaxed text-ink/80`).
- Cream background, deep-navy text, warm-brown rails/dividers — existing
  design tokens only. No hard-coded hex or font stacks.
- Sections are always expanded. No accordion, no in-page nav, no TOC/anchors.

## Six sections (fixed order, no additions or omissions)

1. **Overview** — two paragraphs.
2. **Who We Work With** — two paragraphs.
3. **The Engagements** — four engagement blocks, each an editorial-serif
   `<h3>` (`text-2xl`) + one descriptive paragraph. Inline practice links use
   the editorial style (`text-deep-blue underline decoration-warm-brown/50
   underline-offset-4`), never SaaS-blue.
4. **How We Work** — three paragraphs.
5. **Why MCG** — three paragraphs.
6. **Begin a Conversation** — one lead paragraph + CTA button (`ArrowLink`,
   uppercase label) to `/contact`.

Target length ≈ 1,350 words.

## Standards (every build and edit)

- **US vocabulary.** No _mandate_ (use scope/engagement), _conviction_ (use
  belief), _mission-driven_, _family-owned and founder-led_ (use privately
  held enterprises), _directorship_ (use director service / board seat),
  _unhurried_. US spelling throughout.
- **Voice consistency.** One voice per section: first-person-plural for what
  MCG does; third person (the partners) for biographical/credentialing.
- **No AI fingerprints.** Avoid two-or-more co-occurring: triple parallel
  abstract nouns, "not X but Y", aphoristic wrap-ups, 3+ em-dashes/paragraph,
  AI-signal vocab clusters.
- **No tier name-drops.** Name what MCG does, not the tier it operates at.

## Cross-page links

Detail pages that don't exist yet fall back to `/how-we-engage`, defined once
in a `ROUTES` map per content module. Repoint in that one place when the
target page is built.
