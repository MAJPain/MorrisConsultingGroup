/**
 * Thought-leadership essays. Long-form editorial content.
 * Body is a typed block array so the essay layout can render without a
 * markdown parser while staying easy to edit.
 */

export type EssayBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "pullquote"; text: string };

export type Essay = {
  slug: string;
  title: string;
  dek: string; // one-line description used on cards & index
  topic: string; // eyebrow category
  datetime: string; // ISO date, used only for ordering (not displayed)
  readingTime: string; // based on body word count at ~225 wpm, rounded
  author: string;
  body: EssayBlock[];
};

/** Standard call-to-action appended to the foot of every essay. */
export const essayCta = {
  body:
    "Morris Consulting Group is an executive advisory and coaching firm. We counsel boards, chief executives, and senior leadership teams on governance, succession, and enterprise performance. Confidential inquiries are welcomed at",
  email: "inquiries@morrisconsultinggroup.org",
} as const;

export const essays: Essay[] = [
  {
    slug: "who-did-you-send-forward",
    title: "Who did you send forward?",
    dek: "Data tells you what happened. A person tells you what is happening now.",
    topic: "GROUND TRUTH",
    datetime: "2026-07-15",
    readingTime: "4 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "I ask because every organization runs on a picture of the ground it cannot personally stand on. The picture is only as good as the person the organization sent to see it. That is a fact that has been true for centuries, and it is still not, in most organizations I sit with, treated as a decision worth deliberate investment.",
      },
      {
        type: "paragraph",
        text: "I am not here to argue against data. Data informs future decisions. It is the disciplined record of what an organization has been able to observe, and in a mature enterprise it is indispensable for planning and forecasting.",
      },
      {
        type: "paragraph",
        text: "What data cannot do is tell you what is happening right now in the place where the decision-maker is not. Something has to happen, be observed, recorded, transmitted, and summarized before it appears on the dashboard. By the time a leader sees a signal in the numbers, the signal is history. Data is for what comes next. It is not built to tell you what is happening now.",
      },
      {
        type: "pullquote",
        text: "By the time a leader sees a signal in the numbers, the signal is history.",
      },
      {
        type: "paragraph",
        text: "What tells you what is happening now is a person. Specifically, it is a person the organization has trained and trusted and deliberately placed at the point of contact with whatever ground it needs to understand.",
      },
      {
        type: "paragraph",
        text: "The decision about who to send forward, and how much to invest in them before they get there, is one most organizations have never made consciously. They send whoever was available. They train them on procedure. They evaluate them on activity. And then they wonder why the signal coming back is thin, late, or unactionable.",
      },
      {
        type: "paragraph",
        text: "I led a scout platoon before I commanded a company, and much of what I know about ground truth I learned there. Scouts moved ahead of the main body. They were the eyes and ears of the battalion — the commander's picture of the ground before he committed six or eight hundred people to it.",
      },
      {
        type: "paragraph",
        text: "Scouts were among the most selective positions in the unit. You did not send weak soldiers forward. You sent your best. And you invested in them before you sent them, because the quality of what came back depended entirely on the quality of who you sent.",
      },
      {
        type: "paragraph",
        text: "There was also a discipline in what they were asked. Scouts did not wander looking at whatever caught their attention. Every operation began with a set of specific information requirements — in Army doctrine, Priority Intelligence Requirements — that the commander had designated as critical to specific pending decisions. Each was a single question, ranked in priority, tied to a decision on the commander's decision support matrix. If answering it would not change a course of action he was about to take, it was not a requirement. It was noise.",
      },
      {
        type: "paragraph",
        text: "When I moved from that platoon to company command, the geometry changed. I had three platoons and one body. I could only be in one place at a time. In the other two locations, I had to rely on leaders I had trained and trusted. I remained the decision-maker. What extended was not my authority but my reach — and that reach was only as good as the leaders I had invested in before I needed them.",
      },
      {
        type: "paragraph",
        text: "Civilian organizations have the same geometry and often the wrong investment in the people who would produce ground truth. The caseworker sees what is changing in the neighborhood a full quarter before the demographic dashboard shows it. The branch manager knows a small-business client is in trouble long before the loan report flags it. The teacher watching a class of thirteen-year-olds knows, in September, which of them will not be in school in April.",
      },
      {
        type: "paragraph",
        text: "These are the scouts of the sector — the enablers of the mission at its point of contact. Most sectors do not treat them as such. They are the lowest-paid, least developed, most quickly replaced positions in the organizational chart, and their reporting is rarely routed to any table where a decision that matters is being made.",
      },
      {
        type: "paragraph",
        text: "I have my own version of what a leader owes the ground. Wherever I go, regardless of the weather, my first day on the ground I run the city I am in. Not the concierge route. The city.",
      },
      {
        type: "paragraph",
        text: "When I run, it is for me — to see it, to smell it, to taste it, to interact with the people who live and work in it, and to better understand the environment I am about to operate in. That is how I get grounded. It is not a leadership technique and I am not recommending it as one. It is how I make sure the meeting I walk into on day two is informed by something the meeting itself cannot give me.",
      },
      {
        type: "paragraph",
        text: "The failure mode is rarely that executives disrespect ground signal. Most say the right things about it. The failure mode is that the organization never invested in the people whose observations were supposed to become the signal in the first place, and never named whose job inside the organization it was to develop them. The organizations that keep sending whoever is available will keep getting the caliber of ground signal that decision produces.",
      },
      {
        type: "paragraph",
        text: "Who did you send forward, and what did you invest in them before you sent them?",
      },
      {
        type: "paragraph",
        text: "If your organization's honest answer is that you sent whoever was available and hoped they would figure it out, that is the answer.",
      },
    ],
  },
  {
    slug: "is-your-culture-built-for-outside-talent",
    title: "Is your culture built for outside talent?",
    dek: "Sectors under pressure must eventually receive talent formed elsewhere. Few are built to.",
    topic: "CULTURE",
    datetime: "2026-06-15",
    readingTime: "4 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Is your culture built to bring in talent from outside your industry?",
      },
      {
        type: "paragraph",
        text: "I ask because most nonprofit leadership teams I sit with cannot answer that question, and the ones who can usually cannot answer it well. Their governance documents do not ask it of them. Their hiring committees do not ask it of themselves. And it is the question, in my experience, that most reliably predicts whether a senior outside hire will thrive in the seat or leave inside eighteen months, carrying institutional knowledge no one else has the standing to replace.",
      },
      {
        type: "paragraph",
        text: "The question matters more now than it did five years ago. The nonprofit sector is in a documented leadership crisis, particularly in the health and human-services subsector where I have spent much of my post-military career. Turnover runs at nineteen percent against roughly twelve percent in other sectors, two-thirds of chief executives have no written succession plan, and a 2024 Center for Effective Philanthropy survey found ninety-five percent of nonprofit leaders concerned about staff burnout.",
      },
      {
        type: "paragraph",
        text: "That is not a hiring problem. It is a receiving-culture problem. Sectors under pressure eventually have to bring in talent formed elsewhere. Most believe they are prepared to do that. Fewer are. The culture question is actually three questions in one: whether the organization is prepared to receive outside talent, whether it is willing to be changed by that talent, and whether integration succeeds or the person either conforms or leaves.",
      },
      {
        type: "pullquote",
        text: "That is not a hiring problem. It is a receiving-culture problem.",
      },
      {
        type: "paragraph",
        text: "A distinction is worth drawing before going further. Setting aside medical retirement, which is a distinct category with its own considerations, there is a difference between a veteran and a military retiree. A veteran served from initial enlistment through some point short of twenty years and separated. A retiree served twenty years or more and drew a regular pension on the way out. The former is a talent pool. The latter is a leadership pool.",
      },
      {
        type: "paragraph",
        text: "Take the retiree specifically: the senior noncommissioned officer, the field-grade officer, the colonel who ran a battalion or a brigade or a program office. That person arrives in a civilian role carrying twelve to thirty years of formal leadership development. That development is not incidental. It is structural.",
      },
      {
        type: "paragraph",
        text: "What a nonprofit executive team spends a quarter escalating is often what a lieutenant colonel decided before lunch on a Tuesday in a place with no reliable electricity. That is not because the nonprofit team is unserious. It is because what is considerable to one culture is routine in another, and neither side usually sees the calibration it is working from.",
      },
      {
        type: "paragraph",
        text: "So one might expect the sector, having identified a leadership pipeline problem, to have organized itself to absorb this population. It has not. Indeed's 2025 workforce survey found sixty-four percent of veterans with more than eleven years of service report feeling underemployed or underutilized in their civilian roles. For two out of every three of the people I am describing, the organization is not maximizing the experience and skills they bring.",
      },
      {
        type: "paragraph",
        text: "That the sector could absorb them is not in doubt. Roughly one in five Lockheed Martin employees has a military connection, according to the company's own reporting, and its peers in defense contracting report similar or higher concentrations. This is not charity. Federal law requires them to establish annual veteran hiring benchmarks and demonstrate good-faith recruitment against them, and their customer is the military, so absorbing military talent is business necessity rather than choice. The receiving structure exists because the industry decided it needed to exist.",
      },
      {
        type: "paragraph",
        text: "In the sectors that have not built the receiving structure, what shows up instead is a set of practices I have come to call whiteboard deep. Leadership development named on the strategic plan and absent from the calendar. Succession expectations declared in the annual report and unassigned in the operating rhythm. Onboarding for outside senior hires that ends the second week and never really begins.",
      },
      {
        type: "paragraph",
        text: "I have watched succession plans die on whiteboards inside this sector, and I have watched senior military talent walk past those same whiteboards without either side recognizing what was there.",
      },
      {
        type: "paragraph",
        text: "The responsibility runs both ways. Preparedness and willingness are what the organization brings to the crossing. Translation is what the outside talent brings. A retired Colonel who runs a nonprofit staff meeting the way they ran a battalion staff, giving direction where consensus was the norm and reading a peer as a subordinate, has failed a discipline the organization could not have taught them. Neither side gets to opt out.",
      },
      {
        type: "paragraph",
        text: "The board is not innocent in this. If a board never asked whether the organization was prepared to receive outside talent, the executive team was never evaluated on building the receiving structure. Cultures do not accidentally become open to outside talent. They become open when someone at the level of governance decides they need to be.",
      },
      {
        type: "paragraph",
        text: "The question is not really about veterans. Veterans are the sharpest case because the mismatch is the most visible there. But the military-retiree case is an illustration of the pattern, not the whole of it. Any senior hire whose formation happened outside your industry, whether from banking, from corporate operations, or from another sector of nonprofits, is subject to the same crossing, and the same failure mode when preparedness, willingness, or integration is missing.",
      },
      {
        type: "paragraph",
        text: "The question is about whether the culture you have built was built to absorb someone whose formation happened somewhere else. That means the hiring instincts, the promotion patterns, and the quiet assumptions about who succeeds in your organization and who does not.",
      },
      {
        type: "paragraph",
        text: "The organizations that will come through the next decade well are the ones willing to ask the question honestly and to adjust what they find. So I will end where I began. Is your culture built to bring in talent from outside your industry?",
      },
      {
        type: "paragraph",
        text: "If you are not sure, that is the answer.",
      },
    ],
  },
  {
    slug: "what-are-leaders-rewarded-for-developing",
    title: "What are your leaders actually rewarded for developing?",
    dek: "In much of corporate America, developing your successor quietly weakens your own position.",
    topic: "INCENTIVES",
    datetime: "2026-05-15",
    readingTime: "3 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "What are your leaders actually rewarded for developing?",
      },
      {
        type: "paragraph",
        text: "I ask because the answer decides more about your organization's future than almost any other question your board or executive team ever addresses, and most organizations have never asked it consciously. They have written the strategic plan. They have named the succession commitment. They have opened the leadership development budget. And then, quietly, they have built an incentive structure that punishes the leader who does what all of that literature says they should be doing.",
      },
      {
        type: "paragraph",
        text: "I noticed the mechanism because I came out of a culture where the opposite was true. In the military, a leader's evaluation report assesses whether they have developed the person behind them. That is not a courtesy. It is a professional obligation with direct consequences for promotion, school selection, and the next assignment.",
      },
      {
        type: "paragraph",
        text: "The reason the obligation exists is structural: the rotation cycle guarantees you will be replaced every two to four years, and the mission has to continue. A leader who has not built a successor has failed the mission. The failure is theirs and it follows them.",
      },
      {
        type: "pullquote",
        text: "A leader who has not built a successor has failed the mission.",
      },
      {
        type: "paragraph",
        text: "In much of corporate America and in significant parts of the nonprofit sector, the same activities are treated as their opposite. An executive who has made herself irreplaceable has accumulated the leverage the market rewards: compensation, board attention, credibility as the person the organization cannot function without.",
      },
      {
        type: "paragraph",
        text: "A manager who has developed his direct reports to the point that any of them could replace him has, by the operating logic of many organizations, weakened his own position. There is no evaluation report assessing him on the readiness of his bench. There is only the performance review scoring him on outputs he personally delivered.",
      },
      {
        type: "paragraph",
        text: "This is not a moral difference between the two cultures. It is a structural one. Executives are responding rationally to the incentives their organizations have built. In an organization that rewards irreplaceability, the rational executive accumulates irreplaceability. In an organization that rewards output, the rational manager optimizes for output he can be credited with personally. Neither is being obstinate. Both are responding to what their organization has actually chosen to measure.",
      },
      {
        type: "paragraph",
        text: "What this produces at scale is a set of practices I have come to call whiteboard deep. Leadership development named on the strategic plan and absent from the calendar. Succession expectations declared in the annual report and unassigned in the operating rhythm. The retention of institutional knowledge treated as a lucky outcome rather than a designed one.",
      },
      {
        type: "paragraph",
        text: "When a senior leader eventually leaves an organization that has run for a decade on these incentives, they take with them everything they never had a professional reason to teach anyone else, and the organization discovers, too late, what the receiving structure it never built would have cost to build.",
      },
      {
        type: "paragraph",
        text: "The military retiree who arrives in the civilian executive suite sees this immediately and often cannot name what she is seeing. She was trained inside a system where developing the person behind her was the measure of her. She arrives in a system where the same activity is treated as either altruism or self-sabotage, and the confusion this produces breaks in both directions.",
      },
      {
        type: "paragraph",
        text: "Sometimes she pushes for bench-building and is read as threatening. Sometimes she stops pushing and adopts the incentives around her, at which point the organization has lost the very habit it hired her to bring.",
      },
      {
        type: "paragraph",
        text: "The question is not whether your organization values leadership development. Every organization I have advised says it does. The question is whether the value is real. Real means it appears in the performance review. Real means the executive who neglected succession loses standing when that neglect is discovered. Real means the manager who has produced three people ready to run his function is more valuable to the organization than the manager who has made himself the only person who can.",
      },
      {
        type: "paragraph",
        text: "So I will ask again.",
      },
      {
        type: "paragraph",
        text: "What are your leaders actually rewarded for developing?",
      },
      {
        type: "paragraph",
        text: "If your organization's honest answer is “themselves and the work in front of them,” that is the answer.",
      },
    ],
  },
  {
    slug: "where-did-your-executives-learn-to-lead",
    title: "Where did your executives learn to lead?",
    dek: "Homogeneous formation is a choice — and it produces most of what we call a pipeline problem.",
    topic: "FORMATION",
    datetime: "2026-04-15",
    readingTime: "4 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Where did your executives learn to lead?",
      },
      {
        type: "paragraph",
        text: "If you can trace the leadership formation of your entire C-suite to two or three familiar paths, whether the MBA-to-consulting-to-industry route, the operational-manager-to-VP-to-C-suite route inside the same sector, or the founder-and-lieutenants route, you have a specific kind of leadership team. Homogeneous formation is not automatically wrong. It is, however, worth naming as a choice, because it is the choice that produces most of what corporate America now considers a leadership pipeline problem.",
      },
      {
        type: "paragraph",
        text: "The clearest signal at scale is what has happened to military leadership in the C-suites of non-defense Fortune 500 companies. In 1980, roughly fifty-nine percent of chief executives of U.S. public corporations had some form of military background. By the mid-to-late 2000s, that share had fallen to roughly eight percent, and the figure has remained in that range in more recent years. The same forty-year collapse appears across the broader C-suite, though the data at that level is thinner because most companies do not consistently track it.",
      },
      {
        type: "paragraph",
        text: "That decline did not happen because military leaders got worse. Korn/Ferry's research on the officers who did make it to the CEO seat shows the opposite. Officer-CEOs post median tenure of five years against four for the broader S&P 500, average tenure of 7.2 against 4.5, and market-beating performance across the group. When the population reaches executive-level roles, it outperforms. The market has been telling us for decades that it undervalues this leadership pool. Most of us have not been listening.",
      },
      {
        type: "paragraph",
        text: "A subset of non-defense for-profits has partly heard the signal. Amazon, JPMorgan Chase, General Electric, Verizon, Boeing, and FedEx have all built structured veteran-hiring programs. Amazon met its pledge to hire one hundred thousand veterans and military spouses in January 2024. JPMorgan Chase's Military Pathways Development Program is a two-year rotational track that formally translates military roles into civilian ones and prepares veterans for leadership positions at the firm. Verizon employs more than ten thousand veterans and military-connected team members and has ranked repeatedly among the top military-friendly employers.",
      },
      {
        type: "paragraph",
        text: "FedEx traces its association with the military to its 1971 founding by the late Fred W. Smith, a Marine two years out of Vietnam combat, and describes that heritage in its own careers materials as ingrained in the company's DNA. Its named partnerships include Hiring Our Heroes, DoD SkillBridge, American Corporate Partners, and the Marine Corps Scholarship Foundation.",
      },
      {
        type: "paragraph",
        text: "The company features on its careers page a former U.S. Army Command Sergeant Major who joined FedEx in 2016 and helps lead the firm's veteran initiatives. He represents precisely the senior noncommissioned officer profile most of corporate America still cannot read. Its internal recognition award is called Bravo Zulu, the U.S. Navy signal for “job well done.”",
      },
      {
        type: "paragraph",
        text: "These are meaningful outcomes and the companies deserve credit for them.",
      },
      {
        type: "paragraph",
        text: "But those programs, almost without exception, target the broader veteran pipeline rather than the senior officer and senior noncommissioned officer population. The retiring O-6 with a thirty-year command and staff record, and the retiring E-9 with twenty-five years of running formations of a hundred and fifty, do not appear on the intake side of Military Pathways.",
      },
      {
        type: "paragraph",
        text: "They appear, if they appear at all, on the executive-search side of the recruiting industry, and the recruiting industry has not solved the translation problem at that level. A managing director evaluating a Command Sergeant Major cannot easily read what he is looking at. So the resume moves to the bottom of the pile, and the corporate executive suite continues to be staffed from formation paths the search partner already knows how to underwrite.",
      },
      {
        type: "paragraph",
        text: "This matters because the shape of your executive team decides what your organization can absorb when the environment changes. A leadership team formed inside one industry's assumptions will read the next disruption through those assumptions. A leadership team assembled from multiple formation paths, one from consulting, one from operations, one from a science background, one from a military command track, will read the same disruption through several lenses and argue productively about which lens is right.",
      },
      {
        type: "paragraph",
        text: "The homogeneous team optimizes. The heterogeneous team adjusts. Both matter. Most executive teams in non-defense corporate America are optimized for optimization and have systematically undersourced from the population trained specifically to adjust under uncertainty.",
      },
      {
        type: "pullquote",
        text: "The homogeneous team optimizes. The heterogeneous team adjusts.",
      },
      {
        type: "paragraph",
        text: "None of which is a case for hiring a military retiree because they are a military retiree. It is a case for asking, honestly, what formation paths your organization is drawing from and which ones it is not, and whether the pattern was the result of deliberate choice or of what the search partner and the hiring committee already knew how to read.",
      },
      {
        type: "paragraph",
        text: "So I will ask again.",
      },
      {
        type: "paragraph",
        text: "Where did your executives learn to lead?",
      },
      {
        type: "paragraph",
        text: "If your honest answer is “the same handful of places, and we would not know how to interview someone who did not,” that is the answer.",
      },
    ],
  },
];

/** Newest first — used for the insights index and the home preview. */
export const essaysByDate: Essay[] = [...essays].sort(
  (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
);

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
