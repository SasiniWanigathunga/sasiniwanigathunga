import { aside, profile } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="shell scroll-mt-28 py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="label border-b border-hairline pb-3">Profile</p>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-6 space-y-2.5">
              {profile.interests.map((interest) => (
                <li key={interest} className="flex items-center gap-2.5 text-[0.9rem] text-ink-2">
                  <span className="h-px w-4 bg-accent" aria-hidden />
                  {interest}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.14}>
            <dl className="mt-8 space-y-3 border-t border-hairline pt-6 text-[0.825rem] text-muted">
              <div>
                <dt className="label !text-[0.6rem]">Based in</dt>
                <dd className="mt-1 text-ink-2">{profile.location}</dd>
              </div>
              <div>
                <dt className="label !text-[0.6rem]">Languages</dt>
                <dd className="mt-1 text-ink-2">{aside.languages}</dd>
              </div>
              <div>
                <dt className="label !text-[0.6rem]">Off the clock</dt>
                <dd className="mt-1 text-ink-2">{aside.chess}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          {profile.summary.map((paragraph, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <p
                className={
                  i === 0
                    ? "serif text-2xl leading-[1.42] text-ink pretty md:text-[1.7rem]"
                    : "mt-6 max-w-[62ch] text-[1rem] leading-[1.75] text-ink-2 pretty"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
