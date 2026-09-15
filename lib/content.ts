/**
 * Single source of truth for the site.
 *
 * Every string here is taken from the CV (Sasini_Wanigathunga_2026), the arXiv
 * record for arXiv:2501.04696, or the Google Scholar profile. Descriptions are
 * the CV's own wording. Nothing is paraphrased, summarised or added.
 *
 * Deliberately omitted for privacy: personal phone number, and the referees'
 * names, phone numbers and email addresses. Those remain in the PDF.
 */

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Sasini Wanigathunga",
  firstName: "Sasini",
  lastName: "Wanigathunga",
  role: "AI Research Engineer",
  company: "Robotic Assistance Devices",
  companyUrl: "https://www.radsecurity.ai/",
  location: "Sri Lanka",
  email: "wanigathungasasini@gmail.com",
  /** Research interests as listed on the Google Scholar profile. */
  interests: ["Computer Vision", "Natural Language Processing"],
} as const;

export const links = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/sasiniwanigathunga/",
  github: "https://github.com/SasiniWanigathunga",
  scholar: "https://scholar.google.com/citations?user=_GKqZqwAAAAJ&hl=en",
  cv: "/Sasini_Wanigathunga_CV.pdf",
} as const;

/** Facts strip under the hero. Label / value only. */
export const facts = [
  { label: "Current", value: "Engineer I — AI Research", note: "Robotic Assistance Devices, USA" },
  { label: "Education", value: "B.Sc. Engineering (Hons)", note: "Electronic and Telecommunication Engineering, University of Moratuwa" },
  { label: "GPA", value: "3.90 / 4.0", note: "Dean's List — semesters 1, 2, 3, 4, 6, 7, 8" },
  { label: "Research interests", value: "Computer Vision", note: "Natural Language Processing" },
] as const;

/* ------------------------------------------------------------------ */
/* Research                                                            */
/* ------------------------------------------------------------------ */

export type Publication = {
  title: string;
  authors: { name: string; isMe?: boolean; equalContribution?: boolean }[];
  venue: string;
  status: string;
  year: string;
  /** Verbatim from arXiv:2501.04696. */
  abstract: string;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    title: "Test-Time Optimization for Domain Adaptive Open Vocabulary Segmentation",
    authors: [
      { name: "Ulindu De Silva", equalContribution: true },
      { name: "Didula Samaraweera", equalContribution: true },
      { name: "Sasini Wanigathunga", isMe: true, equalContribution: true },
      { name: "Kavindu Kariyawasam", equalContribution: true },
      { name: "Kanchana Ranasinghe" },
      { name: "Muzammal Naseer" },
      { name: "Ranga Rodrigo" },
    ],
    venue: "arXiv:2501.04696",
    status: "Under review — Elsevier Journal of Neural Networks",
    year: "2025",
    abstract:
      "We present Seg-TTO, a novel framework for zero-shot, open-vocabulary semantic segmentation (OVSS), designed to excel in specialized domain tasks. While current open-vocabulary approaches show impressive performance on standard segmentation benchmarks under zero-shot settings, they fall short of supervised counterparts on highly domain-specific datasets. We focus on segmentation-specific test-time optimization to address this gap. Segmentation requires an understanding of multiple concepts within a single image while retaining the locality and spatial structure of representations. We propose a novel self-supervised objective adhering to these requirements and use it to align the model parameters with input images at test time. In the textual modality, we learn multiple embeddings for each category to capture diverse concepts within an image, while in the visual modality, we calculate pixel-level losses followed by embedding aggregation operations specific to preserving spatial structure. Our resulting framework termed Seg-TTO is a plug-and-play module. We integrate Seg-TTO with three state-of-the-art OVSS approaches and evaluate across 22 challenging OVSS tasks covering a range of specialized domains. Our Seg-TTO demonstrates clear performance improvements (up to 27% mIoU increase on some datasets) establishing new state-of-the-art. Our code and models will be released publicly.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2501.04696" },
      { label: "PDF", href: "https://arxiv.org/pdf/2501.04696" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_GKqZqwAAAAJ&hl=en" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Role = {
  org: string;
  orgNote?: string;
  url?: string;
  positions: { title: string; period: string; current?: boolean }[];
  /** CV wording, verbatim. */
  description: string;
};

export const experience: Role[] = [
  {
    org: "Robotic Assistance Devices",
    orgNote: "USA",
    url: "https://www.radsecurity.ai/",
    positions: [
      { title: "Engineer I — AI Research", period: "Sep 2025 — Present", current: true },
      { title: "AI Research Engineer", period: "Mar 2025 — Sep 2025" },
    ],
    description:
      "Contributing to the design and development of agentic AI, AI automation, and video analytics solutions for surveillance applications, with a focus on deep learning research.",
  },
  {
    org: "FcodeLabs",
    orgNote: "Sri Lanka",
    positions: [{ title: "Machine Learning Engineer — Intern", period: "Nov 2023 — May 2024" }],
    description:
      "Worked on privacy-focused ML solutions, including developing a novel method for removing PII from speech data and building production-ready NLP modules for privacy data masking and LLM-based activity suggestion features.",
  },
  {
    org: "University of Moratuwa",
    orgNote: "Sri Lanka",
    url: "https://uom.lk/",
    positions: [{ title: "Visiting Instructor", period: "Feb 2024 — Apr 2024" }],
    description: "Worked as a visiting instructor for EN1094: Laboratory Practice.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects — titles, dates, tags and descriptions are the CV's own     */
/* ------------------------------------------------------------------ */

export const projectCategories = [
  "All",
  "Vision",
  "Language & Speech",
  "Systems & Hardware",
  "Applications",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Project = {
  title: string;
  note?: string;
  period: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Domain Adaptive Open Vocabulary Semantic Segmentation",
    note: "Final Year Project",
    period: "Jun 2024 — Present",
    category: "Vision",
    description:
      "Developed a novel test-time optimization framework. Evaluated across 22 challenging domain specific datasets and obtained overall +2.03 mIoU improvement over the state-of-the-art.",
    stack: ["Computer Vision", "VLMs", "Prompt Learning"],
    href: "https://arxiv.org/abs/2501.04696",
  },
  {
    title: "Spoken Named Entity Localization",
    period: "Mar 2024 — Present",
    category: "Language & Speech",
    description:
      "Developed a novel approach for text-independent PII removal in speech data. Achieved +4.1 frame-level F1 score, while using 67% fewer parameters and low latency over the state-of-the-art.",
    stack: ["NLP", "NER", "Spoken Language Understanding"],
  },
  {
    title: "ProjectPulseAI",
    period: "Jan 2025",
    category: "Applications",
    description:
      "Developed a LLM-powered application for project managers using Retrieval-Augmented Generation (RAG) to integrate project documents, company resources, web links, and Jira issue tracking.",
    stack: ["LLMs", "Groq", "RAG", "Next.js", "Jira API", "AstraDB"],
    href: "https://github.com/SasiniWanigathunga/ProjectPulseAI",
  },
  {
    title: "Ophthalmic Biomarker Detection",
    period: "Aug 2023 — Oct 2023",
    category: "Vision",
    description:
      "Optimized the algorithm to predict the presence or absence of biomarkers on OCT scan images. Tested with different preprocessing techniques and backbones and optimized the model by changing the classification layers.",
    stack: ["Computer Vision", "Deep Learning"],
    href: "https://github.com/SasiniWanigathunga/VIP-Cup-2023",
  },
  {
    title: "Software Design Competition",
    period: "Jan 2024 — Jul 2024",
    category: "Applications",
    description:
      "Designed a game using Unity with WebGL including API authentication, player profile, a questionnaire that can be opened using a web browser, dynamic and interactive game environment and a leaderboard.",
    stack: ["Unity", "C#"],
    href: "https://github.com/SasiniWanigathunga/SDC_Tesseract",
  },
  {
    title: "Non-pipelined Single Stage (Cycle) RISC-V Processor Design",
    period: "Sep 2023 — Oct 2023",
    category: "Systems & Hardware",
    description:
      "Designed a 32 bit non-pipelined RISC-V processor using Microprogramming with 3 bus structure using RV32I implementation.",
    stack: ["SystemVerilog", "Xilinx"],
    href: "https://github.com/SasiniWanigathunga/Single_Cycle_RISCV_Processor",
  },
  {
    title: "Mini Weather Station",
    period: "Jul 2023",
    category: "Systems & Hardware",
    description:
      "Developed a user-friendly mini weather station with remote monitoring via web dashboard and mobile app.",
    stack: ["Altium", "SolidWorks", "C++"],
    href: "https://github.com/SasiniWanigathunga/Mini-Weather-Station",
  },
  {
    title: "Robot Design and Competition",
    period: "Feb 2023",
    category: "Systems & Hardware",
    description:
      "Designed a simulation of a robot capable of identifying chess piece positions and performing checkmate.",
    stack: ["Arduino", "Webots", "C++"],
    href: "https://github.com/SasiniWanigathunga/EN2533-RobotDesignandCompetition",
  },
];

/* ------------------------------------------------------------------ */
/* Skills — the CV's own groupings                                     */
/* ------------------------------------------------------------------ */

export const skills = [
  {
    group: "Programming Languages",
    items: ["Python", "C++", "C#"],
  },
  {
    group: "Software & Tools",
    items: ["VS Code", "Git / GitHub", "Hugging Face", "Kaggle", "Docker", "AWS", "MATLAB", "Unity", "Playwright"],
  },
  {
    group: "Frameworks",
    items: ["PyTorch", "TensorFlow", "spaCy", "NLTK", "NeMo", "OpenCV", "LangChain", "LangGraph"],
  },
] as const;

/** CV section: "Relevant Coursework — Coursera". */
export const coursework = [
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI, Stanford University" },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI, Stanford University" },
  { title: "Retrieval Augmented Generation (RAG)", issuer: "DeepLearning.AI" },
  {
    title: "Machine Learning in the Enterprise",
    issuer: "Machine Learning on Google Cloud Specialization — Google Cloud",
  },
] as const;

export const aside = {
  sports: "Chess — FIDE Rating 1219",
  languages: "English (professional proficiency) · Sinhala (native proficiency)",
} as const;

/* ------------------------------------------------------------------ */
/* Awards & Leadership                                                 */
/* ------------------------------------------------------------------ */

export const awards = [
  {
    title: "IEEE SPS Video and Image Processing (VIP) Cup 2023",
    rank: "World Rank 6",
    period: "Aug — Sep 2023",
    detail: "Team: TESSERACT. Achieved F1 score of 0.7921 for ophthalmic biomarkers detection.",
  },
  {
    title: "IEEEXtreme 17.0",
    rank: "World Rank 389",
    period: "Oct 2023",
    detail: "Country Rank 26.",
  },
  {
    title: "IEEEXtreme 16.0",
    rank: "World Rank 874",
    period: "Oct 2022",
    detail: "Country Rank 61.",
  },
  {
    title: "Mahapola Higher Education (Merit) Scholarship",
    rank: "Merit",
    period: "Aug 2021",
    detail: "",
  },
] as const;

export const leadership = [
  {
    org: "IEEE Industrial Electronics Society Student Branch Chapter",
    place: "University of Moratuwa",
    roles: ["Secretary", "Chief Editor", "Assistant Editor", "Member of Public Relations Team"],
  },
  {
    org: "Electronic Club",
    place: "University of Moratuwa",
    roles: [
      "Chairperson for two webinars",
      "Student Editor-in-Chief for the E-Carrier magazine",
      "Editor",
      "Sub Editor",
    ],
  },
  {
    org: "AIESEC in Colombo South",
    place: "Sri Lanka",
    roles: [
      "Content Specialist in Public Relations and Marketing Team",
      "iGT International Relations and Matching Team",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education = [
  {
    school: "University of Moratuwa",
    place: "Sri Lanka",
    url: "https://uom.lk/",
    degree: "B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering",
    period: "2021 — 2025",
    result: "GPA 3.90 / 4.0",
    notes: ["Dean's List: semesters 1, 2, 3, 4, 6, 7 and 8"],
    coursework: [
      "Deep Learning for Vision",
      "Image Processing and Machine Vision",
      "Pattern Recognition",
      "Introduction to Engineering Optimization",
      "Data Structures and Algorithms",
      "Applied Statistics",
      "Linear Algebra",
      "Calculus",
      "Neural Networks and Fuzzy Logic",
      "Security in Cyber-Physical Systems",
    ],
  },
  {
    school: "Sujatha Vidyalaya",
    place: "Matara, Sri Lanka",
    degree: "GCE Advanced Level — Physical Science Stream",
    period: "2011 — 2019",
    result: "Z-score 2.6629",
    notes: [
      "Island Rank 97",
      "4 A passes: Combined Mathematics, Physics, Chemistry, General English",
    ],
    coursework: [],
  },
] as const;
