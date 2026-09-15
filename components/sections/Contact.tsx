import { links, profile } from "@/lib/content";
import { asset } from "@/lib/utils";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

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
        <Reveal>
          <p className="label border-b border-hairline pb-3">
            <span className="text-accent">07</span>
            <span className="ml-3">Contact</span>
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="serif mt-10 max-w-[18ch] text-[length:var(--text-display)] leading-[0.9] tracking-[-0.035em] balance">
            Let’s build something that <span className="text-accent">generalises</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[52ch] text-[1.05rem] leading-relaxed text-ink-2 pretty">
            Open to research collaborations, conversations about vision–language models, and
            interesting problems in applied AI. The fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={links.email}
              className="group flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={asset(links.cv)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-full border border-hairline-strong px-7 py-3.5 text-sm transition-colors hover:border-ink"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
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
        </Reveal>
      </div>
    </section>
  );
}
