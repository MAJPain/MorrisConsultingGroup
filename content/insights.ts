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
  readingTime: string;
  author: string;
  body: EssayBlock[];
};

export const essays: Essay[] = [
  {
    slug: "who-did-you-send-forward",
    title: "Who did you send forward?",
    dek: "Data tells you what happened. A person tells you what is happening now.",
    topic: "GROUND TRUTH",
    datetime: "2026-07-15",
    readingTime: "6 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "I ask because every organization runs on a picture of the ground it cannot personally stand on. The picture is only as good as the person the organization sent to see it. That is a fact that has been true for centuries, and it is still not, in most organizations I sit with, treated as a decision worth deliberate investment.",
      },
      {
        type: "paragraph",
        text: "I am not here to argue against data. Data informs future decisions. It is the disciplined record of what an organization has been able to observe, and in a mature enterprise it is indispensable for planning and forecasting. What data cannot do is tell you what is happening right now in the place where the decision-maker is not. Something has to happen, be observed, recorded, transmitted, and summarized before it appears on the dashboard. By the time a leader sees a signal in the numbers, the signal is history. Data is for what comes next. It is not built to tell you what is happening now.",
      },
      {
        type: "pullquote",
        text: "By the time a leader sees a signal in the numbers, the signal is history.",
      },
      {
        type: "paragraph",
        text: "What tells you what is happening now is a person. Specifically, it is a person the organization has trained and trusted and deliberately placed at the point of contact with whatever ground it needs to understand. The decision about who to send forward, and how much to invest in them before they get there, is one most organizations have never made consciously. They send whoever was available. They train them on procedure. They evaluate them on activity. And then they wonder why the signal coming back is thin, late, or unactionable.",
      },
      {
        type: "paragraph",
        text: "I led a scout platoon before I commanded a company, and much of what I know about ground truth I learned there. Scouts moved ahead of the main body. They were the eyes and ears of the battalion — the commander's picture of the ground before he committed six or eight hundred people to it. Scouts were among the most selective positions in the unit. You did not send weak soldiers forward. You sent your best. And you invested in them before you sent them, because the quality of what came back depended entirely on the quality of who you sent.",
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
        text: "Civilian organizations have the same geometry and often the wrong investment in the people who would produce ground truth. The caseworker sees what is changing in the neighborhood a full quarter before the demographic dashboard shows it. The branch manager knows a small-business client is in trouble long before the loan report flags it. The teacher watching a class of thirteen-year-olds knows, in September, which of them will not be in school in April. These are the scouts of the sector — the enablers of the mission at its point of contact. Most sectors do not treat them as such. They are the lowest-paid, least developed, most quickly replaced positions in the organizational chart, and their reporting is rarely routed to any table where a decision that matters is being made.",
      },
      {
        type: "paragraph",
        text: "I have my own version of what a leader owes the ground. Wherever I go, regardless of the weather, my first day on the ground I run the city I am in. Not the concierge route. The city. When I run, it is for me — to see it, to smell it, to taste it, to interact with the people who live and work in it, and to better understand the environment I am about to operate in. That is how I get grounded. It is not a leadership technique and I am not recommending it as one. It is how I make sure the meeting I walk into on day two is informed by something the meeting itself cannot give me.",
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
    dek: "Most organizations answer this by default, not by design.",
    topic: "CULTURE",
    datetime: "2026-06-15",
    readingTime: "7 min read",
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
        text: "The question matters more now than it did five years ago. The nonprofit sector — particularly the health and human-services subsector where I have spent much of my post-military career — is in a documented leadership crisis. Turnover runs at nineteen percent against roughly twelve percent in other sectors, two-thirds of chief executives have no written succession plan, and a 2025 Center for Effective Philanthropy survey found ninety-five percent of nonprofit leaders concerned about staff burnout, with nearly half struggling to fill open positions. That is not a hiring problem. It is a receiving-culture problem. Sectors under pressure eventually have to bring in talent formed elsewhere. Most believe they are prepared to do that. Fewer are.",
      },
      {
        type: "pullquote",
        text: "That is not a hiring problem. It is a receiving-culture problem.",
      },
      {
        type: "paragraph",
        text: "A distinction is worth drawing before going further, because most treatments of this topic collapse it. There is a difference between a veteran and a military retiree. A veteran served — four years, six, eight — and separated. A retiree served twelve years or more, often much more, and drew a pension on the way out. The former is a talent pool. The latter is a leadership pool, and the difference matters more than either the sector or its critics generally acknowledge.",
      },
      {
        type: "paragraph",
        text: "The retiree specifically — the senior noncommissioned officer, the field-grade officer, the colonel who ran a battalion or a brigade or a program office — arrives in a civilian role carrying twelve to thirty years of formal leadership development. That development is not incidental. It is structural. No one spends that long in the profession of arms without being trained, evaluated, mentored, and rotated through a series of increasingly complex commands designed specifically to produce judgment under pressure and the habit of building the person behind you. What a nonprofit executive team spends a quarter escalating is often what a lieutenant colonel decided before lunch on a Tuesday in a place with no reliable electricity. That is not because the nonprofit team is unserious. It is because what is considerable to one culture is routine in another, and neither side usually sees the calibration it is working from.",
      },
      {
        type: "paragraph",
        text: "So one might expect the sector, having identified a leadership pipeline problem, to have organized itself to absorb this population. It has not. Indeed's 2025 workforce survey found sixty-four percent of veterans with more than eleven years of service report feeling underemployed or underutilized in their civilian roles. Two out of every three of the people I am describing are being wasted.",
      },
      {
        type: "paragraph",
        text: "That the sector could absorb them is not in doubt. Another industry demonstrates as much every day. Roughly a quarter of Lockheed Martin's workforce is veterans, according to the company's own reporting. Booz Allen, Leidos, and their peers run higher. Federal contractor hiring disclosures indicate more than forty-seven thousand veterans were hired across the industry in 2025 alone. This is not charity. Federal law requires them to meet hiring benchmarks, and their customer is the military, so absorbing military talent is business necessity rather than choice. The receiving structure exists because the industry decided it needed to exist.",
      },
      {
        type: "paragraph",
        text: "In the sectors that have not built the receiving structure, what shows up instead is a set of practices I have come to call whiteboard deep. Leadership development named on the strategic plan and absent from the calendar. Succession expectations declared in the annual report and unassigned in the operating rhythm. Onboarding for outside senior hires that ends the second week and never really begins. I have watched succession plans die on whiteboards inside this sector, and I have watched senior military talent walk past those same whiteboards without either side recognizing what was there.",
      },
      {
        type: "paragraph",
        text: "The question is not really about veterans. Veterans are the sharpest case because the mismatch is the most visible there, and because when it goes wrong, it goes wrong in ways that reflect on both parties and surprise them both. The question is about whether the culture you have built — the hiring instincts, the promotion patterns, the quiet assumptions about who succeeds in your organization and who does not — was built to absorb someone whose formation happened somewhere else.",
      },
      {
        type: "paragraph",
        text: "Most organizations answer this question by default rather than by design. They hire from inside their industry because they trust the credentials they know how to read. They promote from within because it feels safer. They interpret difference as risk rather than as capability. And when the sector shifts under them, as this one is shifting now, they find themselves trying to solve problems with the same instincts that produced the problems in the first place.",
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
];

/** Newest first — used for the insights index and the home preview. */
export const essaysByDate: Essay[] = [...essays].sort(
  (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
);

export function getEssay(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}
