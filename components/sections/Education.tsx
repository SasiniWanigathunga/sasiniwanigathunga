import { education } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeading index="06" eyebrow="Education" title="Where the foundations were laid." />

      <ol className="border-t border-hairline">
        {education.map((entry, i) => (
          <Reveal as="li" key={entry.school} delay={0.05 * i}>
            <article className="grid gap-5 border-b border-hairline py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <span className="label !text-[0.625rem]">{entry.period}</span>
                <p className="serif mt-3 text-2xl leading-none text-accent">{entry.result}</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="serif flex flex-wrap items-baseline gap-x-3 text-2xl md:text-[1.75rem]">
                  {"url" in entry && entry.url ? (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1.5"
                    >
                      {entry.school}
                      <ArrowUpRight className="size-3.5 text-muted" />
                    </a>
                  ) : (
                    entry.school
                  )}
                  <span className="label !text-[0.6rem]">{entry.place}</span>
                </h3>

                <p className="mt-3 max-w-[60ch] text-[0.975rem] leading-relaxed text-ink-2">
                  {entry.degree}
                </p>

                {entry.notes.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {entry.notes.map((note) => (
                      <li key={note} className="flex items-baseline gap-2.5 text-[0.875rem] text-ink-2">
                        <span aria-hidden className="h-px w-3 shrink-0 bg-accent" />
                        {note}
                      </li>
                    ))}
                  </ul>
                )}

                {entry.coursework.length > 0 && (
                  <div className="mt-7">
                    <p className="label mb-3">Selected coursework</p>
                    <ul className="flex flex-wrap gap-1.5">
                      {entry.coursework.map((course) => (
                        <li
                          key={course}
                          className="rounded border border-hairline bg-surface px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                        >
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
