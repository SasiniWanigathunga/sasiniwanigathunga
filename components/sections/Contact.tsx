import { links, profile } from "@/lib/content";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const channels = [
  { label: "Email", value: profile.email, href: links.email, Icon: Mail },
  { label: "LinkedIn", value: "in/sasiniwanigathunga", href: links.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "@SasiniWanigathunga", href: links.github, Icon: Github },
  { label: "Google Scholar", value: "Publications", href: links.scholar, Icon: Scholar },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-hairline bg-paper-2/40 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[26rem] bg-[radial-gradient(60%_60%_at_50%_100%,var(--c-accent-soft),transparent_70%)] opacity-80"
      />

      <div className="shell relative">
        <SectionHeading
          index="07"
          title="Contact"
          aside={<span className="label">{profile.location}</span>}
        />

        <ul className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-6 bg-surface p-6 transition-colors hover:bg-paper-2"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-[1.15rem] text-muted transition-colors group-hover:text-accent" />
                  <ArrowUpRight className="size-3.5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                </div>
                <div>
                  <p className="label !text-[0.6rem]">{label}</p>
                  <p className="mt-1.5 truncate text-[0.9rem] text-ink">{value}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <a
            href={asset(links.cv)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            <Download className="size-4" />
            Curriculum vitae
          </a>
        </Reveal>
      </div>
    </section>
  );
}
