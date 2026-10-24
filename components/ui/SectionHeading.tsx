import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = { title: string; index?: string; aside?: ReactNode };

export function SectionHeading({ title, index, aside }: Props) {
  return (
    <Reveal>
      <div className="section-heading">
        <h2><span aria-hidden className="section-marker">{index ?? "/"}</span>{title}</h2>
        {aside}
      </div>
    </Reveal>
  );
}
