import Link from "next/link";
import { links, profile } from "@/lib/content";
import { asset } from "@/lib/utils";
import { Download, Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";
import { PatchGrid } from "@/components/ui/PatchGrid";

const externalLinks = [
  { label: "Email", value: profile.email, href: links.email, Icon: Mail },
  { label: "LinkedIn", value: "in/sasiniwanigathunga", href: links.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "@SasiniWanigathunga", href: links.github, Icon: Github },
  { label: "Google Scholar", value: "Publications", href: links.scholar, Icon: Scholar },
];

/**
 * The identity block: photo, name and every external link. Fixed to the left
 * on wide screens so it stays put across page navigations; stacked above the
 * content on narrow ones, where a fixed rail has nowhere to live.
 *
 * Rendered once in the root layout, so it survives client-side navigation
 * rather than remounting per page.
 */
export function ProfilePanelRail() {
  return (
    <aside
      aria-label="Profile and links"
      className="no-print fixed inset-y-0 left-0 top-14 z-40 hidden w-[var(--rail-w)] overflow-y-auto border-r border-hairline bg-paper px-8 py-10 lg:block"
    >
      <PanelBody />
    </aside>
  );
}

/** The same block, in the page flow, for screens below the rail breakpoint. */
export function ProfilePanelInline() {
  return (
    <div className="shell border-b border-hairline pb-9 lg:hidden">
      <PanelBody />
    </div>
  );
}

function PanelBody() {
  return (
    <div className="flex flex-col items-center text-center">
      <Link href="/" className="group relative grid size-44 place-items-center" aria-label="Home">
        <PatchGrid className="absolute inset-0 -z-10 opacity-70" />
        <img
          src={asset(profile.photo)}
          alt={profile.name}
          width={460}
          height={460}
          className="size-24 rounded-full border border-hairline object-cover shadow-sm transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <Link href="/" className="serif mt-5 text-[1.5rem] leading-tight transition-colors hover:text-accent">
        {profile.name}
      </Link>

      <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-2">{profile.subtitle}</p>
      <p className="label mt-2 !text-[0.6rem]">{profile.location}</p>

      <ul className="mt-6 w-full space-y-0.5 border-t border-hairline pt-5">
        {externalLinks.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={value}
              className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[0.875rem] text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
            >
              <Icon className="size-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
              <span className="truncate">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href={asset(links.cv)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[0.8rem] font-medium text-paper transition-opacity hover:opacity-85"
      >
        <Download className="size-3.5" />
        Curriculum vitae
      </a>
    </div>
  );
}
