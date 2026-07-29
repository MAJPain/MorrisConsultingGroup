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
      "Sheldon Morris is the founder and principal of Morris Consulting Group, a boutique advisory practice serving chief executives and boards of directors. He established the firm in 2017 after a twenty-two-year career as an officer in the United States Army, retiring at the rank of Colonel.",
      "His counsel is shaped by two decades of command experience, a discipline for governance, and a conviction that enterprise performance is inseparable from the character of leadership. He advises clients on board effectiveness, executive succession, strategic clarity, and the quiet work of building institutions that endure.",
      "Sheldon lives and works in Oxford, Mississippi.",
    ],
    credentials: [
      "U.S. ARMY / COLONEL (RET.) / 22 YEARS",
      "FOUNDER & PRINCIPAL / MORRIS CONSULTING GROUP / EST. 2017",
      "CERTIFIED COMMUNITY BANK DIRECTOR",
      "OLE MISS ALUMNI ASSOCIATION / BOARD MEMBER",
      "BASED IN OXFORD, MISSISSIPPI",
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
