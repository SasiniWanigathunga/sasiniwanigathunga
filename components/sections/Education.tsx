import { education } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="shell section">
      <SectionHeading title="Education" />

      <ol className="space-y-8">
        {education.map((entry, i) => (
          <Reveal as="li" key={entry.school} delay={0.04 * i}>
            <article className="grid gap-x-4 gap-y-2 sm:grid-cols-[6.5rem_1fr]">
              <span className="label !text-[0.625rem] sm:pt-1.5">{entry.period}</span>

              <div>
                <h3 className="serif flex flex-wrap items-baseline gap-x-2.5 text-[1.15rem]">
                  {"url" in entry && entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      {entry.school}
                      <ArrowUpRight className="size-3 text-muted" />
                    </a>
                  ) : (
                    entry.school
                  )}
                  <span className="label !text-[0.6rem]">{entry.place}</span>
                </h3>

                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-2">{entry.degree}</p>

                <p className="mt-2 font-mono text-[0.72rem] text-accent">{entry.result}</p>

                {entry.notes.length > 0 && (
                  <ul className="mt-2.5 space-y-1">
                    {entry.notes.map((note) => (
                      <li
                        key={note}
                        className="flex items-baseline gap-2 text-[0.875rem] text-ink-2"
                      >
                        <span aria-hidden className="h-px w-2.5 shrink-0 bg-hairline-strong" />
                        {note}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.coursework.length > 0 && (
                  <details className="group mt-4">
                    <summary className="cursor-pointer list-none font-mono text-[0.68rem] text-muted transition-colors hover:text-ink">
                      Selected coursework
                      <span className="ml-1 inline-block group-open:hidden">+</span>
                      <span className="ml-1 hidden group-open:inline-block">−</span>
                    </summary>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {entry.coursework.map((course) => (
                        <li
                          key={course}
                          className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.6rem] text-muted"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
