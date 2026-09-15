import { aside, coursework, skills } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function SkillList() {
  return (
    <dl className="space-y-5">
      {skills.map((group, i) => (
        <Reveal key={group.group} delay={0.03 * i}>
          <div className="grid gap-x-4 gap-y-1.5 sm:grid-cols-[6.5rem_1fr]">
            <dt className="label !text-[0.625rem] sm:pt-1">{group.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.68rem] text-ink-2 transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </Reveal>
      ))}

      <Reveal delay={0.12}>
        <div className="grid gap-x-4 gap-y-1.5 sm:grid-cols-[6.5rem_1fr]">
          <dt className="label !text-[0.625rem] sm:pt-1">Languages</dt>
          <dd className="text-[0.925rem] text-ink-2">{aside.languages}</dd>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="grid gap-x-4 gap-y-1.5 sm:grid-cols-[6.5rem_1fr]">
          <dt className="label !text-[0.625rem] sm:pt-1">Sports</dt>
          <dd className="text-[0.925rem] text-ink-2">{aside.sports}</dd>
        </div>
      </Reveal>
    </dl>
  );
}

export function CourseworkList() {
  return (
    <ul className="space-y-3">
      {coursework.map((course, i) => (
        <Reveal as="li" key={course.title} delay={0.03 * i}>
          <div className="grid gap-x-4 gap-y-0.5 sm:grid-cols-[6.5rem_1fr]">
            <span className="label !text-[0.625rem] sm:pt-1">Coursera</span>
            <div>
              <p className="text-[0.95rem] text-ink">{course.title}</p>
              <p className="mt-0.5 text-[0.8rem] text-muted">{course.issuer}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
