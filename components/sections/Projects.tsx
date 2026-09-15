import { links, projects } from "@/lib/content";
import { ArrowUpRight, Github } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="shell section">
      <SectionHeading title="Projects" aside={<span className="label">{projects.length}</span>} />

      <ol className="space-y-7">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={0.03 * i}>
            <article className="grid gap-x-4 gap-y-2 sm:grid-cols-[6.5rem_1fr]">
              <span className="label !text-[0.625rem] sm:pt-1.5">{project.period}</span>

              <div>
                <h3 className="serif flex flex-wrap items-baseline gap-x-2.5 text-[1.15rem] leading-snug">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline text-ink transition-colors hover:text-accent"
                    >
                      {project.title}
                      <ArrowUpRight className="ml-1 inline size-3 align-baseline text-muted" />
                    </a>
                  ) : (
                    project.title
                  )}
                  {project.note && (
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-accent">
                      {project.note}
                    </span>
                  )}
                </h3>

                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-2 pretty">
                  {project.description}
                </p>

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-hairline px-1.5 py-0.5 font-mono text-[0.6rem] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.08}>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-[0.8rem] text-ink-2 transition-colors hover:border-hairline-strong hover:text-ink"
        >
          <Github className="size-3.5" />
          All repositories
          <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </section>
  );
}
