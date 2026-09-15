import { leadership } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function LeadershipList() {
  return (
    <ul className="space-y-6">
      {leadership.map((entry, i) => (
        <Reveal as="li" key={entry.org} delay={0.03 * i}>
          <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[6.5rem_1fr]">
            <span className="label !text-[0.625rem] sm:pt-1.5">{entry.place}</span>
            <div>
              <h2 className="serif text-[1.05rem] leading-snug">{entry.org}</h2>
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
