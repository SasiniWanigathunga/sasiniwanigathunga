import { links, profile } from "@/lib/content";
import { Github, Linkedin, Mail, Scholar } from "@/components/ui/icons";

const social = [
  { label: "Email", href: links.email, Icon: Mail },
  { label: "LinkedIn", href: links.linkedin, Icon: Linkedin },
  { label: "GitHub", href: links.github, Icon: Github },
  { label: "Google Scholar", href: links.scholar, Icon: Scholar },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="shell flex flex-col items-center gap-5 py-10 text-center">
        <ul className="flex items-center gap-1">
          {social.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-paper-2 hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>

        <p className="label !text-[0.625rem]">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <a href="#top" className="label link-underline !text-[0.625rem] hover:!text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
