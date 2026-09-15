/**
 * GitHub Pages serves this site from a subdirectory, so anything that is not
 * routed through `next/link` - PDFs, images, favicons - has to carry the base
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

/**
 * Route comparison that ignores a trailing slash. `trailingSlash: true` in
 * next.config means `usePathname()` can return either form depending on how
 * the page was reached, so comparing raw strings misses the active page.
 */
export function samePath(a: string | null, b: string): boolean {
  const trim = (v: string) => (v.length > 1 ? v.replace(/\/+$/, "") : v);
  return a !== null && trim(a) === trim(b);
}
