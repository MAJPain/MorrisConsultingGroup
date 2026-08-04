/**
 * Team roster. Each entry drives a <TeamMemberSection />.
 * `variant` controls editorial depth and placeholder behavior.
 */

export type TeamVariant = "full" | "standard" | "placeholder";

export type TeamMember = {
  slot: string; // "01"
  eyebrow: string; // "FOUNDER & SENIOR PARTNER"
  name: string | null; // null => reserved placeholder
  role: string;
  imagePath?: string; // rendered if the file exists, otherwise designed fallback
  imageAlt?: string;
  initials?: string; // used by the designed placeholder panel
  bio: string[];
  bioNote?: string; // italic closing note, e.g. "Full biography forthcoming."
  credentials?: string[]; // monospace list
  pullQuote?: string;
  linkedin?: string; // profile URL
  email?: string; // direct address; rendered as a mailto: link
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
    eyebrow: "FOUNDER & SENIOR PARTNER",
    name: "Sheldon Morris",
    role: "Founder & Senior Partner",
    imagePath: "/sheldon-morris.jpg",
    imageAlt: "Portrait of Sheldon Morris, Founder & Senior Partner of Morris Consulting Group.",
    initials: "SM",
    bio: [
      "Sheldon Morris is the founder and senior partner of Morris Consulting Group. He built the firm's advisory practice from client referrals beginning in 2017 and formalized it into the firm as it operates today.",
      "His twenty-two years as a U.S. Army officer included command of a training enterprise producing thousands of soldiers annually, senior advisory to the senior military officer of a sovereign nation's defense enterprise during active operations, and Chief of Staff for the Army's institutional authority on leader development. His sixteen years in senior executive and principal staff roles include chief operating officer, chief of staff, and senior advisor across the private, social, and banking sectors. Together, these positions gave him a direct view of how large organizations set direction and execute, and that perspective is the source of the counsel he brings to clients.",
      "He earned a Master of Arts and Science from the U.S. Army Command and General Staff College. His counsel is direct and practical, and he works with leaders on how decisions get made, on the alignment between authority and responsibility across the organization, on translating strategic intent into shared understanding across it, and on the investment in people that determines what the organization achieves and becomes.",
    ],
    credentials: [
      "U.S. ARMY / COLONEL (RET.) / 22 YEARS",
      "CERTIFIED COMMUNITY BANK DIRECTOR",
      "COURT APPOINTED SPECIAL ADVOCATES (CASA) / BOARD MEMBER",
    ],
    pullQuote:
      "Enterprise performance is inseparable from the character of leadership.",
    linkedin: "https://www.linkedin.com/in/sheldon-morris/",
    email: "smorris@morrisconsultinggroup.org",
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
    linkedin: "https://www.linkedin.com/in/kenya-dugger/",
    email: "kdugger@morrisconsultinggroup.org",
    variant: "standard",
  },
  {
    slot: "03",
    eyebrow: "PARTNER",
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
