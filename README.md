# Morris Consulting Group

An editorial marketing site for **Morris Consulting Group LLC** — a boutique
advisory firm counseling chief executives and boards of directors on
governance, enterprise performance, and strategic leadership.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. The visual
language is restrained and editorial — large serif statements, monospace
metadata, asymmetric grids, and warm-brown accents on a bone-white page.

---

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> Fonts are loaded via `next/font/google`, so the first `dev` or `build` needs
> network access to fetch Cormorant Garamond, Inter Tight, and JetBrains Mono.

### Scripts

| Command         | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the dev server             |
| `npm run build` | Production build                 |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint with `eslint-config-next`   |

---

## Add the portraits

The founder headshot and (later) Dr. Kenya Dugger's portrait live in
`/public`. See [`public/README-IMAGES.md`](public/README-IMAGES.md).

- **`public/sheldon-morris.jpg`** — add the founder headshot provided with the
  brief. Used on the home founder feature and `/team`.
- **`public/kenya-dugger.jpg`** — add when the photograph is delivered.

Until a file is present, `<Portrait>` renders a **designed placeholder**
(bone-white panel, thin warm-brown frame, initials, `— PORTRAIT FORTHCOMING`)
— never a broken image — so the site looks intentional as it grows.

---

## Project structure

```
app/                       App Router routes
  layout.tsx               Root shell: fonts, navbar, footer, smooth scroll, cursor
  template.tsx             Route transition wrapper (brown wipe)
  page.tsx                 Home
  about/ advisory/ team/   Interior pages
  insights/                Essay index
  insights/[slug]/         Long-form essay layout
  contact/                 Contact form + firm info
  icon.svg  sitemap.ts  robots.ts
components/                Reusable UI (see below)
  ui/button.tsx            shadcn-style primitive, restyled
  home/                    Home-page sections
content/                   All editable copy & data (no JSX)
  site.ts about.ts advisory.ts team.ts insights.ts
lib/                       fonts, utils (cn), motion variants
public/                    Images
```

### Content is separated from components

All prose and structured data live in `content/*.ts` as typed modules. Edit
copy, practice areas, team members, or essays there without touching a
component. Essays are typed block arrays (`paragraph` / `heading` /
`pullquote`) rendered by `app/insights/[slug]/page.tsx`.

### Key components

`Navbar` · `Footer` · `Monogram` · `SectionLabel` · `RuleDivider` ·
`SplitSection` · `TeamMemberSection` · `Portrait` / `FramedPortrait` ·
`Marquee` · `ScrollReveal` · `RevealText` · `CustomCursor` · `Magnetic` ·
`PageTransition` · `ContactForm` · `ArrowLink` · `EssayCard` · `PageHeader`.

---

## Design system

### Color

| Token           | Hex       | Role                                            |
| --------------- | --------- | ----------------------------------------------- |
| `deep-blue`     | `#0B2545` | Anchor — hero, footer, navbar on scroll         |
| `midnight-blue` | `#13315C` | Secondary blue sections & gradients             |
| `warm-brown`    | `#8B5E3C` | The accent — CTAs, rules, underlines, monogram  |
| `soft-brown`    | `#B08968` | Lighter brown for hover & quiet accents         |
| `bone-white`    | `#F7F3EE` | Primary editorial background (warm paper)       |
| `pure-white`    | `#FFFFFF` | Cards & contrast panels                         |
| `ink`           | `#0A0A0A` | Body text on light                              |
| `fog`           | `#6B7280` | Muted labels, metadata, eyebrows                |

Roughly **60% white/bone · 30% blue · 10% brown**. Brown is only ever an
accent — never a background.

### Type

Loaded with `next/font/google`, exposed as CSS variables:

- **Cormorant Garamond** (`--font-display`) — display & all headings.
- **Inter Tight** (`--font-body`) — body copy, navigation, UI.
- **JetBrains Mono** (`--font-mono`) — section numbers, metadata, eyebrows.

Oversized headings use the fluid `text-editorial` clamp
(`clamp(2.5rem, 8vw, 9rem)`). Eyebrows are the `.eyebrow` utility — mono,
uppercase, `tracking-eyebrow` (0.2em), warm brown.

### Motion

Framer Motion + [Lenis](https://github.com/darkroomengineering/lenis) smooth
scroll. Headings reveal word-by-word with a clearing blur (`RevealText`);
blocks rise on entry (`ScrollReveal`); links draw a brown underline; buttons
and links have a subtle magnetic pull (`Magnetic`); routes transition with a
warm-brown wipe (`PageTransition`); a small brown dot replaces the cursor on
pointer devices (`CustomCursor`).

**Every animation respects `prefers-reduced-motion`** — reveals render
statically, the marquee freezes, smooth scroll and the custom cursor are
disabled, and route wipes are skipped.

### Accessibility

- Proper heading hierarchy (one `<h1>` per page) and landmark regions.
- Warm-brown `:focus-visible` rings throughout; a skip-to-content link.
- Portraits always carry alt text; decorative marks are `aria-hidden`.
- Responsive to 375px — headings stay large and serif, grids collapse, the
  marquee still scrolls.

---

## Notes

- **Contact form** is a front-end scaffold: it validates and shows a
  confirmation. Wire `handleSubmit` in `components/ContactForm.tsx` to a route
  handler or email service to actually deliver messages.
- **Team page** is built to grow: `content/team.ts` drives four slots (two
  named members, two reserved placeholders) through one `TeamMemberSection`
  framework. Add a member by filling in a slot — the layout adapts.
