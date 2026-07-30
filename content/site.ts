/**
 * Site-wide copy and structured content for Morris Consulting Group.
 * Edit here — components read from these exports.
 */

/**
 * Web3Forms access key for the contact form. This value is PUBLIC by design —
 * it is embedded in the client bundle and only permits sending mail to the
 * inbox it is registered to (it exposes no data and grants no other access).
 * Safe to commit. To rotate it, generate a new key at https://web3forms.com
 * and replace the string below. An optional NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
 * environment variable overrides this value if set.
 */
export const contactFormAccessKey = "fe6d7419-cff7-4f91-978d-d67885288b13";

export const firm = {
  name: "Morris Consulting Group",
  shortName: "MCG",
  legalName: "Morris Consulting Group LLC",
  established: "2017",
  location: "Oxford, Mississippi",
  locationShort: "Oxford, MS",
  tagline: "Lead the present. Shape the future.",
  email: "inquiries@morrisconsultinggroup.org",
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
  statement: "Lead the present. Shape the future.",
  scrollCue: "Scroll",
} as const;

/** Home — Section 01, The Firm */
export const intro = {
  label: "THE FIRM",
  number: "01",
  body: [
    "Morris Consulting Group is an executive advisory and coaching practice. We work with a small number of chief executives and boards of directors on the questions that decide the direction of an enterprise: performance, resilience, and the succession of leadership.",
    "Our engagements are private and unhurried. We are retained not for volume but for judgment: a considered second read on the decisions that matter most, offered by advisors who have sat where our clients sit.",
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
    title: "Operating Effectiveness",
    description:
      "A capable strategy still depends on how a leadership team runs. We work with the executive team on how it decides, where authority sits, and the operating cadence that turns intent into results.",
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
      "Leadership transitions are the truest test of an institution. We advise executives and boards through succession with the care it deserves, well before the need becomes urgent.",
  },
  {
    number: "04",
    title: "Organizational Leadership",
    description:
      "Performance follows character. We advise on the culture, cadence, and human judgment that turn a capable organization into a durable one.",
  },
  {
    number: "05",
    title: "Resilience & Crisis Leadership",
    description:
      "The true test of leadership is how an organization holds under strain. We help leaders prepare for disruption before it arrives and steady the enterprise through it, so a crisis tests the institution without defining it.",
  },
];

/** Home — Founder feature */
export const founderFeature = {
  label: "THE PRINCIPAL",
  number: "03",
  body: [
    "Morris Consulting Group was founded by Sheldon Morris, who brings sixteen years in senior executive and critical staff roles to the firm's advisory work.",
    "His perspective is shaped by that experience across the nonprofit, for-profit, and banking sectors, and by a conviction that enterprise performance is inseparable from the character of leadership.",
  ],
  cta: { label: "Meet the Team", href: "/team" },
} as const;

/** Marquee strip */
export const marqueeItems: string[] = [
  "OPERATING EFFECTIVENESS",
  "ENTERPRISE PERFORMANCE",
  "EXECUTIVE SUCCESSION",
  "ORGANIZATIONAL LEADERSHIP",
  "RESILIENCE",
  "STRATEGY",
];

export type Engagement = {
  label: string;
  description: string;
};

export const engagements: Engagement[] = [
  {
    label: "OPERATING MODEL",
    description:
      "Reworking how a leadership team decides, meets, and holds itself to account.",
  },
  {
    label: "SUCCESSION",
    description:
      "Advising a founder-led enterprise preparing the orderly transition of its chief executive.",
  },
  {
    label: "STRATEGIC CLARITY",
    description:
      "Advisory to a leadership team resetting priorities ahead of a period of measured growth.",
  },
  {
    label: "RESILIENCE",
    description:
      "Preparing a leadership team to steer through a period of acute disruption.",
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
  tagline: "Lead the present. Shape the future.",
  colophon: "Set in Newsreader and Inter Tight.",
  sitemap: [...nav, contactNav],
} as const;
