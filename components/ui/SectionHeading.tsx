import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  /** Two-digit section number, e.g. "01". */
  index: string;
  /** The topic name. Nothing else goes here. */
  title: string;
  /** Right-hand slot for a count or link. */
  aside?: ReactNode;
};

export function SectionHeading({ index, title, aside }: Props) {
  return (
    <Reveal>
      <header className="mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-b border-hairline pb-4 md:mb-14">
        <div className="flex items-baseline gap-4">
          <span className="label !text-accent">{index}</span>
          <h2 className="serif text-[length:var(--text-section)] leading-none">{title}</h2>
        </div>
        {aside}
      </header>
    </Reveal>
  );
}
