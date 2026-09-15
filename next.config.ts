import type { NextConfig } from "next";

/**
 * The site is statically exported and served from GitHub Pages at
 *   https://sasiniwanigathunga.github.io/sasiniwanigathunga/
 * so every asset needs the `/sasiniwanigathunga` prefix in production.
 *
 * Keeping the prefix in an env var means moving to a root-path host
 * (a custom domain, Vercel, or a `<user>.github.io` repo) is a one-line
 * change in the workflow rather than an edit across the codebase.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  // GitHub Pages has no server, so the Next image optimizer cannot run.
  images: { unoptimized: true },
  // Emits `about/index.html` instead of `about.html`, which Pages resolves
  // correctly for both `/about` and `/about/`.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
