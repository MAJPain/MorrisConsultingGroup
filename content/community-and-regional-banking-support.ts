/**
 * Copy for /how-we-engage/community-and-regional-banking-support — the first
 * practice detail page, and the working example of the locked six-section
 * detail template (see MCG_Detail_Page_Template_Lock.md). Every section uses
 * the two-column editorial layout: rail + italic descriptor left, body right.
 * Sections are always expanded (no accordion). Paragraph nodes are arrays only
 * where an inline link is needed; plain paragraphs are strings.
 */

export type CrbInline = string | { text: string; href: string };

export type CrbEngagement = {
  name: string;
  body: CrbInline[];
};

export type CrbSection = {
  rail: string;
  descriptor: string;
  /** Plain body paragraphs (Sections 1, 2, 4, 5, and the lead of 6). */
  body?: string[];
  /** Section 3 only — four engagement blocks (H3 + paragraph). */
  engagements?: CrbEngagement[];
  /** Section 6 only — closing CTA. */
  cta?: { label: string; href: string };
};

/**
 * Detail-page link targets. The Leader & Organization Development detail page
 * does not exist yet; `/how-we-engage` is the live fallback until it is built.
 * Change in one place when that page lands.
 */
const ROUTES = {
  leaderAndOrgDevelopment: "/how-we-engage", // → /how-we-engage/leader-and-organization-development
  contact: "/contact",
} as const;

export const crbHeader = {
  eyebrow: "COMMUNITY & REGIONAL BANKING SUPPORT",
  title: "Community & Regional Banking Support.",
  subtitle: "Director service to community and regional banks.",
  lede: "A specialized practice for US community and regional bank boards, on independent director service and the governance frameworks these boards navigate.",
} as const;

export const crbSections: CrbSection[] = [
  {
    rail: "OVERVIEW",
    descriptor: "Director service to community and regional banks.",
    body: [
      "For US community and regional bank boards, MCG serves as an independent director resource — bringing objective oversight, constructive challenge, and commercial judgment to the fiduciary decisions these boards navigate. We work with boards from community banks under $10B in assets through regional banks in the $10B–$50B range, and their holding companies.",
      "The practice draws on active director service and certification in community bank governance. We work with boards facing decisions on strategy, risk, capital, executive succession, regulatory relationships, and the evolving expectations placed on independent directors.",
    ],
  },
  {
    rail: "WHO WE WORK WITH",
    descriptor: "Boards actively engaged in strategy and governance.",
    body: [
      "We work with boards whose directors are actively engaged in the strategy and governance of their institution — not passive attendees. This includes community banks navigating growth, regional banks operating in tightening regulatory environments, and holding companies at either scale.",
      "Boards typically reach out at moments of transition: a chair search, a CEO succession, a regulatory matter, a strategic pivot, or after a board effectiveness review that surfaces gaps. Some come to us for ongoing director service. Others engage for specific committee or governance work.",
    ],
  },
  {
    rail: "THE ENGAGEMENTS",
    descriptor: "Senior counsel to community and regional bank leaders.",
    engagements: [
      {
        name: "Independent Director and Board Advisor Service",
        body: [
          "We serve on community and regional bank boards as an independent director or as a board advisor, depending on what the board needs and the composition it already carries. The role is scoped in the initial conversation. The engagement draws on active certification as a Community Bank Director and years of exposure to how these boards operate under regulatory scrutiny.",
        ],
      },
      {
        name: "Risk Identification and Mitigation",
        body: [
          "We advise chief executives, chairs, and boards on identifying, framing, and mitigating the risks that most affect strategy, capital, and reputation. This is risk work at the decision-making level, not a compliance function — the risks that shape where the institution is going and how it holds together in transition.",
        ],
      },
      {
        name: "Talent and Leader Development",
        body: [
          "We coach and develop the executives, senior managers, and future leaders these institutions rely on. This work draws on MCG's core ",
          {
            text: "Leader & Organization Development",
            href: ROUTES.leaderAndOrgDevelopment,
          },
          " practice, applied to the specific dynamics of community and regional banking — where board-level oversight of executive development is itself a fiduciary responsibility.",
        ],
      },
      {
        name: "Understanding the Customer Base in a Digital World",
        body: [
          "We advise boards and executive teams on how their customer base is changing under digital transformation, and what that means for strategy, product mix, competitive position, and the leaders the institution needs. This is a strategy and leadership engagement, not a technology-implementation one.",
        ],
      },
    ],
  },
  {
    rail: "HOW WE WORK",
    descriptor:
      "Independent, informed, and grounded in what these boards navigate.",
    body: [
      "Every engagement begins with a private conversation with the chair or committee chair. We scope in writing before any work begins.",
      "We work within the regulatory framework these boards navigate — fiduciary duties of care and loyalty, safety-and-soundness standards, BSA/AML expectations, Regulation O, the CRA framework, interagency guidance, and Dodd-Frank Section 165 for larger BHCs. These aren't compliance services we deliver. They're the context in which we operate.",
      "Delivery is calibrated to the engagement. On director service, we attend board and committee meetings on schedule. On board advisor engagements, we attend by invitation and on the cadence the chair sets. Risk, talent, and digital-transformation engagements are scoped with the chair or CEO around specific board and executive priorities.",
    ],
  },
  {
    rail: "WHY MCG",
    descriptor: "Investing in the people who lead, for the stakeholders they serve.",
    body: [
      "Community and regional banks succeed on the strength of the people leading them. Boards, executive teams, and the leaders coming up behind them are the institution's most consequential resource — and the discipline of investing in them, while keeping the community they serve first, is what produces the strongest return for shareholders, depositors, and the communities themselves. Leadership development is not overhead. It's the highest-leverage investment a bank board can make.",
      "The value of an outside read is measured the same way. We reduce blind spots by challenging groupthink and stovepiped analysis — the kind that develops inside any board or executive team over time, however talented. Blind spots cost banks in ways that reach every stakeholder: strategic missteps that erode capital, culture drift that surfaces in examinations, succession gaps that leave institutions exposed. An external voice that meets the same rigor as the board catches these before they cost.",
      "That external voice has to live in the world of the client. Community and regional banking operates under fiduciary scrutiny and regulatory expectations that shape every decision. Effective outside counsel understands what examiners look for, what chairs and CEOs carry, and what boards are actually being asked to oversee. Both partners bring that understanding, alongside coaching and advisory experience developed at institutional scale — offered in service to the stakeholders the institution answers to.",
    ],
  },
  {
    rail: "BEGIN A CONVERSATION",
    descriptor: "Every engagement begins in confidence.",
    body: [
      "The practice does its best work when engaged early — before a governance matter becomes a regulatory one.",
    ],
    cta: { label: "Begin a conversation", href: ROUTES.contact },
  },
];
