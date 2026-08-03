/**
 * Copy for the /the-first-read page (the renamed FAQ).
 *
 * Answers are authored as an ordered array of nodes so that page-name mentions
 * render as inline links while the surrounding prose stays verbatim. A plain
 * string is text; an object is a link.
 */

export type AnswerNode = string | { text: string; href: string };

export type FirstReadItem = {
  question: string;
  answer: AnswerNode[];
};

export type FirstReadSection = {
  n: number;
  name: string;
  descriptor: string;
  items: FirstReadItem[];
};

/**
 * Cross-page link targets. All four practice detail pages and Working With Us
 * are live; `ourApproach` falls back to `/how-we-engage` until its dedicated
 * page exists. Change these in one place if that page is added later.
 */
const ROUTES = {
  about: "/about",
  team: "/team",
  contact: "/contact",
  howWeEngage: "/how-we-engage",
  ourApproach: "/how-we-engage",
  workingWithUs: "/how-we-engage/working-with-us",
  communityBanking: "/how-we-engage/community-and-regional-banking-support",
  athleticAdvising: "/how-we-engage/athletic-advising",
  leaderOrgDev: "/how-we-engage/leader-and-organization-development",
} as const;

export const firstReadHeader = {
  rail: "THE FIRST READ",
  title: "The first read.",
  subtitle:
    "Common questions about MCG's practice, with pointers to where each is described in fuller detail across the site.",
} as const;

export const firstReadFooter = {
  line: "If your question is not here, reach out. Every conversation begins in confidence.",
  cta: { label: "Begin a conversation", href: ROUTES.contact },
} as const;

export const firstReadSections: FirstReadSection[] = [
  {
    n: 1,
    name: "ABOUT MCG",
    descriptor: "Who we are and how we differ.",
    items: [
      {
        question: "What is Morris Consulting Group?",
        answer: [
          "Morris Consulting Group is an executive advisory and coaching practice, led by Sheldon Morris and Dr. Kenya Dugger. We work with chief executives and boards on the decisions that shape enterprise character, and with the leaders and teams responsible for translating those decisions into operational reality. The ",
          { text: "About", href: ROUTES.about },
          " page carries the fuller story of the firm.",
        ],
      },
      {
        question: "How do you differ from a management consulting firm?",
        answer: [
          "Management consultants produce strategy documents and implementation plans. Our work sits closer to the chief executive's chair, and we flex from strategy through execution as the engagement requires — from the concept of what to do to the reality of getting it done. We are retained for counsel and coaching, not for frameworks or consultant teams; every engagement is principal-led by design. The Philosophy section on the ",
          { text: "About", href: ROUTES.about },
          " page describes how we think about this work.",
        ],
      },
      {
        question: "Why is MCG a two-partner firm?",
        answer: [
          "Because at this level, counsel and coaching require senior practitioners. Both partners retired from twenty-two-year Army careers that included senior executive and principal staff roles, and carried that experience directly into civilian leadership. Together the partners lead both the strategic and human sides of every engagement. The two-partner roster is the design, not the stage before growth. Their full backgrounds sit on the ",
          { text: "Team", href: ROUTES.team },
          " page.",
        ],
      },
    ],
  },
  {
    n: 2,
    name: "WHO WE SERVE",
    descriptor: "The organizations we work with, and the ones we do not.",
    items: [
      {
        question: "What kinds of organizations do you work with?",
        answer: [
          "Our clients lead nonprofits and foundations, higher education, privately held enterprises, health systems, public-sector agencies, community banks, and athletic organizations. We work primarily with chief executives and boards, and with the leaders coming up behind them who will run the enterprise next. The ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page describes the practice architecture in fuller detail.",
        ],
      },
      {
        question: "What services do you not provide?",
        answer: [
          "MCG's practice does not include legal, tax, audit, or investment advice, executive search, interim executive placement, or operational program implementation. Where an engagement calls for one of these, we work alongside qualified counsel and firms as partners. What we do offer is described on the ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page.",
        ],
      },
      {
        question:
          "Do you work with nonprofit and public-sector organizations?",
        answer: [
          "Yes. Both partners have served at senior levels within nonprofit organizations and on nonprofit boards, and in public-sector leadership. We work with these organizations under the same principles that guide every engagement — the executive team and the board alike. The ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page shows how the practice extends to your sector.",
        ],
      },
    ],
  },
  {
    n: 3,
    name: "HOW ENGAGEMENTS RUN",
    descriptor: "What happens inside an engagement.",
    items: [
      {
        question: "What does an engagement typically look like?",
        answer: [
          "Every engagement begins with a confidential scoping conversation, then moves into a defined engagement scoped around the specific work. Both partners share responsibility; one leads delivery as the primary advisor, the other engages where the work calls for it. The ",
          { text: "Our Approach", href: ROUTES.ourApproach },
          " page describes the seven stages in detail.",
        ],
      },
      {
        question: "How do you handle confidentiality?",
        answer: [
          "Confidentiality is the condition of the work, not a policy. Every engagement operates under written confidentiality. Case studies are anonymized to protect client and institution. We do not disclose client relationships without express written permission. Much of what we do never leaves the conversation it happens in. See the ",
          { text: "Working With Us", href: ROUTES.workingWithUs },
          " page for the specific terms.",
        ],
      },
      {
        question: "How long does an engagement typically take?",
        answer: [
          "Discrete engagements — a board effectiveness review, a governance diagnostic, an executive succession advisory — typically run three to nine months. Advisory retainers to chief executives and board chairs are ongoing with quarterly review points. The length of an engagement is set by the scope of work, not by billable hours. See the ",
          { text: "Working With Us", href: ROUTES.workingWithUs },
          " page for detail on engagement structures.",
        ],
      },
      {
        question: "Do you offer individual executive coaching?",
        answer: [
          "Yes. Individual executive coaching sits within our ",
          { text: "Leader & Organization Development", href: ROUTES.leaderOrgDev },
          " practice and is delivered by one of the partners. Engagements typically run six to twelve months at a bi-weekly cadence, with confidentiality between coach and coachee absolute and any sponsor arrangement agreed upfront. The ",
          { text: "Leader & Organization Development", href: ROUTES.leaderOrgDev },
          " page describes the practice in detail.",
        ],
      },
    ],
  },
  {
    n: 4,
    name: "OUR SIGNATURE PRACTICES",
    descriptor: "Community and regional banking, and athletic advising.",
    items: [
      {
        question: "What is your Community & Regional Banking Support practice?",
        answer: [
          "A specialty practice centered on independent director service for US community and regional bank boards. We bring the objective oversight, constructive challenge, and commercial judgment these boards require to navigate their fiduciary duties and the sector's regulatory frameworks. For the deeper picture, see the ",
          { text: "Community & Regional Banking Support", href: ROUTES.communityBanking },
          " practice page.",
        ],
      },
      {
        question: "What does Athletic Advising cover?",
        answer: [
          "A sector practice serving athletic organizations from collegiate through high school and youth development. Our partners have competed at the collegiate level and launched athletic ventures, so we understand the pressures on today's athletes, coaches, and boards — and we work to enable the leaders responsible for them. For the deeper picture, see the ",
          { text: "Athletic Advising", href: ROUTES.athleticAdvising },
          " practice page.",
        ],
      },
      {
        question: "Do you serve boards outside your signature practices?",
        answer: [
          "Yes. Our core practices — Executive & Board Advisory and ",
          { text: "Leader & Organization Development", href: ROUTES.leaderOrgDev },
          " — are how we serve chief executives and boards across every sector we work with, from nonprofits and higher education to privately held enterprises and health systems. The signature practices sit alongside the core, existing because community and regional banking and athletic advising each carry regulatory frameworks or sector-specific requirements that reward specialization. See the ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page for the full practice architecture.",
        ],
      },
    ],
  },
  {
    n: 5,
    name: "STARTING A CONVERSATION",
    descriptor: "Fees, terms, travel, and how to reach us.",
    items: [
      {
        question: "How do I engage your services?",
        answer: [
          "Every engagement begins with a private conversation. Reach out through the ",
          { text: "Contact", href: ROUTES.contact },
          " page or directly to either partner. We assess fit first — whether we are the right fit for the situation — before discussing scope. If we are not the right firm, we say so.",
        ],
      },
      {
        question: "What are your fees, and how are engagements priced?",
        answer: [
          "Fees are discussed during scoping and set in writing before work begins. Engagements are priced on retainer, fixed-fee, or blended terms depending on the scope; the ",
          { text: "Working With Us", href: ROUTES.workingWithUs },
          " page describes the structure and our principles around it. We are compensated for the counsel, coaching, and support we provide — the work of helping clients see their situation clearly, align their leadership around their desired outcomes, and move with discipline toward them.",
        ],
      },
      {
        question:
          "Do you take equity, success fees, or contingent compensation?",
        answer: [
          "No. We accept no equity, no success fees, and no contingent compensation. Outcomes depend on client execution, market conditions, and events outside anyone's control; tying our compensation to them would compromise the counsel we provide. Our independence is what allows us to say what we actually think. The ",
          { text: "Working With Us", href: ROUTES.workingWithUs },
          " page carries our full commercial position.",
        ],
      },
      {
        question: "Do you charge for travel, and how are expenses handled?",
        answer: [
          "When an engagement requires travel to the client's location, we bill actual, reasonable expenses at cost with no markup. Local meetings and remote sessions carry no travel expenses. The ",
          { text: "Working With Us", href: ROUTES.workingWithUs },
          " page has the specifics.",
        ],
      },
    ],
  },
];
