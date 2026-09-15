import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  /** Right-hand slot for a count or link. */
  aside?: ReactNode;
};

export function SectionHeading({ title, aside }: Props) {
  return (
    <Reveal>
      <div className="mb-7 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="serif flex items-baseline gap-3 text-2xl md:text-[1.75rem]">
          <span aria-hidden className="inline-block h-2 w-2 shrink-0 rounded-[1px] bg-accent" />
          {title}
        </h2>
        {aside}
      </div>
    </Reveal>
  );
}
