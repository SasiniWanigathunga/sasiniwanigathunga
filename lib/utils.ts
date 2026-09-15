/**
 * GitHub Pages serves this site from a subdirectory, so anything that is not
 * routed through `next/link` — PDFs, images, favicons — has to carry the base
 * path itself. Next inlines NEXT_PUBLIC_* at build time, so this costs nothing
 * at runtime.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
