import { leadership } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function LeadershipList() {
  return (
    <ol className="entry-list space-y-8">
      {leadership.map((entry, i) => (
        <Reveal as="li" key={entry.org} delay={0.03 * i}>
          <article className="entry">
            <span className="label !text-[0.625rem] sm:pt-1.5">{entry.period}</span>

            <div>
              <h2 className="flex flex-wrap items-baseline gap-x-2.5 text-[1.05rem] leading-snug">
                {entry.org}
                <span className="label !text-[0.6rem]">{entry.place}</span>
              </h2>

              <ul className="mt-2 space-y-1.5">
                {entry.roles.map((role) => (
                  <li key={role.title} className="text-[0.9rem]">
                    <div className="flex flex-wrap items-baseline gap-x-2.5">
                      <span className="text-ink">{role.title}</span>
                      {role.period && (
                        <span className="font-mono text-[0.68rem] text-muted">{role.period}</span>
                      )}
                    </div>
                    {role.notes && (
                      <ul className="mt-1 space-y-0.5 border-l border-hairline pl-3">
                        {role.notes.map((note) => (
                          <li key={note} className="text-[0.825rem] leading-relaxed text-ink-2">
                            {note}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
