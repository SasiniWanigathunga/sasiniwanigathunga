"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { links, publications } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Publications() {
  return (
    <section id="publications" className="shell section">
      <SectionHeading
        title="Publications"
        aside={
          <a
            href={links.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="label link-underline inline-flex items-center gap-1.5 hover:!text-ink"
          >
            Google Scholar
            <ArrowUpRight className="size-3" />
          </a>
        }
      />

      <ol className="space-y-7">
        {publications.map((pub) => (
          <Reveal as="li" key={pub.title}>
            <Entry pub={pub} />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

function Entry({ pub }: { pub: (typeof publications)[number] }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <article className="grid gap-x-4 gap-y-2 sm:grid-cols-[6.5rem_1fr]">
      <span className="label !text-[0.625rem] sm:pt-1.5">{pub.date}</span>

      <div>
        <h3 className="serif text-[1.15rem] leading-snug">
          <a
            href={pub.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink transition-colors hover:text-accent"
          >
            {pub.title}
          </a>
        </h3>

        <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
          {pub.authors.map((author, i) => (
            <span key={author.name}>
              <span className={author.isMe ? "font-medium text-ink" : ""}>{author.name}</span>
              {author.equalContribution && <sup className="text-accent">*</sup>}
              {i < pub.authors.length - 1 && ", "}
            </span>
          ))}
        </p>

        <p className="mt-1.5 font-mono text-[0.7rem] text-muted">{pub.venue}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {pub.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1 rounded border border-hairline px-2 py-0.5 font-mono text-[0.65rem] text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
            >
              {link.label}
              <ArrowUpRight className="size-2.5 transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px" />
            </a>
          ))}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.65rem] text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
          >
            Abstract {open ? "−" : "+"}
          </button>
          <span className="font-mono text-[0.65rem] text-muted">* equal contribution</span>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="abstract"
              initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: reduce ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="mt-4 border-l-2 border-hairline-strong pl-4 text-[0.875rem] leading-[1.75] text-ink-2 pretty">
                {pub.abstract}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
