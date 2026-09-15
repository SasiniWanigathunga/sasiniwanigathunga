# Sasini Wanigathunga

AI Research Engineer at [Robotic Assistance Devices](https://radsecurity.com/)
B.Sc. Engineering (Hons) in Electronic and Telecommunication Engineering, University of Moratuwa

**[sasiniwanigathunga.github.io/sasiniwanigathunga](https://sasiniwanigathunga.github.io/sasiniwanigathunga/)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-sasiniwanigathunga-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sasiniwanigathunga/)
[![Google Scholar](https://img.shields.io/badge/Scholar-Publications-4285F4?style=flat-square&logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=_GKqZqwAAAAJ&hl=en)
[![arXiv](https://img.shields.io/badge/arXiv-2501.04696-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.04696)

## Research

**[Test-Time Optimization for Domain Adaptive Open Vocabulary Segmentation](https://arxiv.org/abs/2501.04696)**
U. De Silva\*, D. Samaraweera\*, **S. Wanigathunga**\*, K. Kariyawasam\*, K. Ranasinghe, M. Naseer, R. Rodrigo
arXiv:2501.04696 - under review, Elsevier Journal of Neural Networks · \*equal contribution

## Experience

| Role | Organisation | Period |
|---|---|---|
| Engineer I - AI Research | Robotic Assistance Devices, USA | Sep 2025 - Present |
| AI Research Engineer | Robotic Assistance Devices, USA | Mar 2025 - Sep 2025 |
| Machine Learning Engineer - Intern | FcodeLabs, Sri Lanka | Nov 2023 - May 2024 |
| Visiting Instructor | University of Moratuwa, Sri Lanka | Feb 2024 - Apr 2024 |

## Skills

**Programming Languages** - Python, C++, C#
**Frameworks** - PyTorch, TensorFlow, spaCy, NLTK, NeMo, OpenCV, LangChain, LangGraph
**Software & Tools** - VS Code, Git/GitHub, Hugging Face, Kaggle, Docker, AWS, MATLAB, Unity, Playwright

---

<details>
<summary><b>About this repository</b></summary>

<br>

Source for the portfolio site, deployed to GitHub Pages.

**Stack:** Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Framer Motion

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static export to ./out
```

To build exactly as the deployed site does - served from the `/sasiniwanigathunga` subpath:

```bash
NEXT_PUBLIC_BASE_PATH=/sasiniwanigathunga npm run build
```

**Deployment.** Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which type-checks, builds the static export, and publishes to GitHub Pages.

**Pages.** Each topic is its own route, statically exported:

The photo, name and external links live in [`components/site/ProfilePanel.tsx`](components/site/ProfilePanel.tsx),
rendered once in the root layout: a fixed left rail from `lg` up, and a block above the content below
that. Because it sits in the layout rather than in a page, it is not remounted on navigation.

| Route | Source |
|---|---|
| `/` | `app/page.tsx` - About, Updates, index |
| `/publications` | `app/publications/page.tsx` |
| `/blog` | `app/blog/page.tsx` - Medium posts, listed from `posts` in `lib/content.ts` |
| `/experience` | `app/experience/page.tsx` |
| `/projects` | `app/projects/page.tsx` |
| `/awards` | `app/awards/page.tsx` |
| `/leadership` | `app/leadership/page.tsx` - student-organisation roles |
| `/education` | `app/education/page.tsx` - schools and Coursera coursework |
| `/skills` | `app/skills/page.tsx` |

Adding a page means creating `app/<name>/page.tsx` and adding an entry to `topics` at the bottom of
[`lib/content.ts`](lib/content.ts) - the nav, the home page index and the ⌘K palette are all driven
from that one array. `navItems` is `topics` with Home prepended; Home is not a topic, so it has no
index card and no count.

**Editing content.** All content - roles, publications, projects, skills, awards, education - lives in
[`lib/content.ts`](lib/content.ts), sourced verbatim from the CV, arXiv and Google Scholar. Change it
there and every page follows. The CV PDF served by the site is `public/Sasini_Wanigathunga_CV.pdf`,
and the profile photo is `public/profile.jpg`.

**Theming.** Both palettes are CSS custom properties at the top of [`app/globals.css`](app/globals.css) -
warm paper for light, deep navy for dark. The theme is resolved before first paint by an inline script
in `app/layout.tsx`, so there is no flash of the wrong palette.

**Moving to a custom domain.** Set `NEXT_PUBLIC_BASE_PATH` in the workflow to an empty string, add a
`public/CNAME` file containing the domain, and update `siteUrl` in [`app/layout.tsx`](app/layout.tsx).

</details>
