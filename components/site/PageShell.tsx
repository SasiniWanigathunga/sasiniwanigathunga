import Link from "next/link";
import type { ReactNode } from "react";
import { topics } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  /** Must match the `label` of one of the topics, so prev/next can be derived. */
  title: string;
  aside?: ReactNode;
  children: ReactNode;
};

/** Frame shared by every topic page: title, content, and prev/next links. */
export function PageShell({ title, aside, children }: Props) {
  const index = topics.findIndex((t) => t.label === title);
  const previous = index > 0 ? topics[index - 1] : null;
  const next = index >= 0 && index < topics.length - 1 ? topics[index + 1] : null;

  return (
    <div className="shell pb-16 pt-24 md:pt-32">
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

      <nav
        aria-label="Nearby pages"
        className="mt-20 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-2"
      >
        <PageLink topic={previous} direction="previous" />
        <PageLink topic={next} direction="next" />
      </nav>
    </div>
  );
}

function PageLink({
  topic,
  direction,
}: {
  topic: (typeof topics)[number] | null;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  if (!topic) {
    return (
      <Link
        href="/"
        className={`group flex flex-col gap-1.5 bg-surface px-5 py-5 transition-colors hover:bg-paper-2 ${isNext ? "sm:items-end sm:text-right" : ""}`}
      >
        <span className="label !text-[0.6rem]">{isNext ? "Next" : "Previous"}</span>
        <span className="serif text-lg text-ink transition-colors group-hover:text-accent">
          Home
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={topic.href}
      className={`group flex flex-col gap-1.5 bg-surface px-5 py-5 transition-colors hover:bg-paper-2 ${isNext ? "sm:items-end sm:text-right" : ""}`}
    >
      <span className="label !text-[0.6rem]">{isNext ? "Next" : "Previous"}</span>
      <span className="serif text-lg text-ink transition-colors group-hover:text-accent">
        {topic.label}
      </span>
    </Link>
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
