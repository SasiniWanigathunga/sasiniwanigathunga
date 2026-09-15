import { awards, leadership } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function AwardList() {
  return (
    <ol className="space-y-6">
      {awards.map((award, i) => (
        <Reveal as="li" key={award.title} delay={0.03 * i}>
          <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[6.5rem_1fr]">
            <span className="label !text-[0.625rem] sm:pt-1.5">{award.period}</span>
            <div>
              <h2 className="serif flex flex-wrap items-baseline gap-x-2.5 text-[1.05rem] leading-snug">
                {award.title}
                <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.6rem] text-accent">
                  {award.rank}
                </span>
              </h2>
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
  );
}

export function LeadershipList() {
  return (
    <ul className="space-y-6">
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
  );
}
