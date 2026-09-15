import { aside, coursework, skills } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="shell scroll-mt-24 py-24 md:py-32">
      <SectionHeading index="04" title="Skills" />

      <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={0.05 * i}>
            <div>
              <h3 className="label border-b border-hairline pb-3">{group.group}</h3>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="group flex items-baseline gap-3 text-[0.95rem] text-ink-2 transition-colors hover:text-ink"
                  >
                    <span
                      aria-hidden
                      className="h-px w-3 shrink-0 bg-hairline-strong transition-all group-hover:w-5 group-hover:bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-20 border-t border-hairline pt-10">
          <h3 className="label mb-6">Relevant Coursework — Coursera</h3>
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {coursework.map((course) => (
              <li key={course.title}>
                <p className="serif text-[1.05rem] leading-snug text-ink">{course.title}</p>
                <p className="mt-1 text-[0.8rem] text-muted">{course.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <dl className="mt-12 grid gap-6 border-t border-hairline pt-8 sm:grid-cols-2">
          <div>
            <dt className="label !text-[0.6rem]">Languages</dt>
            <dd className="mt-2 text-[0.95rem] text-ink-2">{aside.languages}</dd>
          </div>
          <div>
            <dt className="label !text-[0.6rem]">Sports</dt>
            <dd className="mt-2 text-[0.95rem] text-ink-2">{aside.sports}</dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
