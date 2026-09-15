import Link from "next/link";
import { topics } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The home page's way into each topic page, set as a contents list with
 * dotted leaders. No heading - the shape of the list says what it is.
 */
export function TopicList() {
  return (
    <nav aria-label="Topics" className="shell section">
      <ul>
        {topics.map((topic, i) => (
          <Reveal as="li" key={topic.href} delay={0.03 * i}>
            <Link
              href={topic.href}
              className="group flex items-baseline gap-3 py-3 sm:gap-4"
            >
              <span className="serif text-xl text-ink transition-colors group-hover:text-accent sm:text-2xl">
                {topic.label}
              </span>

              {/* The leader. Sits on the baseline and picks up the accent on hover. */}
              <span
                aria-hidden
                className="mb-[0.3rem] min-w-6 flex-1 border-b border-dotted border-hairline-strong transition-colors group-hover:border-accent"
              />

              {topic.count !== undefined && (
                <span className="font-mono text-[0.75rem] tabular-nums text-muted transition-colors group-hover:text-ink">
                  {topic.count}
                </span>
              )}

              <ArrowUpRight className="size-3.5 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </Link>
          </Reveal>
        ))}
      </ul>
    </nav>
  );
}
