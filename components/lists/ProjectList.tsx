import { links, projects } from "@/lib/content";
import { ArrowUpRight, Github } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { asset } from "@/lib/utils";

export function ProjectList() {
  return (
    <>
      <ol className="space-y-5">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.title} delay={0.03 * i}>
            <article className="project-card entry">
              <span className="label !text-[0.625rem] sm:pt-1.5">{project.period}</span>

              <div>
                <h2 className="flex flex-wrap items-baseline gap-x-2.5 text-[1.15rem] leading-snug">
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
                </h2>

                <p className="mt-2 text-[0.925rem] leading-relaxed text-ink-2 pretty">
                  {project.description}
                </p>

                {project.image && (
                  <a
                    href={asset(project.image.src)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 block overflow-hidden rounded-md border border-hairline bg-paper-2 p-3 transition-colors hover:border-hairline-strong"
                  >
                    <img
                      src={asset(project.image.src)}
                      alt={project.image.alt}
                      loading="lazy"
                      decoding="async"
                      className="mx-auto max-h-80 w-auto max-w-full object-contain"
                    />
                  </a>
                )}

                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded border border-hairline bg-paper-2 px-2 py-1 font-mono text-[0.65rem] text-ink-2"
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
          className="button-secondary group mt-10"
        >
          <Github className="size-3.5" />
          All repositories
          <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>
    </>
  );
}
