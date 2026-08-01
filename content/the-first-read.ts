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
 * Cross-page link targets. `/how-we-engage` and its sub-pages do not exist in
 * this codebase yet; `/advisory` is the live equivalent, so the whole family
 * resolves there until those routes are created. Change these in one place if
 * the pages are added later.
 */
const ROUTES = {
  about: "/about",
  team: "/team",
  contact: "/contact",
  howWeEngage: "/advisory",
  ourApproach: "/advisory",
  workingWithUs: "/advisory",
  communityBanking: "/advisory",
  athleticAdvising: "/advisory",
  leaderOrgDev: "/advisory",
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
          "Morris Consulting Group is an executive advisory and coaching practice, led by Sheldon Morris and Dr. Kenya Dugger. We work with chief executives and boards on the decisions that shape enterprise character, and with the leaders and teams responsible for moving the mission forward. Every engagement is delivered by the two partners, without junior delegation. The ",
          { text: "About", href: ROUTES.about },
          " page carries the fuller story of the firm.",
        ],
      },
      {
        question: "How do you differ from a management consulting firm?",
        answer: [
          "Management consultants produce strategy documents and implementation plans. Our work sits closer to the chief executive's chair, and we flex from strategy through execution as the engagement requires — from the concept of what to do to the reality of getting it done. We are retained for counsel and coaching, not for frameworks or consultant teams; every engagement is principal-led by design. Our Convictions on the ",
          { text: "About", href: ROUTES.about },
          " page describe how we think about this work.",
        ],
      },
      {
        question: "Why is MCG a two-partner firm?",
        answer: [
          "Because the work is judgment work, and judgment cannot be delegated. Both partners come from twenty-two-year Army careers and additional decades in senior executive and principal staff roles. Together we cover the strategic and human sides of leadership without handing either off to a bench. The two-partner roster is the design, not the stage before growth. Their full backgrounds sit on the ",
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
          "Our clients lead nonprofits and foundations, higher education, family-owned and founder-led enterprises, mission-driven institutions, public-sector agencies, community banks, and athletic organizations. We work primarily with chief executives and boards, and with the leaders coming up behind them who will run the enterprise next. The ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page describes the practice architecture in fuller detail.",
        ],
      },
      {
        question: "What services do you not provide?",
        answer: [
          "We do not provide legal, tax, audit, or investment advice. We do not conduct executive search or provide interim executive placement. We do not implement operational programs. Where the scope calls for one of these, we work alongside qualified counsel or firms rather than in place of them. What we do offer is described on the ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page.",
        ],
      },
      {
        question:
          "Do you work with mission-driven and public-sector organizations?",
        answer: [
          "Yes. Both partners hold or have held nonprofit board seats and bring senior public-sector executive experience across mission-driven institutions. Our combined service spans youth development, community impact, and civic governance, giving us genuine breadth across the sector. Mission-driven engagements are governed by the same principles as any other — private, unhurried, partner-led — with pricing calibrated to the sector. The ",
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
          "Every engagement is different. Most begin with a confidential scoping conversation to build a shared understanding of what the client aims to accomplish, then move into a defined engagement scoped around the specific work — board effectiveness, executive succession, enterprise performance, or an ongoing advisory retainer. Both partners are involved throughout, and all work is delivered to the client alone. The ",
          { text: "Our Approach", href: ROUTES.ourApproach },
          " page describes the seven stages behind every engagement in detail.",
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
          " practice and is delivered by one of the partners, not by an associate. Following the norms of the discipline, we begin with a chemistry conversation and a structured assessment — 360 feedback, executive assessment instruments, and structured interviews — to establish a baseline and define the desired outcomes. Coaching engagements run on a defined basis, typically six to twelve months at a bi-weekly cadence; confidentiality between coach and coachee is absolute, and where an organizational sponsor is involved, we agree upfront on how goals and progress reviews will be shared. The ",
          { text: "Leader & Organization Development", href: ROUTES.leaderOrgDev },
          " page carries the fuller detail on our coaching practice.",
        ],
      },
    ],
  },
  {
    n: 4,
    name: "OUR SIGNATURE PRACTICES",
    descriptor: "Community banking and athletic advising.",
    items: [
      {
        question: "What is your Community Banking Support practice?",
        answer: [
          "A specialty practice built around the fiduciary and regulatory requirements community bank boards operate under. It is anchored by real director-level experience in community bank governance and formal credentialing in the regulatory frameworks these boards navigate. The practice covers board effectiveness reviews, committee charter development, regulatory governance preparation, and director development, with work coordinated alongside qualified counsel where the scope requires it. For the deeper picture, see the ",
          { text: "Community Banking Support", href: ROUTES.communityBanking },
          " practice page.",
        ],
      },
      {
        question: "What does Athletic Advising cover?",
        answer: [
          "A sector practice serving athletic organizations from Division I collegiate down through high school, including athletic departments, athletic boards, and youth-serving athletic nonprofits. It covers governance advisory, athletic director and head coach development, NIL-era governance, and athletic board effectiveness. Our partners have competed at high levels, launched athletic ventures, and served in athletic governance — which means we understand what current athletes, coaches, and athletic leaders are contending with because we have been where they are. The ",
          { text: "Athletic Advising", href: ROUTES.athleticAdvising },
          " practice page describes the work in more depth.",
        ],
      },
      {
        question: "Do you serve boards outside your signature practices?",
        answer: [
          "Yes. Our core practices — Executive & Board Advisory and ",
          { text: "Leader & Organization Development", href: ROUTES.leaderOrgDev },
          " — serve chief executives and boards across every sector we work with. The signature practices exist because community banking and athletic advising each carry regulatory frameworks or sector-specific requirements that reward specialization. Every other buyer is served by the core practices. The ",
          { text: "How We Engage", href: ROUTES.howWeEngage },
          " page shows the full practice architecture.",
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
          " page or directly to either partner. We assess fit first — whether we are the right judgment for the situation — before discussing scope. If we are not the right firm, we say so.",
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
