/** Copy for the /advisory page. */

export const advisoryHeader = {
  eyebrow: "ADVISORY",
  title: "The counsel we offer.",
  subtitle: "Five practices, held to one standard.",
  lede: "We work across five related practices. Each begins with the same question: what does this enterprise need in order to endure — and who will decide it?",
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
    title: "Operating Effectiveness",
    summary: "How a leadership team decides, and how the enterprise runs day to day.",
    body: [
      "A sound strategy still has to be run. Most of the distance between intent and results is covered in the operating room: how the executive team meets, where authority actually sits, and how decisions are made and revisited.",
      "We work with chief executives and their teams to sharpen that machinery: the decision rights, the operating cadence, and the executive office that keeps an enterprise moving with clarity rather than friction.",
    ],
    engagements: [
      "Executive team effectiveness",
      "Decision rights & authority",
      "Operating cadence & business rhythm",
      "The executive office & chief of staff function",
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
  {
    number: "05",
    title: "Resilience & Crisis Leadership",
    summary: "Leading with a steady hand when the stakes are highest.",
    body: [
      "The measure of an institution is how it performs under strain. Disruption is rarely a question of if, and the organizations that come through it best are the ones that prepared before it arrived.",
      "We help leaders build that readiness and lead through disruption when it comes: steadying the team, protecting what matters, and making sound decisions with incomplete information, so a crisis tests the institution without defining it.",
    ],
    engagements: [
      "Crisis preparedness & scenario planning",
      "Leadership through disruption",
      "Business continuity & resilience",
      "Post-crisis review & recovery",
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
