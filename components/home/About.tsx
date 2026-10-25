import { about, links } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function withLink(text: string, key: keyof typeof links, label: string) {
  const [before, after] = text.split(`{${key}}`);
  return (
    <>
      {before}
      <a
        href={links[key]}
        target="_blank"
        rel="noopener noreferrer"
        className="link-underline text-ink underline transition-colors hover:text-accent"
      >
        {label}
      </a>
      {after}
    </>
  );
}

export function About() {
  return (
    <div className="shell">
      <section id="about" className="section !border-t-0 !pt-4">
        <SectionHeading
          as="h1"
          title="About"
          index="01"
          aside={<span className="label !text-[0.6rem]">Researcher / Engineer</span>}
        />
        <div className="space-y-4">
          {about.map((paragraph, i) => (
            <Reveal
              as="p"
              key={paragraph.linkKey}
              delay={0.04 * i}
              className="pretty text-[0.95rem] leading-[1.9] text-ink-2"
            >
              {withLink(paragraph.text, paragraph.linkKey, paragraph.linkText)}
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
