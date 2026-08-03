/**
 * Copy for the /how-we-engage page — the anchor page for MCG's practice
 * architecture. Header uses the shared PageHeader pattern; the positioning
 * section and the four practice blocks use the site's editorial multi-column
 * layout (About two-column sections; Advisory three-column practice blocks).
 * Paragraph nodes are arrays so the inline practice-page links render while the
 * prose stays verbatim.
 */

export type HweInline = string | { text: string; href: string };

export type HwePractice = {
  name: string;
  descriptor: string;
  body: HweInline[][]; // middle-column paragraphs, each an array of inline nodes
  engagements: string[]; // right-column bulleted list
};

export type HweGroup = {
  rail: string;
  descriptor: string;
  practices: HwePractice[];
};

/**
 * Practice detail pages do not exist in this codebase yet; `/how-we-engage`
 * is the live fallback, so each resolves there until the dedicated route is
 * created. `workingWithUs` is a live page. Change these in one place if the
 * detail pages are added later.
 */
const ROUTES = {
  executiveAndBoardAdvisory: "/how-we-engage", // → /how-we-engage/executive-and-board-advisory
  leaderAndOrgDevelopment: "/how-we-engage", // → /how-we-engage/leader-and-organization-development
  communityAndRegionalBanking: "/how-we-engage/community-and-regional-banking-support",
  athleticAdvising: "/how-we-engage", // → /how-we-engage/athletic-advising
  workingWithUs: "/how-we-engage/working-with-us",
} as const;

export const hweHeader = {
  eyebrow: "HOW WE ENGAGE",
  title: "How we engage.",
  subtitle: "Four practices, one architecture.",
  lede: "The practice architecture that guides every engagement.",
} as const;

export const hwePositioning = {
  rail: "THE PRACTICE",
  body: [
    "Morris Consulting Group is an executive advisory and coaching practice organized around four practices — two core practice groups that serve chief executives and boards across every sector we work with, and two signature practices where regulatory frameworks or sector-specific requirements reward specialization.",
    "Our clients lead nonprofits and foundations, higher education, privately held enterprises, health systems, public-sector agencies, community banks, and athletic organizations. We work primarily with chief executives and boards, and with the leaders coming up behind them who will run the enterprise next.",
  ],
} as const;

export const hweGroups: HweGroup[] = [
  {
    rail: "CORE PRACTICES",
    descriptor: "For chief executives and boards, across every sector.",
    practices: [
      {
        name: "Executive & Board Advisory",
        descriptor: "Advisory to CEOs and boards on decisions that matter.",
        body: [
          [
            "For chief executives and boards, on the decisions that matter most. See the ",
            {
              text: "Executive & Board Advisory",
              href: ROUTES.executiveAndBoardAdvisory,
            },
            " page for the deeper picture.",
          ],
        ],
        engagements: [
          "CEO advisory retainers",
          "Board advisory and chair support",
          "Board effectiveness and culture reviews",
          "Enterprise performance and culture diagnostics",
          "Executive succession",
        ],
      },
      {
        name: "Leader & Organization Development",
        descriptor: "Coaching and development for people who lead.",
        body: [
          [
            "For individuals, teams, and organizations building leader depth on the human side of performance. See the ",
            {
              text: "Leader & Organization Development",
              href: ROUTES.leaderAndOrgDevelopment,
            },
            " page for the deeper picture.",
          ],
        ],
        engagements: [
          "Individual executive coaching",
          "Senior leader development",
          "Executive team development",
          "Leadership cohort programs",
          "Talent and culture programs",
        ],
      },
    ],
  },
  {
    rail: "SIGNATURE PRACTICES",
    descriptor:
      "Specialized practices where regulatory or sector-specific requirements reward depth.",
    practices: [
      {
        name: "Community & Regional Banking Support",
        descriptor: "Director service to community and regional banks.",
        body: [
          [
            "For US community and regional bank boards, on independent director service and the fiduciary and regulatory frameworks these boards navigate. See the ",
            {
              text: "Community & Regional Banking Support",
              href: ROUTES.communityAndRegionalBanking,
            },
            " page for the deeper picture.",
          ],
        ],
        engagements: [
          "Independent director service",
          "Board effectiveness reviews",
          "Committee charter development",
          "Regulatory governance preparation",
          "Director development",
        ],
      },
      {
        name: "Athletic Advising",
        descriptor: "Whole-person development for student-athletes and families.",
        body: [
          [
            "A specialized practice for educational institutions investing in the whole-person development of their student-athletes and families. Also engaged by families directly when circumstances allow.",
          ],
          [
            "The practice draws on our partners' lived experience competing at the collegiate level and launching athletic ventures, and on twenty-two years each of developing young adults at institutional scale — applying the same coaching methodology MCG uses with chief executives to the formative years that shape who these student-athletes become.",
          ],
          [
            "See the ",
            { text: "Athletic Advising", href: ROUTES.athleticAdvising },
            " page for the deeper picture.",
          ],
        ],
        engagements: [
          "Post-athletic career transition",
          "Navigating life as a student-athlete",
          "Culture and respect coaching",
        ],
      },
    ],
  },
];

export const hweBridge: HweInline[] = [
  "Whether the work fits a core practice or a signature practice, every engagement runs on the same principles — private, partner-led, and calibrated to the specific work. See the ",
  { text: "Working With Us", href: ROUTES.workingWithUs },
  " page for how engagements begin and how we operate.",
];

export const hweFooter = {
  cta: { label: "Begin a conversation", href: "/contact" },
} as const;
