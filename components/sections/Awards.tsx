import { awards, leadership } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Awards() {
  return (
    <section id="awards" className="shell section">
      <SectionHeading title="Awards" />

      <ol className="space-y-5">
        {awards.map((award, i) => (
          <Reveal as="li" key={award.title} delay={0.03 * i}>
            <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[6.5rem_1fr]">
              <span className="label !text-[0.625rem] sm:pt-1.5">{award.period}</span>
              <div>
                <h3 className="serif flex flex-wrap items-baseline gap-x-2.5 text-[1.05rem] leading-snug">
                  {award.title}
                  <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.6rem] text-accent">
                    {award.rank}
                  </span>
                </h3>
                {award.detail && (
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-2 pretty">
                    {award.detail}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-12">
        <SectionHeading title="Leadership" />
        <ul className="space-y-5">
          {leadership.map((entry, i) => (
            <Reveal as="li" key={entry.org} delay={0.03 * i}>
              <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[6.5rem_1fr]">
                <span className="label !text-[0.625rem] sm:pt-1.5">{entry.place}</span>
                <div>
                  <h3 className="serif text-[1.05rem] leading-snug">{entry.org}</h3>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {entry.roles.map((role) => (
                      <li
                        key={role}
                        className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.6rem] text-muted"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
