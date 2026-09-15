"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { links, projectCategories, projects, type ProjectCategory } from "@/lib/content";
import { cx } from "@/lib/utils";
import { ArrowUpRight, Github } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const reduce = useReducedMotion();

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  // Only offer a filter that would actually return something.
  const availableCategories = useMemo(
    () => projectCategories.filter((c) => c === "All" || projects.some((p) => p.category === c)),
    [],
  );

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 border-t border-hairline bg-paper-2/40 py-24 md:py-32"
    >
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Vision, language, silicon."
          lede="Research prototypes, competition entries, and a few things built purely to understand how they work from the inside."
          aside={<span className="label">{projects.length} selected</span>}
        />

        <div className="no-scrollbar -mx-5 mb-10 flex gap-2 overflow-x-auto px-5 md:mx-0 md:px-0">
          {availableCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={cx(
                "relative shrink-0 rounded-full border px-4 py-2 text-[0.8rem] transition-colors",
                filter === category
                  ? "border-ink text-paper"
                  : "border-hairline text-muted hover:border-hairline-strong hover:text-ink",
              )}
            >
              {filter === category && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }}
                />
              )}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => {
              const Wrapper = project.href ? "a" : "div";
              return (
                <motion.li
                  key={project.title}
                  layout={!reduce}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: reduce ? 0.15 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={cx(project.featured && "sm:col-span-2 lg:col-span-1")}
                >
                  <Wrapper
                    {...(project.href
                      ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cx(
                      "group flex h-full flex-col rounded-lg border border-hairline bg-surface p-6 transition-all duration-300",
                      project.href && "hover:-translate-y-1 hover:border-hairline-strong hover:card-shadow",
                    )}
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <span className="label !text-[0.6rem]">{project.period}</span>
                      {project.featured ? (
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-accent">
                          Featured
                        </span>
                      ) : project.href ? (
                        <ArrowUpRight className="size-4 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                      ) : null}
                    </div>

                    <h3 className="serif text-xl leading-tight text-ink">{project.title}</h3>
                    {project.subtitle && (
                      <p className="serif mt-1 text-[0.95rem] italic leading-snug text-muted">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="mt-4 text-[0.875rem] leading-relaxed text-ink-2 pretty">
                      {project.description}
                    </p>

                    {project.result && (
                      <p className="mt-4 border-l-2 border-accent pl-3 text-[0.825rem] leading-relaxed text-ink">
                        {project.result}
                      </p>
                    )}

                    <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded border border-hairline px-2 py-0.5 font-mono text-[0.6rem] text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Wrapper>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <Reveal delay={0.1}>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full border border-hairline-strong px-6 py-3 text-sm transition-colors hover:border-ink"
          >
            <Github className="size-4" />
            All repositories on GitHub
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
