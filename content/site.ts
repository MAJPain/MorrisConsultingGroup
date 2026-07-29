/**
 * Site-wide copy and structured content for Morris Consulting Group.
 * Edit here — components read from these exports.
 */

export const firm = {
  name: "Morris Consulting Group",
  shortName: "MCG",
  legalName: "Morris Consulting Group LLC",
  established: "2017",
  location: "Oxford, Mississippi",
  locationShort: "Oxford, MS",
  tagline: "Counsel for leaders navigating what comes next.",
  email: "inquiries@morrisconsultinggroup.com",
  phone: "",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Advisory", href: "/advisory" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

/** Home hero */
export const hero = {
  eyebrow: "— MORRIS CONSULTING GROUP / EST. 2017 / OXFORD, MS",
  statement: "Counsel for leaders navigating what comes next.",
  scrollCue: "Scroll",
} as const;

/** Home — Section 01, The Firm */
export const intro = {
  label: "THE FIRM",
  number: "01",
  body: [
    "Morris Consulting Group is a boutique advisory practice. We work with a small number of chief executives and boards of directors on the questions that decide the direction of an enterprise — governance, performance, and the succession of leadership.",
    "Our engagements are private and unhurried. We are retained not for volume but for judgment: a considered second read on the decisions that matter most, offered by counsel who has sat where our clients sit.",
  ],
} as const;

export type PracticeArea = {
  number: string;
  title: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    title: "Board Governance & Effectiveness",
    description:
      "We help boards see themselves clearly — how they deliberate, where authority sits, and whether their structure serves the enterprise. The work is candid, and it is confidential.",
  },
  {
    number: "02",
    title: "Enterprise Performance & Strategy",
    description:
      "Strategy is only as sound as the discipline behind it. We work alongside leadership to sharpen priorities, align resources, and hold the organization to the standard it has set for itself.",
  },
  {
    number: "03",
    title: "Executive Advisory & Succession",
    description:
      "Leadership transitions are the truest test of an institution. We counsel executives and boards through succession with the care it deserves — quietly, and well before the need becomes urgent.",
  },
  {
    number: "04",
    title: "Organizational Leadership",
    description:
      "Performance follows character. We advise on the culture, cadence, and human judgment that turn a capable organization into a durable one.",
  },
];

/** Home — Founder feature */
export const founderFeature = {
  label: "THE PRINCIPAL",
  number: "03",
  body: [
    "Morris Consulting Group was founded in 2017 by Sheldon Morris, following a twenty-two-year career as an officer in the United States Army, from which he retired at the rank of Colonel.",
    "His counsel is shaped by two decades of command, a discipline for governance, and a conviction that enterprise performance is inseparable from the character of leadership.",
  ],
  cta: { label: "Meet the Team", href: "/team" },
} as const;

/** Marquee strip */
export const marqueeItems: string[] = [
  "GOVERNANCE",
  "ENTERPRISE PERFORMANCE",
  "BOARD EFFECTIVENESS",
  "EXECUTIVE ADVISORY",
  "LEADERSHIP",
  "STRATEGY",
];

export type Engagement = {
  label: string;
  description: string;
};

export const engagements: Engagement[] = [
  {
    label: "BOARD REVIEW",
    description:
      "A confidential effectiveness review for the board of a regional financial institution.",
  },
  {
    label: "SUCCESSION",
    description:
      "Counsel to a founder-led enterprise preparing the orderly transition of its chief executive.",
  },
  {
    label: "STRATEGIC CLARITY",
    description:
      "Advisory to a leadership team resetting priorities ahead of a period of measured growth.",
  },
  {
    label: "GOVERNANCE DESIGN",
    description:
      "Structuring the governance framework of a newly independent institution and its first board.",
  },
];

/** Home — Contact CTA */
export const contactCta = {
  headline: "Begin a conversation.",
  body: "Engagements begin with a private conversation. If the questions before your enterprise warrant a considered outside read, we would be glad to hear from you.",
  cta: { label: "Contact the firm", href: "/contact" },
} as const;

/** Footer */
export const footer = {
  tagline: "Counsel for leaders navigating what comes next.",
  colophon:
    "Set in Cormorant Garamond, Inter Tight, and JetBrains Mono.",
  sitemap: [...nav, contactNav],
} as const;
