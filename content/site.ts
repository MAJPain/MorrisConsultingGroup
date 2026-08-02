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
  { label: "The First Read", href: "/the-first-read" },
  { label: "Advisory", href: "/advisory" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

/** Home hero */
export const hero = {
  statement: "Lead the present. Shape the future.",
  lines: ["Lead the present.", "Shape the future."],
  scrollCue: "Scroll",
} as const;

/** Home — Section 01, The Firm */
export const intro = {
  label: "THE FIRM",
  number: "01",
  body: [
    "Morris Consulting Group is an executive advisory and coaching practice. We work with chief executives and boards of directors on the questions that decide the direction of an enterprise: performance, resilience, and the succession of leadership.",
    "We believe the people leading an enterprise, and the potential of the people they lead, are its most consequential resource. Our work is organized around that belief, and it requires deliberate interaction with leaders at every level responsible for turning the strategy into reality. We work with executive teams and boards on operationalizing the HR function so it delivers what the enterprise actually requires: leaders and teams equipped to produce the results the strategy assumes.",
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
  {
    number: "06",
    title: "Community & Youth Development",
    description:
      "Communities are shaped by the institutions that prepare their next generation. We advise the boards and executives of community and youth-serving enterprises on the direction, discipline, and durability of the work they carry.",
  },
];

/** Home — Founder feature */
export const founderFeature = {
  label: "THE FOUNDER",
  number: "03",
  body: [
    "His advisory work began in 2017 by word of mouth, and grew, on demand, into the firm as it operates today.",
    "He served twenty-two years as a U.S. Army officer, retiring at the rank of Colonel, and has since held senior executive roles across enterprises in the private and social sectors, including engagements with startup founders and the banking industry.",
    "He has sat where his clients sit, in uniform and out of it, and it is that seat perspective that shapes the firm's advisory work.",
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
      "An executive team reworking how it decides, meets, and holds itself to account, with counsel from the firm.",
  },
  {
    label: "SUCCESSION",
    description:
      "A founder-owned company preparing the orderly transition of its chief executive, with the firm advising the board and principal through it.",
  },
  {
    label: "HUMAN CAPITAL",
    description:
      "Advising an executive team and board on the deliberate investment in leadership depth and successor readiness, treated as a capital decision rather than a training expense.",
  },
  {
    label: "STRATEGIC CLARITY",
    description:
      "A senior leadership team resetting priorities ahead of a period of measured growth, in consultation with the firm.",
  },
  {
    label: "LEADERSHIP",
    description:
      "Working with an executive director and board on the character and cadence of leadership during an inflection in the enterprise.",
  },
  {
    label: "ALIGNMENT",
    description:
      "Advising a chief executive and senior team on the alignment between the strategy set at the top and the leaders responsible for producing it.",
  },
  {
    label: "RESILIENCE",
    description:
      "A board and chief executive preparing to steer the enterprise through a period of acute disruption, with the firm as counsel.",
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
