/**
 * Copy for /how-we-engage/athletic-advising — the second practice detail page,
 * counterpart to Community & Regional Banking Support in the signature-practices
 * set. Follows the locked six-section detail template (see
 * MCG_Detail_Page_Template_Lock.md): every section is two-column (rail + italic
 * descriptor left, body right), always expanded. This page carries no inline
 * body links; only the Section 6 CTA links out (to /contact).
 */

export type AthInline = string | { text: string; href: string };

export type AthEngagement = {
  name: string;
  body: AthInline[];
};

export type AthSection = {
  rail: string;
  descriptor: string;
  /** Plain body paragraphs (Sections 1, 2, 4, 5, and the lead of 6). */
  body?: string[];
  /** Section 3 only — three engagement blocks (H3 + paragraph). */
  engagements?: AthEngagement[];
  /** Section 6 only — closing CTA. */
  cta?: { label: string; href: string };
};

const ROUTES = {
  contact: "/contact",
} as const;

export const athHeader = {
  eyebrow: "ATHLETIC ADVISING",
  title: "Athletic Advising.",
  subtitle: "Developing the youths and young adults organizations invest in.",
  lede: "A specialized practice for the organizations investing in the whole-person development of their student-athletes and families.",
} as const;

export const athSections: AthSection[] = [
  {
    rail: "OVERVIEW",
    descriptor: "Whole-person development for student-athletes and families.",
    body: [
      "For educational institutions, clubs, and youth development programs investing in the whole-person development of their student-athletes and families, MCG serves as a specialized advisory practice. We work with organizations from collegiate through high school and youth development, and we engage directly with families when circumstances allow. The organization is the client; the student-athlete and family are the customer.",
      "The practice applies the same coaching methodology MCG uses with chief executives to the formative years that shape who these student-athletes become. It is grounded in our partners' lived experience competing at the collegiate level and launching athletic ventures, and in twenty-two years each of developing young adults at institutional scale. Both partners understand what a college athletic career actually asks of a young person, their family, and the organization that recruited them — and what happens when the athletic chapter ends.",
    ],
  },
  {
    rail: "WHO WE WORK WITH",
    descriptor: "Organizations committed to the student behind the athlete.",
    body: [
      "We work with the organizations that see their student-athletes as students first and athletes second — universities, colleges, secondary schools, clubs, and youth development programs that have made whole-person development a strategic commitment, not a marketing line. This includes athletic departments, admissions offices, and student-life leadership working across function to support the athletes they've recruited.",
      "Organizations typically reach out at moments where the developmental work needs external partnership: a graduating class of student-athletes preparing for the transition beyond competition, a program working through culture and respect challenges, a family engagement approach that needs an outside voice, or a cohort of underclass athletes whose development would benefit from structured coaching. Some come to us for defined cohort engagements. Others engage for ongoing advisory to their student-athlete development leadership.",
      "We also engage directly with families when circumstances allow — parents and guardians navigating the daily reality of a student-athlete life or the post-athletic transition. This direct engagement is scoped separately from organizational engagements and operates under the same principles.",
    ],
  },
  {
    rail: "THE ENGAGEMENTS",
    descriptor: "Anchoring engagements in student-athlete development.",
    engagements: [
      {
        name: "Post-Athletic Career Transition",
        body: [
          "For student-athletes and their families preparing for or navigating the transition beyond competitive sport. Whether the athletic career ends after high school, at graduation from college, or later, the transition involves questions of identity, purpose, career direction, and family relationships. We work with the student-athlete and, where appropriate, the family — through structured coaching engagements that typically begin twelve to eighteen months before the anticipated transition. It is developmental work at a moment where the discipline of athletic identity gives way to the discipline of adult life.",
        ],
      },
      {
        name: "Navigating Life as a Student-Athlete",
        body: [
          "For student-athletes and their families managing the daily reality of a competitive athletic career alongside academics, personal development, and family relationships. This engagement covers the balance of demands the athletic career places on time, energy, and identity, and helps student-athletes make choices that align with the adults they intend to become. Delivered through individual and small-group coaching engagements, with parallel family engagement where the organization supports it. The work is grounded in the recognition that these years shape not just an athletic career but the person who continues after it.",
        ],
      },
      {
        name: "Culture and Respect Coaching",
        body: [
          "For athletic programs, student-athlete cohorts, and families working through the culture and respect dynamics that shape how a team operates. This engagement addresses the specific questions of respect between athletes and coaches, respect within the team, and the family-coach relationship — dynamics that determine whether an athletic program produces the kind of young adults it recruits for. We work with athletic leadership, teams, and families in structured engagements that typically run three to six months.",
        ],
      },
    ],
  },
  {
    rail: "HOW WE WORK",
    descriptor: "How organizational investment reaches the student-athlete.",
    body: [
      "Every engagement begins with a private conversation with the organizational client — a president, athletic director, dean of students, club leadership, or head of student-athlete development. We scope in writing before any work begins.",
      "The client-customer distinction shapes how engagements operate. The organization is the client — they scope, sponsor, and fund the engagement. The student-athlete and family are the customer — they receive the coaching, advisory, and support. The engagement letter is with the organization. The confidentiality between MCG and the student-athlete is absolute, structured under agreements the organization and family both understand upfront. Where the organization is a sponsor of ongoing development, we agree on what feedback the sponsor receives about aggregate work versus individual sessions.",
      "Delivery is calibrated to the engagement. On post-athletic transition work, we typically engage twelve to eighteen months in structured monthly sessions. On navigating life as a student-athlete, we deliver through individual and small-group coaching over academic semesters. On culture and respect coaching, we work with programs and cohorts over three to six months. When we engage families directly outside of organizational sponsorship, the engagement letter is with the family and confidentiality operates on the same principles.",
    ],
  },
  {
    rail: "WHY MCG",
    descriptor: "Institutional-scale development, applied at the individual level.",
    body: [
      "Organizations that invest in whole-person development produce specific returns. Student-athletes complete their degrees at higher rates. Families become advocates and alumni. Programs develop culture that attracts the athletes and families they most want to recruit. The investment compounds beyond the athletic career.",
      "The distinctive value MCG brings is developmental methodology applied at institutional scale. Both partners spent twenty-two years leading the development of young adults through high-stakes environments where the outcomes were measured in character and readiness. That developmental discipline, applied at scale to hundreds of young adults through structured leader development at institutional level, is now available to organizations committed to the same work with their student-athletes.",
      "The methodology is the same one MCG uses with chief executives — applied to the formative years when identity and character take shape. This is what makes the practice distinctive from sports psychology, generic coaching, and family financial planning. It is executive-level developmental methodology delivered at the life stage where it does the most durable work.",
    ],
  },
  {
    rail: "BEGIN A CONVERSATION",
    descriptor: "Every engagement begins in confidence.",
    body: [
      "The practice does its best work when engaged early — while the developmental time is still available.",
    ],
    cta: { label: "Begin a conversation", href: ROUTES.contact },
  },
];
