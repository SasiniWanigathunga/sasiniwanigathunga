/**
 * Inline icon set. Kept local rather than pulling an icon package in - the
 * site needs a dozen glyphs, and these inherit `currentColor` and stroke
 * weight from the surrounding type.
 */
type IconProps = React.SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

export function Mail({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6.5 9 6 9-6" />
    </svg>
  );
}

export function Github({ className = "size-4", ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-2.06c-3.08.67-3.73-1.3-3.73-1.3-.5-1.29-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.97-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 5.56 0c2.12-1.43 3.05-1.13 3.05-1.13.61 1.53.22 2.66.11 2.94.71.77 1.14 1.76 1.14 2.97 0 4.26-2.6 5.2-5.07 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53a11.11 11.11 0 0 0 7.56-10.53C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

export function Linkedin({ className = "size-4", ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 21.5h5.15V9.3H2.4v12.2Zm7.7-12.2h4.94v1.67h.07c.69-1.24 2.37-2.55 4.88-2.55 5.22 0 6.18 3.3 6.18 7.6v7.48h-5.14v-6.63c0-1.58-.03-3.62-2.3-3.62-2.3 0-2.65 1.72-2.65 3.5v6.75H10.1V9.3Z" />
    </svg>
  );
}

export function Scholar({ className = "size-4", ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      <path d="M12 2 0 8.5l12 6.5 12-6.5L12 2Z" />
      <path d="M5 12.6v4.02C5 19.04 8.13 21 12 21s7-1.96 7-4.38V12.6l-7 3.8-7-3.8Z" />
    </svg>
  );
}

export function Download({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M12 3v12M7.5 10.5 12 15l4.5-4.5M4 19.5h16" />
    </svg>
  );
}

export function Sun({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2.5 12h2M19.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </svg>
  );
}

export function Moon({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5a8.5 8.5 0 1 0 10.8 10.8Z" />
    </svg>
  );
}

export function Search({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function Close({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function Menu({ className = "size-4", ...p }: IconProps) {
  return (
    <svg {...base} className={className} {...p}>
      <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
    </svg>
  );
}

export function Sparkle({ className = "size-4", ...p }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className} {...p}>
      <path d="M12 2.5c.5 4.6 2.4 6.6 7 7.2-4.6.6-6.5 2.6-7 7.2-.5-4.6-2.4-6.6-7-7.2 4.6-.6 6.5-2.6 7-7.2ZM19 15c.27 2.2 1.2 3.2 3.4 3.5-2.2.3-3.13 1.3-3.4 3.5-.27-2.2-1.2-3.2-3.4-3.5 2.2-.3 3.13-1.3 3.4-3.5Z" />
    </svg>
  );
}
