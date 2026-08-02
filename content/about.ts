/** Copy for the /about page. */

export const aboutHeader = {
  eyebrow: "ABOUT",
  title: "A firm built on judgment.",
  subtitle: "Advice from peers, not vendors.",
  lede: "We advise and coach leaders and their teams to reach their goals without losing sight of their values, the clients they serve, or the potential of the people beside them.",
} as const;

export const story = {
  number: "01",
  label: "THE STORY",
  heading: "We began where the stakes are highest.",
  body: [
    "Morris Consulting Group was founded by Sheldon Morris in 2017 and is now led in partnership with Dr. Kenya Dugger. Sheldon retired as a Colonel and Kenya as a Sergeant Major, both after twenty-two years in the U.S. Army; between them they carry more than thirty years in senior executive and principal staff roles across the government, private, social, and banking sectors. The firm was built to bring the judgment those positions produce to the leaders it advises and coaches: clear thinking under pressure, an instinct for consequence, and respect for the institutions leaders are entrusted with.",
    "We are deliberately small. Our two-partner roster is the design, not the stage before growth. We take a limited number of engagements so each receives the attention it deserves. Our clients retain us not for scale but for judgment, and for the confidence that what is said in the room stays there.",
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
    "Our role is to help leaders see their situation plainly and act on it with discipline. We bring candor where candor is scarce, and patience where haste would do harm. We work with leaders across a career — with those running enterprises now, and those who will run them next.",
  ],
} as const;

/** Scrolling keyword strip on the /about page. Kept separate from the shared
 *  home marquee (`marqueeItems`) so the two can differ. */
export const aboutMarquee: string[] = [
  "OPERATING EFFECTIVENESS",
  "ENTERPRISE PERFORMANCE",
  "EXECUTIVE SUCCESSION",
  "ORGANIZATIONAL LEADERSHIP",
  "RESILIENCE",
  "STRATEGY",
  "COMMUNITY & REGIONAL BANKING",
  "ATHLETIC ADVISING",
];

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
      "The most important advice is given privately. Confidentiality is not a policy at this firm; it is the foundation of the work.",
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
      "We take on few engagements and advise sparingly. Advice given in abundance is easily ignored.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "We measure our work by the organizations we help build: stronger, better led, and ready for what comes next.",
  },
];
