import { experience } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="From research bench to production surveillance."
        lede="Three roles, one throughline: taking models that behave in a notebook and making them behave in the field."
      />

      <ol className="border-t border-hairline">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.org} delay={0.05 * i}>
            <article className="group grid gap-5 border-b border-hairline py-9 md:grid-cols-12 md:gap-8 md:py-11">
              {/* Timeline column */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className={
                      role.positions.some((p) => p.current)
                        ? "size-1.5 rounded-full bg-accent"
                        : "size-1.5 rounded-full bg-hairline-strong"
                    }
                  />
                  <span className="label !text-[0.625rem]">
                    {role.positions[role.positions.length - 1].period.split(" — ")[0]} —{" "}
                    {role.positions[0].period.split(" — ")[1]}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="md:col-span-9">
                <h3 className="serif flex flex-wrap items-baseline gap-x-3 text-2xl md:text-[1.75rem]">
                  {role.url ? (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1.5"
                    >
                      {role.org}
                      <ArrowUpRight className="size-3.5 text-muted" />
                    </a>
                  ) : (
                    role.org
                  )}
                  {role.orgNote && <span className="label !text-[0.6rem]">{role.orgNote}</span>}
                </h3>

                <ul className="mt-4 space-y-1.5">
                  {role.positions.map((position) => (
                    <li
                      key={position.title}
                      className="flex flex-wrap items-baseline gap-x-3 text-[0.95rem]"
                    >
                      <span className="font-medium text-ink">{position.title}</span>
                      <span className="font-mono text-[0.7rem] text-muted">{position.period}</span>
                      {position.current && (
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-accent">
                          Current
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 max-w-[68ch] text-[0.95rem] leading-relaxed text-ink-2 pretty">
                  {role.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.65rem] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
