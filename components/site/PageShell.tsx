import type { ReactNode } from "react";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  title: string;
  aside?: ReactNode;
  children: ReactNode;
};

/** Frame shared by every topic page: a title row, then the page's content. */
export function PageShell({ title, aside, children }: Props) {
  return (
    <div className="shell pb-20">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-hairline pb-5">
          <h1 className="serif flex items-baseline gap-3 text-4xl md:text-[2.75rem]">
            <span aria-hidden className="inline-block size-2.5 shrink-0 rounded-[1px] bg-accent" />
            {title}
          </h1>
          {aside}
        </div>
      </Reveal>

      {children}
    </div>
  );
}

/** Small outbound link used in the `aside` slot of a page title. */
export function PageAsideLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label link-underline inline-flex items-center gap-1.5 hover:!text-ink"
    >
      {children}
      <ArrowUpRight className="size-3" />
    </a>
  );
}
