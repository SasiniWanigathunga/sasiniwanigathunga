import Link from "next/link";
import { topics } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

/** The home page's way into each topic page. */
export function TopicIndex() {
  return (
    <section id="index" className="shell section">
      <Reveal>
        <h2 className="serif mb-7 flex items-baseline gap-3 text-2xl md:text-[1.75rem]">
          <span aria-hidden className="inline-block size-2 shrink-0 rounded-[1px] bg-accent" />
          Index
        </h2>
      </Reveal>

      <ul className="grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2">
        {topics.map((topic, i) => (
          <Reveal as="li" key={topic.href} delay={0.03 * i}>
            <Link
              href={topic.href}
              className="group flex h-full items-center justify-between gap-4 bg-surface px-5 py-4 transition-colors hover:bg-paper-2"
            >
              <span className="serif text-lg text-ink transition-colors group-hover:text-accent">
                {topic.label}
              </span>
              <span className="flex items-center gap-2.5">
                {topic.count !== undefined && (
                  <span className="font-mono text-[0.7rem] tabular-nums text-muted">
                    {topic.count}
                  </span>
                )}
                <ArrowUpRight className="size-3.5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
