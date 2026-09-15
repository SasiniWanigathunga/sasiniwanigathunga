import { experience } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="shell section">
      <SectionHeading title="Experience" />

      <ol className="space-y-8">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.org} delay={0.04 * i}>
            <article className="grid gap-x-4 gap-y-2 sm:grid-cols-[6.5rem_1fr]">
              <span className="label !text-[0.625rem] sm:pt-1.5">
                {role.positions[role.positions.length - 1].period.split(" — ")[0]} —{" "}
                {role.positions[0].period.split(" — ")[1]}
              </span>

              <div>
                <h3 className="serif flex flex-wrap items-baseline gap-x-2.5 text-[1.15rem]">
                  {role.url ? (
                    <a
                      href={role.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1 transition-colors hover:text-accent"
                    >
                      {role.org}
                      <ArrowUpRight className="size-3 text-muted" />
                    </a>
                  ) : (
                    role.org
                  )}
                  {role.orgNote && <span className="label !text-[0.6rem]">{role.orgNote}</span>}
                </h3>

                <ul className="mt-2 space-y-1">
                  {role.positions.map((position) => (
                    <li
                      key={position.title}
                      className="flex flex-wrap items-baseline gap-x-2.5 text-[0.9rem]"
                    >
                      {position.current && (
                        <span
                          aria-hidden
                          className="inline-block size-1.5 shrink-0 rounded-full bg-accent"
                        />
                      )}
                      <span className="text-ink">{position.title}</span>
                      <span className="font-mono text-[0.68rem] text-muted">{position.period}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-3 text-[0.925rem] leading-relaxed text-ink-2 pretty">
                  {role.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
