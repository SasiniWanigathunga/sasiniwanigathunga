import Link from "next/link";
import { links, profile } from "@/lib/content";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";

const externalLinks = [
  { label: "Email", href: links.email, Icon: Mail },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "GitHub", href: links.github, Icon: Github },
  { label: "Google Scholar", href: links.scholar, Icon: Scholar },
];

export function ProfilePanelRail() {
  return (
    <aside aria-label="Profile and links" className="profile-rail no-print fixed inset-y-0 left-0 top-[4.5rem] z-40 hidden w-[var(--rail-w)] overflow-y-auto border-r border-hairline px-8 py-10 lg:block">
      <PanelBody />
    </aside>
  );
}

export function ProfilePanelInline() {
  return <div className="profile-inline shell mb-8 border-b border-hairline pb-7 lg:hidden"><PanelBody /></div>;
}

function PanelBody() {
  return (
    <div className="profile-body">
      <Link href="/" className="profile-portrait block" aria-label="Home">
        <img src={asset(profile.photo)} alt={profile.name} width={460} height={460} fetchPriority="high" />
      </Link>
      <div className="profile-identity mt-7">
        <Link href="/" className="profile-name block text-[1.55rem] font-medium leading-[1.3] tracking-[-0.045em] transition-colors hover:text-accent">{profile.firstName}<br className="hidden lg:block" /><span className="lg:hidden"> </span>{profile.lastName}</Link>
        <p className="profile-subtitle mt-3 text-[0.8rem] leading-[1.8] text-ink-2">{profile.subtitle}</p>
        <p className="profile-location label mt-4 flex items-center gap-2 !text-[0.6rem]"><span aria-hidden className="size-1.5 rounded-full bg-accent" />Based in {profile.location}</p>
      </div>
      <ul className="profile-links mt-6 border-t border-hairline pt-3">
        {externalLinks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer" className="profile-link group">
              <Icon className="size-4 shrink-0 text-muted group-hover:text-accent" />
              <span>{label}</span><ArrowUpRight className="external-arrow ml-auto size-3 text-muted" />
            </a>
          </li>
        ))}
      </ul>
      <a href={asset(links.cv)} target="_blank" rel="noopener noreferrer" className="profile-cv button-secondary mt-5 w-full"><Download className="size-3.5" />Curriculum vitae<span className="ml-auto font-mono text-[0.6rem] text-muted">PDF</span></a>
    </div>
  );
}
