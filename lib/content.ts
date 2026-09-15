/**
 * Single source of truth for the site.
 *
 * Every string here comes from the CV (Sasini_Wanigathunga_2026), the arXiv
 * record for arXiv:2501.04696, the Google Scholar profile, or the GitHub
 * profile. Descriptions use the CV's own wording.
 *
 * Deliberately omitted for privacy: personal phone number, and the referees'
 * names, phone numbers and email addresses. Those remain in the PDF.
 */

/** Each topic is its own route. Declared at the bottom of this file. */
export type Topic = { href: string; label: string; count?: number };

export const profile = {
  name: "Sasini Wanigathunga",
  firstName: "Sasini",
  lastName: "Wanigathunga",
  /** Verbatim from the GitHub profile bio. */
  subtitle: "AI Research Engineer · ENTC Graduate, University of Moratuwa",
  location: "Sri Lanka",
  email: "wanigathungasasini@gmail.com",
  photo: "/profile.jpg",
  /** Research interests as listed on the Google Scholar profile. */
  interests: ["Computer Vision", "Natural Language Processing"],
} as const;

export const links = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/sasiniwanigathunga/",
  github: "https://github.com/SasiniWanigathunga",
  scholar: "https://scholar.google.com/citations?user=_GKqZqwAAAAJ&hl=en",
  arxiv: "https://arxiv.org/abs/2501.04696",
  cv: "/Sasini_Wanigathunga_CV.pdf",
  rad: "https://radsecurity.com/",
  uom: "https://uom.lk/",
} as const;

/**
 * About. Plain statements of fact drawn from the CV - current role and its
 * scope, degree and result, research area, prior positions.
 */
export const about = [
  {
    text: "I am an AI Research Engineer at {rad}, working on agentic AI, AI automation, and video analytics solutions for surveillance applications, with a focus on deep learning research.",
    linkKey: "rad" as const,
    linkText: "Robotic Assistance Devices",
  },
  {
    text: "I completed my B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering at the {uom} in 2025, with a GPA of 3.90/4.0 and a place on the Dean's List in seven of eight semesters. My research areas are computer vision and natural language processing.",
    linkKey: "uom" as const,
    linkText: "University of Moratuwa",
  },
  {
    text: "My undergraduate research on domain adaptive open vocabulary segmentation is available as {arxiv} and is under review at the Elsevier Journal of Neural Networks. Before joining Robotic Assistance Devices I was a machine learning engineer intern at FcodeLabs, where I worked on privacy-focused ML, and a visiting instructor at the University of Moratuwa.",
    linkKey: "arxiv" as const,
    linkText: "arXiv:2501.04696",
  },
] as const;

/** Dated entries, newest first. Each one is a fact stated on the CV. */
export const updates = [
  {
    date: "Sep 2025",
    text: "Began as Engineer I - AI Research at Robotic Assistance Devices.",
  },
  {
    date: "2025",
    text: "Completed B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering, University of Moratuwa - GPA 3.90/4.0.",
  },
  {
    date: "Mar 2025",
    text: "Joined Robotic Assistance Devices as an AI Research Engineer.",
  },
  {
    date: "Jan 2025",
    text: "Test-Time Optimization for Domain Adaptive Open Vocabulary Segmentation posted to arXiv.",
    href: "https://arxiv.org/abs/2501.04696",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Publications                                                        */
/* ------------------------------------------------------------------ */

export type Publication = {
  date: string;
  title: string;
  authors: { name: string; isMe?: boolean; equalContribution?: boolean }[];
  venue: string;
  /** Verbatim from arXiv:2501.04696. */
  abstract: string;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    date: "Jan 2025",
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
    venue: "arXiv:2501.04696 - under review, Elsevier Journal of Neural Networks",
    abstract:
      "We present Seg-TTO, a novel framework for zero-shot, open-vocabulary semantic segmentation (OVSS), designed to excel in specialized domain tasks. While current open-vocabulary approaches show impressive performance on standard segmentation benchmarks under zero-shot settings, they fall short of supervised counterparts on highly domain-specific datasets. We focus on segmentation-specific test-time optimization to address this gap. Segmentation requires an understanding of multiple concepts within a single image while retaining the locality and spatial structure of representations. We propose a novel self-supervised objective adhering to these requirements and use it to align the model parameters with input images at test time. In the textual modality, we learn multiple embeddings for each category to capture diverse concepts within an image, while in the visual modality, we calculate pixel-level losses followed by embedding aggregation operations specific to preserving spatial structure. Our resulting framework termed Seg-TTO is a plug-and-play module. We integrate Seg-TTO with three state-of-the-art OVSS approaches and evaluate across 22 challenging OVSS tasks covering a range of specialized domains. Our Seg-TTO demonstrates clear performance improvements (up to 27% mIoU increase on some datasets) establishing new state-of-the-art. Our code and models will be released publicly.",
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2501.04696" },
      { label: "PDF", href: "https://arxiv.org/pdf/2501.04696" },
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
    url: links.rad,
    positions: [
      { title: "Engineer I - AI Research", period: "Sep 2025 - Present", current: true },
      { title: "AI Research Engineer", period: "Mar 2025 - Sep 2025" },
    ],
    description:
      "Contributing to the design and development of agentic AI, AI automation, and video analytics solutions for surveillance applications, with a focus on deep learning research.",
  },
  {
    org: "FcodeLabs",
    orgNote: "Sri Lanka",
    positions: [{ title: "Machine Learning Engineer - Intern", period: "Nov 2023 - May 2024" }],
    description:
      "Worked on privacy-focused ML solutions, including developing a novel method for removing PII from speech data and building production-ready NLP modules for privacy data masking and LLM-based activity suggestion features.",
  },
  {
    org: "University of Moratuwa",
    orgNote: "Sri Lanka",
    url: links.uom,
    positions: [{ title: "Visiting Instructor", period: "Feb 2024 - Apr 2024" }],
    description: "Worked as a visiting instructor for EN1094: Laboratory Practice.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects - titles, dates, tags and descriptions are the CV's own     */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  note?: string;
  period: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Domain Adaptive Open Vocabulary Semantic Segmentation",
    note: "Final Year Project",
    period: "Jun 2024 - Present",
    description:
      "Developed a novel test-time optimization framework. Evaluated across 22 challenging domain specific datasets and obtained overall +2.03 mIoU improvement over the state-of-the-art.",
    stack: ["Computer Vision", "VLMs", "Prompt Learning"],
    href: "https://arxiv.org/abs/2501.04696",
  },
  {
    title: "Spoken Named Entity Localization",
    period: "Mar 2024 - Present",
    description:
      "Developed a novel approach for text-independent PII removal in speech data. Achieved +4.1 frame-level F1 score, while using 67% fewer parameters and low latency over the state-of-the-art.",
    stack: ["NLP", "NER", "Spoken Language Understanding"],
  },
  {
    title: "ProjectPulseAI",
    period: "Jan 2025",
    description:
      "Developed a LLM-powered application for project managers using Retrieval-Augmented Generation (RAG) to integrate project documents, company resources, web links, and Jira issue tracking.",
    stack: ["LLMs", "Groq", "RAG", "Next.js", "Jira API", "AstraDB"],
    href: "https://github.com/SasiniWanigathunga/ProjectPulseAI",
  },
  {
    title: "Ophthalmic Biomarker Detection",
    period: "Aug 2023 - Oct 2023",
    description:
      "Optimized the algorithm to predict the presence or absence of biomarkers on OCT scan images. Tested with different preprocessing techniques and backbones and optimized the model by changing the classification layers.",
    stack: ["Computer Vision", "Deep Learning"],
    href: "https://github.com/SasiniWanigathunga/VIP-Cup-2023",
  },
  {
    title: "Software Design Competition",
    period: "Jan 2024 - Jul 2024",
    description:
      "Designed a game using Unity with WebGL including API authentication, player profile, a questionnaire that can be opened using a web browser, dynamic and interactive game environment and a leaderboard.",
    stack: ["Unity", "C#"],
    href: "https://github.com/SasiniWanigathunga/SDC_Tesseract",
  },
  {
    title: "Non-pipelined Single Stage (Cycle) RISC-V Processor Design",
    period: "Sep 2023 - Oct 2023",
    description:
      "Designed a 32 bit non-pipelined RISC-V processor using Microprogramming with 3 bus structure using RV32I implementation.",
    stack: ["SystemVerilog", "Xilinx"],
    href: "https://github.com/SasiniWanigathunga/Single_Cycle_RISCV_Processor",
  },
  {
    title: "Mini Weather Station",
    period: "Jul 2023",
    description:
      "Developed a user-friendly mini weather station with remote monitoring via web dashboard and mobile app.",
    stack: ["Altium", "SolidWorks", "C++"],
    href: "https://github.com/SasiniWanigathunga/Mini-Weather-Station",
  },
  {
    title: "Robot Design and Competition",
    period: "Feb 2023",
    description:
      "Designed a simulation of a robot capable of identifying chess piece positions and performing checkmate.",
    stack: ["Arduino", "Webots", "C++"],
    href: "https://github.com/SasiniWanigathunga/EN2533-RobotDesignandCompetition",
  },
];

/* ------------------------------------------------------------------ */
/* Awards & Leadership                                                 */
/* ------------------------------------------------------------------ */

export const awards = [
  {
    period: "Aug - Sep 2023",
    title: "IEEE SPS Video and Image Processing (VIP) Cup 2023",
    rank: "World Rank 6",
    detail: "Team: TESSERACT. Achieved F1 score of 0.7921 for ophthalmic biomarkers detection.",
  },
  {
    period: "Oct 2023",
    title: "IEEEXtreme 17.0",
    rank: "World Rank 389",
    detail: "Country Rank 26.",
  },
  {
    period: "Oct 2022",
    title: "IEEEXtreme 16.0",
    rank: "World Rank 874",
    detail: "Country Rank 61.",
  },
  {
    period: "Aug 2021",
    title: "Mahapola Higher Education (Merit) Scholarship",
    rank: "Merit",
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
    url: links.uom,
    degree: "B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering",
    period: "2021 - 2025",
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
    degree: "GCE Advanced Level - Physical Science Stream",
    period: "2011 - 2019",
    result: "Z-score 2.6629",
    notes: [
      "Island Rank 97",
      "4 A passes: Combined Mathematics, Physics, Chemistry, General English",
    ],
    coursework: [],
  },
] as const;

/* ------------------------------------------------------------------ */
/* Skills - the CV's own groupings                                     */
/* ------------------------------------------------------------------ */

export const skills = [
  { group: "Programming Languages", items: ["Python", "C++", "C#"] },
  {
    group: "Frameworks",
    items: ["PyTorch", "TensorFlow", "spaCy", "NLTK", "NeMo", "OpenCV", "LangChain", "LangGraph"],
  },
  {
    group: "Software & Tools",
    items: [
      "VS Code",
      "Git / GitHub",
      "Hugging Face",
      "Kaggle",
      "Docker",
      "AWS",
      "MATLAB",
      "Unity",
      "Playwright",
    ],
  },
] as const;

/** CV section: "Relevant Coursework - Coursera". */
export const coursework = [
  { title: "Machine Learning Specialization", issuer: "DeepLearning.AI, Stanford University" },
  { title: "Deep Learning Specialization", issuer: "DeepLearning.AI, Stanford University" },
  { title: "Retrieval Augmented Generation (RAG)", issuer: "DeepLearning.AI" },
  {
    title: "Machine Learning in the Enterprise",
    issuer: "Machine Learning on Google Cloud Specialization - Google Cloud",
  },
] as const;

export const aside = {
  sports: "Chess - FIDE Rating 1219",
  languages: "English (professional proficiency) · Sinhala (native proficiency)",
} as const;

/* ------------------------------------------------------------------ */
/* Routes                                                              */
/* ------------------------------------------------------------------ */

/**
 * Declared last so the counts are derived from the data above rather than
 * written out by hand and left to drift.
 */
export const topics: Topic[] = [
  { href: "/publications", label: "Publications", count: publications.length },
  { href: "/experience", label: "Experience", count: experience.length },
  { href: "/projects", label: "Projects", count: projects.length },
  { href: "/awards", label: "Awards", count: awards.length },
  { href: "/leadership", label: "Leadership", count: leadership.length },
  { href: "/education", label: "Education", count: education.length },
  { href: "/skills", label: "Skills" },
];

/**
 * What the navigation shows. Home is not a topic - it has no index card and
 * no count - so it is added here rather than to `topics`.
 */
export const navItems: Topic[] = [{ href: "/", label: "Home" }, ...topics];
