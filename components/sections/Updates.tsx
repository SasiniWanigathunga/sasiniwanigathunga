import { updates } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Updates() {
  return (
    <section id="updates" className="shell section">
      <SectionHeading title="Updates" />

      <ol className="space-y-3.5">
        {updates.map((update, i) => (
          <Reveal as="li" key={update.date + update.text} delay={0.03 * i}>
            <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4 sm:grid-cols-[6.5rem_1fr]">
              <span className="label !text-[0.625rem] tabular-nums">{update.date}</span>
              <p className="text-[0.95rem] leading-relaxed text-ink-2 pretty">
                {"href" in update && update.href ? (
                  <a
                    href={update.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline transition-colors hover:text-ink"
                  >
                    {update.text}
                    <ArrowUpRight className="ml-1 inline size-3 align-baseline text-muted transition-colors group-hover:text-accent" />
                  </a>
                ) : (
                  update.text
                )}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
