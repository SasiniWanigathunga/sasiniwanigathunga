import type { ReactNode } from "react";
import Link from "next/link";
import { topics } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";

type Props = { title: string; aside?: ReactNode; children: ReactNode };

const descriptions: Record<string, string> = {
  Publications: "Research in computer vision and machine learning.",
  Projects: "From research questions to working systems.",
  Experience: "Applied research, engineering, and teaching.",
  Education: "The foundations of my research and engineering practice.",
  Leadership: "Contributing to technical communities and student organizations.",
  Awards: "Recognition along the way.",
  Skills: "Tools and technologies behind my work.",
  Blog: "Notes on machine learning, engineering, and things I build.",
};

export function PageShell({ title, aside, children }: Props) {
  const index = topics.findIndex((topic) => topic.label === title);
  return (
    <div className="shell pb-20">
      <header className="page-heading">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="label !text-[0.6rem]"><Link href="/" className="transition-colors hover:text-accent">Portfolio</Link><span aria-hidden className="mx-3 text-hairline-strong">/</span>{title}</p>
          {index >= 0 && <span aria-hidden className="font-mono text-[0.65rem] text-accent">{String(index + 1).padStart(2, "0")} / {String(topics.length).padStart(2, "0")}</span>}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-5"><h1>{title}</h1>{aside}</div>
        {descriptions[title] && <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{descriptions[title]}</p>}
      </header>
      {children}
    </div>
  );
}

export function PageAsideLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="button-secondary !min-h-9 !px-3 !py-2 !font-mono !text-[0.65rem]">{children}<ArrowUpRight className="size-3" /></a>;
}
