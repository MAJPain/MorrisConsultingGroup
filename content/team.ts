/**
 * Team roster. Each entry drives a <TeamMemberSection />.
 * `variant` controls editorial depth and placeholder behavior.
 */

export type TeamVariant = "full" | "standard" | "placeholder";

export type TeamMember = {
  slot: string; // "01"
  eyebrow: string; // "FOUNDER & PRINCIPAL"
  name: string | null; // null => reserved placeholder
  role: string;
  imagePath?: string; // rendered if the file exists, otherwise designed fallback
  imageAlt?: string;
  initials?: string; // used by the designed placeholder panel
  bio: string[];
  bioNote?: string; // italic closing note, e.g. "Full biography forthcoming."
  credentials?: string[]; // monospace list
  pullQuote?: string;
  variant: TeamVariant;
};

export const teamHeader = {
  eyebrow: "THE TEAM",
  title: "The people behind the practice.",
  subtitle: "A small, deliberate roster.",
} as const;

export const team: TeamMember[] = [
  {
    slot: "01",
    eyebrow: "FOUNDER & PRINCIPAL",
    name: "Sheldon Morris",
    role: "Founder & Principal",
    imagePath: "/sheldon-morris.jpg",
    imageAlt: "Portrait of Sheldon Morris, Founder & Principal of Morris Consulting Group.",
    initials: "SM",
    bio: [
      "Sheldon Morris founded Morris Consulting Group in 2017 and serves as its principal. The firm counsels chief executives, boards of directors, and the senior leaders around them on governance, enterprise performance, and executive succession. Its engagements are private and selective, taken on where the direction of an organization is genuinely at stake.",
      "He has held high-stakes leadership positions at home and abroad, alongside allies and partners. His sixteen years in executive leadership include roles as chief operating officer, chief of staff, and senior advisor, guiding leaders across the nonprofit, for-profit, and banking sectors.",
      "His counsel is direct and practical. He works with leaders on how decisions get made and how executives are held to account, and he expects leaders at every level to invest in their people's potential early and often. That is how an organization prepares the leadership that follows.",
    ],
    credentials: [
      "U.S. ARMY / COLONEL (RET.) / 22 YEARS",
      "CERTIFIED COMMUNITY BANK DIRECTOR",
      "COURT APPOINTED SPECIAL ADVOCATES (CASA) / BOARD MEMBER",
    ],
    pullQuote:
      "Enterprise performance is inseparable from the character of leadership.",
    variant: "full",
  },
  {
    slot: "02",
    eyebrow: "MANAGING PARTNER & CHIEF PEOPLE & CULTURE OFFICER",
    name: "Dr. Kenya Dugger",
    role: "Managing Partner & Chief People & Culture Officer",
    imagePath: "/kenya-dugger.jpg",
    imageAlt:
      "Portrait of Dr. Kenya Dugger, Managing Partner & Chief People & Culture Officer.",
    initials: "KD",
    bio: [
      "Dr. Kenya Dugger is Managing Partner of Morris Consulting Group and its Chief People & Culture Officer. He leads the firm's work at the intersection of organizational culture, executive development, and human capital strategy — the disciplines that determine whether sound strategy is actually carried out.",
      "His counsel helps leadership teams build the culture, capability, and continuity an institution needs to endure, in service of the firm's conviction that performance follows the character of its people. Full biography forthcoming.",
    ],
    bioNote: "Full biography forthcoming.",
    credentials: [
      "MANAGING PARTNER / MORRIS CONSULTING GROUP",
      "CHIEF PEOPLE & CULTURE OFFICER",
      "[CREDENTIALS FORTHCOMING]",
    ],
    variant: "standard",
  },
  {
    slot: "03",
    eyebrow: "TEAM MEMBER",
    name: null,
    role: "To be announced",
    bio: ["The firm is growing deliberately. This chair is reserved."],
    variant: "placeholder",
  },
  {
    slot: "04",
    eyebrow: "TEAM MEMBER",
    name: null,
    role: "To be announced",
    bio: ["The firm is growing deliberately. This chair is reserved."],
    variant: "placeholder",
  },
];

export const teamCta = {
  eyebrow: "JOIN THE PRACTICE",
  headline: "Interested in advising alongside us?",
  body: "Morris Consulting Group considers new partners selectively. When a chair opens, it is filled with care rather than haste — for fit, for judgment, and for the standards our clients rely upon.",
  cta: { label: "Begin a conversation", href: "/contact" },
} as const;
