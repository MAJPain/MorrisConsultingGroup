/** Copy for the /advisory page. */

export const advisoryHeader = {
  eyebrow: "ADVISORY",
  title: "The counsel we offer.",
  subtitle: "Four practices, held to one standard.",
  lede: "We work across four related practices. Each begins with the same question: what does this enterprise need in order to endure — and who will decide it?",
} as const;

export type PracticeDetail = {
  number: string;
  title: string;
  summary: string;
  body: string[];
  engagements: string[];
};

export const practiceDetails: PracticeDetail[] = [
  {
    number: "01",
    title: "Board Governance & Effectiveness",
    summary:
      "Helping boards see themselves clearly — and hold themselves to a standard.",
    body: [
      "A board's effectiveness is rarely a matter of talent. It is a matter of clarity: about where authority sits, how decisions are made, and what the board owes the enterprise that management cannot supply.",
      "We conduct candid, confidential reviews of how a board actually works, and counsel chairs and directors on the structure, cadence, and culture that turn a capable board into an effective one.",
    ],
    engagements: [
      "Board effectiveness reviews",
      "Governance structure & committee design",
      "Chair & director counsel",
      "New-board formation",
    ],
  },
  {
    number: "02",
    title: "Enterprise Performance & Strategy",
    summary: "Sharpening priorities and the discipline to hold them.",
    body: [
      "Strategy is a set of choices about where to concentrate finite attention and capital. Its power lies in what it declines to pursue — and its failure, almost always, lies in the discipline of execution.",
      "We work alongside leadership to clarify priorities, align resources to them, and build the cadence of review that keeps an organization honest about its own performance.",
    ],
    engagements: [
      "Strategic clarity & prioritization",
      "Performance review frameworks",
      "Resource alignment",
      "Leadership team facilitation",
    ],
  },
  {
    number: "03",
    title: "Executive Advisory & Succession",
    summary: "Preparing institutions for their most consequential transitions.",
    body: [
      "Leadership transitions are the truest test of an institution's health — and they are almost always addressed later than they should be. Succession is not a name chosen under pressure; it is a process begun well in advance.",
      "We counsel chief executives and boards through succession and executive transition with the care it deserves: developing leaders, assessing readiness honestly, and preparing an organization to be led differently.",
    ],
    engagements: [
      "CEO & executive succession",
      "Leadership readiness assessment",
      "Transition counsel",
      "Confidential advisory to the chief executive",
    ],
  },
  {
    number: "04",
    title: "Organizational Leadership",
    summary: "Building the culture and judgment that performance depends on.",
    body: [
      "Performance follows character. The culture of an organization — its cadence, its candor, the quality of judgment it rewards — determines whether sound strategy is actually carried out.",
      "We advise leaders on the human dimensions of enterprise: the development of people, the shaping of culture, and the quiet work of building an institution that endures beyond any one tenure.",
    ],
    engagements: [
      "Organizational culture & alignment",
      "Executive & leadership development",
      "Human capital strategy",
      "Institution-building counsel",
    ],
  },
];

export const approach = {
  number: "05",
  label: "HOW WE WORK",
  heading: "A deliberate way of working.",
  steps: [
    {
      number: "01",
      title: "Listen",
      description:
        "Every engagement begins privately, with the questions that matter most to you. We take the time to understand the enterprise before we offer a view.",
    },
    {
      number: "02",
      title: "Assess",
      description:
        "We examine the situation plainly — its structure, its people, and its choices — and form an honest, disinterested read.",
    },
    {
      number: "03",
      title: "Counsel",
      description:
        "We offer candid counsel and work alongside you to act on it, with the discipline to hold to the priorities we set together.",
    },
    {
      number: "04",
      title: "Endure",
      description:
        "We measure success by what remains: an institution sounder, and better led, than when the work began.",
    },
  ],
} as const;
