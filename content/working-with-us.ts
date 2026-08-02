/**
 * Copy for the /how-we-engage/working-with-us page — the operational drill-down
 * for how engagements are structured, priced, and governed. Sections are always
 * expanded (no accordion). Paragraphs are node arrays so the few inline links
 * and serif strong-labels render while the prose stays verbatim.
 */

export type WwuInline =
  | string
  | { text: string; href: string }
  | { strong: string };

export type WwuSection = {
  n: number;
  name: string;
  descriptor: string; // italic serif line under the section rail
  body: WwuInline[][]; // paragraphs, each an array of inline nodes
};

export const wwuHeader = {
  eyebrow: "WORKING WITH US",
  title: "Working with us.",
  subtitle: "Engagement, in plain terms.",
  lede: "How engagements begin, what they include, and how we operate.",
} as const;

export const wwuSections: WwuSection[] = [
  {
    n: 1,
    name: "BEGINNING AN ENGAGEMENT",
    descriptor: "How we agree to work together.",
    body: [
      [
        "Every engagement begins with a private conversation. Reach out through the ",
        { text: "Contact", href: "/contact" },
        " page or directly to either partner.",
      ],
      [
        "The first conversation is confidential and without cost. We use it to build a shared understanding of what you aim to accomplish and to assess whether we are the right fit for the situation. If we are not the right firm, we say so.",
      ],
      [
        "Once fit is established, we scope the engagement in writing. The scope names the specific work, the timeline, the fee structure, and the terms — including confidentiality — that will govern the engagement. Work begins only after the engagement letter is signed.",
      ],
    ],
  },
  {
    n: 2,
    name: "STRUCTURE AND DELIVERY",
    descriptor: "Two structures. One delivery model.",
    body: [
      ["MCG offers two engagement structures."],
      [
        { strong: "Discrete engagements" },
        " are scoped around a specific piece of work — a board effectiveness review, an executive succession advisory, a governance diagnostic, or a similarly defined engagement. These typically run three to nine months from scope to completion.",
      ],
      [
        { strong: "Advisory retainers" },
        " support chief executives and boards on an ongoing basis. Retainers are structured around regular working sessions, on-call access to the partners, and quarterly review points where the retainer is assessed against what the client needs going forward.",
      ],
      [
        "Both partners share responsibility for every engagement. One partner leads delivery as the primary advisor; the other engages where the work specifically calls for it. This calibration allows the engagement to draw on both the strategic and human dimensions of the practice without requiring both partners at every conversation.",
      ],
    ],
  },
  {
    n: 3,
    name: "FEES AND PRICING",
    descriptor: "How we price. What we're compensated for.",
    body: [
      [
        "Fees are discussed during scoping and set in writing before work begins.",
      ],
      [
        "Engagements are priced on retainer, fixed-fee, or blended terms. Retainer works for ongoing advisory relationships. Fixed-fee works for discrete engagements with a defined scope and timeline. Blended terms combine both — a fixed fee for the discrete engagement plus a smaller ongoing retainer for continued support after the engagement concludes.",
      ],
      [
        "Pricing is calibrated to scope, complexity, timeline, and sector. Nonprofit, higher education, and public-sector engagements are priced differently from corporate engagements. The work is often equivalent in complexity; we calibrate fees to the sector's reality.",
      ],
      [
        "We are compensated for the counsel, coaching, and support we provide — the work of helping clients see their situation clearly, align their leadership around their desired outcomes, and move with discipline toward them. This is what the engagement letter names, and what our invoices reflect.",
      ],
    ],
  },
  {
    n: 4,
    name: "OUR COMPENSATION POSITION",
    descriptor: "Why we decline contingent fees.",
    body: [
      [
        "MCG accepts no equity, no success fees, and no contingent compensation.",
      ],
      [
        "Our independence is the value we offer. Contingent compensation would create a conflict of interest we are unwilling to carry. Advisory work at the CEO and board level requires the ability to counsel clients honestly on decisions they may not want to hear; a financial stake in outcomes would compromise that independence.",
      ],
    ],
  },
  {
    n: 5,
    name: "TRAVEL AND EXPENSES",
    descriptor: "Actual, reasonable, at cost.",
    body: [
      [
        "When an engagement requires travel to the client's location, we bill actual, reasonable expenses at cost. No markup. No administrative fee.",
      ],
      [
        "Mileage is billed at the current IRS standard business rate. Lodging and meals are billed at reasonable market rates for the city of travel. Travel beyond a routine day trip is discussed and approved before it is booked.",
      ],
      [
        "All expenses are itemized on the invoice. Local meetings and remote sessions carry no travel expenses.",
      ],
    ],
  },
  {
    n: 6,
    name: "CONFIDENTIALITY",
    descriptor: "The condition of the work.",
    body: [
      ["Confidentiality is the condition of the work, not a policy."],
      [
        "Every engagement operates under written confidentiality. This is set in the engagement letter and governs everything from the substance of the work to the fact of the engagement itself. We do not disclose client relationships without express written permission.",
      ],
      [
        "Case studies are anonymized to protect client and institution. Where an engagement involves individual coaching, confidentiality between coach and coachee is absolute; where an organizational sponsor is involved, we agree upfront on how goals and progress reviews will be shared.",
      ],
      ["Much of what we do never leaves the conversation it happens in."],
    ],
  },
];

export const wwuFooter = {
  line: [
    "To begin a conversation, reach out through the ",
    { text: "Contact", href: "/contact" },
    " page or directly to either partner. Every engagement begins in confidence.",
  ] as WwuInline[],
  cta: { label: "Begin a conversation", href: "/contact" },
} as const;
