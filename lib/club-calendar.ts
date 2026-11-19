export type EventKind =
  | "hackathon"
  | "drop"
  | "review"
  | "meeting"
  | "chat"
  | "visit"
  | "track"
  | "study"
  | "pause";

export type Place = "In person" | "Online" | "WhatsApp" | "Company office";

export type LevelName = "Mild" | "Hot" | "Fire";

export interface Level {
  name: LevelName;
  points: string[];
}

export interface Resource {
  label: string;
  href: string;
}

export interface PointGroup {
  title: string;
  points: string[];
}

export interface ClubEvent {
  id: string;
  start: string;
  end?: string;
  week?: number;
  title: string;
  kind: EventKind;
  place?: Place;
  tentative?: boolean;
  summary: string;
  groups?: PointGroup[];
  levels?: Level[];
  resources?: Resource[];
}

export interface Phase {
  id: string;
  title: string;
  range: string;
  intro: string;
  events: ClubEvent[];
}

export interface Book {
  title: string;
  author: string;
  learn: string;
  practice: string;
  link?: Resource;
}

export interface BookGroup {
  title: string;
  books: Book[];
}

export const KIND_LABELS: Record<EventKind, string> = {
  hackathon: "Mini hackathon",
  drop: "Drop",
  review: "Red Pen Week",
  meeting: "Club meeting",
  chat: "Live chat",
  visit: "Company visit",
  track: "Break Tracks",
  study: "Light week",
  pause: "No TIC activity",
};

export const LEVEL_GUIDE: { name: LevelName; meaning: string }[] = [
  { name: "Mild", meaning: "You want to try it and learn the main idea this week." },
  { name: "Hot", meaning: "You want to build it properly and learn how it works inside." },
  {
    name: "Fire",
    meaning: "You want to go all the way and build it like the people who build it for real.",
  },
];

export const LEVEL_RULES = [
  "The level is how far you want to go this week. It is not how good you are.",
  "You can pick a different level every week, and you can move up during the week.",
  "All levels are shown together. Nobody is ranked.",
  "You can use AI tools, but you must be able to explain every part of what you show.",
];

export const PHASES: Phase[] = [
  {
    id: "semester-1",
    title: "End of first semester",
    range: "28 Nov to 17 Dec 2026",
    intro: "One hackathon, one Drop, one showcase, then exams.",
    events: [
      {
        id: "mini-hackathon-1",
        start: "2026-11-28",
        title: "Mini hackathon 1: An AI-first e-learning platform",
        kind: "hackathon",
        place: "In person",
        tentative: true,
        summary:
          "Six hours at the whiteboard and the keyboard. We find what is wrong with the e-learning platform we use now, design a better one, and build as much as we can.",
        groups: [
          {
            title: "How the six hours run",
            points: [
              "Hour 1: everyone lists the problems they have with the current platform. We pick the three worst.",
              "Hour 2: we design at the board. Who uses it, what each person needs, what data we keep, and where AI helps.",
              "We think about security and scale. Who can see which course? What happens when every student opens it the night before a deadline?",
              "We cut the scope to one flow that we can finish from start to end.",
              "Hours 3 to 5: we build.",
              "Hour 6: we demo, and we say what we learned.",
            ],
          },
        ],
      },
      {
        id: "drop-1",
        start: "2026-11-30",
        end: "2026-12-04",
        title: "Drop 1: Rich text composer",
        kind: "drop",
        place: "Online",
        summary:
          "Build a text box that shows bold, italic, lists and links while you type, like the message box in WhatsApp or Notion. It looks simple. It is one of the hardest parts of the web to build well.",
        levels: [
          {
            name: "Mild",
            points: [
              "A text box with a Bold button and an Italic button that work on the selected text.",
              "Typing **word** makes it bold. Typing *word* makes it italic.",
              "The result can show in a second area under the box. Any library is allowed.",
            ],
          },
          {
            name: "Hot",
            points: [
              "One box only. The text changes in the same place you type.",
              "The cursor stays in the right place after every change.",
              "Undo and redo work, and pasted text comes in clean.",
              "No editor library: no Lexical, TipTap, ProseMirror, Slate or Quill.",
            ],
          },
          {
            name: "Fire",
            points: [
              "Store the text as your own data, and draw the screen from that data.",
              "Bold, italic, code, links and lists, with keyboard shortcuts.",
              "Undo as a list of changes. Safe paste from Google Docs or Word.",
              "It works with phone keyboards and with screen readers. No editor library.",
            ],
          },
        ],
        groups: [
          {
            title: "How to submit",
            points: [
              "Before the showcase on Fri 4 Dec, post a link that opens and the level you picked.",
              "Add three lines: what you built, what was hard, and what you learned.",
            ],
          },
        ],
        resources: [
          {
            label: "MDN: contenteditable",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable",
          },
          { label: "MDN: Selection", href: "https://developer.mozilla.org/en-US/docs/Web/API/Selection" },
          {
            label: "MDN: beforeinput",
            href: "https://developer.mozilla.org/en-US/docs/Web/API/Element/beforeinput_event",
          },
          { label: "The ProseMirror guide (read for ideas)", href: "https://prosemirror.net/docs/guide/" },
        ],
      },
      {
        id: "chat-school",
        start: "2026-12-02",
        title: "Live chat: Is school really helping us?",
        kind: "chat",
        place: "WhatsApp",
        tentative: true,
        summary: "An honest talk about education, skills, and how to make what we learn in school useful.",
        groups: [
          {
            title: "Questions to start the talk",
            points: [
              "Which course this semester made you better at something real? Which one did not?",
              "What did you learn outside class this year that mattered more than a course?",
              "How can we make what we learn in school useful?",
              "What can TIC do that the school cannot?",
            ],
          },
        ],
      },
      {
        id: "showcase-1",
        start: "2026-12-04",
        title: "Showcase",
        kind: "meeting",
        place: "In person",
        summary:
          "Anyone who has been building something comes and shows it. It does not matter how far you got.",
        groups: [
          {
            title: "About 3 minutes each",
            points: ["What I am building.", "How far I got.", "What I learned while building it."],
          },
        ],
      },
      {
        id: "chat-exams",
        start: "2026-12-06",
        title: "Live chat: Exam tips",
        kind: "chat",
        place: "WhatsApp",
        summary:
          "What has worked for us in exams. We are builders, and we also want to be excellent in class. We end by wishing everyone good luck.",
        groups: [
          {
            title: "Questions",
            points: [
              "What study method has worked for you? What has not?",
              "How do you plan revision when many papers are close together?",
              "How do you use AI to study without letting it think for you?",
              "How do you manage sleep, food and stress?",
            ],
          },
        ],
      },
      {
        id: "exams-1",
        start: "2026-12-07",
        end: "2026-12-17",
        title: "First semester exams",
        kind: "pause",
        summary: "No TIC activity. Good luck.",
      },
    ],
  },
  {
    id: "break",
    title: "The break",
    range: "18 Dec 2026 to 17 Jan 2027",
    intro: "Feedback on Drop 1, one light chat, and two weeks of focused practice.",
    events: [
      {
        id: "red-pen-1",
        start: "2026-12-18",
        end: "2026-12-23",
        title: "Red Pen Week: Rich text composer",
        kind: "review",
        place: "Online",
        summary:
          "We review the Drop 1 entries and post the feedback in the group. We also share a full solution and explain each design decision. You can post any other project for feedback too.",
        groups: [
          {
            title: "Every review answers three questions",
            points: [
              "What is good here?",
              "What should you change, and why?",
              "What is one thing to learn next?",
            ],
          },
        ],
      },
      {
        id: "chat-highlights",
        start: "2026-12-28",
        title: "Live chat: Our tech highlights of the year",
        kind: "chat",
        place: "WhatsApp",
        summary: "A light, friendly talk about the tech that stood out for us this year.",
        groups: [
          {
            title: "Questions",
            points: [
              "What tech news or product stood out for you this year?",
              "What did you build or learn this year that you are proud of?",
              "What do you want to learn in 2027?",
            ],
          },
        ],
      },
      {
        id: "break-tracks",
        start: "2027-01-04",
        end: "2027-01-15",
        title: "Break Tracks: Book Track and Project Track",
        kind: "track",
        place: "Online",
        summary:
          "Pick one track. Give it two hours a day, Monday to Friday, and post your progress in the group every day. You can start early, from Mon 21 Dec.",
        groups: [
          {
            title: "The two tracks",
            points: [
              "Book Track: pick one book and practise what it teaches. The goal is not to finish the book. The goal is to understand a few ideas deeply.",
              "Project Track: work on the idea you could not get to because of school.",
              "Your daily posts help us choose the awards on Fri 22 Jan.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "semester-2",
    title: "Second semester",
    range: "18 Jan to 2 Apr 2027",
    intro: "Two Drops, two hackathons, a company visit, and talks that go deep.",
    events: [
      {
        id: "welcome-back",
        start: "2027-01-22",
        week: 1,
        title: "Welcome back and awards",
        kind: "meeting",
        place: "In person",
        summary:
          "A light meeting. We welcome everyone back and give awards to the people who stood out during the break.",
      },
      {
        id: "drop-2",
        start: "2027-01-25",
        end: "2027-01-31",
        week: 2,
        title: 'Drop 2: How "Sign in with Google" works',
        kind: "drop",
        place: "Online",
        summary:
          "When you click \"Sign in with Google\", the website never sees your Google password. Google tells the website who you are. The rules for this are called OAuth. Find out how it really works.",
        levels: [
          {
            name: "Mild",
            points: [
              "Add Sign in with Google to a small app with a ready tool, for example Firebase Authentication, Auth.js or Clerk.",
              "Draw every step on paper, from the click to \"you are signed in\".",
            ],
          },
          {
            name: "Hot",
            points: [
              "No sign-in library. Do every step yourself with plain web requests.",
              "Check the state value, swap the code for tokens, and check the ID token.",
              "Make your own safe login cookie and a sign-out that works. Add PKCE.",
            ],
          },
          {
            name: "Fire",
            points: [
              "Be Google: build \"Sign in with TIC\", a small sign-in service that another member's app can use.",
              "Then attack it. Remove the state check, remove PKCE, allow any return address, and show each fix.",
            ],
          },
        ],
        resources: [
          { label: "OAuth Playground", href: "https://www.oauth.com/playground/" },
          { label: "OAuth 2.0 Simplified, Aaron Parecki", href: "https://www.oauth.com/" },
          {
            label: "Google: OAuth 2.0 for Web Server Applications",
            href: "https://developers.google.com/identity/protocols/oauth2/web-server",
          },
        ],
      },
      {
        id: "internships",
        start: "2027-01-29",
        week: 2,
        title: "How internships work, and how to use AI to get one",
        kind: "meeting",
        place: "In person",
        summary:
          "How internships work, what the excos learned from their own internships, and how to use AI to improve your chances of getting a top internship, in Nigeria or abroad.",
      },
      {
        id: "red-pen-2",
        start: "2027-02-01",
        end: "2027-02-05",
        week: 3,
        title: "Red Pen Week: Sign in with Google",
        kind: "review",
        place: "Online",
        summary: "Feedback on the Drop 2 entries. You can post any other project for feedback too.",
      },
      {
        id: "thinking",
        start: "2027-02-05",
        week: 3,
        title: "How great builders think",
        kind: "meeting",
        place: "In person",
        summary:
          "First principles thinking, systems thinking and higher-order thinking, with real case studies: Elon Musk, Ivan Sutherland, John Carmack and Edsger Dijkstra.",
        groups: [
          {
            title: "Three ways of thinking",
            points: [
              "First principles thinking: break a problem down to the facts you know are true, then build up from there.",
              "Systems thinking: look at all the parts together and how they affect each other.",
              "Higher-order thinking: follow the effects of a decision past the first result. Ask \"and then what?\"",
            ],
          },
          { title: "Book to read", points: ["Thinking, Fast and Slow, by Daniel Kahneman."] },
        ],
      },
      {
        id: "thinking-drop",
        start: "2027-02-08",
        end: "2027-02-12",
        week: 4,
        title: "Thinking Drop: Security in the age of AI",
        kind: "drop",
        place: "Online",
        summary:
          "Every PAU student now has an AI assistant that can read their school email and send messages for them. What can go wrong, and how do we make it safe? Pick one way of thinking and break the problem down.",
        levels: [
          { name: "Mild", points: ["A one-page breakdown or a drawing."] },
          {
            name: "Hot",
            points: [
              "The breakdown, plus a small AI assistant with one tool.",
              "Show a prompt injection: a hidden instruction that makes the AI do something you did not ask.",
            ],
          },
          {
            name: "Fire",
            points: [
              "All of that, plus a defence.",
              "Test it with 10 attacks, and report which ones got through.",
            ],
          },
        ],
      },
      {
        id: "share-breakdowns",
        start: "2027-02-12",
        week: 4,
        title: "Share your breakdowns",
        kind: "meeting",
        place: "In person",
        summary: "A short meeting. Some people show their breakdown or their attack, and we talk about which defences worked.",
      },
      {
        id: "mini-hackathon-2",
        start: "2027-02-20",
        week: 5,
        title: "Mini hackathon 2: Build a small LLM",
        kind: "hackathon",
        place: "In person",
        tentative: true,
        summary:
          "Build a small language model that answers a few questions with little training data, and understand every step of how LLMs work.",
        groups: [
          {
            title: "The full process, at the board",
            points: [
              "Collect the text, cut it into tokens, and turn each token into numbers.",
              "The transformer: each token looks at the tokens before it to decide what matters.",
              "Training: predict the next token, measure the error, adjust, repeat.",
              "Generation, and how ChatGPT goes further.",
            ],
          },
        ],
        levels: [
          { name: "Mild", points: ["Train a model that predicts the next letter on a small text, and make it write."] },
          {
            name: "Hot",
            points: ["Write a small transformer and your own tokenizer. Train it on question and answer pairs."],
          },
          {
            name: "Fire",
            points: [
              "Compare your model with a small open model that you fine-tune, then add a search step. Explain why each one wins or loses.",
            ],
          },
        ],
        resources: [
          { label: "What's in a Token? (Molly Rocket)", href: "https://www.youtube.com/watch?v=aQvSG8paVjM" },
          {
            label: "Deep Dive into LLMs like ChatGPT (Andrej Karpathy)",
            href: "https://www.youtube.com/watch?v=7xTGNNLPyMI",
          },
          {
            label: "Let's build GPT from scratch (Andrej Karpathy)",
            href: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
          },
        ],
      },
      {
        id: "company-visit",
        start: "2027-02-27",
        week: 6,
        title: "Company visit",
        kind: "visit",
        place: "Company office",
        tentative: true,
        summary:
          "We visit a company that ships software to very many people, and see how the work really happens. Company to be announced.",
      },
      {
        id: "tests",
        start: "2027-03-01",
        end: "2027-03-05",
        week: 7,
        title: "Tests week",
        kind: "pause",
        summary: "No TIC activity. Start the semester well in class.",
      },
      {
        id: "banking",
        start: "2027-03-12",
        week: 8,
        title: "How banking software works",
        kind: "meeting",
        place: "In person",
        summary:
          "What really happens when you send ₦5,000 to a friend at another bank, step by step, as simply as possible.",
        groups: [
          {
            title: "What we cover",
            points: [
              "How your bank checks you, and how it finds your friend's name.",
              "The ledger: every change is written two times, and both sides must balance.",
              "How the money moves between banks, and how banks settle later.",
              "Why \"debited but not credited\" happens, and how reversals work.",
            ],
          },
        ],
      },
      {
        id: "niche-topic",
        start: "2027-03-15",
        end: "2027-03-19",
        week: 9,
        title: "Learn one niche topic",
        kind: "study",
        place: "Online",
        summary:
          "Pick one topic that few people know and learn it this week. On Friday, post five sentences and one example in the group.",
        groups: [
          {
            title: "Topic ideas",
            points: [
              "Formal verification: proving with maths that a program is correct.",
              "CRDTs: how two people edit the same document at once.",
              "Unicode, DNS, B-trees, public key cryptography or garbage collection.",
            ],
          },
        ],
      },
      {
        id: "mini-hackathon-3",
        start: "2027-03-20",
        week: 9,
        title: "Mini hackathon 3: Build an AI agent from zero",
        kind: "hackathon",
        place: "In person",
        tentative: true,
        summary:
          "Build an AI agent with no agent framework, so that we understand every part. An agent is a model plus a harness: the program that gives the model tools, runs them, and sends the results back.",
        levels: [
          { name: "Mild", points: ["A loop that talks to a model and has one tool, for example a calculator."] },
          {
            name: "Hot",
            points: ["Three or more tools, including read a file and write a file. It asks you before it changes anything."],
          },
          {
            name: "Fire",
            points: [
              "A tool that runs commands in a safe sandbox, a way to shorten long conversations, and 10 test tasks to measure it.",
            ],
          },
        ],
        resources: [
          { label: "How to Build an Agent (Thorsten Ball)", href: "https://ampcode.com/how-to-build-an-agent" },
          {
            label: "Building effective agents (Anthropic)",
            href: "https://www.anthropic.com/engineering/building-effective-agents",
          },
        ],
      },
      {
        id: "red-pen-3",
        start: "2027-03-22",
        end: "2027-03-25",
        week: 10,
        title: "Red Pen Week: AI agents",
        kind: "review",
        place: "Online",
        summary: "Feedback on the agents from Mini hackathon 3. There is no Friday meeting this week because of Good Friday.",
      },
      {
        id: "showcase-2",
        start: "2027-04-02",
        week: 11,
        title: "Showcase: Everything we built this semester",
        kind: "meeting",
        place: "In person",
        summary: "Show anything you built since January: Drop entries, hackathon builds, or your own projects.",
      },
    ],
  },
];

export const BOOK_GROUPS: BookGroup[] = [
  {
    title: "How computers work",
    books: [
      {
        title: "Code: The Hidden Language of Computer Hardware and Software",
        author: "Charles Petzold",
        learn: "How a computer works, from switches to programs.",
        practice: "Build the circuits from each chapter in NandGame.",
      },
      {
        title: "The Elements of Computing Systems",
        author: "Noam Nisan and Shimon Schocken",
        learn: "Build a computer, from logic gates to a simple program.",
        practice: "Do the project at the end of each chapter.",
        link: { label: "Free course and tools", href: "https://www.nand2tetris.org/" },
      },
      {
        title: "Operating Systems: Three Easy Pieces",
        author: "Remzi and Andrea Arpaci-Dusseau",
        learn: "How an operating system runs many programs at once.",
        practice: "Do the homework programs at the end of each chapter.",
        link: { label: "Free to read online", href: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
      },
      {
        title: "Programming from the Ground Up",
        author: "Jonathan Bartlett",
        learn: "Assembly language, the language closest to the computer.",
        practice: "Write and run every example yourself.",
        link: { label: "Free to read online", href: "https://savannah.nongnu.org/projects/pgubook/" },
      },
    ],
  },
  {
    title: "Writing good software",
    books: [
      {
        title: "The Pragmatic Programmer",
        author: "David Thomas and Andrew Hunt",
        learn: "Good habits of a programmer.",
        practice: "Use one tip each day on your own project.",
      },
      {
        title: "A Philosophy of Software Design",
        author: "John Ousterhout",
        learn: "How to keep code simple as it grows.",
        practice: "Each day, make one part of your own project simpler.",
      },
      {
        title: "Grokking Algorithms",
        author: "Aditya Bhargava",
        learn: "Data structures and algorithms, with many pictures.",
        practice: "Write each algorithm yourself, then solve two problems with it.",
      },
      {
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        learn: "How big systems store and move data.",
        practice: "Build a small version of each idea, for example a key-value store that writes to a log file.",
      },
      {
        title: "Crafting Interpreters",
        author: "Robert Nystrom",
        learn: "How a programming language works.",
        practice: "Build the language, chapter by chapter.",
        link: { label: "Free to read online", href: "https://craftinginterpreters.com/" },
      },
    ],
  },
  {
    title: "The web",
    books: [
      {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        learn: "JavaScript, from the start.",
        practice: "Do the exercises at the end of each chapter.",
        link: { label: "Free to read online", href: "https://eloquentjavascript.net/" },
      },
      {
        title: "Web Browser Engineering",
        author: "Pavel Panchekha and Chris Harrelson",
        learn: "How a browser works, by building one.",
        practice: "Build the browser, chapter by chapter.",
        link: { label: "Free to read online", href: "https://browser.engineering/" },
      },
      {
        title: "High Performance Browser Networking",
        author: "Ilya Grigorik",
        learn: "How the internet carries a web page to you.",
        practice: "Measure your own website with the browser's developer tools and make it faster.",
        link: { label: "Free to read online", href: "https://hpbn.co/" },
      },
    ],
  },
  {
    title: "Security",
    books: [
      {
        title: "Real-World Bug Hunting",
        author: "Peter Yaworski",
        learn: "Web security problems from real reports.",
        practice: "Practise each type of problem in the free PortSwigger Web Security Academy.",
      },
      {
        title: "Hacking: The Art of Exploitation",
        author: "Jon Erickson",
        learn: "Security at the level of memory and machine code.",
        practice: "Run every example in a virtual machine.",
      },
    ],
  },
  {
    title: "AI, games, hardware and design",
    books: [
      {
        title: "Build a Large Language Model (From Scratch)",
        author: "Sebastian Raschka",
        learn: "How an LLM works, by building one. Good preparation for Mini hackathon 2.",
        practice: "Write the code of each chapter yourself.",
      },
      {
        title: "Game Programming Patterns",
        author: "Robert Nystrom",
        learn: "How games are built inside.",
        practice: "Build a small game that uses each pattern.",
        link: { label: "Free to read online", href: "https://gameprogrammingpatterns.com/" },
      },
      {
        title: "Making Embedded Systems",
        author: "Elecia White",
        learn: "How software runs on small devices.",
        practice: "Build the examples in a free online simulator such as Wokwi.",
      },
      {
        title: "The Design of Everyday Things",
        author: "Don Norman",
        learn: "Why some things are easy to use and some are not.",
        practice: "Each day, redesign one screen or object that annoys you.",
      },
    ],
  },
];

const LAGOS_DAY = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos" });
const WEEKDAY = new Intl.DateTimeFormat("en-GB", { weekday: "short", timeZone: "UTC" });
const MONTH = new Intl.DateTimeFormat("en-GB", { month: "short", timeZone: "UTC" });

export function lagosToday(now: Date = new Date()): string {
  return LAGOS_DAY.format(now);
}

export function isPast(event: ClubEvent, today: string): boolean {
  return (event.end ?? event.start) < today;
}

export function isHappening(event: ClubEvent, today: string): boolean {
  return event.start <= today && today <= (event.end ?? event.start);
}

export function nextEvent(phases: Phase[], today: string): ClubEvent | undefined {
  return phases
    .flatMap((phase) => phase.events)
    .filter((event) => event.kind !== "pause" && !isPast(event, today))
    .toSorted((a, b) => a.start.localeCompare(b.start))[0];
}

export interface DayParts {
  day: number;
  weekday: string;
  month: string;
}

export function dayParts(iso: string): DayParts {
  const date = new Date(`${iso}T00:00:00Z`);
  return { day: date.getUTCDate(), weekday: WEEKDAY.format(date), month: MONTH.format(date) };
}

export function shortDate(iso: string): string {
  const { weekday, day, month } = dayParts(iso);
  return `${weekday} ${day} ${month}`;
}

export function dateLabel(event: ClubEvent): string {
  return event.end ? `${shortDate(event.start)} to ${shortDate(event.end)}` : shortDate(event.start);
}
