import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  title: string;
  index?: string;
  aside?: ReactNode;
  as?: "h1" | "h2";
};

export function SectionHeading({ title, index, aside, as: Heading = "h2" }: Props) {
  return (
    <Reveal>
      <div className="section-heading">
        <Heading>
          <span aria-hidden className="section-marker">{index ?? "/"}</span>
          {title}
        </Heading>
        {aside}
      </div>
    </Reveal>
  );
}
