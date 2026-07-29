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
  date: string; // display date
  datetime: string; // ISO date for <time>
  readingTime: string;
  author: string;
  body: EssayBlock[];
};

export const essays: Essay[] = [
  {
    slug: "leading-when-the-ground-shifts",
    title: "Leading when the ground shifts",
    dek: "Resilience is built before the crisis, not during it.",
    topic: "RESILIENCE",
    date: "June 2025",
    datetime: "2025-06-12",
    readingTime: "5 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Every organization is tested eventually. The test rarely arrives on schedule, and it seldom takes the shape anyone rehearsed. What separates the institutions that come through from the ones that do not is not the absence of disruption. It is what they built before the disruption arrived.",
      },
      {
        type: "heading",
        text: "Resilience is decided early",
      },
      {
        type: "paragraph",
        text: "From the outside, resilience can look like luck. Inside, it is the product of unglamorous choices made in calm weather: a leadership team that knows how it will decide when information is scarce, a balance sheet with room to absorb a shock, a culture candid enough to surface bad news while it is still small. None of it can be assembled once the ground is already moving.",
      },
      {
        type: "pullquote",
        text: "From the outside, resilience can look like luck. Inside, it is decided early.",
      },
      {
        type: "paragraph",
        text: "The organizations that struggle in a crisis are often the ones that were most confident before it. Success had quietly persuaded them that the conditions which produced it were permanent. When those conditions changed, they had no practice at changing with them.",
      },
      {
        type: "heading",
        text: "Steadiness is the first job",
      },
      {
        type: "paragraph",
        text: "In the moment, a leader's most important contribution is not a plan. It is composure. People take their cue from the person in charge, and an organization that senses alarm at the top will manufacture its own. The leader who stays steady names the situation plainly, decides at the pace the moment demands, and keeps the enterprise fixed on what still matters. That composure buys back the one thing a crisis destroys fastest: the time to think.",
      },
      {
        type: "paragraph",
        text: "Steadiness is not the same as certainty. A leader will rarely have enough information, and waiting for more is often its own decision. The work is to act on the best available read, say honestly what is known and what is not, and adjust as the picture clears.",
      },
      {
        type: "heading",
        text: "What the aftermath is for",
      },
      {
        type: "paragraph",
        text: "A crisis is a poor time to learn what an organization is made of, but an honest one. It shows which relationships were real, which processes were theater, and which leaders can be relied upon when the script runs out. The institutions that recover best treat the aftermath as instruction. They study what held, what broke, and what they will build differently before the next test arrives. Because it will.",
      },
    ],
  },
  {
    slug: "succession-begins-earlier-than-you-think",
    title: "Succession begins earlier than you think",
    dek: "The most important leadership decision is usually made too late.",
    topic: "SUCCESSION",
    date: "April 2025",
    datetime: "2025-04-03",
    readingTime: "5 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Ask a board when it should begin planning for the succession of its chief executive, and the honest answer is: earlier than it is comfortable to. Succession is the truest test of an institution's health, and it is almost always addressed a year or two after the moment it should have begun.",
      },
      {
        type: "paragraph",
        text: "The reluctance is understandable. To plan for a leader's departure is to acknowledge that the enterprise is larger than the person leading it — a truth that capable leaders accept in principle and resist in practice. But an institution that cannot survive its own founder is not yet an institution. It is a personality with a payroll.",
      },
      {
        type: "pullquote",
        text: "An institution that cannot survive its own founder is not yet an institution.",
      },
      {
        type: "heading",
        text: "Succession is a process, not a name",
      },
      {
        type: "paragraph",
        text: "The common error is to treat succession as the selection of a successor — a single decision, deferred until it can no longer be deferred. In fact the naming of a successor is the last step in a long sequence: the deliberate development of leaders, the honest assessment of readiness, and the cultural work of preparing an organization to be led differently.",
      },
      {
        type: "paragraph",
        text: "Done well, this work is nearly invisible. Candidates are stretched before they are ready and supported when they falter. The board comes to know them not through a presentation but through years of observed judgment. When the moment arrives, the decision has, in a sense, already been made.",
      },
      {
        type: "heading",
        text: "The cost of waiting",
      },
      {
        type: "paragraph",
        text: "Succession addressed under pressure is succession addressed poorly. The candidate pool narrows to whoever is available; the board negotiates from weakness; the organization reads the haste as a signal. What might have been an orderly transition becomes a rupture. The remedy is unremarkable and difficult: begin before you need to.",
      },
    ],
  },
  {
    slug: "strategy-is-a-discipline-not-a-document",
    title: "Strategy is a discipline, not a document",
    dek: "The plan is the easy part. Holding to it is the work.",
    topic: "STRATEGY",
    date: "February 2025",
    datetime: "2025-02-18",
    readingTime: "5 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Most organizations do not suffer from a shortage of strategy. They suffer from a shortage of the discipline that strategy demands. The document is written, circulated, and admired — and then the organization returns to doing what it was already doing, now with a clearer sense of what it ought to be doing instead.",
      },
      {
        type: "paragraph",
        text: "A strategy is a set of choices about where to concentrate a finite supply of attention, capital, and talent. Its power lies entirely in what it declines to pursue. A strategy that permits everything is not a strategy; it is an inventory of hopes.",
      },
      {
        type: "pullquote",
        text: "A strategy that permits everything is not a strategy; it is an inventory of hopes.",
      },
      {
        type: "heading",
        text: "The test is what you stop doing",
      },
      {
        type: "paragraph",
        text: "The honest measure of a strategy is not the initiatives it launches but the ones it ends. Every organization can add. The discipline lies in subtraction — in retiring the comfortable habit, the legacy line of business, the project that survives because no one has been asked to defend it.",
      },
      {
        type: "paragraph",
        text: "This is where leadership earns its keep. To hold an organization to its stated priorities, quarter after quarter, against the constant pull toward the familiar, is unglamorous work. It is also the work that separates a strategy that changes the enterprise from one that decorates a shelf.",
      },
      {
        type: "heading",
        text: "Clarity is a kindness",
      },
      {
        type: "paragraph",
        text: "A well-held strategy is a gift to the people carrying it out. It tells them what matters, and — just as usefully — what does not. It spares them the exhausting ambiguity of trying to do everything at once. Clarity, imposed with discipline and communicated with candor, is among the most generous things a leader can offer.",
      },
    ],
  },
  {
    slug: "on-leading-what-you-did-not-build",
    title: "On leading what you did not build",
    dek: "Inheriting an institution is its own kind of founding.",
    topic: "LEADERSHIP",
    date: "December 2024",
    datetime: "2024-12-09",
    readingTime: "4 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "There is a particular challenge in leading an institution you did not create. The founder leads with the authority of origin; the inheritor must earn an authority of a different kind — one drawn from stewardship rather than creation. The two are often confused, and the confusion is costly.",
      },
      {
        type: "paragraph",
        text: "The temptation is to lead by demolition: to signal command by dismantling what came before. It is a natural impulse and almost always a mistake. An institution carries in it the accumulated judgment of everyone who built it. To discard that inheritance wholesale is not boldness. It is waste dressed as vision.",
      },
      {
        type: "pullquote",
        text: "An institution carries in it the accumulated judgment of everyone who built it.",
      },
      {
        type: "heading",
        text: "Stewardship before change",
      },
      {
        type: "paragraph",
        text: "The leader who inherits well begins by understanding what they have inherited — why the organization does what it does, which of its habits are wisdom and which are merely age. Only then can change be made with precision rather than force. The aim is not to preserve the institution unchanged, but to change it without breaking what made it worth inheriting.",
      },
      {
        type: "paragraph",
        text: "This is quiet, patient work, and it does not photograph well. But it is the work by which an inherited institution becomes, in time, genuinely one's own — and is handed on, in turn, better than it was received.",
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
