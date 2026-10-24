import Link from "next/link";
import { about, links, profile } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function withLink(text: string, key: keyof typeof links, label: string) {
  const [before, after] = text.split(`{${key}}`);
  return <>{before}<a href={links[key]} target="_blank" rel="noopener noreferrer" className="link-underline text-ink underline transition-colors hover:text-accent">{label}</a>{after}</>;
}

export function About() {
  return (
    <div className="shell">
      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-topline"><p className="label !text-accent">AI research & engineering</p><span aria-hidden className="hero-marker" /></div>
        <h1 id="intro-title">Exploring intelligence.<br /><em>Building with purpose.</em></h1>
        <p className="mt-6 max-w-xl text-base leading-[1.8] text-ink-2">Research in computer vision and natural language processing. Building AI systems that connect research with real-world applications.</p>
        <div className="research-tags mt-6">{profile.interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/publications" className="button-primary">Explore my research<ArrowUpRight className="size-4" /></Link>
          <Link href="/projects" className="button-secondary">View projects<ArrowUpRight className="size-4" /></Link>
        </div>
      </section>
      <section id="about" className="section">
        <SectionHeading title="About" index="01" aside={<span className="label !text-[0.6rem]">Researcher / Engineer</span>} />
        <div className="space-y-4">{about.map((paragraph, i) => <Reveal as="p" key={paragraph.linkKey} delay={0.04 * i} className="pretty text-[0.95rem] leading-[1.9] text-ink-2">{withLink(paragraph.text, paragraph.linkKey, paragraph.linkText)}</Reveal>)}</div>
      </section>
    </div>
  );
}
