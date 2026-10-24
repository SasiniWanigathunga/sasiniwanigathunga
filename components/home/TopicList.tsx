import Link from "next/link";
import { topics } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TopicList() {
  return (
    <div className="shell">
      <nav aria-label="Topics" className="section">
        <SectionHeading title="Explore" index="03" aside={<span className="label !text-[0.6rem]">A closer look</span>} />
        <ul className="topic-grid">
          {topics.map((topic, i) => (
            <Reveal as="li" key={topic.href} delay={0.025 * i}>
              <Link href={topic.href} className="topic-link group">
                <span aria-hidden className="topic-index font-mono text-[0.6rem] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[0.85rem] font-medium tracking-tight group-hover:text-accent">{topic.label}</span>
                {topic.count !== undefined && <span className="font-mono text-[0.6rem] text-muted">{String(topic.count).padStart(2, "0")}</span>}
                <ArrowUpRight className="ml-auto size-3.5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </nav>
    </div>
  );
}
