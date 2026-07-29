/** Copy for the /about page. */

export const aboutHeader = {
  eyebrow: "ABOUT",
  title: "A firm built on judgment.",
  subtitle: "Counsel offered by peers, not vendors.",
  lede: "Morris Consulting Group was founded on a simple premise — that the most consequential decisions a leader faces are improved by a trusted, disinterested second read.",
} as const;

export const story = {
  number: "01",
  label: "THE STORY",
  heading: "We began where the stakes are highest.",
  body: [
    "Morris Consulting Group was established in 2017 by Sheldon Morris, drawing on sixteen years in senior executive and critical staff roles. The firm was built to bring the judgment those positions produce to the counsel of chief executives and boards: clear thinking under pressure, an instinct for consequence, and respect for the institutions leaders are entrusted with.",
    "We are, by design, a boutique. We take on a small number of engagements so that each receives the attention it deserves. Our clients retain us not for scale but for judgment, and for the confidence that what is said in the room stays there.",
    "The work is quiet. It rarely produces a press release. But it is the work by which sound institutions are built and stewarded — and it is the only work we do.",
  ],
} as const;

export const philosophy = {
  number: "02",
  label: "PHILOSOPHY",
  statement:
    "Enterprise performance is inseparable from the character of leadership.",
  body: [
    "We do not believe in strategy divorced from the people asked to carry it out, or in oversight reduced to a compliance exercise. The health of an enterprise is finally a question of judgment — of who decides, how they decide, and whether they hold themselves to a standard when no one is watching.",
    "Our role is to help leaders see their situation plainly and act on it with discipline. We bring candor where candor is scarce, and patience where haste would do harm.",
  ],
} as const;

export type Value = {
  number: string;
  title: string;
  description: string;
};

export const valuesSection = {
  number: "03",
  label: "WHAT WE VALUE",
  heading: "The principles we keep.",
} as const;

export const values: Value[] = [
  {
    number: "01",
    title: "Discretion",
    description:
      "The most important counsel is given privately. Confidentiality is not a policy at this firm; it is the foundation of the work.",
  },
  {
    number: "02",
    title: "Candor",
    description:
      "We are retained to say the plain thing. We offer our honest read even — especially — when it is not the one the room expects.",
  },
  {
    number: "03",
    title: "Restraint",
    description:
      "We take on few engagements and offer counsel sparingly. Advice given in abundance is advice easily ignored.",
  },
  {
    number: "04",
    title: "Endurance",
    description:
      "We measure our work by the institutions it helps build — organizations sound enough to outlast the leaders who shaped them.",
  },
];
