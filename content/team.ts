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
      "Sheldon Morris founded Morris Consulting Group and serves as its principal. The firm advises and coaches chief executives, boards of directors, and the senior leaders around them on strategy, operating effectiveness, and executive succession. Its engagements are private and selective, taken on where the direction of an organization is genuinely at stake.",
      "His sixteen years in senior executive and critical staff roles include chief operating officer, chief of staff, and senior advisor, across the nonprofit, for-profit, and banking sectors, at home and abroad. Those positions gave him a direct view of how large organizations set direction and execute, and that perspective is the source of the advice he brings to clients.",
      "His counsel is direct and practical. He works with leaders on how decisions get made and how executives are held to account, and he expects leaders at every level to invest in their people's potential early and often. That is how an organization prepares the leadership that follows. He earned a Master of Arts and Science from the U.S. Army Command and General Staff College.",
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
      "Dr. Kenya Dugger is a global executive in people and organizational culture. He leads the firm's work on the human side of performance: how organizations recruit, develop, and retain the talent their strategy depends on.",
      "He has served as a Vice President and Chief Diversity Officer across the public and private sectors, with a career spanning human resources, organizational culture, and diversity, equity, and inclusion. His focus has been talent acquisition, leadership development, and building inclusive workplaces where talent advances.",
      "He holds a doctorate in Organizational Leadership, teaches as an adjunct professor, and serves on doctoral dissertation committees. He has been featured on U.S. and international podcasts and panels, often on how collectivism and individualism shape inclusion, and he has been recognized among the Top 100 International Diversity Experts.",
    ],
    credentials: [
      "U.S. ARMY / SERGEANT MAJOR (RET.) / 22 YEARS",
      "LECTURER / GEORGE WASHINGTON & CORNELL UNIVERSITIES",
      "KEYNOTE SPEAKER / BOARD MEMBER",
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
