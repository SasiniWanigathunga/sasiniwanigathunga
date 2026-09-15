import { about, links, profile } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Splits a sentence on its `{key}` placeholder and drops an anchor in.
 * Keeps the prose in content.ts as plain readable strings.
 */
function withLink(text: string, key: keyof typeof links, label: string) {
  const [before, after] = text.split(`{${key}}`);
  return (
    <>
      {before}
      <a
        href={links[key]}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline text-ink underline decoration-hairline-strong underline-offset-4 transition-colors hover:text-accent"
      >
        {label}
      </a>
      {after}
    </>
  );
}

export function About() {
  return (
    <section id="about" className="shell section !border-t-0">
      <SectionHeading
        title="About"
        aside={
          <span className="label !text-[0.625rem]">{profile.interests.join(" · ")}</span>
        }
      />

      <div className="space-y-4">
        {about.map((paragraph, i) => (
          <Reveal as="p" key={i} delay={0.04 * i} className="text-[0.975rem] leading-[1.75] text-ink-2 pretty">
            {withLink(paragraph.text, paragraph.linkKey, paragraph.linkText)}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
