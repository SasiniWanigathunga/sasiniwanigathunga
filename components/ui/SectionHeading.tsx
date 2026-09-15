import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  /** Two-digit section number shown in the eyebrow, e.g. "01". */
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  /** Right-hand slot for a count, link, or filter control. */
  aside?: ReactNode;
};

export function SectionHeading({ index, eyebrow, title, lede, aside }: Props) {
  return (
    <header className="mb-12 md:mb-16">
      <Reveal>
        <div className="flex items-baseline gap-3 border-b border-hairline pb-3">
          <span className="label !text-accent">{index}</span>
          <span className="label">{eyebrow}</span>
          <span className="ml-auto hidden md:block">{aside}</span>
        </div>
      </Reveal>

      <div className="mt-7 grid gap-6 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7" delay={0.05}>
          <h2 className="serif text-[length:var(--text-section)] leading-[1.06] balance">{title}</h2>
        </Reveal>
        {lede ? (
          <Reveal className="md:col-span-5 md:pt-2" delay={0.12}>
            <p className="max-w-prose text-[0.975rem] leading-relaxed text-ink-2 pretty">{lede}</p>
          </Reveal>
        ) : null}
      </div>

      {aside ? <div className="mt-6 md:hidden">{aside}</div> : null}
    </header>
  );
}
