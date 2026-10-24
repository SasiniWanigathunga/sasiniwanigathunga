import { aside, skills } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SkillIcon } from "@/components/ui/brandIcons";

export function SkillList() {
  return (
    <dl className="space-y-5">
      {skills.map((group, i) => (
        <Reveal key={group.group} delay={0.03 * i}>
          <div className="skill-group">
            <dt className="label !text-[0.625rem] sm:pt-1">{group.group}</dt>
            <dd className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded border border-hairline bg-paper px-3 py-2 font-mono text-[0.72rem] text-ink-2 transition-colors hover:border-accent hover:text-accent"
                >
                  <SkillIcon skill={item} className="size-4 shrink-0" />
                  {item}
                </span>
              ))}
            </dd>
          </div>
        </Reveal>
      ))}

      <Reveal delay={0.12}>
        <div className="skill-group">
          <dt className="label !text-[0.625rem] sm:pt-1">Languages</dt>
          <dd className="text-[0.925rem] text-ink-2">{aside.languages}</dd>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="skill-group">
          <dt className="label !text-[0.625rem] sm:pt-1">Sports</dt>
          <dd className="text-[0.925rem] text-ink-2">{aside.sports}</dd>
        </div>
      </Reveal>
    </dl>
  );
}
