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
    slug: "leading-in-uncertainty",
    title: "Leading in uncertainty",
    dek: "You will not have the full picture. Lead anyway.",
    topic: "UNCERTAINTY",
    date: "June 2026",
    datetime: "2026-06-16",
    readingTime: "4 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Most of the decisions that matter get made without enough information. The market moves, a competitor does something you did not expect, a key person leaves, and you have to act before the picture is clear. Waiting for certainty feels responsible, but it is usually just a slower way of deciding, and often a worse one.",
      },
      {
        type: "heading",
        text: "Decide at the speed of the problem",
      },
      {
        type: "paragraph",
        text: "Under pressure, the instinct is either to freeze or to rush. Neither helps. The better habit is to match your pace to the decision in front of you. Move quickly on the things that are cheap to reverse, and take your time on the few that are not. Most choices are more reversible than they feel in the moment.",
      },
      {
        type: "pullquote",
        text: "Move fast on what is cheap to reverse. Slow down on what is not.",
      },
      {
        type: "paragraph",
        text: "It also helps to say plainly what you know, what you are assuming, and what you are still guessing at. Naming the assumptions keeps you honest when the facts change, and it gives the people around you room to speak up when one of those assumptions turns out to be wrong.",
      },
      {
        type: "heading",
        text: "People watch how you carry it",
      },
      {
        type: "paragraph",
        text: "In an uncertain moment, a team reads the leader more closely than the memo. Confidence that ignores the facts reads as denial, and visible anxiety travels faster than any email. What steadies people is a leader who is honest about what is hard, clear about the next step, and calm about not having every answer yet.",
      },
      {
        type: "paragraph",
        text: "Uncertainty is not a phase that ends. It is the normal condition of running anything worth running. The leaders who handle it well are not the ones who guess right every time. They are the ones who keep deciding, keep learning, and keep the organization moving while the ground is still settling.",
      },
    ],
  },
  {
    slug: "leading-when-the-ground-shifts",
    title: "Leading when the ground shifts",
    dek: "Resilience is built before the crisis, not during it.",
    topic: "RESILIENCE",
    date: "November 2025",
    datetime: "2025-11-18",
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
    date: "May 2025",
    datetime: "2025-05-20",
    readingTime: "5 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Ask a board when it should start planning to replace its chief executive, and the honest answer is: sooner than feels comfortable. Succession tells you more about a company's health than almost anything else, and most boards get to it a year or two later than they should.",
      },
      {
        type: "paragraph",
        text: "The reluctance makes sense. Planning for a leader's exit means admitting the company is bigger than the person running it, and capable leaders accept that more easily in principle than in practice. But a company that cannot run without its founder is not really a company yet. It is a personality with a payroll.",
      },
      {
        type: "pullquote",
        text: "A company that cannot run without its founder is not really a company yet.",
      },
      {
        type: "heading",
        text: "The work starts years early",
      },
      {
        type: "paragraph",
        text: "The common mistake is to treat succession as picking a successor, a single decision put off until it cannot be put off any longer. Naming the person is actually the last step. Before it comes the slow part: developing leaders over years, assessing honestly who is ready, and getting the organization used to the idea of being led by someone new.",
      },
      {
        type: "paragraph",
        text: "Done well, this is nearly invisible. Candidates get stretched before they feel ready and supported when they stumble. The board comes to know them by watching them decide over years, not through a single presentation. By the time the seat opens, the choice has mostly made itself.",
      },
      {
        type: "heading",
        text: "The cost of waiting",
      },
      {
        type: "paragraph",
        text: "Succession handled under pressure is handled badly. The pool shrinks to whoever happens to be available, the board negotiates from weakness, and the organization reads the rush as a signal. What could have been an orderly handoff turns into a rupture. The fix is simple to say and hard to do: start before you have to.",
      },
    ],
  },
  {
    slug: "strategy-is-a-discipline-not-a-document",
    title: "Strategy is a discipline, not a document",
    dek: "The plan is the easy part. Holding to it is the work.",
    topic: "STRATEGY",
    date: "November 2024",
    datetime: "2024-11-06",
    readingTime: "5 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Most companies are not short on strategy. They are short on the discipline strategy takes. The deck gets written, circulated, and admired, and then everyone goes back to doing roughly what they were doing before, now with a clearer sense of what they should be doing instead.",
      },
      {
        type: "paragraph",
        text: "A strategy is a set of choices about where to put a limited supply of attention, money, and talent. Its power comes entirely from what it rules out. A strategy that allows everything is just a wish list with a cover page.",
      },
      {
        type: "pullquote",
        text: "A strategy that allows everything is just a wish list with a cover page.",
      },
      {
        type: "heading",
        text: "The test is what you stop doing",
      },
      {
        type: "paragraph",
        text: "The real measure of a strategy is not what it launches but what it ends. Anyone can add. The hard part is subtraction: retiring the comfortable habit, the legacy business line, the project that survives only because no one has been asked to justify it.",
      },
      {
        type: "paragraph",
        text: "This is where leadership earns its keep. Holding an organization to its stated priorities, quarter after quarter, against the constant pull back toward the familiar, is unglamorous work. It is also what separates a strategy that changes the company from one that decorates a shelf.",
      },
      {
        type: "heading",
        text: "Clarity is a kindness",
      },
      {
        type: "paragraph",
        text: "A strategy people can actually follow is a gift to the people following it. It tells them what matters and, just as usefully, what does not. It spares them the exhaustion of trying to do everything at once. Clear priorities, held with discipline and explained plainly, are among the most generous things a leader can give.",
      },
    ],
  },
  {
    slug: "on-leading-what-you-did-not-build",
    title: "On leading what you did not build",
    dek: "Inheriting an institution is its own kind of founding.",
    topic: "LEADERSHIP",
    date: "May 2024",
    datetime: "2024-05-14",
    readingTime: "4 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Leading something you did not build is its own kind of challenge. A founder leads with the authority of having created the thing. Someone who inherits it has to earn a different kind of authority, one that comes from stewardship rather than creation. People confuse the two, and the confusion is expensive.",
      },
      {
        type: "paragraph",
        text: "The temptation is to lead by demolition, to signal authority by tearing down what came before. It is a natural instinct and almost always a mistake. An organization holds the accumulated judgment of everyone who built it. Throwing that away wholesale rarely reads as boldness. More often it is waste dressed up as vision.",
      },
      {
        type: "pullquote",
        text: "An organization holds the accumulated judgment of everyone who built it.",
      },
      {
        type: "heading",
        text: "Stewardship before change",
      },
      {
        type: "paragraph",
        text: "The leader who inherits well starts by understanding what they inherited: why the organization does what it does, which habits are hard-won wisdom and which are just old. Only then can you change things with precision instead of force. The goal is not to freeze the place as you found it, but to change it without breaking what made it worth inheriting.",
      },
      {
        type: "paragraph",
        text: "This is patient, quiet work, and it does not photograph well. But it is how an inherited organization becomes, over time, genuinely your own, and how you hand it on in better shape than you found it.",
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
