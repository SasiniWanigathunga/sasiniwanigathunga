import { awards, leadership } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Awards() {
  return (
    <section
      id="awards"
      className="relative scroll-mt-24 border-t border-hairline bg-paper-2/40 py-24 md:py-32"
    >
      <div className="shell">
        <SectionHeading index="05" title="Awards & Leadership" />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h3 className="label mb-1 border-b border-hairline pb-3">Awards</h3>
            <ol>
              {awards.map((award, i) => (
                <Reveal as="li" key={award.title} delay={0.04 * i}>
                  <div className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-hairline py-6">
                    <span className="label !text-[0.6rem] pt-1.5">{award.period}</span>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h4 className="serif text-[1.2rem] leading-snug text-ink">{award.title}</h4>
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[0.65rem] text-accent">
                          {award.rank}
                        </span>
                      </div>
                      {award.detail && (
                        <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-2 pretty">
                          {award.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-5">
            <h3 className="label mb-1 border-b border-hairline pb-3">Leadership</h3>
            <ul>
              {leadership.map((entry, i) => (
                <Reveal as="li" key={entry.org} delay={0.04 * i}>
                  <div className="border-b border-hairline py-6">
                    <h4 className="serif text-[1.15rem] leading-snug text-ink">{entry.org}</h4>
                    <p className="label mt-1.5 !text-[0.6rem]">{entry.place}</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {entry.roles.map((role) => (
                        <li
                          key={role}
                          className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.625rem] text-muted"
                        >
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
