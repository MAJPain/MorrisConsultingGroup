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
    slug: "the-quiet-work-of-governance",
    title: "The quiet work of governance",
    dek: "Why the best boards are the ones you never hear about.",
    topic: "GOVERNANCE",
    date: "June 2025",
    datetime: "2025-06-12",
    readingTime: "6 min read",
    author: "Sheldon Morris",
    body: [
      {
        type: "paragraph",
        text: "Governance rarely announces itself. When a board is working as it should, the enterprise simply moves with a certain steadiness — decisions are made in season, authority is exercised without drama, and the institution absorbs shocks that would unsettle a lesser one. The absence of noise is not the absence of work. It is the work.",
      },
      {
        type: "paragraph",
        text: "The boards that struggle are seldom short of talent. They are short of clarity: about who decides, about what the board owes the enterprise that the management cannot supply, and about the difference between oversight and interference. These are not questions of intelligence. They are questions of discipline.",
      },
      {
        type: "heading",
        text: "Oversight is a posture, not an event",
      },
      {
        type: "paragraph",
        text: "A board that treats governance as a quarterly ritual will find itself perpetually behind the enterprise it is meant to steward. The material questions — succession, risk, the integrity of the strategy — do not arrive on the calendar. They accumulate quietly and then present themselves all at once, usually at the least convenient hour.",
      },
      {
        type: "pullquote",
        text: "The absence of noise is not the absence of work. It is the work.",
      },
      {
        type: "paragraph",
        text: "The remedy is not more meetings. It is a board that understands its own standard and holds to it between meetings — that knows what it is watching for, and why. That standard is set slowly, through candor that most boards find uncomfortable and the best boards make routine.",
      },
      {
        type: "heading",
        text: "The value of an outside read",
      },
      {
        type: "paragraph",
        text: "There is a particular usefulness in counsel that owes nothing to the organization's internal politics. An outside adviser can say the plain thing that everyone in the room already knows and no one has been positioned to say. Often that is the whole of the contribution — and it is worth a great deal.",
      },
      {
        type: "paragraph",
        text: "Good governance is unglamorous by design. It is the discipline of attending to the important before it becomes the urgent. Boards that master it are rarely celebrated for it, which is exactly as it should be.",
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
