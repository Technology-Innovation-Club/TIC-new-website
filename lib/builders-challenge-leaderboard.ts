import results from "./builders-challenge-results.json";
import { rankEntries, type CohortInsight, type JudgedEntry } from "./builders-challenge-judging";

export const JUDGED_AT = results.judgedAt;

export const INSIGHTS: CohortInsight[] = results.insights;

export const LEADERBOARD = rankEntries(results.entries as JudgedEntry[]);
