export interface Track {
  id: string;
  index: string;
  title: string;
  tagline: string;
  problem: string;
  challenge: string;
}

export const TRACKS: Track[] = [
  {
    id: "cybersecurity",
    index: "01",
    title: "Cybersecurity",
    tagline: "The Mobile Money Fraud Epidemic",
    problem:
      "With the rapid adoption of PoS agents and USSD banking in Nigeria, financial inclusion has grown, but so has social engineering fraud. Millions of unsophisticated internet users are losing their livelihoods to complex phishing and local 419 digital tactics.",
    challenge:
      "Design a prototype for a localized, highly accessible security or alert system that protects low-literacy users from digital financial fraud.",
  },
  {
    id: "game-dev",
    index: "02",
    title: "Game Development",
    tagline: "The Cultural Content Deficit",
    problem:
      "The African gaming market is growing exponentially, yet the vast majority of titles consumed reflect Western or Asian cultures. There is a massive gap in hyper-casual or narrative games that capture African mythology, local slang, or everyday realities like navigating Lagos traffic or campus life.",
    challenge:
      "Build a small simple playable prototype or an interactive narrative game that gamifies a uniquely Nigerian or African experience.",
  },
  {
    id: "web",
    index: "03",
    title: "Web (2.0 and 3.0)",
    tagline: "Trust Deficits in Agri-Supply Chains",
    problem:
      "Nigeria suffers from over 40 percent post-harvest loss due to fragmented supply chains, opaque pricing, and a lack of trust between rural farmers and urban off-takers.",
    challenge:
      "Develop a decentralized (Web3) traceability concept or a highly efficient (Web2) marketplace prototype that creates transparency, verifies product origin, and connects local farmers directly to bulk buyers.",
  },
  {
    id: "embedded",
    index: "04",
    title: "Embedded Systems and Hardware",
    tagline: "Micro-Grid and Power Analytics",
    problem:
      "Erratic power supply and frequent national grid collapses force Nigerian students and SMEs to rely on expensive, carbon-heavy petrol generators. Many cannot track power consumption, leading to massive energy and financial waste.",
    challenge:
      "Design an IoT dashboard or a simulated hardware system concept that helps small businesses or student hostels monitor power usage, switch to alternative energy sources automatically, or track solar battery health.",
  },
  {
    id: "media",
    index: "05",
    title: "Media",
    tagline: "Vernacular Misinformation at Scale",
    problem:
      "During critical national events, deepfakes, altered voice notes, and false reports spread like wildfire on encrypted platforms like WhatsApp. Traditional fact-checking platforms are too slow and often published only in English.",
    challenge:
      "Choose one: (1) as Minister of Information, design a proposal on how to address this using media platforms as a country, or (2) prototype a media verification tool, such as an automated WhatsApp bot or simple web interface, that helps everyday citizens verify news, images, or audio in real time.",
  },
  {
    id: "data-ai",
    index: "06",
    title: "Data Science and AI",
    tagline: "Primary Healthcare Triage",
    problem:
      "Nigeria has a severe doctor-to-patient ratio deficit (roughly 1 to 10,000 in some rural areas). Preventable diseases escalate because early symptoms are misdiagnosed or ignored due to the cost and time of visiting a clinic.",
    challenge:
      "Build a lightweight AI-driven diagnostic or triage prototype trained to assess early symptoms of common local ailments (like malaria or typhoid) and recommend whether a user needs immediate clinical attention.",
  },
];

export const TRACK_IDS = TRACKS.map((t) => t.id);

export function trackTitle(id: string): string {
  return TRACKS.find((t) => t.id === id)?.title ?? id;
}

export interface SubmissionInput {
  fullName: string;
  email: string;
  phone: string;
  track: string;
  projectTitle: string;
  prototypeUrl: string;
  processDocLink: string;
  portfolioUrl: string;
  statement: string;
  agreeInactive: boolean;
  agreeParticipate: boolean;
  agreeConduct: boolean;
  hasDocFile: boolean;
}

export type FieldErrors = Partial<Record<string, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isHttpUrl(value: string): boolean {
  try {
    const u = new URL(value.trim());
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateSubmission(input: SubmissionInput): FieldErrors {
  const errors: FieldErrors = {};
  if (!input.fullName.trim() || input.fullName.trim().length < 2) {
    errors.fullName = "Enter your full name.";
  }
  if (!EMAIL_RE.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!TRACK_IDS.includes(input.track)) {
    errors.track = "Choose one of the 6 challenge streams.";
  }
  if (!input.projectTitle.trim() || input.projectTitle.trim().length < 3) {
    errors.projectTitle = "Give your project a title (min 3 characters).";
  }
  if (!isHttpUrl(input.prototypeUrl)) {
    errors.prototypeUrl =
      "Paste a valid prototype link starting with http(s)://";
  }
  if (input.processDocLink.trim() && !isHttpUrl(input.processDocLink)) {
    errors.processDocLink = "Doc link must start with http(s)://";
  }
  if (!input.hasDocFile && !input.processDocLink.trim()) {
    errors.processDoc =
      "Attach your process brief file or paste a doc link (at least one is required).";
  }
  if (input.portfolioUrl.trim() && !isHttpUrl(input.portfolioUrl)) {
    errors.portfolioUrl = "Portfolio link must start with http(s)://";
  }
  const statement = input.statement.trim();
  if (statement.length < 50) {
    errors.statement =
      "Tell us why you want to join TIC (min 50 characters).";
  } else if (statement.length > 2000) {
    errors.statement = "Keep your statement under 2000 characters.";
  }
  if (!input.agreeInactive || !input.agreeParticipate || !input.agreeConduct) {
    errors.agreements = "All 3 TIC agreements are mandatory.";
  }
  return errors;
}

export const DEADLINE_ISO = "2026-09-17T23:59:59+01:00";
export const DEADLINE_LABEL = "Thursday, Sept 17th at Midnight (WAT)";

export const ALLOWED_DOC_MIMES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "text/markdown",
];

export const ALLOWED_DOC_EXTS = ["pdf", "doc", "docx", "txt", "md"];

export const MAX_DOC_BYTES = 10 * 1024 * 1024;
