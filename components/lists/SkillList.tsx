import { aside, skills } from "@/lib/content";
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
