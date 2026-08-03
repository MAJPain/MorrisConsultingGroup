/**
 * Copy for /our-approach — the philosophy and methodology page for MCG's
 * advisory practice, and the third item in the Advisory dropdown (a top-level
 * route, not nested under /how-we-engage). Four sections rather than the
 * six-section detail template, because this is a philosophy page. Every section
 * uses the two-column editorial layout (rail + italic descriptor left, body
 * right), always expanded. Section 2 renders as seven numbered stage blocks.
 * Paragraph/stage bodies are node arrays so the inline Working With Us links
 * render while the prose stays verbatim; the Section 4 CTA links to /contact.
 */

export type OaInline = string | { text: string; href: string };

export type OaStage = {
  number: string;
  name: string;
  body: OaInline[];
};

export type OaSection = {
  rail: string;
  descriptor: string;
  /** Body paragraphs, each an array of inline nodes (Sections 1, 3, 4). */
  body?: OaInline[][];
  /** Section 2 only — seven numbered stage blocks. */
  stages?: OaStage[];
  /** Section 4 only — closing CTA. */
  cta?: { label: string; href: string };
};

const ROUTES = {
  workingWithUs: "/how-we-engage/working-with-us",
  contact: "/contact",
} as const;

export const oaHeader = {
  eyebrow: "OUR APPROACH",
  title: "Our Approach.",
  subtitle: "How we work, from first conversation to landing the outcome.",
  lede: "The methodology and posture behind every MCG engagement, whatever the practice.",
} as const;

export const oaSections: OaSection[] = [
  {
    rail: "THE APPROACH",
    descriptor: "Practical, senior-led, and calibrated to the engagement.",
    body: [
      [
        "How an advisory firm actually works matters more than what it claims to do. At the executive and board tier, methodology is what separates counsel from consulting.",
      ],
      [
        "Every MCG engagement runs on the same methodology, whatever the practice. Whether the work is CEO advisory, board effectiveness, executive coaching, banking director service, or student-athlete development, the approach is practical, senior-led, and calibrated to the specific engagement. We do not use a generic consulting model where senior thinking is separated from delivery. Both partners are engaged directly on the work — from the first conversation through the entire engagement.",
      ],
      [
        "Our approach protects confidentiality and clarifies scope in writing before substantive work begins. It ensures the engagement genuinely fits the situation, the enterprise context, and the level of sensitivity involved. This is the discipline that peer counsel to decision makers requires.",
      ],
    ],
  },
  {
    rail: "THE SEVEN STAGES",
    descriptor: "How engagements actually flow.",
    stages: [
      {
        number: "01",
        name: "Confidential scoping conversation",
        body: [
          "Every engagement begins with a confidential, no-cost conversation to understand the situation, the stakes, the parties involved, and the level of sensitivity in play. This conversation surfaces whether the work needed matches what MCG offers, and whether MCG is the right firm for the specific engagement. If we are not, we say so.",
        ],
      },
      {
        number: "02",
        name: "Fit, independence, and readiness",
        body: [
          "Before we accept an engagement, we consider three questions. Is MCG the right firm for this specific situation. Can we maintain the independence the client will need. And is the client — enterprise, team, or individual — genuinely prepared to act on the counsel it is asking for. We turn engagements down when the fit is wrong. This discipline protects both parties.",
        ],
      },
      {
        number: "03",
        name: "Engagement definition",
        body: [
          "Every engagement starts with clarity — what MCG will do, over what period, and under what terms — documented in a signed engagement letter before substantive work begins. No open-ended retainers. The discipline is deliberate: it protects both parties and forces the honest conversations that scope, term, and fees often require. Commercial specifics are covered in ",
          { text: "Working With Us", href: ROUTES.workingWithUs },
          ".",
        ],
      },
      {
        number: "04",
        name: "Assessment",
        body: [
          "We assess the situation before we act on it. Depending on the engagement, this may include board materials, governance and operating documents, culture and talent data, 360-degree instruments, structured interviews with directors and senior leaders, and observation of the individual and team dynamics that shape how decisions actually get made. Assessment establishes the baseline against which the engagement measures its progress.",
        ],
      },
      {
        number: "05",
        name: "Structured engagement",
        body: [
          "The engagement itself. CEO advisory sessions, board observation, working sessions with the executive team, structured interviews, coaching cadence with an individual leader, or the diagnostic and review work agreed in the engagement letter — delivered by MCG's partners. Delivery is calibrated to the specific engagement type and the client's operating rhythm.",
        ],
      },
      {
        number: "06",
        name: "Findings, counsel, and development",
        body: [
          "We deliver findings, recommendations, and continuing counsel clearly and directly. Focus lands on what the enterprise needs to build, change, or preserve. In coaching engagements, we deliver against agreed milestones and observable change. The counsel is direct because that is what serious clients pay for.",
        ],
      },
      {
        number: "07",
        name: "Implementation or continuing counsel",
        body: [
          "Where the engagement calls for it, we support implementation through advisory retainer, board observer work, chair advisory, transitional governance, executive coaching, or continuing engagement with the leadership team. Some engagements complete at findings; others continue through what the client is building. This is calibrated to the specific engagement scope.",
        ],
      },
    ],
  },
  {
    rail: "ASSESSMENT THROUGHOUT",
    descriptor: "A continuing read that runs through the engagement.",
    body: [
      [
        "Assessment does not sit inside a single stage. It runs through the engagement — at intake, at inflection points during the work, at delivery, and beyond it. Situations change. Enterprises evolve. Board and executive team dynamics shift as the work lands. The counsel MCG offers at any point rests on a continuing read of what has actually changed since the engagement began.",
      ],
      [
        "The instrument varies with the engagement type — situational read for board advisory, structured assessment for executive coaching, embedded observation for team development, ongoing review for community banking director service. The discipline does not. We measure where we started, how the work is landing, and what has changed. This continuous read is what keeps the counsel honest — and what allows MCG to adjust the engagement when the situation on the ground moves.",
      ],
    ],
  },
  {
    rail: "BEGIN A CONVERSATION",
    descriptor: "Every engagement begins in confidence.",
    body: [
      [
        "Every engagement is led by MCG's partners — Sheldon Morris, Founder & Senior Partner, and Dr. Kenya Dugger, Managing Partner & Chief People & Culture Officer. See ",
        { text: "Working With Us", href: ROUTES.workingWithUs },
        " for the commercial arrangements that support this approach.",
      ],
    ],
    cta: { label: "Begin a conversation", href: ROUTES.contact },
  },
];
