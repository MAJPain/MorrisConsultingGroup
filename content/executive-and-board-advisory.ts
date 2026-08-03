/**
 * Copy for /how-we-engage/executive-and-board-advisory — the third practice
 * detail page, counterpart to the two live signature-practice pages in the
 * core-practices set. Follows the locked six-section detail template (see
 * MCG_Detail_Page_Template_Lock.md): every section is two-column (rail + italic
 * descriptor left, body right), always expanded. No inline body links; only the
 * Section 6 CTA links out (to /contact).
 */

export type EbaInline = string | { text: string; href: string };

export type EbaEngagement = {
  name: string;
  body: EbaInline[];
};

export type EbaSection = {
  rail: string;
  descriptor: string;
  /** Plain body paragraphs (Sections 1, 2, 4, 5, and the lead of 6). */
  body?: string[];
  /** Section 3 only — five engagement blocks (H3 + paragraph). */
  engagements?: EbaEngagement[];
  /** Section 6 only — closing CTA. */
  cta?: { label: string; href: string };
};

const ROUTES = {
  contact: "/contact",
} as const;

export const ebaHeader = {
  eyebrow: "EXECUTIVE & BOARD ADVISORY",
  title: "Executive & Board Advisory.",
  subtitle: "Counsel to decision makers who carry the weight of leadership.",
  lede: "A core practice serving the decision makers responsible for consequential outcomes at the executive and board level.",
} as const;

export const ebaSections: EbaSection[] = [
  {
    rail: "OVERVIEW",
    descriptor: "For decision makers, on the decisions that matter most.",
    body: [
      "For decision makers navigating the questions that shape their enterprise, MCG serves as an executive advisory practice. We work with chief executives, boards, senior leaders, and the leaders coming up behind them — anyone responsible for direction, character, and consequence at their institution, whether or not they hold the title that names the responsibility.",
      "The practice covers the questions that separate strong enterprises from struggling ones: strategy, succession, culture, board governance, executive team dynamics, and the decisions that shape reputation and results. It is grounded in what our partners have seen up close through their own careers — leadership as a substance beyond title, judgment shaped by consequence, and the discipline of decisions made under sustained pressure.",
    ],
  },
  {
    rail: "WHO WE WORK WITH",
    descriptor:
      "Chief executives, boards, senior leaders, and the leaders who become them.",
    body: [
      "We work with chief executives, boards, and the senior leaders who run divisions, business units, and functional areas at institutional scale. We also work with the leaders coming up behind them — the executive team members, chiefs of staff, and rising leaders being prepared to run the enterprise next.",
      "Clients typically reach out at moments where the questions carry consequence — a strategic decision that will shape the next chapter, a succession transition, a culture that needs work, a board that needs realignment, an executive team where the dynamics are constraining performance, or a decision that requires an outside voice before it lands. Some come to us for defined engagements around a specific decision or situation. Others engage MCG on an ongoing advisory retainer.",
      "We work across every sector we serve — nonprofits and foundations, higher education, privately held enterprises, health systems, public-sector agencies, and community banks. The practice is defined by the leadership level, not the sector; the questions decision makers face at this level tend to share the same substance regardless of institution type.",
    ],
  },
  {
    rail: "THE ENGAGEMENTS",
    descriptor: "Advisory in the moments when decisions carry consequence.",
    engagements: [
      {
        name: "CEO Advisory Retainer",
        body: [
          "For chief executives who value having an outside advisor available on an ongoing basis. The retainer is structured around regular working conversations, on-call access for specific decisions, and periodic strategic review of what the CEO is navigating. Retainers typically run twelve to twenty-four months, renewable, with cadence and focus calibrated to what the CEO's role and situation require. Peer counsel available when the CEO needs it.",
        ],
      },
      {
        name: "Board Advisory and Chair Support",
        body: [
          "For boards and board chairs navigating the questions that determine board effectiveness — director composition, committee structure, decision-making processes, chair-CEO alignment, and the specific matters a board is deliberating. We work directly with the chair, sometimes with individual directors, and where appropriate with the full board through structured engagements. Duration is calibrated to the work: some engagements run three to six months around a specific board matter; others become ongoing advisory to the chair.",
        ],
      },
      {
        name: "Board Effectiveness and Culture Review",
        body: [
          "For boards ready to assess how they actually operate — decision-making, director engagement, management oversight, and board culture. Reviews are structured around director interviews, meeting observation, document review, and honest feedback delivered to the full board. Typical duration is four to six months, producing findings and recommendations the board can act on. The review is substantive rather than procedural — focused on how the board actually functions.",
        ],
      },
      {
        name: "Enterprise Performance and Culture Diagnostic",
        body: [
          "For leaders ready to understand honestly why their enterprise is producing the results it produces — where operating effectiveness is being lost, where culture is helping or hurting execution, and where the executive team is or is not aligned. Diagnostics are structured around interviews with senior leaders, review of operating rhythms and decision processes, and analysis of what the culture rewards versus what the strategy requires. Duration is typically three to five months. Findings become the basis for decisions the leadership team makes about what changes.",
        ],
      },
      {
        name: "Executive Succession",
        body: [
          "For boards and CEOs navigating executive succession — CEO, C-suite, or other senior leadership transitions. We work on the substantive questions of succession: what the enterprise will need from its next leader, how the current pipeline compares to that need, how to develop internal candidates, and how the current leader can hand off well. Executive search is done by search firms; MCG's work is the strategic advisory that shapes what search is asked to find and what the transition looks like.",
        ],
      },
    ],
  },
  {
    rail: "HOW WE WORK",
    descriptor: "Peer counsel, calibrated to the engagement.",
    body: [
      "Every engagement begins with a confidential conversation with the decision maker or the sponsor — CEO, board chair, or senior leader — before any scoping happens. We use that conversation to understand what the client aims to accomplish, and to assess whether we are the right advisors for the situation. If we are not, we say so.",
      "Delivery is calibrated to the engagement. On CEO advisory retainers, we work with the CEO on a regular cadence with on-call availability for decisions that can't wait. On board advisory, we work with the chair and with individual directors as the work requires. On board effectiveness reviews and enterprise diagnostics, we spend concentrated time on-site or embedded with the client's leaders over the duration of the engagement. On executive succession, we work with boards and current CEOs over the arc of the transition.",
      "Both partners share responsibility for every engagement. One leads delivery as the primary advisor; the other engages where the work specifically calls for it. The choice of primary advisor is calibrated to the engagement — strategy, operations, staff synchronization, and board work often draws Sheldon; HR, culture, team dynamics, and coaching-adjacent work often draws Kenya. Both partners are available where the client needs them. Delivery is peer counsel throughout — the client works directly with senior practitioners for the duration of the engagement.",
    ],
  },
  {
    rail: "WHY MCG",
    descriptor: "Advisors who understand the weight of leadership.",
    body: [
      "Leadership at the executive and board level is substance, not title. The decisions that shape enterprises are made by people carrying real weight — pressure that runs in every direction, accountability the client alone bears, judgment exercised when the answer is not clear and the clock is running. Decision makers at this level need counsel from advisors who know what that weight actually feels like.",
      "Both partners spent their careers carrying leadership weight themselves — through military commands, principal staff positions, executive roles, and board service across public, private, social, and banking sectors. That direct experience is why MCG's counsel lands differently than what a consulting firm delivers. Where a consulting firm brings frameworks that reframe what the client already knew, MCG brings the perspective of someone who has made decisions of similar consequence and understands what the client is actually navigating.",
      "That is what makes MCG's Executive & Board Advisory practice distinctive. Decision makers who choose MCG are choosing peer counsel from advisors who understand leadership as substance — the weight it carries, the discipline it demands, and the responsibility that lives inside every consequential decision, regardless of the title held by the person making it.",
    ],
  },
  {
    rail: "BEGIN A CONVERSATION",
    descriptor: "Every engagement begins in confidence.",
    body: [
      "The practice works best when engaged before the decision has to be made — while the counsel can still shape what happens.",
    ],
    cta: { label: "Begin a conversation", href: ROUTES.contact },
  },
];
