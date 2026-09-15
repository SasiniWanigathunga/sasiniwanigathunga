/**
 * Single source of truth for every piece of content on the site.
 *
 * Everything here is sourced from the CV (Sasini_Wanigathunga_2026), the
 * arXiv record for Seg-TTO, the Google Scholar profile, and the public
 * GitHub profile. Nothing is inferred or embellished — update this file
 * and the whole site follows.
 *
 * Deliberately omitted for privacy: personal phone number, and the
 * referees' names, phone numbers and email addresses from the CV.
 * Those stay in the PDF, which is shared on request rather than indexed.
 */

export type NavItem = { id: string; label: string };

export const nav: NavItem[] = [
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "toolkit", label: "Toolkit" },
  { id: "honors", label: "Honors" },
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
  // One-line positioning statement used in the hero and page metadata.
  tagline:
    "I build vision–language systems that hold up outside the datasets they were trained on.",
  summary: [
    "I'm an AI Research Engineer at Robotic Assistance Devices, working on agentic AI, automation, and video analytics for real-world surveillance — the kind of setting where a model meets lighting, hardware, and edge cases no benchmark prepared it for.",
    "My research sits at the meeting point of vision and language. My first-author work, Seg-TTO, adapts open-vocabulary segmentation models at test time so they survive the move into specialised domains, and I've built text-independent PII removal for speech that is both more accurate and dramatically smaller than the prior state of the art.",
    "I graduated from the University of Moratuwa with a B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering, a GPA of 3.90/4.0, and the Dean's List in seven of eight semesters.",
  ],
  interests: ["Computer Vision", "Vision–Language Models", "Natural Language Processing", "Agentic AI"],
} as const;

export const links = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/sasiniwanigathunga/",
  github: "https://github.com/SasiniWanigathunga",
  scholar: "https://scholar.google.com/citations?user=_GKqZqwAAAAJ&hl=en",
  cv: "/Sasini_Wanigathunga_CV.pdf",
} as const;

/** Headline numbers for the hero ticker. Each one is traceable to a source. */
export const metrics = [
  { value: "22", label: "domain datasets evaluated", context: "Seg-TTO" },
  { value: "+2.03", label: "mIoU over state of the art", context: "Seg-TTO, overall" },
  { value: "67%", label: "fewer parameters", context: "Spoken NE localization" },
  { value: "3.90", label: "GPA / 4.0", context: "University of Moratuwa" },
  { value: "#6", label: "world rank, IEEE VIP Cup", context: "2023" },
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
  abstract: string;
  highlights: { value: string; label: string }[];
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
    status: "Under review — Elsevier Neural Networks",
    year: "2025",
    abstract:
      "We present Seg-TTO, a framework for zero-shot, open-vocabulary semantic segmentation that closes the gap between generalist models and highly specialised domains. Seg-TTO introduces a self-supervised test-time optimization objective that preserves spatial structure while handling multiple concepts per image, learning several text embeddings per category and applying pixel-level losses with aggregation operations. Plugged into three state-of-the-art approaches and evaluated across 22 specialised domain tasks, it establishes new performance benchmarks — with improvements of up to 27% mIoU on individual datasets.",
    highlights: [
      { value: "22", label: "specialised domain tasks" },
      { value: "3", label: "SOTA backbones integrated" },
      { value: "up to 27%", label: "mIoU increase on individual datasets" },
    ],
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
  description: string;
  tags: string[];
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
      "Designing and building agentic AI, AI automation, and video analytics for surveillance applications, with a focus on deep learning research that has to survive deployment.",
    tags: ["Agentic AI", "Video Analytics", "Deep Learning", "Automation"],
  },
  {
    org: "FcodeLabs",
    orgNote: "Sri Lanka",
    positions: [{ title: "Machine Learning Engineer — Intern", period: "Nov 2023 — May 2024" }],
    description:
      "Worked on privacy-focused ML: developed a novel method for removing personally identifiable information from speech data, and shipped production-ready NLP modules for privacy data masking and LLM-based activity suggestion.",
    tags: ["Privacy ML", "Speech", "NLP", "LLMs"],
  },
  {
    org: "University of Moratuwa",
    orgNote: "Sri Lanka",
    url: "https://uom.lk/",
    positions: [{ title: "Visiting Instructor", period: "Feb 2024 — Apr 2024" }],
    description: "Instructor for EN1094: Laboratory Practice, supporting first-year engineering undergraduates.",
    tags: ["Teaching", "Electronics"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
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
  subtitle?: string;
  period: string;
  category: Exclude<ProjectCategory, "All">;
  featured?: boolean;
  description: string;
  result?: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Seg-TTO",
    subtitle: "Domain adaptive open-vocabulary semantic segmentation",
    period: "Jun 2024 — Present",
    category: "Vision",
    featured: true,
    description:
      "Final year research project. A novel test-time optimization framework that adapts open-vocabulary segmentation models to specialised domains without retraining.",
    result: "Evaluated across 22 domain-specific datasets for an overall +2.03 mIoU improvement over the state of the art.",
    stack: ["PyTorch", "Vision-Language Models", "Prompt Learning", "Computer Vision"],
    href: "https://arxiv.org/abs/2501.04696",
  },
  {
    title: "Spoken Named Entity Localization",
    subtitle: "Text-independent PII removal from speech",
    period: "Mar 2024 — Present",
    category: "Language & Speech",
    featured: true,
    description:
      "A novel approach to locating and removing personally identifiable information in speech without relying on a transcript.",
    result: "+4.1 frame-level F1 over the state of the art, using 67% fewer parameters at low latency.",
    stack: ["NeMo", "NLP", "NER", "Spoken Language Understanding"],
  },
  {
    title: "ProjectPulseAI",
    subtitle: "RAG assistant for project managers",
    period: "Jan 2025",
    category: "Applications",
    featured: true,
    description:
      "An LLM-powered application that uses retrieval-augmented generation to pull project documents, company resources, web links, and Jira issue tracking into a single answerable surface.",
    stack: ["LLMs", "Groq", "RAG", "Next.js", "Jira API", "AstraDB"],
    href: "https://github.com/SasiniWanigathunga/ProjectPulseAI",
  },
  {
    title: "Ophthalmic Biomarker Detection",
    subtitle: "IEEE SPS VIP Cup 2023 — Team TESSERACT",
    period: "Aug 2023 — Oct 2023",
    category: "Vision",
    description:
      "Optimized an algorithm to predict the presence or absence of biomarkers on OCT scan images, testing preprocessing strategies, backbones, and classification-layer designs.",
    result: "F1 score of 0.7921 — World Rank 6.",
    stack: ["Computer Vision", "Deep Learning", "Medical Imaging"],
    href: "https://github.com/SasiniWanigathunga/VIP-Cup-2023",
  },
  {
    title: "SDC Tesseract",
    subtitle: "Software Design Competition",
    period: "Jan 2024 — Jul 2024",
    category: "Applications",
    description:
      "A browser-playable Unity/WebGL game with API authentication, player profiles, a dynamic interactive environment, an in-game questionnaire, and a live leaderboard.",
    stack: ["Unity", "C#", "WebGL", "REST APIs"],
    href: "https://github.com/SasiniWanigathunga/SDC_Tesseract",
  },
  {
    title: "Single-Cycle RISC-V Processor",
    subtitle: "Non-pipelined 32-bit RV32I",
    period: "Sep 2023 — Oct 2023",
    category: "Systems & Hardware",
    description:
      "A 32-bit non-pipelined RISC-V processor built with microprogramming over a three-bus structure, implementing the RV32I instruction set.",
    stack: ["SystemVerilog", "Xilinx", "Computer Architecture"],
    href: "https://github.com/SasiniWanigathunga/Single_Cycle_RISCV_Processor",
  },
  {
    title: "Mini Weather Station",
    subtitle: "Hardware to dashboard",
    period: "Jul 2023",
    category: "Systems & Hardware",
    description:
      "An end-to-end weather station with custom PCB and enclosure design, remote monitoring through a web dashboard, and a companion mobile app.",
    stack: ["Altium", "SolidWorks", "C++", "Embedded"],
    href: "https://github.com/SasiniWanigathunga/Mini-Weather-Station",
  },
  {
    title: "Chess-Playing Robot",
    subtitle: "Robot Design & Competition",
    period: "Feb 2023",
    category: "Systems & Hardware",
    description:
      "Simulation of a robot capable of identifying chess piece positions on a board and executing a checkmate sequence.",
    stack: ["Arduino", "Webots", "C++", "Robotics"],
    href: "https://github.com/SasiniWanigathunga/EN2533-RobotDesignandCompetition",
  },
  {
    title: "Custom Object Detection with YOLO",
    subtitle: "A novel bounding box metric",
    period: "2025",
    category: "Vision",
    description:
      "Custom object detection work exploring an alternative bounding box evaluation metric alongside standard YOLO training.",
    stack: ["Python", "YOLO", "Object Detection"],
    href: "https://github.com/SasiniWanigathunga/Custom-Object-Detection-and-Novel-Bounding-Box-Metric-with-YOLO",
  },
  {
    title: "GPT-2 from Scratch",
    subtitle: "Transformers, built up from first principles",
    period: "2024",
    category: "Language & Speech",
    description:
      "A ground-up implementation of GPT-2 alongside a wider set of transformer experiments, written to understand the architecture rather than call it.",
    stack: ["Python", "PyTorch", "Transformers"],
    href: "https://github.com/SasiniWanigathunga/GPT-2_from_scratch",
  },
  {
    title: "Diabetic Retinopathy Severity Grading",
    subtitle: "Medical image classification",
    period: "2023",
    category: "Vision",
    description: "Severity grading of diabetic retinopathy from retinal fundus imagery.",
    stack: ["Python", "Deep Learning", "Medical Imaging"],
    href: "https://github.com/SasiniWanigathunga/Diabetic-Retinopathy-Severity-Grading",
  },
  {
    title: "Naive Bayes from Scratch",
    subtitle: "Classical ML, no libraries",
    period: "2023",
    category: "Language & Speech",
    description: "A from-scratch Naive Bayes classifier implemented without machine learning libraries.",
    stack: ["Python", "Statistics"],
    href: "https://github.com/SasiniWanigathunga/Naive-Bayes-from-Scratch",
  },
];

/* ------------------------------------------------------------------ */
/* Toolkit                                                             */
/* ------------------------------------------------------------------ */

export const toolkit = [
  {
    group: "Languages",
    items: ["Python", "C++", "C#", "SystemVerilog", "TypeScript"],
  },
  {
    group: "ML & Research",
    items: ["PyTorch", "TensorFlow", "OpenCV", "NeMo", "spaCy", "NLTK", "Hugging Face", "Kaggle"],
  },
  {
    group: "LLM & Agents",
    items: ["LangChain", "LangGraph", "RAG", "Groq", "AstraDB"],
  },
  {
    group: "Engineering",
    items: ["Docker", "AWS", "Git / GitHub", "Playwright", "MATLAB", "Unity", "VS Code"],
  },
] as const;

export const certifications = [
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI · Stanford University" },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI · Stanford University" },
  { title: "Retrieval Augmented Generation (RAG)", issuer: "DeepLearning.AI" },
  { title: "Machine Learning in the Enterprise", issuer: "Google Cloud" },
] as const;

/* ------------------------------------------------------------------ */
/* Honors                                                              */
/* ------------------------------------------------------------------ */

export const awards = [
  {
    title: "IEEE SPS Video and Image Processing (VIP) Cup",
    rank: "World Rank 6",
    year: "2023",
    detail: "Team TESSERACT — F1 score of 0.7921 for ophthalmic biomarker detection.",
  },
  {
    title: "IEEEXtreme 17.0",
    rank: "World Rank 389",
    year: "2023",
    detail: "Country Rank 26 — 24-hour global programming competition.",
  },
  {
    title: "IEEEXtreme 16.0",
    rank: "World Rank 874",
    year: "2022",
    detail: "Country Rank 61 — 24-hour global programming competition.",
  },
  {
    title: "Mahapola Higher Education Scholarship",
    rank: "Merit",
    year: "2021",
    detail: "Awarded on GCE A/L performance — Island Rank 97 in the Physical Science stream.",
  },
] as const;

export const leadership = [
  {
    org: "IEEE Industrial Electronics Society Student Branch Chapter",
    place: "University of Moratuwa",
    roles: ["Secretary", "Chief Editor", "Assistant Editor", "Public Relations Team"],
  },
  {
    org: "Electronic Club",
    place: "University of Moratuwa",
    roles: ["Chairperson, two webinars", "Student Editor-in-Chief, E-Carrier magazine", "Editor", "Sub Editor"],
  },
  {
    org: "AIESEC in Colombo South",
    place: "Sri Lanka",
    roles: ["Content Specialist, PR & Marketing", "iGT International Relations & Matching"],
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
    notes: ["Dean's List — semesters 1, 2, 3, 4, 6, 7 and 8"],
    coursework: [
      "Deep Learning for Vision",
      "Image Processing and Machine Vision",
      "Pattern Recognition",
      "Neural Networks and Fuzzy Logic",
      "Engineering Optimization",
      "Data Structures and Algorithms",
      "Applied Statistics",
      "Linear Algebra",
      "Calculus",
      "Security in Cyber-Physical Systems",
    ],
  },
  {
    school: "Sujatha Vidyalaya",
    place: "Matara, Sri Lanka",
    degree: "GCE Advanced Level — Physical Science stream",
    period: "2011 — 2019",
    result: "Z-score 2.6629",
    notes: ["Island Rank 97", "4 A passes — Combined Mathematics, Physics, Chemistry, General English"],
    coursework: [],
  },
] as const;

export const aside = {
  chess: "Chess — FIDE rated 1219",
  languages: "English (professional) · Sinhala (native)",
} as const;
