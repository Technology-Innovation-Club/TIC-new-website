export type CriterionId = "C1" | "C2" | "C3" | "C4" | "C5" | "C6";

export interface Criterion {
  id: CriterionId;
  name: string;
  step: string;
  max: number;
  question: string;
  bands: { range: string; meaning: string }[];
}

export const CRITERIA: Criterion[] = [
  {
    id: "C1",
    name: "Problem understanding",
    step: "Understand",
    max: 15,
    question: "Did you frame a specific user, setting, and constraint, and let it shape the design?",
    bands: [
      { range: "0-3", meaning: "Off-problem, or restates the stream title." },
      { range: "4-7", meaning: "Names the problem, but the user is generic." },
      { range: "8-11", meaning: "A specific user in a specific setting, with a real constraint." },
      { range: "12-15", meaning: "Root causes named. Constraints visibly shape the design." },
    ],
  },
  {
    id: "C2",
    name: "Research and evidence",
    step: "Research",
    max: 15,
    question: "Did you back your claims with sources, existing solutions, or real users?",
    bands: [
      { range: "0-3", meaning: "No research shown." },
      { range: "4-7", meaning: "Statistics with no source, or generic background." },
      { range: "8-11", meaning: "Cited sources and a look at existing solutions and their gaps." },
      { range: "12-15", meaning: "Primary research, or data that changed a design decision." },
    ],
  },
  {
    id: "C3",
    name: "Solution design",
    step: "Ideate",
    max: 15,
    question: "Did you justify your decisions, scope on purpose, and name the risks?",
    bands: [
      { range: "0-3", meaning: "No reasoning for the solution." },
      { range: "4-7", meaning: "Lists features without justifying them." },
      { range: "8-11", meaning: "Justified decisions, a deliberate MVP, Nigerian feasibility." },
      { range: "12-15", meaning: "Alternatives compared, trade-offs and risks handled." },
    ],
  },
  {
    id: "C4",
    name: "Working prototype",
    step: "Prototype",
    max: 35,
    question: "Can a reviewer open it, and does the core promise of the stream actually work?",
    bands: [
      { range: "0-7", meaning: "Broken, private, login-walled, or a placeholder." },
      { range: "8-16", meaning: "Opens, but a static mockup. The core promise does not work." },
      { range: "17-25", meaning: "Core flow works, but logic is shallow, hard coded, or buggy." },
      { range: "26-35", meaning: "Real logic, edge cases handled, close to the stream brief." },
    ],
  },
  {
    id: "C5",
    name: "Process transparency",
    step: "Process brief",
    max: 10,
    question: "Does your brief show what you tried, what broke, and what changed?",
    bands: [
      { range: "0-2", meaning: "No brief, or only a product description." },
      { range: "3-5", meaning: "Steps listed, but no problems, iterations, or decisions." },
      { range: "6-8", meaning: "The real path: what broke, what changed, which tools did what." },
      { range: "9-10", meaning: "All of that, plus honest limits and a concrete next step." },
    ],
  },
  {
    id: "C6",
    name: "Commitment and purpose",
    step: "Statement",
    max: 10,
    question: "Is your reason for joining specific, and is there proof you already build?",
    bands: [
      { range: "0-2", meaning: "Generic filler." },
      { range: "3-5", meaning: "Sincere but generic. No evidence of past building." },
      { range: "6-8", meaning: "Specific purpose, or real prior work." },
      { range: "9-10", meaning: "Specific purpose, prior work, and effort beyond the minimum." },
    ],
  },
];

export const LATE_PENALTY = 5;

export interface CriterionScore {
  score: number;
  evidence: string;
  gap: string;
  action: string;
}

export interface JudgedEntry {
  tid: string;
  name: string;
  track: string;
  title: string;
  prototypeUrl: string;
  late: boolean;
  scores: Record<CriterionId, CriterionScore>;
  total: number;
  verdict: string;
  strongestPoint: string;
  biggestGap: string;
  improvements: string[];
}

export interface RankedEntry extends JudgedEntry {
  rank: number;
}

export interface CohortInsight {
  title: string;
  detail: string;
}

export function rankEntries(entries: JudgedEntry[]): RankedEntry[] {
  return entries
    .toSorted((a, b) => b.total - a.total || b.scores.C4.score - a.scores.C4.score)
    .map((entry, i) => ({ ...entry, rank: i + 1 }));
}

export const TOP_COUNT = 5;

export function pointLosses(entry: JudgedEntry): { criterion: Criterion; lost: number }[] {
  return CRITERIA.map((criterion) => ({
    criterion,
    lost: criterion.max - entry.scores[criterion.id].score,
  }))
    .filter((loss) => loss.lost > 0)
    .toSorted((a, b) => b.lost - a.lost);
}

export interface CohortGap {
  criterion: Criterion;
  averagePercent: number;
  belowHalf: number;
}

export function cohortGaps(entries: JudgedEntry[]): CohortGap[] {
  return CRITERIA.map((criterion) => {
    const percents = entries.map((e) => e.scores[criterion.id].score / criterion.max);
    return {
      criterion,
      averagePercent: Math.round((100 * percents.reduce((a, b) => a + b, 0)) / percents.length),
      belowHalf: percents.filter((p) => p < 0.5).length,
    };
  }).toSorted((a, b) => a.averagePercent - b.averagePercent);
}
