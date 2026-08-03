/**
 * Copy for /how-we-engage/leader-and-organization-development — the fourth and
 * final practice detail page, counterpart to Executive & Board Advisory in the
 * core-practices set. Follows the locked six-section detail template (see
 * MCG_Detail_Page_Template_Lock.md): every section is two-column (rail + italic
 * descriptor left, body right), always expanded. Section bodies are node arrays
 * so the one inline link (Team, in Section 5) renders while the prose stays
 * verbatim; the Section 6 CTA links to /contact.
 */

export type LodInline = string | { text: string; href: string };

export type LodEngagement = {
  name: string;
  body: LodInline[];
};

export type LodSection = {
  rail: string;
  descriptor: string;
  /** Body paragraphs, each an array of inline nodes (Sections 1, 2, 4, 5, 6). */
  body?: LodInline[][];
  /** Section 3 only — five engagement blocks (H3 + paragraph). */
  engagements?: LodEngagement[];
  /** Section 6 only — closing CTA. */
  cta?: { label: string; href: string };
};

const ROUTES = {
  team: "/team",
  contact: "/contact",
} as const;

export const lodHeader = {
  eyebrow: "LEADER & ORGANIZATION DEVELOPMENT",
  title: "Leader & Organization Development.",
  subtitle: "Coaching and development for the leaders behind the decisions.",
  lede: "A core practice for individuals, teams, and organizations building leader depth on the human side of performance.",
} as const;

export const lodSections: LodSection[] = [
  {
    rail: "OVERVIEW",
    descriptor: "Coaching and development on the human side of performance.",
    body: [
      [
        "For leaders and organizations building depth on the human side of performance, MCG serves as an executive coaching and organization development practice. We work with individual leaders in structured coaching engagements, with executive teams on the dynamics that determine their effectiveness, and with organizations investing in the leader depth their strategy assumes.",
      ],
      [
        "The practice covers the human capacity that strategy alone cannot deliver — the judgment leaders bring to decisions and the discipline they hold under pressure. It is grounded in institutional coaching methodology both partners developed through years of practice at institutional scale, applied to the specific questions individual leaders, teams, and organizations face. Coaching at this tier is structured developmental practice with defined outcomes, backed by methodology and credentialing that separate it from generic executive coaching.",
      ],
    ],
  },
  {
    rail: "WHO WE WORK WITH",
    descriptor:
      "Individual leaders, executive teams, and organizations investing in leader depth.",
    body: [
      [
        "We work with individual leaders across the executive tier — chief executives, senior executives, functional heads, and rising leaders whose organizations are investing in their development. Most individual coaching engagements are sponsored by the leader's organization; some are self-sponsored by leaders investing in themselves.",
      ],
      [
        "We work with executive teams navigating the questions that determine collective effectiveness — how the team makes decisions, when conflict gets surfaced and how it gets resolved, whether alignment holds when the work intensifies, and what it takes for the team to function as a leadership unit rather than a group of talented individuals. Team engagements typically pair individual coaching with structured team sessions over a defined period.",
      ],
      [
        "We work with organizations investing in leader depth at scale — cohort programs that develop rising leaders together, senior leader development structured around the specific capabilities the enterprise needs, and talent and culture programs that build the developmental discipline into the organization itself. These are the engagements where MCG's institutional methodology has the widest reach.",
      ],
    ],
  },
  {
    rail: "THE ENGAGEMENTS",
    descriptor: "The specific engagements the practice covers.",
    engagements: [
      {
        name: "Individual Executive Coaching",
        body: [
          "For chief executives, senior executives, and rising leaders. Engagements begin with a chemistry conversation between coach and coachee, followed by structured assessment — 360 feedback, executive assessment instruments, and structured interviews with peers and direct reports — that establishes a shared baseline for the work. Engagements typically run six to twelve months at a bi-weekly cadence. Confidentiality between coach and coachee is absolute. Where an organizational sponsor is involved, sponsor arrangements — including what feedback the sponsor receives about goals and progress — are agreed upfront.",
        ],
      },
      {
        name: "Senior Leader Development",
        body: [
          "For senior leaders — the executive tier below the chief executive — who are being developed for larger roles or navigating the transition into them. Engagements are structured around specific capability gaps identified through assessment, coaching cadence calibrated to the leader's role demands, and outcomes tied to the specific leadership shifts required. Typical duration is six to twelve months, sometimes extended for leaders navigating major transitions. Delivery includes individual coaching sessions, occasional embedded observation, and structured feedback at defined intervals.",
        ],
      },
      {
        name: "Executive Team Development",
        body: [
          "For executive teams working on the collective effectiveness that determines whether strategy actually gets executed. Engagements pair individual coaching of team members with structured team sessions on the dynamics, decision-making, alignment, and conflict-handling that shape team performance. Duration is typically six to nine months, calibrated to the specific team's situation. The work is grounded in the leadership decisions the team is actually navigating, not in generic team-building frameworks.",
        ],
      },
      {
        name: "Leadership Cohort Programs",
        body: [
          "For organizations developing multiple leaders together — typically high-potential rising leaders, newly-promoted executives, or specific functional or divisional cohorts. Cohort programs combine group learning, peer coaching, structured assignments, and individual coaching over three to twelve months, calibrated to the cohort's development needs. These programs work when the organization is genuinely investing in leader depth as a strategic capability. MCG designs and delivers cohort programs with the sponsoring organization's leadership development staff, integrating with existing programs where they exist.",
        ],
      },
      {
        name: "Talent and Culture Programs",
        body: [
          "For organizations building the developmental discipline into the enterprise itself. Engagements combine executive coaching of the senior leaders responsible for talent and culture, advisory to those leaders on program design and implementation, and structured development of the organization's own developmental capacity. Duration is typically nine to eighteen months. This is where MCG's practice reaches the widest — organizations investing in leader depth as strategic infrastructure across the enterprise.",
        ],
      },
    ],
  },
  {
    rail: "HOW WE WORK",
    descriptor: "How coaching and development engagements operate.",
    body: [
      [
        "Every coaching engagement begins with a chemistry conversation between coach and coachee. Chemistry is a real prerequisite for coaching to work — the coachee has to trust the coach, the coach has to be genuinely equipped to serve the coachee, and both parties have to make an honest read on fit before scoping the engagement.",
      ],
      [
        "Where fit is established, we move to structured assessment. For individual coaching, this means 360 feedback, executive assessment instruments, and structured interviews with peers and direct reports. For team engagements, assessment includes structured interviews with team members and observation of team meetings and decision processes. For cohort and organizational programs, assessment is calibrated to program scope. Assessment establishes the baseline against which the engagement measures its progress.",
      ],
      [
        "Coaching engagements run at defined cadence — typically bi-weekly for individual coaching, at rhythms calibrated to team or cohort needs for other engagements. Confidentiality between coach and coachee is absolute. Where an organizational sponsor is involved, sponsor arrangements — including what feedback the sponsor receives about goals and progress reviews — are agreed upfront before the engagement begins. This protects the developmental integrity of the work while ensuring the sponsor gets what they need to justify the investment.",
      ],
      [
        "Both partners share responsibility for the practice. On coaching engagements, one partner serves as primary coach; the other engages where the work specifically calls for it. On team engagements, both partners typically work together. On organizational engagements, primary responsibility is calibrated to the specific work and the client relationship.",
      ],
    ],
  },
  {
    rail: "WHY MCG",
    descriptor: "Coaching and development credentialed at institutional scale.",
    body: [
      [
        "Coaching and development at the executive tier requires more than an ICF certification and a coaching practice built out of personal experience. It requires methodology developed through years of practice and expertise gained from working with leaders under real stakes.",
      ],
      [
        "Both partners bring coaching credentialing developed at institutional scale — through senior positions in military, executive, academic, and board contexts across public, private, social, and banking sectors. Both have carried leadership themselves at institutional scale before coaching leaders through it. Specific credentials for each partner are on the ",
        { text: "Team page", href: ROUTES.team },
        ".",
      ],
      [
        "That is what makes MCG's coaching and development practice distinctive. Individual leaders, executive teams, and organizations that choose MCG are choosing coaching credentialed at institutional scale — methodology developed through years of practice with future senior leaders.",
      ],
    ],
  },
  {
    rail: "BEGIN A CONVERSATION",
    descriptor: "Every engagement begins in confidence.",
    body: [
      [
        "The practice works best when engaged with clear developmental intent — a leader ready to grow, a team ready to work on their effectiveness, or an organization investing in leader depth as strategy.",
      ],
    ],
    cta: { label: "Begin a conversation", href: ROUTES.contact },
  },
];
