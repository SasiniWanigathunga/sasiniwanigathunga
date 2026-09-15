# Sasini Wanigathunga

**AI Research Engineer** at [Robotic Assistance Devices](https://www.radsecurity.ai/) · B.Sc. Eng (Hons) in Electronic and Telecommunication Engineering, University of Moratuwa

I work on vision–language models, agentic AI, and video analytics — building systems that hold up outside the datasets they were trained on.

🌐 **[sasiniwanigathunga.github.io/sasiniwanigathunga](https://sasiniwanigathunga.github.io/sasiniwanigathunga/)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-sasiniwanigathunga-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sasiniwanigathunga/)
[![Google Scholar](https://img.shields.io/badge/Scholar-Publications-4285F4?style=flat-square&logo=googlescholar&logoColor=white)](https://scholar.google.com/citations?user=_GKqZqwAAAAJ&hl=en)
[![arXiv](https://img.shields.io/badge/arXiv-2501.04696-B31B1B?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.04696)

## Research

**[Test-Time Optimization for Domain Adaptive Open Vocabulary Segmentation](https://arxiv.org/abs/2501.04696)**
U. De Silva\*, D. Samaraweera\*, **S. Wanigathunga**\*, K. Kariyawasam\*, K. Ranasinghe, M. Naseer, R. Rodrigo
*arXiv:2501.04696 — under review, Elsevier Neural Networks* · \*equal contribution

Seg-TTO adapts open-vocabulary segmentation models at test time, with no labels and no retraining. Evaluated across 22 specialised domain tasks with improvements of up to 27% mIoU on individual datasets.

## Currently

- Agentic AI, AI automation, and video analytics for surveillance at RAD
- Text-independent PII removal from speech — +4.1 frame-level F1 with 67% fewer parameters

---

<details>
<summary><b>About this repository</b></summary>

<br>

This repo holds the source for my portfolio site, deployed to GitHub Pages.

**Stack:** Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Framer Motion

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static export to ./out
```

To build exactly as the deployed site does — served from the `/sasiniwanigathunga`
subpath — set the base path:

```bash
NEXT_PUBLIC_BASE_PATH=/sasiniwanigathunga npm run build
```

**Deployment.** Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which type-checks, builds the static export, and publishes it to GitHub Pages. Enable this once under
**Settings → Pages → Build and deployment → Source: GitHub Actions**.

**Editing content.** All copy — roles, publications, projects, awards, education — lives in
[`lib/content.ts`](lib/content.ts). Change it there and every section updates. The CV PDF served by the
site is [`public/Sasini_Wanigathunga_CV.pdf`](public/).

**Moving to a custom domain.** Change `NEXT_PUBLIC_BASE_PATH` in the workflow to an empty string, add a
`public/CNAME` file containing the domain, and update `siteUrl` in [`app/layout.tsx`](app/layout.tsx).

</details>
